import delay from 'delay'
import { Observable } from 'rxjs'

import { Listr, Manager } from './src'

interface ListrCtx {
  yarn: boolean
  inside: string
  second: boolean
  hidden: boolean
  testInput: string
  prompt: {
    [name: string]: any
  }
}

async function main (): Promise<void> {

  // Task structure
  const tasks = new Listr<ListrCtx>([
    {
      // You can nest Listr objects, as in the original but now you can also call a new listr class throught task.newListr and inject a type as well
      title: 'Concurrent sub test.',
      task: (ctx, task): Listr => task.newListr<ListrCtx>([
        {
          // This can handle any async tasks
          title: 'Promise with changing output. [1.5s]',
          task: async (ctx, task): Promise<void> => {
            ctx.inside = 'test'
            await delay(500)
            task.output = 'Dumping output.'

            await delay(500)
            task.output = 'Dumping more output.'

            await delay(500)
            task.title = 'I change the title now.'
          }

        },
        {
          title: 'Async task. [2s]',
          task: async (): Promise<void> => await delay(2000)
        }
      ], { concurrent: true })
    },
    {
      // You can skip tasks on conditions as in the original
      title: 'Task Skip test, with title and skip note. [1s]',
      task: async (ctx, task): Promise<void> => {
        await delay(1000)
        ctx.yarn = false
        task.title = 'Changed title succesfully.'
        task.skip('Showing skip message')
      }
    },
    {
      // You can enable tasks with a given condition
      title: 'Context enabled via the top one fail. [1s]',
      enabled: (ctx): boolean => ctx.yarn === false,
      task: (): Promise<void> => delay(1000)
    },
    {
      // Task can also handle and observable
      title: 'Observable test.',
      task: (): Observable<string> =>
        new Observable((observer) => {
          observer.next('test')

          delay(1000)
            .then(() => {
              observer.next('changed')
              return delay(1000)
            })
            .then(() => {
              observer.complete()
            })
        })
    },
    {
      // You can throw errors out of tasks but to contunie exitOnError option must be set to false implicitly
      title: 'Throw error test',
      task:  async (): Promise<void> => {
        await delay(1000)
        throw new Error('I have failed.')
      }
    },
    {
      // Nested listr errors also reflect to the parent listr
      title: 'I will fail from inside.',
      task: (ctx, task): Listr => task.newListr<ListrCtx>([
        {
          title: 'I am going to fail.',
          task: (): void => {
            throw new Error('Oh noes, i failed already.')
          }
        }
      ])
    }
  ], { exitOnError: false })

  let ctx: ListrCtx

  // running the command returns the context object back
  try {
    ctx = await tasks.run()
  } catch (e) {
    console.error(e)
  }

  // Inject context variables to other example.
  const tasks2 = new Listr<ListrCtx>([
    {
      // a test with injected context from other listr
      title: 'Got the context variables from the first listr.',
      task: (ctx, task): void => {
        ctx.second = true
      }
    },
    {
      // if you give no title to the current task, subtasks will be one less level indendent to be inline with the current tasks, this way you can switch parallel and synchronous tasks
      task: (ctx, task): Listr => task.newListr<ListrCtx>([
        {
          title: 'If title is empty task will be hidden, but subtasks will be one level less indented.',
          task: async (): Promise<void> => {
            await delay(5000)
            ctx.hidden = false
          }
        },
        {
          task: async (): Promise<void> => {
            await delay(4500)
            ctx.hidden = true
          }
        }
      ], { concurrent: true }),
    },
    {
      task: (ctx,task): Listr => task.newListr<ListrCtx>([
        {
          // if you output from a task without a title, it will drop to the bottom bar instead.
          task: async (ctx, task): Promise<void> => {
            await delay(500)
            task.output = 'I am outputting from a task without a title.'
            await delay(800)
            task.output = 'This will drop to the bottom bar instead.'
            await delay(1000)
            task.output = 'Last message.'
            await delay(1000)
          }
        },
        {
          // if you set the bottom bar explicitly, it will output to the bottom bar even the task has a title.
          title: 'I have a title but still can push to the bottom bar.',
          task: async (ctx, task): Promise<void> => {
            await delay(550)
            task.output = 'Still pushing some.'
            await delay(775)
            task.output = 'Multiple output.'
            await delay(995)
          },
          bottomBar: true
        }
      ], { concurrent: true })
    }

  ], {
    // injected context
    ctx
  })

  try {
    ctx = await tasks2.run()
  } catch (e) {
    console.error(e)
  }

  // Get input example
  const tasks3 = new Listr<ListrCtx>([
    {
      task: async (ctx, task): Promise<any> => ctx.testInput = await task.prompt('Input', { message: 'test' })
    },
    {
      title: 'Dump prompt.',
      task: (ctx,task): void => {
        task.title = ctx.testInput
      }
    }
  ], { collapse: false })

  try {
    ctx = await tasks3.run()
  } catch (e) {
    console.error(e)
  }

  // manager example with injecting context
  const manager = new Manager<ListrCtx>()

  // initial tasks will be executed synchronously at the beggining
  manager.addInitial([
    {
      title: 'I have a title but still can push to the bottom bar.',
      task: async (ctx, task): Promise<void> => {
        await delay(550)
        task.output = 'Still pushing some.'
        await delay(775)
        task.output = 'Multiple output.'
        await delay(995)
      },
      bottomBar: true
    },
    {
      title: 'Getting some input',
      task: async (ctx, task): Promise<any> => ctx.testInput = await task.prompt('MultiSelect',
        { message: 'Select some', hint: 'space to select, a to select all', choices: ['me', 'or me'] }
      )
    }
  ])

  // add tasks will be executed in the middle async
  // you can also inject a context through the add functions
  manager.add<ListrCtx>([
    {
      task: async (ctx, task): Promise<void> => {
        await delay(500)
        task.output = 'I am outputting from a task without a title.'
        await delay(800)
        task.output = 'This will drop to the bottom bar instead.'
        await delay(1000)
        task.output = 'Last message.'
        await delay(1000)
      }
    },
    {
      task: async (ctx, task): Promise<void> => {
        await delay(600)
        task.output = 'Some output to bottom bar.'
        await delay(850)
        task.output = 'Pushing moreee.'
        await delay(1020)
      }
    },
    {
      task: (ctx, task): Listr => task.newListr(
        [{
          title: 'Running from a subtask in manager.',
          task: async (ctx, task): Promise<void> => {
            await delay(500)
            task.output = 'Subtask output.'
            await delay(800)
            task.output = 'Hey.'
            await delay(1000)
            task.output = 'Last message.'
            await delay(1000)
          }
        },
        {
          title: 'Running from another subtask in manager.',
          task: async (ctx, task): Promise<void> => {
            await delay(600)
            task.output = 'SYo.'
            await delay(850)
            task.output = 'More data.'
            await delay(1020)
          }
        }]
      )
    },
    {
      title: 'I have a title but still can push to the bottom bar.',
      task: async (ctx, task): Promise<void> => {
        await delay(550)
        task.output = 'Still pushing some.'
        await delay(775)
        task.output = 'Multiple output.'
        await delay(995)
      },
      bottomBar: true
    }
  ])

  // final tasks will be executed at the end synchronously
  manager.addFinal([
    {
      title: 'Dump prompt.',
      task: (ctx,task): void => {
        task.title = ctx.testInput.toString()
      }
    }
  ])

  // run tasks in the queue
  ctx = await manager.runAll()

}

main()

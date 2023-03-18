import type { LoggerFieldFn } from '@utils'
import { color } from '@utils'

export type PresetTimer = LoggerFieldFn<[number]>

export interface RendererPresetTimer {
  /**
   * show duration for all tasks
   *
   * @default false
   * @global global option that can not be temperated with subtasks
   */
  timer?: PresetTimer
}

/**
 * A basic function to parse minutes and tasks passed given a duration.
 * Useful for renderers to show the task time.
 *
 * @param {number} duration
 * @returns {string}
 */
/* istanbul ignore next */
export function parseTimer (duration: number): string {
  const seconds = Math.floor(duration / 1000)
  const minutes = Math.floor(seconds / 60)

  let parsedTime: string

  if (seconds === 0 && minutes === 0) {
    parsedTime = `0.${Math.floor(duration / 100)}s`
  }

  if (seconds > 0) {
    parsedTime = `${seconds % 60}s`
  }

  if (minutes > 0) {
    parsedTime = `${minutes}m${parsedTime}`
  }

  return parsedTime
}

export const RENDERER_TIMER: PresetTimer = {
  condition: true,
  field: parseTimer,
  format: () => color.dim
}

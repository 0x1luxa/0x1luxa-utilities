/**
 * Waits for a specified amount of time.
 * @param time - The amount of time to wait in milliseconds.
 * @returns A promise that resolves after the specified time.
 */
export const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

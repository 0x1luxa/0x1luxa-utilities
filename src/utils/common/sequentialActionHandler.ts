/* eslint-disable @typescript-eslint/no-explicit-any */
type SequentialConfig = {
  delay?: number
  attempts?: number
  onComplete?: () => void
}

/**
 * Sequentially executes an action with a delay between attempts.
 * @param action - The action to execute.
 * @param config - The configuration for the sequential action handler.
 * @returns The result of the action.
 */
export const sequentialActionHandler = async (
  action: () => Promise<any>,
  config?: SequentialConfig
) => {
  const delay = config?.delay ?? 3000
  let attempts = config?.attempts ?? 3
  const maxAttemps = 10

  for (let i = 0; i < attempts; i++) {
    try {
      await action()
      if (i < attempts) {
        // console.log(`Waiting ${delay}ms before next attempt...`)
        await new Promise((resolve) => setTimeout(resolve, delay))
        // console.log(`Completed attempt ${i + 1}`)
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error)
      if (i <= maxAttemps - 1) {
        attempts += 1
      }
    }
  }

  config?.onComplete?.()
}

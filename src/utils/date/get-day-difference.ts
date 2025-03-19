import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

/**
 * Gets the number of days between two dates.
 * @param date - The date to compare to the current date.
 * @returns The number of days between the two dates.
 */
export const getDaysAgo = (date: string) => {
  const currentDate = dayjs()
  const inputDate = dayjs(date)

  const daysAgo = currentDate.diff(inputDate, "day")

  return dayjs().subtract(daysAgo, "day").fromNow()
}

/**
 * Gets the number of days between two dates.
 * @param date - The date to compare to the current date.
 * @returns The number of days between the two dates.
 */
export const getFromNow = (date: string | number, suffix = false) => {
  const fromNow = dayjs(date)
    .fromNow(suffix)
    .replace("minutes", "mins")
    .replace("seconds", "secs")
    .replace("an hour", "1 hour")
    .replace("a day", "1 day")
    .replace("a month", "1 month")
    .replace("a year", "1 year")

  // Convert to short format (e.g., "6h" instead of "6 hours ago")
  return fromNow
    .replace(" ago", "")
    .replace(" hours", "h")
    .replace(" hour", "h")
    .replace(" mins", "m")
    .replace(" min", "m")
    .replace(" secs", "s")
    .replace(" sec", "s")
    .replace(" days", "d")
    .replace(" day", "d")
    .replace(" months", "mo")
    .replace(" month", "mo")
    .replace(" years", "y")
    .replace(" year", "y")
}

/**
 * Pure utility functions with no side effects.
 */

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

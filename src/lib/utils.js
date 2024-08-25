// utils.js

/**
 * Utility function to conditionally join class names.
 *
 * @param  {...any} classes - A list of class names or expressions that resolve to a class name.
 * @returns {string} - A single string with all the valid class names joined by a space.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

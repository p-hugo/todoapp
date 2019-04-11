/**
 * Generates a random ID based on a random character and the current time
 */
export const randomId = () => {
  let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return `${randomLetter}-${Date.now()}`;
}
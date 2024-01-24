export function findEmptyProperty(obj) {
  let emptyKeys = {};
  for (const key in obj) {
    if (obj[key] === "" || (Array.isArray(obj[key]) && obj[key].length === 0)) {
      // Check for empty string or empty array
      emptyKeys[key] = `*${key} is required`;
    }
  }
  // No empty property found
  return emptyKeys;
}

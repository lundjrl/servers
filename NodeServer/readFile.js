import { open } from 'node:fs/promises';
/**
 *
 * @param {string} filename
 * @returns {Promise<string>} html content if available, otherwise error.
 */
export const readFile = async (filename) => {
  const data = [];
  const file = await open(filename);

  for await (const line of file.readLines()) {
    data.push(line);
  }

  return data.join(',').replaceAll(',', '');
};

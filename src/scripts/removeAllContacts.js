import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let allContacts = await readContacts();
    allContacts.splice(0, allContacts.length);
    await writeContacts(allContacts);
  } catch (err) {
    console.error('Error removing all contacts:', err);
  }
};

removeAllContacts();

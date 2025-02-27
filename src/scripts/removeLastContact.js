import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length !== 0) {
      allContacts.pop();
    }
    writeContacts(allContacts);
  } catch (err) {
    console.error('Error deleting contact:', err);
  }
};

removeLastContact();

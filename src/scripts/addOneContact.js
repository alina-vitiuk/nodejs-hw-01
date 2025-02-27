import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  try {
    const allContacts = await readContacts();
    allContacts.push(newContact);
    writeContacts(allContacts);
  } catch (err) {
    console.error('Error adding contact:', err);
  }
};

addOneContact();

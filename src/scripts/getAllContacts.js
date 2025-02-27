import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (err) {
    console.error('Error retrieving the contact list:', err);
  }
};

console.log(await getAllContacts());

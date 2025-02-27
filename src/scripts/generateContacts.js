import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
};

generateContacts(5);

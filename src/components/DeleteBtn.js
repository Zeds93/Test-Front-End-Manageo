import React from "react";

// Component react
function DeleteBtn({ contacts, setContacts, contactId }) {
  function handleDelete(id) {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  }

  return (
    <button type="button" onClick={() => handleDelete(contactId)}>
      Supprimer
    </button>
  );
}

export default DeleteBtn;

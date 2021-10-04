import React, { useState } from "react";
import data from "../data.json";
import DeleteBtn from "./DeleteBtn";

// Component react
function Table() {
  const [contacts, setContacts] = useState(data);

  function handleUpdate(e, contact, key) {
    
    const updatedData = contacts.map((user) =>
      user.id === contact.id ? { ...user, [key]: e.target.value } : user
    );
    setContacts(updatedData);
  }

  return (
    <tbody>
      <tr>
        <td>NOM</td>
        <td>PRENOM</td>
        <td>MAIL</td>
        <td>ACTIONS</td>
      </tr>
      {contacts.map((contact) => (
        <tr>
          <td>
            {contact.nom}
            <input
              type="text"
              value={contact.nom}
              onChange={(e) => handleUpdate(e, contact, "nom")}
            />
          </td>

          <td>
            {contact.prenom}
            <input
              type="text"
              value={contact.prenom}
              onChange={(e) => handleUpdate(e, contact, "prenom")}
            />
          </td>
          <td>
            {contact.mail}
            <input
              type="text"
              value={contact.mail}
              onChange={(e) => handleUpdate(e, contact, "mail")}
            />
          </td>
          <td>
            <DeleteBtn
              contacts={contacts}
              setContacts={setContacts}
              contactId={contact.id}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default Table;

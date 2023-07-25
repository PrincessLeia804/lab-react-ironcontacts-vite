import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  console.log(contacts, setContacts)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => {
        let newContact = contactsJSON[Math.round(Math.random() * (contactsJSON.length))]
        
       while(contacts.some(person => person.id === newContact.id)){
          newContact = contactsJSON[Math.round(Math.random() * (contactsJSON.length))]
        }
        setContacts(previousContacts => [...previousContacts, newContact])
        } } >Create random contact</button>

      <button onClick={() => {
        let sortPopularity = [...contacts]

        sortPopularity.sort((a, b) => b.popularity - a.popularity)
  
        setContacts(sortPopularity)
        } }>Sort by Popularity</button>

      <button onClick={() => {
        let sortNames = [...contacts]

        sortNames.sort((a, b) => a.name.localeCompare(b.name))
        console.log(sortNames)
  
        setContacts(sortNames)
        } }>Sort by Name</button>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return(
              <tr key={oneContact.id}>
              <td>
                <img src={(oneContact.pictureUrl)}
                alt={oneContact.name}
                style={{ height: "200px" }}
                />
              </td>
              <td>
                <h3>{oneContact.name}</h3>
              </td>
              <td>
                <h3>{oneContact.popularity}</h3>
              </td>
              <td>
                {oneContact.wonOscar && <p>🏆</p>}
              </td>
              <td>
                {oneContact.wonEmmy && <p>🏆</p>}
              </td>
              <td>
                <button onClick={() => {
                  setContacts(contacts.filter((a) => a.id !== oneContact.id))
                }}>Delete</button>
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

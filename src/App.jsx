
import { useEffect, useState } from 'react'
import './App.css'
import MyItems from './MyItems.jsx'
import { addItem, getAllItems, editItem, deleteItem } from './FetchItems.jsx';

function App() {

  const [ myItem, setMyItem ] = useState([]);
  const [ title, setTitle ] = useState("");
  const [ editing, setEditing ] = useState(false);
  const [ itemId, setItemId ] = useState("");

  useEffect(() => {
    getAllItems(setMyItem)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setItemId(_id);
  }

  return (
    <>
      
      <h1>Was nehme ich auf meine Reise mit?</h1>

      <input 
      type="text"
      placeholder='Füge ein Gegenstand hinzu'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button 
      disabled={!title}
      onClick=
      {editing ? () => editItem(itemId, title, setTitle, setMyItem, setEditing) : () => addItem(title, setTitle, setMyItem)}>
      {editing ? "Bearbeiten" : "Hinzufügen"}
      </button>

    {myItem.map((item) => <MyItems text={item.title} key={item._id}
    updatingInInput={() => updatingInInput(item._id, item.title)} 
    deleteItem={() => deleteItem(item._id, setMyItem)}
    />
    )}
   
      
    </>
  )
}

export default App

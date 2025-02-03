import axios from 'axios';

const myUrl = "https://reiseliste-backend.onrender.com";

const getAllItems = (setMyItem) => {
    axios.get(myUrl)
    .then(({data}) => {console.log(data)
        setMyItem(data)
    })
}

const addItem = (title, setTitle, setMyItem) => {
    axios.post(`${myUrl}/saveItems`, {title})
    .then(({data}) => {
        console.log(data)
        setTitle("")
        getAllItems(setMyItem)
    })
}

const editItem = ( itemId, title, setTitle, setMyItem, setEditing ) => {
    axios.put(`${myUrl}/editItem`, { _id: itemId, title})
    .then(({data}) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllItems(setMyItem)
    })
}

const deleteItem = ( _id, setMyItem ) => {
    axios.post(`${myUrl}/deleteItem`, { _id})
    .then(({data}) => {
        console.log(data)
        getAllItems(setMyItem)
    })
}

export {getAllItems, addItem, editItem, deleteItem};
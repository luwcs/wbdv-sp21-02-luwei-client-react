import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./course-editor/course-editor.style.client.css";

const EditableItem = (
  {
    to="/somewhere/to/go",
    deleteItem,
    updateItem,
    item={title: "Some Title", _id:"ABC"},
    active
  }) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(item)
  return (
    <>
      {
        !editing &&
        <li className={`list-group-item ${active ? 'active' : ''}`}>
          <Link className="link" to={to}>
            {item.title}
          </Link>
          <button className="btn float-right"
                  onClick={() => setEditing(true)}>
            <i className="fas fa-edit"></i>
          </button>
        </li>
      }
      {
        editing &&
        <>
          <input
              onChange={(e) =>
                setCachedItem({
                  ...cachedItem,
                  title: e.target.value
              })}
              value={cachedItem.title}/>
          <button className="btn float-right"
                  onClick={() => {deleteItem(item)}}>
            <i o className="fas fa-times" style={{color: 'red'}}></i>
          </button>
          <button className="btn float-right"
                  onClick={() => {setEditing(false)
                                  updateItem(cachedItem)}}>
            <i o className="fas fa-check" style={{color: 'green'}}></i>
          </button>
        </>
      }
    </>
  )
}

export default EditableItem



import React, {useState} from 'react'
import EditingWidget from "./editing-widget";

const ListWidget = (
    {
      widget,
      deleteWidget,
      updateWidget
    }) => {

  const [editing, setEditing] = useState(false)

  return (
      <div className="row">
        {
          !editing &&
          <>

          </>
        }
        {
          editing &&
          <EditingWidget
              widget={widget}
              setEditing={setEditing}
              updateWidget={updateWidget}
              deleteWidget={deleteWidget}/>
        }
      </div>
  )
}

export default ListWidget
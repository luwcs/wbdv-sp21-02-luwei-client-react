import React, {useEffect, useState} from 'react'
import EditingWidget from "./editing-widget";

const HeadingWidget = (
    {
      widget,
      deleteWidget,
      updateWidget
    }) => {

  const [editing, setEditing] = useState(false);
  const [HeaderTag, setHeaderTag] = useState(`h${widget.size}`);

  useEffect(() => {
    setHeaderTag(`h${widget.size}`)
  }, [widget.size]);

  return (
      <div>
        {
          !editing &&
            <>
              <div className="col">
                <HeaderTag>{widget.text}</HeaderTag>
              </div>

              <div className="col">
                <i onClick={() => setEditing(true)}
                   className="fas fa-2x fa-cog float-right"></i>
              </div>
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

export default HeadingWidget
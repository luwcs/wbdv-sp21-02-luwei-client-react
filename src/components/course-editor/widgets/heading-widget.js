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
      <div className="row">
        {
          !editing &&
            <>
              <div className="col-9">
                <HeaderTag>{widget.text}</HeaderTag>
              </div>

              <div className="col-3">
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
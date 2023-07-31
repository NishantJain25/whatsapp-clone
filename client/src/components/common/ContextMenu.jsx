import React, { useEffect, useRef } from "react";

function ContextMenu({options, coordinates, contextMenu, setContextMenu}) {
    const contextMenuRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(e.target.id !== "context-opener"){
                if(contextMenuRef.current && !contextMenuRef.current.contains(event.target)){
                    setContextMenu(false)
                }
            }
        }

        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    },[])

    const handleClick = (e, callback) => {
        e.stopPropagation()
        setContextMenu(false)
        callback()
    }
    return <div className={`bg-dropdown-background fixed py-1 px-1 z-[100] shadow-xl rounded-md transition-all`}  ref={contextMenuRef} style={{top: coordinates.y, left: coordinates.x}}>
        <ul>
            {options.map(({name, callback}) => (<li className="px-5 py-2 cursor-pointer rounded-md transition-all hover:bg-background-default-hover" key={name} onClick={(e) => handleClick(e, callback)}>
                <span className="text-white">{name}</span>
            </li>))}
        </ul>
        </div>
}

export default ContextMenu
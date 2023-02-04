import React from 'react'

export default function SideNav(props) {
  return (
    
    <div>
        <span onClick={()=>{props.change("Inbox")}}>
            <a href='#'>Inbox</a>
        </span>
        <span onClick={()=>{props.change("Next7Days")}}>
        <a href='#'>Next7Days</a>
        </span>
        <span onClick={()=>{props.change("Today")}}>
        <a href='#'>Today</a>
        </span>

    </div>
  )
}

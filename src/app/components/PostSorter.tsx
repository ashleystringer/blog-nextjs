'use client';
import React from 'react'

export default function PostSorter({
    setPostDisplayMode
} : {
    setPostDisplayMode:  React.Dispatch<React.SetStateAction<string>>;
}) {

  /*
  - This component should display a set of buttons that allow the user to sort the posts by date, tags, or series.
  - The buttons should call the setPostDisplayMode function with the appropriate mode when clicked.
  */


  return (
    <div>Post Sorter
        <button className={``}  onClick={() => { setPostDisplayMode("dateMode") }}>Sort by Date</button>
        <button className={``} onClick={() => { setPostDisplayMode("tagMode") }}>Sort by Tags</button>
    </div>
  )
}

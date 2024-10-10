'use client';
import React from 'react'

export default function PostSorter({
    postDisplayMode,
    setPostDisplayMode
} : {
    postDisplayMode: string;
    setPostDisplayMode: any;
}) {

  /*
  - This component should display a set of buttons that allow the user to sort the posts by date, tags, or series.
  - The buttons should call the setPostDisplayMode function with the appropriate mode when clicked.
  */


  return (
    <div>Post Sorter
        <button className={``}  onClick={(e) => { setPostDisplayMode("dateMode") }}>Sort by Date</button>
        <button className={``} onClick={(e) => { setPostDisplayMode("tagMode") }}>Sort by Tags</button>
    </div>
  )
}

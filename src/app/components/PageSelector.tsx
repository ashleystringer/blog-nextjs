import React from 'react'
import Link from "next/link";


export default function PageSelector() {

    /*
    - Allow user to go to entries "next" to this page link by date
    - If two entries have the same date, sort by title
    */

    const postLink = () => {
        //ex: /01-01-2023/this-is-an-example
    }

  return (
    <div style={{
        display: 'flex',
        justifyContent: "space-between",
    }}>
        <button className="btn">
            <Link className="btn" href={`/posts/${postLink}`}>
                Previous
            </Link>
        </button>
        <button className="btn">
            <Link className="btn" href={`/posts/${postLink}`}>
                Next
            </Link>
        </button>
    </div>
  )
}

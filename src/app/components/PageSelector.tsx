import React from 'react'

export default function PageSelector() {

    /*
    - Allow user to go to entries "next" to this page link by date
    - If two entries have the same date, sort by title
    */

  return (
    <div style={{
        display: 'flex',
        justifyContent: "space-between",
    }}>
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
    </div>
  )
}

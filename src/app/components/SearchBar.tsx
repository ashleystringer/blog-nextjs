import React, { useState } from 'react'

export default function SearchBar({
  posts,
  setFilterMode,
  searchQuery,
  setSearchQuery
} : {
  posts: any,
  setFilterMode: any
  searchQuery: string,
  setSearchQuery: any
}) {


  
  function onChange(e){
    //find a way to search through posts by title using searchQuery and input
    setFilterMode('search-mode')
    setSearchQuery(e.target.value);
  }
  


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.1rem',
        backgroundColor: 'lightgray',
        borderRadius: '10px',
        marginBottom: '1rem',
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img src="../../public/magnifying-glass-solid.svg" alt=""/>
      <input type="text" placeholder='Seach Bar'
        style={{
          padding: '0.5rem',
          height: '100%',
          width: '100%',
          borderRadius: '10px',
          border: 'none',
          outline: 'none'
        }}
        onChange={(e) => onChange(e)}
        onFocus={() => setFilterMode('search-mode')}
        value={searchQuery}
      />
    </div>
  )
}

import React from 'react'

export default function SearchBar({
  setFilterMode,
  searchQuery,
  setSearchQuery
} : {
  setFilterMode: React.Dispatch<React.SetStateAction<string>>
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) {


  
  function onChange(e: React.ChangeEvent<HTMLInputElement>){
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
        className='search-bar'
        onChange={(e) => onChange(e)}
        onFocus={() => setFilterMode('search-mode')}
        value={searchQuery}
      />
    </div>
  )
}

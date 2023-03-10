import React, {useState} from 'react'

const Search = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        
        onSearch(search);
      }

    return (
        <>
        <form onSubmit={handleSearch}>
        <input 
        type="search" 
        name="search" 
        id="search"
        placeholder='Search for a country...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </form>
        </>
    )
}

export default Search;
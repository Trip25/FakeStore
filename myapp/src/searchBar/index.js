import { useState } from "react";

function SearchBar (props) {
    const [search, setSearch] = useState('')
return (
<div>
    <input type="text"/>
    <button>Search</button>
 </div>   
)
}
export default SearchBar; 




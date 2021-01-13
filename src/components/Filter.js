

function Filter({ search, onSearchChange, onCategoryChange }) {

  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} type="text" name="search" placeholder="Search..." value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

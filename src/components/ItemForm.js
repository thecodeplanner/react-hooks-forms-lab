import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit}) {
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  function handleItemNameChange(event) {
    setItemName(event.target.value)
  }

  function handleItemCategoryChange(event) {
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    onItemFormSubmit({
      id: uuid(),
      itemName,
      itemCategory,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

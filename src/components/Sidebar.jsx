import { useState, useCallback } from "react";


/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar(props) {
  let [newMenuItem, setNewMenuItem] = useState("");
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let nextId = 4;
  let [menuItems, setMenuItems] = useState([props.initialMenuItems]);

  let [filter, setFilter] = useState("");
  
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.

  let addMenuItem = useCallback(() => {
    console.log("Added menu item")

    console.log("new menu item:", newMenuItem);
    console.log("all menu", menuItems);
    // alert(menuItems);
  //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
  //   // This involves adding a parameter and changing a class instance variable (props).
  //   setMenuItems([item, ...menuItems])
    setMenuItems([newMenuItem, ...menuItems])
  }, [newMenuItem, menuItems])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
// props.initialMenuItems.map(item => <li>{item}</li>);


  return (
    <div>
      <ul>
        {menuItems.map(menuItem => (
          <li key={menuItem.id}>{menuItem.newMenuItem}</li>
        ))}
        {props.initialMenuItems.map(item => <li>{item}</li>)}
      </ul>
      {/* <ul>{props.initialMenuItems.map(item => <li>{item}</li>)}</ul> */}

      {/* <ul>
        <li>{props.initialMenuItems[0]}</li>
        <li>{props.initialMenuItems[1]}</li>
        <li>{props.initialMenuItems[2]}</li>
        <li>{props.initialMenuItems[3]}</li>
        <li>{props.initialMenuItems[4]}</li>
      </ul> */}
      
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>

      <br />

      <button
        onClick={() => {
          /* TODO: 3 */
          addMenuItem();
          setMenuItems([
            ...menuItems,
            { id: nextId++, newMenuItem: newMenuItem}
          ]);

        }}
      >
        Add Item
      </button>
      {/* <ul>
        {menuItems.map(menuItem => (
          <li key={menuItem.id}>{menuItem.newMenuItem}</li>
        ))}
      </ul> */}

      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}

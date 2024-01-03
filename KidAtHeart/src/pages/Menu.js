import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import teddy from "../assets/building.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${teddy})` }}>
      <h1 className="menuTitle">Unlock the Magic of Playtime!</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
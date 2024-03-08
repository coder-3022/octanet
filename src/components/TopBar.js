// Navbar.js

import React from 'react';
import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  NAV_ITEM: 'navItem',
};

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Contact' },
  ]);

  const moveNavItem = (dragIndex, hoverIndex) => {
    const draggedItem = navItems[dragIndex];
    setNavItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, draggedItem);
      return newItems;
    });
  };

  const NavItem = ({ item, index }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { type: ItemTypes.NAV_ITEM, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.NAV_ITEM,
      hover: (item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveNavItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <li
        ref={(node) => drag(drop(node))}
        style={{ opacity }}
        className="cursor-pointer px-4 py-2"
      >
        {item.text}
      </li>
    );
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <NavItem key={item.id} item={item} index={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

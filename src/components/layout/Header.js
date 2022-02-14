import * as React from "react";
import { Link } from "react-router-dom";
import navData from "../../data/navigation.json";

export default function Header() {
  const { menuItems } = navData;
  return (
    <header className="p-3 h-20 bg-rose-900 text-rose-50 flex items-center justify-evenly">
      <h1 className="text-4xl">React Meetups</h1>
      <nav>
        <ul className="flex gap-x-3 font-semibold">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <Link to={menuItem.url} className="hover:underline">
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

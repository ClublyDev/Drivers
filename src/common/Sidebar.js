import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import menuItems from "../data/menu.json";

// Builds the menu items from the data/menu.json file.
const Sidebar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      // store data from json file into state
      setData(menuItems.data);
    }
  }, [data]);

  return (
    <aside className="aside aside-1">
      {data && (
        <nav>
          <ul>
            {/* list out the stored menu items */}
            {data.map((item) => (
              <li key={item.url}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;

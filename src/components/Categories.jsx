import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoriesArray = [
    "All",
    "Meat",
    "Vegeterian",
    "Grill",
    "Hot",
    "Wrapped",
  ];


  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((category, index) => {
          return (
            <li
              key={category}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

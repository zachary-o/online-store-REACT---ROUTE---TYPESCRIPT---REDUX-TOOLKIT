import React, { memo } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {
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
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
})

export default Categories;

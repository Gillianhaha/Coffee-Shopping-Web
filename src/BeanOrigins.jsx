import React, { useState } from "react";

import beanOriginMap from './beanOriginMap';
import './BeanOrigins.css';


function BeanOrigins(){

    const [filter, setFilter] = useState("World");

    const filteredItems =
        filter === "World"
            ? beanOriginMap
            : beanOriginMap.filter((item) => item.category === filter);

    const categories = ["World", ...new Set(beanOriginMap.map((item) => item.category))]; 
  
    const FilterButton = ({category, active, onClick}) => (
        <button
            className={active ? "clicked" : ""}
            onClick={onClick}
            disabled={active}
        >
            {category}
        </button>
);

    const GalleryItem = ({item}) => (
        <div className="selected-item">
            <img src={item.image} alt={`Coffee made from beans of ${item.name}`} />
            <p>{item.name}</p>
            <h3>{item.category}</h3>
        </div>
  );

    return (
        <div className="origin-gallery">
            <h2 className="bean-origin-title">Coffee Beans of Different Origins:</h2>
            <div className="filter-buttons">
                {categories.map((category) => (
                    <FilterButton
                        key={category}
                        category={category}
                        active={category === filter}
                        onClick={() => setFilter(category)}
                    />
                ))}
            </div>
            <div className="selected">
                {filteredItems.map((item) => (
                    <GalleryItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default BeanOrigins;
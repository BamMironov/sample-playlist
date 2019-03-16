import React from "react";
import "./items-per-page.scss";

export const ItemsPerPage = (props) => {
    const className = `items-per-page__item`;
    const activeClassName = (isActive) => isActive ? className + '_active' : '';

    return (
        <ul className="items-per-page">
            {props.items.map((item, i) => {
                return (
                    <li key={i} 
                        className={`${className} ${activeClassName(props.value === item)}`}
                        onClick={() => props.onClick(item)}>{item}</li>
                )
            })}
        </ul>
    );
}
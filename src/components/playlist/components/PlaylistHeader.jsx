import React from "react";

export const PlaylistHeader = (props) => {
    const activeClass = 'playlist__cell_header_active';
    const reversedIcon = 'playlist__cell_header__icon_reversed';

    return (
        <td className={`playlist__cell playlist__cell_header ${props.isActive ? activeClass : ''}`}
            onClick={() => props.onClick()}>
            <div className={"playlist__cell__wrapper"}>
                <span>{props.title}</span>
                <div className={`playlist__cell_header__icon ${props.isReversed ? reversedIcon : ''}`}></div>
            </div>
        </td>
    );
}
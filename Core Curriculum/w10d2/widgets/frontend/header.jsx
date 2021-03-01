import React from 'react';

const Header = (props) => {
    // debugger
    return(
        <>
            <ul onClick={ () => props.handleClick(props.id)} value={props.id}>
                {props.title}
            </ul>
            <article>
                {props.content}
            </article>
        </>
    )
}

export default Header;
import React from 'react';

const Header = ({title,content}) => {
    return(
        <>
            <ul>
                {title}
            </ul>
            <article>
                {content}
            </article>
        </>
    )
}

export default Header;
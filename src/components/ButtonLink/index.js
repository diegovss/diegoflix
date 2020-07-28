import React from 'react';

function ButtonLink(props) {
    //props => {className: "o que alguém passar", href: "o link que passarem"}
    console.log(props)
    return(
        <div>
            <a className={props.className} href={props.href}>
                {props.children}
            </a>
        </div>
    );
}

export default ButtonLink;
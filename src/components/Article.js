import React from "react";

function Article({date="January 1, 1970",minutes,preview,title}){
    console.log(date)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
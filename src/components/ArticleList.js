import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    {console.log(posts)}
    return (
    <main>
        {posts.map(article => {
            return (
            <Article key={article.id}
            date={article.date}
            minutes={article.minutes}
            preview={article.preview}
            title={article.title}/>
        )})}
    </main>
)}

export default ArticleList;
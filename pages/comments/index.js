import React, { useState } from 'react';

const CommentsPage = () => {

    const [ comments, setComments]= useState([]);

    const fetchComments = async ()=>{
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data);
    }
    return (
        <>
           <button onClick={fetchComments}>Load Comments</button> 

           {
            comments.map(comment =>{
                return(
                    <div key={comment.id}>
                        <h2>{comment.text}</h2>
                    </div>
                )
            })
           }
        </>
    );
};

export default CommentsPage;
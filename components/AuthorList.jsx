// import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const AuthorList = (props) => {
    const {removeFromDom} = (props);
    const navigate = useNavigate();

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/authors/' + authorId)
            .then(response => {
                removeFromDom(authorId)
            })
            .catch(error => console.log("DELETE AUTHOR ISN'T WORKING!", error))
            navigate("/authors")
    };

    return (
        <div>
            {props.authors.map((author, i) => {
                const {_id, firstName, lastName} = author;
                return ( 
                <p key={i}>
                    {author.firstName} {author.lastName}
                    <br/>
                    <Link to={`/authors/${_id}/edit`}><button>Edit</button></Link>
                    <button onClick={ (e) => {deleteAuthor(author._id)}}>Delete</button>
                </p>
                )
            })}
        </div>
    )
}

export default AuthorList;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AuthorList from '../components/AuthorList'


const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data.authors);
                setLoaded(true);
            })
            .catch(error => console.log("THIS GET IS NOT WORKING", error));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/authors/new'}>Add an author</Link>
            <h3>All Authors on the site: </h3>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
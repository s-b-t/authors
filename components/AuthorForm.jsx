import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const Author = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/authors', {
            firstName,
            lastName
            
        })
            .then(response => navigate("/authors"))
            .catch(error => {
                const errorResponse = error.response.data.error.errors;
                console.log(errorResponse)
                console.log("** ERROR **", errorResponse)

                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
                console.log(error)
            })
                setFirstName("");
                setLastName("");
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/authors/'}>Home</Link>
            <h3>Add a new author: </h3>
            <form onSubmit={onSubmitHandler}>
                {errors.map((error, i) => <p key={i}>{error}</p>)}
                <p>
                    <label>First Name: </label>
                    <input type="text" placeholder="First Name..." onChange={(e) => setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name: </label>
                    <input type="text" placeholder="Last Name..." onChange={(e) => setLastName(e.target.value)} />
                </p>
                <input type="submit" />
                <Link to={"/authors"}><button>Cancel</button></Link>
            </form>
        </div>
    )
}

export default Author;
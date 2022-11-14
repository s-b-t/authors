import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';


const Update = (props) => {
    const {id} = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/authors/' + id)
            .then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
            })
            .catch(error => {
                console.log("THIS GET IS NOT WORKING!", error)
            })
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/authors/' + id, {
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
            <h3>Edit this author: </h3>
            <form onSubmit={updateAuthor}>
            {errors.map((error, i) => <p key={i}>{error}</p>)}
                <p>
                    <label>First Name: </label><br />
                    <input type="text"
                    placeholder="First Name..."
                    name="firstName"
                    value={firstName}
                    onChange={ (e) => {setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name: </label><br />
                    <input type="text"
                    placeholder="Last Name..."
                    name="lastName"
                    value={lastName}
                    onChange={ (e) => {setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;
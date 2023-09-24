import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


// this contains the function that is used to Add a new lego set. this contains the function that submits 
//its also redirects you back to the main app on click when you submit the add then updates the json server all the form data
// is very simailar to the update form just used to add rather then update so thers no need to pull in data to auto fill the form.

function Add() {

const [inputData, setInputData] = useState({lego:'', count:'', owned:''})

const navigate = useNavigate();

function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:3030/sets', inputData)
    .then(res => {
        alert("Lego Set Added Successfully");
        navigate('/')
    }).catch(err => console.log(err));
}


    return (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>  
                <div>
                    <label htmlFor="lego">Lego Set</label>
                    <input type="text" name="lego" className="form-control" onChange={e => setInputData({...inputData, lego: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="count">Pieces Count</label>
                    <input type="text" name="count" className="form-control" onChange={e => setInputData({...inputData, count: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="owned">Owned</label>
                    <input type="radio" name="Yes" className="ms-2 me-2" value="Yes" onChange={e => setInputData({...inputData, owned: e.target.value})}/>Yes
                    <input type="radio" name="No" className="ms-2 me-2" value="No" onChange={e => setInputData({...inputData, owned: e.target.value})}/>No
                </div><br/>
                <button className="btn btn-info">Submit</button>
                </form>
            </div>

            
        </div>
    )
}

export default Add
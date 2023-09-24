import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// this is the function that edits or Updates the data that is already entered
// it has the function that sets the state then use effect to pull the data from the 
//json server and the submit function that updates the json server
// its also contains a form that houses the bootsrap adn divs to create the update form
// it is set up that when you click the update it auto populates it with what is already in the form
// for ease of ui interface it also disables the ability to change the important lego ID
// then it submits the data changes it updates the json server and then navigates you back to the main app


function Edit() {

    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3030/sets/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:3030/sets/'+id, data)
        .then(res => {
            alert("Lego Set Updated successfully!");
            navigate('/')
            
        })

    }
    return(
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}> 
                    <div>
                    <label htmlFor="name">ID</label>
                    <input type="text" disabled name="lego" value={data.id} className="form-control" />    
                    </div> 
                
                <div>
                    <label htmlFor="lego">Lego Set</label>
                    <input type="text" name="lego" value={data.lego} className="form-control" 
                    onChange={e => setData({...data, lego: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="count">Pieces Count</label>
                    <input type="text" name="count" value={data.count} className="form-control" 
                    onChange={e => setData({...data, count: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="owned">Owned</label>
                    <input type="radio" name="Yes" value="Yes" className="ms-2 me-2" 
                    onChange={e => setData({...data, owned: e.target.value})}/> Yes
                    <input type="radio" name="No" value="No" className="ms-2 me-2" 
                    onChange={e => setData({...data, owned: e.target.value})}/> No
                </div><br/>
                <button className="btn btn-info">Update</button>
                </form>
            </div>

            
        </div>
    )
}

export default Edit;
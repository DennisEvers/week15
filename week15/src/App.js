import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
// everything imported to make sure that it is working properly 

//function that runs the app component. This houses and utilizes the 
//table taht stores all the data as well as the buttons that add delete and update the data
// it also orginizes the table and the delete function that deletes the lego sets you no longer want
// Also it has all the data inputed into the table from the json server and the function that gets the data from the json server
// or uses the use effect to load in the server when the app is initiated
// it then refreshes the app after any data is deleted and then the app is exported
function App() {
 
  const [records, setRecords] = useState([])
 

  useEffect(() => {
    axios.get('http://localhost:3030/sets')
    .then(res => {
     
      setRecords(res.data)

    })
  }, [])

  return (

    <div className='container p-4 mt-1 border1 border border-dark'>
      <div>
      <div className='text-end mt-2 p-2 bg-light text-center'><Link to='/create' className="btn btn-success">Add Lego Set +</Link></div>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Lego Set</th>
            <th>Pieces Count</th>
            <th>Lego ID</th>
            <th>Owned</th>
            <th>Action</th>
          </tr>
          </thead>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td><strong>{d.lego}</strong></td>
                <td>{d.count}</td>
                <td>{d.id}</td>
                <td><strong>{d.owned}</strong></td>
                <td>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-1'>Update</Link>
                  <button onClick={e => handleSubmit(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
 
  );
function handleSubmit(id){
  const conf = window.confirm("Are You Sure You Want To Delete");
  if(conf) {
    axios.delete('http://localhost:3030/sets/'+id)
    .then(res => {
      alert('Lego Set Deleted');
      window.location.reload();
    }).catch(err => console.log(err))
  }

}

}

export default App;


/* {columns.map((c, i) => (
                 <th key={i}>{c}</th>
            ))} */

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const GetUsers = () => {

    const [data,setData] = useState([]);
   
        useEffect(()=>{
            axios.get('http://localhost:5000/api/users')
            .then((response)=>{
                setData(response.data.data);
                // console.log(data);
            })
            .catch((error)=>{
                console.log(error);
            })
        
          },[data])
       
  return (
    <div>
         <>
         
            <table className="table table-dark"  >
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Gender</th>

                    </tr>
                </thead>
                {
                    data.map((user, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName} </td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            </tbody>

                        );
                    })
                }
            </table>
            <Link to='/post' className='btn btn-success'>Add New Product</Link>
        </>

    </div>
  )
}

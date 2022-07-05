
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




export const AddUsers = () => {

    const URL = "http://localhost:5000/api/users";


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const resp = await axios.post(URL, { firstName: fname, lastName: lname, email: email, password: password, phone: phone, gender: gender });
            console.log(resp.data);
        } catch (e) {
            console.log("message error at post", e.message);

        }
    }

   
    return (
        <div className='container'>

            <form className='form'onSubmit={handleSubmit}  >
                <div>
                    <label> First Name :</label>
                    
                    <input type='text' placeholder='First Name' id='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div>
                    <label> Last Name :</label>
                    <input type='text' placeholder='Last Name' id='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                   
                </div>
                <div>
                    <label> Email :</label>
                    <input type='text' placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <label> Password :</label>
                    <input type='text' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </div>
                <div>
                    <label> Phone :</label>
                    <input type='text' placeholder='Phone Number' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    
                </div>
                <div>
                    <label> Gender :</label>
                    <input type='text' placeholder='Gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)} />
                    
                </div>
                <div>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>

        </div>
    )
}

import React from "react";
import logo from "../../assets/logo.jpg";
import './Register.css';
import { Link } from "react-router-dom";
import pattern from '../../assets/pattern.png';
import { useState } from "react";
function Register() {
    const [registrationDetails, SetRegistrationDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        year: '',
        semester: '',
        password: ''
    });

    function handleInput(e) {
        let value = e.target.value;
        let fieldName = e.target.name;
        SetRegistrationDetails(prev => ({
            ...prev, [fieldName]: value
        }))
    }

    function RegisterUser() {
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify(registrationDetails),
        })
    }

    return (
        <>
            <div className="Register"
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '300px',
                    padding: '0 40px'
                }}

            >
                <div className="image">
                    <img src={logo} alt="image" style={{ width: "500px" }} />
                </div>
                <div className="htmlForm">
                    <div className="subtitle">Let's create your account!</div>

                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="text" placeholder="First Name" name="firstname" onChange={handleInput} value={registrationDetails.firstname} />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder"></label>
                    </div>

                    <div className="input-container ic2">
                        <input id="lastname" className="input" type="text" placeholder="Last Name" name="lastname" onChange={handleInput} value={registrationDetails.lastname} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder"></label>
                    </div>

                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" placeholder="Email" name="email" onChange={handleInput} value={registrationDetails.email} />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder"></label>
                    </div>

                    <div className="input-container ic2">
                        <select id="year" className="input" name="year" onChange={handleInput} value={registrationDetails.year}>
                            <option value="" disabled>Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                        <div className="cut cut-short"></div>
                        <label htmlFor="year" className="placeholder">B.Tech Year</label>
                    </div>
                    <div className="input-container ic2">
                        <select id="semester" className="input" name="semester" onChange={handleInput} value={registrationDetails.semester}>
                            <option value="" disabled>Select Semester</option>
                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                        </select>
                        <div className="cut cut-short"></div>
                        <label htmlFor="semester" className="placeholder">Semester</label>
                    </div>
                    <div className="input-container ic1" >
                        <input id="password" className="input" type="password" placeholder="create your password" name="password" onChange={handleInput} value={registrationDetails.password} />
                        <div className="cut"></div>
                        <label htmlFor="password" className="placeholder" ></label>
                    </div>

                    <button type="button" className="submit" onClick={RegisterUser}>Register</button>
                    <br />
                    <p>Already a member <Link to="/login" className="signin-link">Sign in</Link></p>



                </div>
            </div>
        </>
    )
}
export default Register;
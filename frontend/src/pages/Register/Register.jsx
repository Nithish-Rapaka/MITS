import React from "react";
import logo from "../../assets/logo.jpg";
import './Register.css';
import { Link } from "react-router-dom";
function Register() {
    return (
        <>
            <div className="Register">
                <div className="image">
                    <img src={logo} alt="image" />
                </div>
                <div class="form">
                    <div class="subtitle">Let's create your account!</div>

                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder="First Name" />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder"></label>
                    </div>

                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder="Last Name" />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder"></label>
                    </div>

                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder="Email" />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder"></label>
                    </div>

                    <div class="input-container ic2">
                        <select id="year" class="input">
                            <option value="" disabled selected>Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                        <div class="cut cut-short"></div>
                        <label for="year" class="placeholder">B.Tech Year</label>
                    </div>
                    <div class="input-container ic2">
                        <select id="semester" class="input">
                            <option value="" disabled selected>Select Semester</option>
                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                        </select>
                        <div class="cut cut-short"></div>
                        <label for="semester" class="placeholder">Semester</label>
                    </div>
                    <br />
                    <p>Already a member</p>
                    <Link to="/login" className="signin-link">Sign in</Link>
                    <button type="submit" class="submit">Register</button>

                </div>
            </div>
        </>
    )
}
export default Register;
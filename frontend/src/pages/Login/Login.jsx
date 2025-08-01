import React, { useState } from "react";
import "./Login.css";
import logo from '../../assets/logo.jpg';
import { Link } from "react-router-dom";
import pattern from '../../assets/pattern.png';
function Login() {

    const [login, SetLogin] = useState({
        email: '',
        password: ''
    })

    function handleInput(e) {
        let value = e.target.value;
        let fieldname = e.target.name;
        SetLogin(prev => ({
            ...prev,
            [fieldname]: value
        }))
    }

        function Submit(){
            fetch('http://localhost:5000/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(login)
            })
        }
    return (
        <>
            <div className="Login"
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
                }}>
                <div className="image">
                    <img src={logo} alt="image" style={{ width: "500px" }} />
                </div>
                <div className="content">
                    <div className="text">Login</div>
                    <form action="#">
                        <div className="field">
                            <input required type="text" className="input" name="email" onChange={handleInput} value={login.email} />
                            <span className="span">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 512 512"
                                    fill="#595959"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z" />
                                </svg>
                            </span>
                            <label className="label" htmlFor="email" >Email"</label>
                        </div>

                        <div className="field">
                            <input required type="password" className="input" name="password" onChange={handleInput} value={login.password} />
                            <span className="span">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 512 512"
                                    fill="#595959"
                                >
                                    <path d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668z" />
                                </svg>
                            </span>
                            <label className="label">Password</label>
                        </div>

                        <div className="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="button" className="button" onClick={Submit}>Sign in</button>

                        <div className="sign-up">
                            Not a member? <p><Link to='/Register'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Login;

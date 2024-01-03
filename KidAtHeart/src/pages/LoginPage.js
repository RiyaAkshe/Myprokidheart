import React from 'react'
import { Link } from 'react-router-dom'

function  LoginPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Unleash the Power with Just One Click!</h2>
            <form action="/home">
                <p>
                    <label>Username or Email Id</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Access</button>
                </p>
            </form>
            <footer>
                <p>New?<Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}
export default LoginPage;
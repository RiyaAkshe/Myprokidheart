import React from 'react'
import { Link } from 'react-router-dom'

 function RegisterPage() {

    return (
        <body>
        <div className="text-center m-5-auto">
            <h2>Don't Blink. Log In and Elevate!</h2>
            <h5>Build your Kingdom</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email Address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
            </footer>
        </div>
        </body>
    )

}
export default RegisterPage;
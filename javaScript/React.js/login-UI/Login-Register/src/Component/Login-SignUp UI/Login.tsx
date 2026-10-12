import "./Login.css"
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"


function Login() {
    return (
        <div className="container">
            <div className="text">Login</div>
            <div className="underline">
            </div>

            <div className="input">
                <UserIcon width="25" height="25" />
                <input type="text" placeholder="Username Or Email" />
            </div>


            <div className="input">
                <LockClosedIcon width="25" height="25" />
                <input type="password" placeholder="Password" />
            </div>


            <div className="forget-password">
                Forgot Password?
            </div>

            <div className="buttons">
                <button>Login</button>
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
            </div>

        </div >
    )
}

export default Login

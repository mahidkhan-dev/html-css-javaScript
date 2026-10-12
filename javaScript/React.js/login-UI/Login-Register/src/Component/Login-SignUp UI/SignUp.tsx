import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import "./SignUp.css"
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <div className="container">
            <div className="header">
                <div className="text">SignUp</div>
                <div className="underline">
                </div>

                <div className="input">
                    <UserIcon width="25" height="25" />
                    <input type="text" placeholder="Username" />
                </div>
            </div>

            <div className="input">
                <EnvelopeIcon width="25" height="25" />
                <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
                <LockClosedIcon width="25" height="25" />
                <input type="password" placeholder="Password" />
            </div>


            <div className="forget-password">
                Forgot Password?
            </div>

            <div className="buttons">
                <button>SignUp</button>
                <Link to="/">
                    <button>Login</button>
                </Link>
            </div>



        </div>
    )
}

export default SignUp
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    // destructuring
    const { signInUser } = useContext(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-6 px-4">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-gray-500">
                        Please log in to your account to access your dashboard and continue exploring.
                        We’re glad to have you back!
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn}>
                        <div className="card-body space-y-4">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </form>
                    <p className="ml-4 mb-4">New to this website ? please signup first <Link to='/signup'> <span className="text-xl font-semibold text-green-600">SignUp</span> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
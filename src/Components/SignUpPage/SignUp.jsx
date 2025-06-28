import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user
        createUser(email, password)
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
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6 text-gray-500">
                        Please signup to your account to access your dashboard and continue exploring.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp}>
                        <div className="card-body space-y-4">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Full Name" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
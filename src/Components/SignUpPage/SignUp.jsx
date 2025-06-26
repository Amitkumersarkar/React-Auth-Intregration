
const SignUp = () => {

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
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Full Name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
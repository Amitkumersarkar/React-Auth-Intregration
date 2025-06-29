import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContext);
    console.log(user);

    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <NavLink to='/'>
                    <a className="btn btn-ghost text-xl">AuthUI</a>
                </NavLink>
            </div>
            <div className="list-none mr-5 font-bold btn btn-ghost">
                {
                    user && <>
                        <NavLink to='/orders'>
                            <li>Orders</li>
                        </NavLink>
                    </>
                }
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                        </NavLink>
                        <NavLink to='/signup'>
                            <li><a>SignUp</a></li>
                        </NavLink>
                        <NavLink to='/login'>
                            <li><a>LogIn</a></li>
                        </NavLink>
                        <NavLink to='/login'>
                            {/* {
                                user ?
                                    <>
                                        <span>
                                            {
                                                user.email
                                            }
                                        </span>
                                    </>
                                    :
                                    <Link to='/login'></Link>
                            } */}
                            <li><a>Logout</a></li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">{user?.email}</a>
            </div> */}
        </div>
    );
};

export default Navbar;
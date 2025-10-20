import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { use } from "react";
import { ToastContainer } from "react-toastify";
// import MyLink from "./MyLink";
// import MyLink from "./MyLink";

const Navbar = () => {
  const {user, signOutUser} = use(AuthContext)
  const handleSignOutUser = () => {
    signOutUser()
    .then(()=>{})
    .catch(error => {
      console.log(error);
      
    })
  }
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        
            <figure>
            <img src={logo} className="w-[55px]" />
            </figure>
            <ul className="flex items-center gap-2">
            <li>
                <MyLink to={'/'}>Home</MyLink>
            </li>
            <li>
                <MyLink to={"/about"}>About Us</MyLink>
            </li>
            <li>
                <MyLink to={"/profile"}>Profile</MyLink>
            </li>
            
            <li>
                <MyLink to={"/signup"}>Sign Up</MyLink>
            </li>
            {
              user&&  <>
                <li><MyLink to={"/profile"}>Profile</MyLink></li>
                <li><MyLink to={"/dashboard"}>Dashboard</MyLink></li>
              </>
              
            }
            
            </ul>
          {
            user&& user?.displayName 
            
          }
            {
              user 
              ? <a onClick={handleSignOutUser} className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">Sign Out</a>
              : <Link to={"/signin"} className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">Sign in</Link>
            }
              
            
      <ToastContainer />
      </MyContainer>
    </div>
  );
};

export default Navbar;

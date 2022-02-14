import React from 'react';
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/Userslice';
import '../styling/home.css';
function HomePage() {
    
    const dispatch = useDispatch();
    const login = (response) => {
        console .log (response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const isSignedIn = useSelector(selectSignedIn);
  return <div className='home_page' style={{display:isSignedIn ? "none" : ""}}>
      {!isSignedIn ?
       <div className='login_message'>

           <h2> 📘  </h2>
            <h1>Blog Blues</h1>

            <p>We provide high quality blogs for Reading. Just Sign up and Enjoy Reading</p>
            <GoogleLogin 
             clientId='581947106785-tkvqdgucrltr5dbgih2mhsn2spnp14e1.apps.googleusercontent.com'
             render={(renderprops) =>(
                 <button
                  onClick={renderprops.onClick}
                  disabled ={renderprops.disabled}
                  className='login_button'
                 >
                 Login with Google

                 </button>
             )}

             onSuccess={login}
             onFailure={login}
             isSignedIn ={true}
             cookiePolicy={"single_host_origin"}
            />
       </div> : ""}

  </div>;
}

export default HomePage;

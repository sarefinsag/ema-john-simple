import React from 'react';
import Auth from './useAuth';

const LogIn = () => {
    const auth = Auth();
    const handleSignIn =()=>{
        auth.signInWithGoogle()
        .then(res=>{
            window.location.pathname = '/review';
        })
    };

    const handleSignOut = ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Join here</h1>

            {
                auth.user ? <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleSignIn}>Sign in with Google</button>
            }
        </div>
    );
};

export default LogIn;

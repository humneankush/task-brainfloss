import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface SignInProps {
    onLoginSuccess: (credentialResponse: any) => void;
}

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {
    return (
        <div className="text-center mt-5">
            <h2>Sign In</h2>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={() => console.log('Login Failed')}
            />
        </div>
    );
};

export default SignIn;

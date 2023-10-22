import { useState } from 'react';

const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        };

        if (actualData.email) {
            console.log(actualData);
            document.getElementById('password-reset-email-form').reset();
            setError({ status: true, msg: "Password Reset Email Sent. Check Your Email !!", type: 'success' });
        } else {
            setError({ status: true, msg: "Please Provide Valid Email", type: 'error' });
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <h1>Reset Password</h1>
                    <form noValidate onSubmit={handleSubmit} id='password-reset-email-form'>
                        <input type='email' id='email' name='email' placeholder='Email Address' required />
                        <div style={{ textAlign: 'center' }}>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                    {error.status ? <div>{error.msg}</div> : ''}
                </div>
            </div>
        </>
    );
};

export default SendPasswordResetEmail;

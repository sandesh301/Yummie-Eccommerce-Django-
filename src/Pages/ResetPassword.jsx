import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        };

        if (actualData.password && actualData.password2) {
            if (actualData.password === actualData.password2) {
                console.log(actualData);
                document.getElementById('password-reset-form').reset();
                setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success' });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            } else {
                setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' });
            }
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' });
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <h1>Reset Password</h1>
                    <form noValidate onSubmit={handleSubmit} id='password-reset-form'>
                        <input type='password' id='password' name='password' placeholder='New Password' required />
                        <input type='password' id='password2' name='password2' placeholder='Confirm New Password' required />
                        <div style={{ textAlign: 'center' }}>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                    {error.status ? <div>{error.msg}</div> : ''}
                </div>
            </div>
        </>
    );
};

export default ResetPassword;

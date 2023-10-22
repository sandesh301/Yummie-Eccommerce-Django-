import { useState } from 'react';

const ChangePassword = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        };

        if (actualData.password && actualData.password2) {
            if (actualData.password === actualData.password2) {
                console.log(actualData);
                document.getElementById("password-change-form").reset();
                setError({ status: true, msg: "Password Changed Successful", type: "success" });
            } else {
                setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: "error" });
            }
        } else {
            setError({ status: true, msg: "All Fields are Required", type: "error" });
        }
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 600, margin: '0 auto' }}>
                <h1>Change Password</h1>
                <form onSubmit={handleSubmit} noValidate id="password-change-form">
                    <input type="password" name="password" placeholder="New Password" required />
                    <input type="password" name="password2" placeholder="Confirm New Password" required />
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit">Update</button>
                    </div>
                </form>
                {error.status ? <div>{error.msg}</div> : ""}
            </div>
        </>
    );
};

export default ChangePassword;

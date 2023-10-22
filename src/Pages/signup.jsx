import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthAPi'
import { storeToken } from '../services/LocalStorageService';


const Registration = () => {
    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [registerUser,] = useRegisterUserMutation()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc'),
        }
        const res = await registerUser(actualData)
        if (res.error) {
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            storeToken(res.data.token)
            navigate('Home')
        }
    }
    return (
        <>
            <form noValidate onSubmit={handleSubmit}>
                <input type='text' required id='name' name='name' placeholder='Name' />
                {server_error.name ? <p style={{ color: 'red' }}>{server_error.name[0]}</p> : ""}
                <input type='email' required id='email' name='email' placeholder='Email Address' />
                {server_error.email ? <p style={{ color: 'red' }}>{server_error.email[0]}</p> : ""}
                <input type='password' required id='password' name='password' placeholder='Password' />
                {server_error.password ? <p style={{ color: 'red' }}>{server_error.password[0]}</p> : ""}
                <input type='password' required id='password2' name='password2' placeholder='Confirm Password' />
                {server_error.password2 ? <p style={{ color: 'red' }}>{server_error.password2[0]}</p> : ""}
                <label>
                    <input type="checkbox" value={true} name="tc" id="tc" />
                    I agree to terms and conditions.
                </label>
                {server_error.tc ? <span style={{ color: 'red' }}>{server_error.tc[0]}</span> : ""}
                <button type='submit'>Join</button>
            </form>
            {server_error.non_field_errors ? <p style={{ color: 'red' }}>{server_error.non_field_errors[0]}</p> : ''}
        </>
    );
};

export default Registration;

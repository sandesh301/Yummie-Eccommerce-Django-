import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { getToken, storeToken } from '../services/LocalStorageService';
import { useLoginUserMutation } from '../services/userAuthApi';
import Footer from '../Components/Footer'

const UserLogin = () => {
    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        const res = await loginUser(actualData)
        if (res.error) {
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            storeToken(res.data.token)
            navigate(Footer)
        }
    }
    let { access_token } = getToken()
    useEffect(() => {
    }, [access_token, dispatch])

    return (
        <>
            {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
            {server_error.email ? console.log(server_error.email[0]) : ""}
            {server_error.password ? console.log(server_error.password[0]) : ""}
            <form noValidate onSubmit={handleSubmit}>
                <input type='email' required id='email' name='email' placeholder='Email Address' />
                {server_error.email ? <p style={{ color: 'red' }}>{server_error.email[0]}</p> : ""}
                <input type='password' required id='password' name='password' placeholder='Password' />
                {server_error.password ? <p style={{ color: 'red' }}>{server_error.password[0]}</p> : ""}
                <button type='submit'>Login</button>
            </form>
            <NavLink to='/sendpasswordresetemail'>Forgot Password?</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            {server_error.non_field_errors ? <p style={{ color: 'red' }}>{server_error.non_field_errors[0]}</p> : ''}
        </>
    );
};

export default UserLogin;

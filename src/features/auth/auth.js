import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from './authSlice'
import axios from 'axios'

export function Auth() {
    const dispatch = useDispatch()
    const [hash, setHash] = useState(null)
    const auth = useSelector(state => state.auth)
    function handleInput(e) {
        const input = e.target.value
        setHash(input)
    }
    function handleEntrar() {
        dispatch(authenticate(hash))
    }
    async function handleNoHash() {
        const res = await axios.get('https://api.ipify.org/?format=json')
            .then(res => res.data.ip)
            // .catch((err) => TODO)    
        dispatch(authenticate(res))
    }
    return(
        <div className='d-flex flex-column align-items-center vh-100'>
            <form className='m-auto'>
                <img src='dD.png' width='100' height='100'></img>
                <h3>betaTest</h3>
                <h1 className = 'mb-3'>Iniciar sesion</h1>
                <input className='form-control mb-3' onChange = {handleInput} placeholder='Hash'></input>
                <div className='form-check text-start my-3'>
                    <input className='form-check-input' type='checkbox'></input>
                    <label className='form-check-label'>Recordame</label>
                </div>
                <div className='d-grid gap-2'>
                    <button className="btn btn-primary" onClick={handleEntrar} type="submit">Entrar</button>
                    <button className="btn btn-outline-secondary" onClick={handleNoHash} type="submit">No tengo hash</button>
                </div>
                <p className = 'mt-5 text-body-secondary'></p>
            </form>
        </div>
    )
}
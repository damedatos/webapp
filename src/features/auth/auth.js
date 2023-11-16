import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from './authSlice'

export function Auth() {
    const dispatch = useDispatch()
    const [hash, setHash] = useState(null)
    const auth = useSelector(state => state.auth)
    function handleInput(e) {
        const input = e.target.value
        setHash(input)
    }
    function handleOnClick() {
        dispatch(authenticate(hash))
    }
    return(
        <div className='d-flex flex-column align-items-center vh-100'>
            <form className='m-auto'>
                <img src='dD.png' width='100' height='100'></img>
                <h3>Beta test</h3>
                <h1 className = 'mb-3'>Iniciar sesion</h1>
                <input className='form-control mb-3' onChange = {handleInput} placeholder='Hash'></input>
                <button className="btn btn-primary w-100" onClick={handleOnClick} type="submit">Entrar</button>
                <p className = 'mt-5 text-body-secondary'></p>
            </form>
        </div>
    )
}
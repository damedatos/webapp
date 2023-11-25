import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from './authSlice'

export function Auth() {
    const dispatch = useDispatch()
    const [hash, setHash] = useState(null)
    const [recordame, setRecordame] = useState(false)
    function handleRecordar(e) {
        setRecordame(e.target.checked)
    }
    function handleInput(e) {
        const input = e.target.value
        setHash(input)
    }
    function handleEntrar() {
        if (recordame) {
            localStorage.setItem("hash", hash)
        }
        dispatch(authenticate(hash))
    }
    async function handleNoHash() {
        const res = await fetch("https://api.ipify.org/?format=json")
            .then(res => res.json())
            // .catch(err => TODO)
        dispatch(authenticate(res.ip))
    }
    useEffect(() => {
        const hashGuardado = localStorage.getItem("hash")
        if (hashGuardado) {
            dispatch(authenticate(hashGuardado))
        }
    }, [])
    return(
        <div className='d-flex flex-column align-items-center vh-100'>
            <form className='m-auto'>
                <img src='dD.png' width='100' height='100'></img>
                <h3>betaTest</h3>
                <h1 className = 'mb-3'>Iniciar sesion</h1>
                <input className='form-control mb-3' onChange = {handleInput} placeholder='Hash' id = 'hashInput'></input>
                <div className='form-check text-start my-3'>
                    <input className='form-check-input' type='checkbox' onChange = {handleRecordar}></input>
                    <label className='form-check-label'>Recordame</label>
                </div>
                <div className='d-grid gap-2'>
                    <button className="btn btn-primary" onClick={handleEntrar} type="button">Entrar</button>
                    <button className="btn btn-outline-secondary" onClick={handleNoHash} type="button">No tengo hash</button>
                </div>
                <p className = 'mt-5 text-body-secondary'></p>
            </form>
        </div>
    )
}
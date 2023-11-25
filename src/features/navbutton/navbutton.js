import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from '../auth/authSlice'

export function Navbutton() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [dropdown, setDropdown] = useState(false)
    const style = {position: 'absolute', inset: 'auto 0px 0px auto', margin: '0px', transform: 'translate(0px, -10px)'}
    function handleOnDropdown() {
        setDropdown(!dropdown)
    }
    function handleOnSalir() {
        localStorage.removeItem("hash")
        dispatch(authenticate(null))
    }
    function handleOnFeedback() {
        window.open("mailto:freireguido2@gmail.com?subject=Feedback sobre dameDatos")
    }
    function handleOnAyuda() {
        window.open('dameAyuda.gif')
    }
    return(
      <div className='dropdown position-fixed bottom-0 end-0 mb-2 me-2'>
        {dropdown ? <ul className='dropdown-menu text-small shadow show mb-5' style={style}>
            <li><button className='dropdown-item' type='button' onClick={handleOnSalir}>Salir</button></li>
            <li><button className='dropdown-item' type='button' onClick={handleOnFeedback}>Feedback</button></li>
        </ul>
        : null}
        <button className='btn bg-white' onClick={handleOnAyuda}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
            </svg>
        </button>
        <button className='btn bg-white dropdown-toggle' onClick={handleOnDropdown}>
            <img src = 'dD.png' width='33' height='33'/>
        </button>
      </div>
    )
}
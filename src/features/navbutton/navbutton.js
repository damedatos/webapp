import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export function Navbutton() {
    const auth = useSelector(state => state.auth)
    return(
      <div className='dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        <a className='d-block dropdown-toggle dropdown link-body-emphasis'>
            <img src = 'dD.png' width='33' height='33'></img>
        </a>
      </div>
    )
}
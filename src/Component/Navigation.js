import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { user_logout } from '../Redux/Actions/UserActions'
import {AiOutlineMenu} from 'react-icons/ai'
import "../Styles/style.css"

const Navigation = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userDetail} = userLogin

    const [scrollHeader, setScrollHeader] =useState(false)

    const logoutHandler =  () => {
        dispatch(user_logout())
    }

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", ()=> {
                setScrollHeader(window.pageYOffset > 200)
            })
        }
    }, [])
  return (
    <>
        <nav className={`navbar navbar-expand-md nav-fix ${scrollHeader ? "fixed" : ""}`}  id="mainNav">
            <div className='container-fluid px-4 px-lg-5'>
                <Link to='/' className='navbar-brand'>Project1</Link>

                <button type='button' className='navbar-toggler navbar-toggler-right' 
                data-bs-toggle='collapse' data-bs-target='#navbarResponsive'
                aria-controls='navbarResponsive' aria-expanded='false'
                aria-label='Toggle navigation'>
                    <AiOutlineMenu className='menuicon'/>
                </button>
                {userDetail ? 
                        <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>{userDetail.firstname}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-link'>About Me</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/services' className='nav-link'>Services</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link' onClick={logoutHandler}>Log out</Link>
                            </li>
                        </ul>
                    </div>
                :
                    <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-link'>About Me</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/services' className='nav-link'>Services</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/sign-up' className='nav-link sign-up'>Sign Up</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/sign-in' className='nav-link sign-in'>Sign in</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
  )
}

export default Navigation
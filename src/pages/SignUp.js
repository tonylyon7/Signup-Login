import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { user_signup } from '../Redux/Actions/UserActions'
import { USER_SIGN_UP_RESET } from '../Redux/types'

const SignUp = () => {
    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState("")
    const [middlename, setMiddlename] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            firstname,
            middlename,
            lastname,
            age,
            gender,
            phoneNumber,
            email,
            address,
            password
        }
        // if(!firstname || !middlename || !lastname || !age || !gender || !phoneNumber || !email || !address || !password){
        //     setMessage("Please fill all inpute field")
        // }else 
        if(password !== confirmPassword){
            setMessage("Password does not match")
        }else{
            dispatch(user_signup(data))
        }
    }

    useEffect(() =>{
        return () => {
            dispatch({type: USER_SIGN_UP_RESET})
        }
    }, [dispatch])

  return (
    <div>
        <div className='container'>
            <div className='justify-content-center align-items-center text-center'>
                <div className='col-md-8'>
                    <p>{message}</p>
                    <form onSubmit={submitHandler}>
                        <div className='col-md-6'>
                            <label>First Name: </label>
                            <input 
                                type="text"
                                value={firstname}
                                onChange={(event) => setFirstname(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Middle Name: </label>
                            <input 
                                type="text"
                                value={middlename}
                                onChange={(event) => setMiddlename(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Last Name: </label>
                            <input 
                                type="text"
                                value={lastname}
                                onChange={(event) => setLastname(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Age: </label>
                            <input 
                                type="number"
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Gender :</label>
                            <select value={gender} onChange={(event) => setGender(event.target.value)}>
                                <option>---select---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label>Phone Number: </label>
                            <input 
                                type="tel"
                                value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Email : </label>
                            <input 
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Address : </label>
                            <input 
                                type="text"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Password : </label>
                            <input 
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Confirm Password : </label>
                            <input 
                                type="password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <button>Sign Up</button>
                    </form>
                    <div>
                        <p>Already have an account? <a href='/sign-in'>Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
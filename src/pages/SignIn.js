import React, {useState, useEffect} from 'react'
import { user_signin } from '../Redux/Actions/UserActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userDetail} = userLogin

    const submitHandler = (event) => {event.preventDefault()
         dispatch(user_signin(email, password))
    }

    useEffect(() => {
        if(userDetail){
            navigate('/')
        }
    }, [userDetail, navigate])

  return (
    <div className='container'>
        <div className='justify-content-center align-items-center text-center'>
            <div className='col-md-8'>
                <form onSubmit={submitHandler}>                  
                    <div className='col-md-6'>
                        <label>Email: </label>
                        <input 
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>                   
                    <div className='col-md-6'>
                        <label>Password: </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button>Sign In</button>
                </form>
                <div>
                    <p>Don't have an account? <a href='/sign-up'>Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SignIn
import React,{ useState } from 'react'
// import axios from '../../utils/axios'
import axios from 'axios'
import TitlePage from './TitlePage'

const HomeGuest = () => {
    const [credential,setCredential] = useState({
        username:'',
        email:'',
        password:''
    })
    const onChange  = (e)=> setCredential({
        ...credential,
        [e.target.name]:e.target.value
    })
    
    const handleSubmit = async e=>{
        e.preventDefault()
        try {
            await axios.post('/auth/register', {...credential})
            setCredential({
                username:'',
                email:'',
                password:''

            })
            
        } catch (error) {
            console.log("there was an error",error);
            
        }
    }
    return (
            <TitlePage title='Welcome' wide={true}>
            <div className="row align-items-center">
                <div className="col-lg-7 py-3 py-md-5">
                <h1 className="display-3">Create Post and Share with Friends</h1>
                <p className="lead text-muted">Now you can create and share your thoughts with your friends and family.Please login and explore the world.</p>
                </div>
                <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="username-register" className="text-muted mb-1">
                        <small>Username</small>
                    </label>
                    <input onChange={onChange} id="username-register" 
                        name="username" className="form-control" 
                        type="text" placeholder="Username" 
                        autoComplete="off" value={credential.name}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email-register" className="text-muted mb-1">
                        <small>Email</small>
                    </label>
                    <input onChange={onChange} id="email-register" 
                        name="email" className="form-control" 
                        type="email" placeholder="name@example.com" 
                        autoComplete="off" value={credential.email}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password-register" className="text-muted mb-1">
                        <small>Password</small>
                    </label>
                    <input onChange={onChange} id="password-register" 
                        name="password" className="form-control" 
                        type="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password2-register" className="text-muted mb-1">
                        <small>Confirm Password</small>
                    </label>
                    <input onChange={onChange} id="password2-register" 
                        name="password2" className="form-control" 
                        type="password" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Sign up
                    </button>
                </form>
                </div>
            </div>
            </TitlePage>
            )
}
export default HomeGuest;
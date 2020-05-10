import React,{ useState} from 'react'
import axios from 'axios'

const HeaderLogout = (props) => {
    const [credential, setCredential] = useState({
        username:'',
        password:''
    })

    const handleSubmit = async e=>{
        e.preventDefault()
        try {
            const res = await axios.post('/api/accounts/token',{...credential})
            if (res.data){
                localStorage.setItem('token',res.data.access)
                localStorage.setItem('username',res.data.username)
                localStorage.setItem('avatar','')
                props.setLoggedIn(true)
                
            }else{
                console.log('Incorrect credentials');
                
            }
            setCredential({
                username:'',
                password:''
            })
        } catch (error) {
            console.log('error in login',error);
            setCredential({
                username:'',
                password:''
            })
        }
    }
    const onChange = (e) => setCredential({
        ...credential,
        [e.target.name]: e.target.value
    })
    return (
        <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
            <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input onChange={onChange} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input onChange={onChange} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
                </div>
                <div className="col-md-auto">
                <button className="btn btn-success btn-sm">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default HeaderLogout

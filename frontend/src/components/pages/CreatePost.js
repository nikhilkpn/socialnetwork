import React,{ useState} from 'react'
import TitlePage from '../layout/TitlePage'
import axios from 'axios'

const CreatePost = () => {
    const [post, setPost] = useState({
        title:'',
        content:''
    })
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('api/posts/', {...post, token:localStorage.getItem('token')})
        } catch (error) {
            
        }
        
    }

    const onChange = e => setPost({
        ...post,
        [e.target.name]: e.target.value
    })
    return (
        <TitlePage title="Create New Post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="post-title" className="text-muted mb-1">
                    <small>Title</small>
                </label>
                <input onChange={onChange} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
                </div>

                <div className="form-group">
                <label htmlFor="post-body" className="text-muted mb-1 d-block">
                    <small>Content</small>
                </label>
                <textarea onChange={onChange} name="content" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
                </div>

                <button className="btn btn-primary">Save New Post</button>
            </form>
        </TitlePage>
        )
}

export default CreatePost

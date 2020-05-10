import React from 'react'

import {Link} from 'react-router-dom'

export const HeaderLogin = () => {
    return (
        <div className="flex-row my-3 my-md-0">
            <Link data-for="profile" data-tip="My Profile" to={`/profile/nikhil}`} className="mr-2">
                <img className="small-header-avatar" src='' />
            </Link>
            <Link className="btn btn-sm btn-success mr-2" to="/create-post">
                Create Post
            </Link>{" "}
            <button className="btn btn-sm btn-secondary">
                Sign Out
            </button>
    </div>
        )
}

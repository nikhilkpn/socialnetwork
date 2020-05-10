import React from 'react'

const Alert = (props) => {
    return (
        <div className='floating-alert'>
            {props.messages.map((msg,index)=>{
                return (
                    <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
                        {msg}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Alert

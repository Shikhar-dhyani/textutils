import React from 'react'

export default function Alert(props) {
    const captialise=(word)=>{
    const lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
                <strong>{captialise(props.alert.type)}</strong> {props.alert.msg} 
            </div>
        </div>
    )
}

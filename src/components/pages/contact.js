import {Button } from "react-bootstrap";
import { useRef } from "react";
import React from "react";

function  Contact (props){
const nameRef=useRef('');
const emailRef=useRef('');
const phoneRef=useRef('');


function submitHandler(event){
    event.preventDefault();

    const details={
        name:nameRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
    }
    props.onAddDetails(details);
}



    return (
        <form onSubmit={submitHandler}>
        <div className="fw-bold mt-5">
           <div className="text-center">
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' />
            </div>
            <br/>
            <div className="text-center">
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
            </div>
            <br/>
            <div className="text-center">
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' />
            </div>
            <div className="text-center">
                <Button  className="mt-5">Submit</Button>
           </div>
           <br/>
        </div>
        </form>
        
    )
}
export default Contact;
import { useState } from 'react';
import './ContactForm.css';
import mongoose from 'mongoose';
// const url=`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.25ehbzy.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGODB_CLUSTER}`;

// mongoose.connect(url).then(() => {
//     console.log('Connected to database');
// }).catch((err) => {
//     console.log('Error!',err);
// });

function ContactForm() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=()=>{
        console.log(name+","+email+","+message);
    }

    return (
    <div className='ContactForm'>
        <p>SEND ME A MESSAGE</p>
        <div>
            <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <input type='text' id='msg' placeholder='Message' onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default ContactForm
import React, { useRef, useState } from "react";
import MediaQuery from "react-responsive";
import emailjs from '@emailjs/browser';
import { CheckCircle, Handshake, Send } from "@mui/icons-material";
import { SiTruenasHex } from "@icons-pack/react-simple-icons";

//emailjs service ID: service_ioxirv4

function ContactMe() {

    const emailForm = useRef();
    const serviceID = 'service_ioxirv4';
    const templateID = 'template_8cdx8oj';
    const publicKey = 'x8Vii_UOTUqM2WA2K';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailStatus, setEmailStatus] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Nitin Minhas',
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(
                (response) => {
                    console.log(`Status ${response.status}`, response.text)                
                    emailForm.current.reset();
                    setName('');
                    setEmail('');
                    setMessage('');
                    emailStatus(true);
                    alert('Email sent successfully!');
                },
                (err) => {
                    console.log('FAILED...', err.text);
                    setEmailStatus(false);
                },                
            )
    }

    return (
        <div name = "Contact Me" className="relative bg-[#0478FF]">
            <MediaQuery minWidth={700}>
                <div className="flex flex-col items-center justify-start w-full h-screen space-y-10  ">
                    <div className="text-white text-4xl font-bold m-16">
                        Get In Touch
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center justify-center bg-white/80 shadow-2xl rounded-l-lg p-5 px-24 my-10 text-center">
                            <Handshake htmlColor="#0478FF" style={{fontSize:'6rem'}}/>
                            Email me for any queries or just to say hi!
                        </div>
                        <div className="bg-white shadow-2xl rounded-lg py-5 w-full">                        
                            <div className="flex flex-col items-center justify-center">
                                <form ref={emailForm} onSubmit={sendEmail} className="mx-5">
                                    <div className="flex items-center justify-center space-x-16 my-5">                                        
                                        <div>
                                            <div>Name</div>
                                            <input className="rounded-lg p-2 bg-[#0478FF]/10 pr-32" type="text" placeholder="John Doe" required onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                        <div>
                                            <div>Email</div>
                                            <input className="rounded-lg p-2 bg-[#0478FF]/10 pr-32"  type="email" placeholder="example@gmail.com" required onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div>Message</div>
                                        <textarea className="rounded-lg p-2 bg-[#0478FF]/10 h-80 w-full" name="message" placeholder="Hey there!" required onChange={(e) => setMessage(e.target.value)}/>
                                        <div className={emailStatus ? "flex items-center justify-end " : "flex items-center justify-end"}>                                            
                                            {emailStatus ?                                             
                                                <button className="bg-[#0478FF] p-2 px-5 rounded-full my-5" type="submit" disabled>                                    
                                                    <CheckCircle htmlColor="white" /> 
                                                    <span className="text-white px-2">Sent</span>
                                                </button>  
                                            :                                             
                                                <button className="bg-[#303030] p-2 px-5 rounded-full my-5" type="submit">                                    
                                                    <Send htmlColor="white" /> 
                                                    <span className="text-white px-2">Send</span>
                                                </button> 
                                            }                                            
                                        </div>
                                    </div>
                                                                     
                                </form>
                            </div>    
                        </div> 
                    </div>                                                                     
                </div>
            </MediaQuery>
        </div>
    )
}
export default ContactMe

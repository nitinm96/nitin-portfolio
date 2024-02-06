import React, { useRef } from "react";
import MediaQuery from "react-responsive";
import emailjs from '@emailjs/browser';
import { Handshake, Send } from "@mui/icons-material";

//emailjs service ID: service_ioxirv4

function ContactMe() {

    const emailForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ioxirv4', 'template_8cdx8oj', emailForm.current, {
                publicKey : 'x8Vii_UOTUqM2WA2K',
            })
            .then(
                () => {
                    alert('Email sent successfully!');
                    emailForm.current.reset();
                    console.log('Email sent successfully')
                },
                (err) => {
                    console.log('FAILED...', err.text);
                },                
            )
    }

    return (
        <div name = "Contact Me" className="relative bg-[#0478FF]">
            <MediaQuery minWidth={700}>
                <div className="flex flex-col items-center justify-start w-full h-screen space-y-10 ">
                    <div className="text-white text-4xl font-bold m-10">
                        Get In Touch
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center justify-center bg-white/80 shadow-2xl rounded-l-[50px] p-5 px-24 my-10 text-center">
                            <Handshake htmlColor="#0478FF" style={{fontSize:'6rem'}}/>
                            Email me for any queries or just to say hi!
                        </div>
                        <div className="bg-white shadow-2xl rounded-lg py-5 w-full">                        
                            <div className="flex flex-col items-center justify-center">
                                <form ref={emailForm} onSubmit={sendEmail} className="mx-5">
                                    <div className="flex items-center justify-center space-x-16 my-5">
                                        <div>
                                            <div>Name</div>
                                            <input className="rounded-lg p-2 bg-[#0478FF]/10"  type="text" name="user_name" placeholder="example@gmail.com" required />
                                        </div>
                                        <div>
                                            <div>Email</div>
                                            <input className="rounded-lg p-2 bg-[#0478FF]/10" type="email" name="user_email" placeholder="John Doe" required />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div>Message</div>
                                        <textarea className="rounded-lg p-2 bg-[#0478FF]/10 h-80 w-full" name="message" placeholder="Hey there!" required/>
                                        <div className="flex items-center justify-end">
                                            <button className="bg-[#303030] p-2 px-5 rounded-full my-5" type="submit">                                    
                                                <Send htmlColor="white" /> 
                                                <span className="text-white px-2">Send</span>
                                            </button> 
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

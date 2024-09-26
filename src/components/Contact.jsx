import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import  { toast } from 'react-hot-toast'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [error, setErros] = useState({})

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let error = {};
        if (!formData.name) error.name = "Name is Required";
        if (!formData.email) { error.email = "Email is Required"; } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = "Email is Invalid"
        }
        if (!formData.message) erroes.message = "Message is required";
        return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErros(validationErrors);
        } else {
            setErros({});
            setIsSending(true);

            emailjs
                .send(
                    "service_4ctcfdq",
                    "template_ma3khpe",
                    formData,
                    "wh7kQ3NMxaV8ElPQ6",
                )
                .then((response) => {
                    toast.success("Message Sent Successfully");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    toast.error("Failed, Try Again");
                })
                .finally(() => {
                    setIsSending(false);
                })
        }
    }

    return (
        <div className='p-4 lg:w-3/4' id='contact'>
            <h2 className='my-8 text-center text-[#01ff96] text-5xl title font-bold tracking-tighter '>Let's Connect</h2>
            <form onSubmit={handleSubmit} >
                <div className='mb-4 flex gap-2 spae-x-4 '>
                    <div className='lg:w-1/2 '>
                        <input type="text" id='name' name='name'
                            value={formData.name}
                            placeholder='Name'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm  focus:border-stone-400 focus:outline-none' />
                        {error.name && (
                            <p className='text-sm text-rose-800'>{error.name}</p>
                        )}
                    </div>
                    <div className='lg:w-1/2'>
                        <input type="email" id='email' name='email'
                            value={formData.email}
                            placeholder='Email'
                            onChange={handleChange}
                            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent text-sm px-3 py-2 focus:border--stone-400 focus:outline-none' />
                        {error.email && (
                            <p className='text-sm text-rose-800'>{error.email}</p>
                        )}
                    </div>
                </div>
                <div className='mb-4'>
                    <textarea id='message' name='message'
                        value={formData.message}
                        placeholder='Message'
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent text-sm px-3 py-2 focus:border--stone-400 focus:outline-none' rows="10" />
                    {error.name && (
                        <p className='text-sm text-rose-800'>{error.message}</p>
                    )}
                </div>
                <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    <div className='flex items-center justify-center gap-2'> {isSending ? "Sending..." : "Send"} </div>
                </button>
            </form>

        </div>
    )
}

export default Contact

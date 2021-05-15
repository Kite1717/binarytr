import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Tebrikler!',
        text: 'Mesajınız başarıyla gönderilmiştir',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `https://sekizfx-mailer.herokuapp.com/api/mail/send`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, phone: number, subject, message: text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Bizimle İletişime geçin</h2>
                    <div className="bar"></div>
                    <p>Aklınızdaki herhangi birşey için seize yardımcı olmaktan memnun olacağız.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src="/images/contact-img.png" alt="image" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Adınız Soyadınız"
                                            className="form-control"
                                            value={contact.name}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name && 'Ad Soyad gereklidir.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="E-mail adresiniz"
                                            className="form-control"
                                            value={contact.email}
                                            onChange={handleChange}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email && 'Email gereklidir.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder="Telefon numranız"
                                            className="form-control"
                                            value={contact.number}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.number && 'Telefon numarası gereklidir.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Konunuz"
                                            className="form-control"
                                            value={contact.subject}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject && 'Konu gereklidir.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="5"
                                            placeholder="Mesajınızı yazınız..."
                                            className="form-control"
                                            value={contact.text}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.text && 'Mesaj gereklidir.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12">
                                    <button type="submit" className="btn btn-primary">Mesaj Gönder</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;

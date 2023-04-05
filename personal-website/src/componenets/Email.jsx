import React, { useState } from 'react'
import { send_email } from '@/utils/external_apis';

const Email = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [emailConfirm, setEmailConfirm] = useState(false);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Submit logic goes here, e.g. sending the form data to a server
        console.log(formData);

        const response = await send_email(formData)
        if (response.ok) {
            setEmailConfirm(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }
    };

    const handleClose = () => {
        setEmailConfirm(false);
    };

    return (
        <>
            <div className="site-text">
                <h4 className="mt-2"> Send an Email to request my resume, time to talk, etc...</h4>
                <div className="col email-form d-flex m-auto mt-3 justify-content-center align-items-center">
                    <form onSubmit={handleSubmit}>
                        <div className='row justify-content-center align-items-center'>
                            <label className="form-label mb-0">Name:</label>
                            <input className="form-control" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <label className="form-label mb-0">Email:</label>
                            <input className="form-control" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <label className="form-label mb-0">Message:</label>
                            <textarea className="form-control" name="message" value={formData.message} onChange={handleInputChange} />
                        </div>
                        <div className='row mt-3 mb-1 justify-content-center align-items-center'>
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: emailConfirm ? 'block' : 'none' }} aria-modal={emailConfirm ? 'true' : 'false'} onClick={handleClose}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Email Confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{color: 'black'}}>Your email has been sent.</p>
                            <p style={{color: 'black'}}>A confirmation email has been sent to the email provided...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Email;
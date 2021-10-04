import { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { forwardRef, useRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { environment } from "../environments/environment";

const BuyerHireModal = forwardRef((props, ref) => {
    const userProfile = JSON.parse(localStorage.getItem('userDetails'));
    const userDetails = userProfile.userDetails;

    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [service, setService] = useState('');
    const [messageInput, setMessageInput] = useState('');


    useImperativeHandle(
        ref,
        () => ({
            showModal(data) {
                setIsOpen(true);
                setService(data)
            }
        }),
    )

    const hideModal = () => {
        setIsOpen(false);
        setMessageInput('');
    };

    const hireFreelancer = () => {
        setSpinner(true);
        let data = {
            sellerId: service.userId,
            service: service,
            message: messageInput
        }

        axios.post(environment.API_URL + 'buyer/hire/freelance', data, {headers: {token: userProfile.token}})
        .then(response => {
            if(response.status == 200)
            {
                setSpinner(false);
                setSuccessMsg(response.data.msg);
                setMessageInput('');
                setTimeout(() => {
                    setIsOpen(false);
                }, 1200);
                // console.log(response.data)
            }
        }).catch(err => {
            // console.log(err.response.data)
            setErrorMsg(err.response.data)
        });
    }

    return (
        <>
            <Modal show={isOpen} onHide={hideModal}  animation={false}>
                <Modal.Header>
                    <Modal.Title>
                    {service !== '' &&
                        <h4><i className="fas fa-tags"></i> {service.packageName}</h4>
                    }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {successMsg !== '' &&
                        <div className="alert alert-success" role="alert">
                            {successMsg}
                        </div>
                    }
                    {errorMsg !== '' &&
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                    }
                    <textarea className="form-control" placeholder="Type your message here..." rows="10" value={messageInput} onChange={(e) => {setMessageInput(e.target.value)}}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={hideModal}>Close</button>
                    <button className="btn btn-primary" onClick={hireFreelancer} disabled={loading}>
                        {!loading &&
                            <span>Send Message</span>
                        }
                        {loading &&
                            <div className="d-flex align-items-center">
                                <strong>Please wait...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                        }
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
})

BuyerHireModal.defaultProps = {
    style: {display: 'none'},
    data: {}
}

export default BuyerHireModal

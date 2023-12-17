import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import './ReservedArea.css';
import ErrorModal from './ErrorModal';
import { merchError, resetMerchError, createMerch } from '../../../States/MerchState';
import { allEmail, getEmails } from '../../../States/MailingState';
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';

emailjs.init(process.env.REACT_APP_USER_ID);


function MerchandiseForm() {
  const dispatch = useDispatch();
  const emails = useSelector(allEmail);
  const [show, setShow] = useState(false);
  const errorMerch = useSelector((state) => merchError(state));
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    size: '',
    image: null,
    description: '',
  });

  const cleaner = () => {
    setFormData({
      name: '',
      price: '',
      size: '',
      description: '',
      image: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createMerch(formData));
    cleaner();
  
    const toList = emails.mailingList.map(email => email.email);
    console.log(toList);
    toList.forEach(recipientEmail => {
      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { email: recipientEmail, merchandising: formData },
        process.env.REACT_APP_USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
    });    
  };
  


  const handleClose = () => {
    setShow(false);
    dispatch(resetMerchError());
  };
  const handleIconClick = () => {
    setFormVisible(!formVisible);
  };
  useEffect(() => {
    dispatch(getEmails())
    if (emails) {
      console.log(emails.mailingList)
    }
  }, [])

  return (
    <>
      <div className="merch-header">
        <div className="d-flex align-items-center gap-2">
          <FaPlus size={30} onClick={handleIconClick} />
          <CustomTitle text="Add new merchandising" />
        </div>
        <hr />
        {formVisible && (
          <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="merchName" className="form-label">Merch name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="merchImage" className="form-label">Picture</label>
              <input
                type="file"
                name='image'
                className="form-control"
                id="image"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">Size</label>
              <input
                type="text"
                className="form-control"
                name="size"
                id="size"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type='text'
                className="form-control"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <CustomButton text="Send" className="bn5" type="submit" />
            <div className="mb-3">
              <label htmlFor="merchInfo" className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        )}
      </div>
      <ErrorModal error={errorMerch} show={show} onHide={handleClose} />
    </>
  );
}

export default MerchandiseForm;

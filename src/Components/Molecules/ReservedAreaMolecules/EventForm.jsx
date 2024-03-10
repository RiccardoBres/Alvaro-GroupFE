import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import CustomInput from '../../Atoms/CustomInput';
import { createEvent, isLoading, eventError, resetEventError } from '../../../States/EventState';
import { allEmail } from '../../../States/MailingState';
import ErrorModal from './ErrorModal';
import './ReservedArea.css';
import emailjs from 'emailjs-com';

emailjs.init(process.env.REACT_APP_USER_ID);


function EventForm() {
  const dispatch = useDispatch();
  const isEventLoading = useSelector((state) => isLoading(state));
  const errorEvent = useSelector((state) => eventError(state));
  const [show, setShow] = useState(false);
  const emails = useSelector(allEmail)
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    generalInfo: '',
    date: '',
    image: null,
  });

  const cleaner = () => {
    setFormData({
      name: '',
      location: '',
      generalInfo: '',
      date: '',
      image: null,
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
    dispatch(createEvent(formData));
    cleaner();

    const toList = emails.mailingList.map(email => email.email);
    toList.forEach(recipientEmail => {
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { email: recipientEmail, event: formData },
        process.env.REACT_APP_USER_ID
      )
        .then((response) => {
        })
        .catch((err) => {
        });
    });
  };

  const handleClose = () => {
    setShow(false);
    dispatch(resetEventError());
  };

  const handleIconClick = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    if (errorEvent) {
      setShow(true);
    }
  }, [errorEvent]);

  return (
    <>
      <div className="event-header">
        <div className="d-flex align-items-center gap-2">
          {
            formVisible? (
              <FaMinus size={30} onClick={handleIconClick} className='cursor-pointer' />
            ) : (
              <FaPlus size={30} onClick={handleIconClick} className='cursor-pointer' />
            )
          }
          <CustomTitle text="Add new event"/>
        </div>
        <hr />
        <div className="form-container">
          {formVisible && (
            <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="eventName" className="form-label">Event name</label>
                <CustomInput
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eventImage" className="form-label">Picture</label>
                <CustomInput
                  type="file"
                  name='image'
                  className="form-control"
                  id="image"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eventLocation" className="form-label">Location</label>
                <CustomInput
                  type="text"
                  className="form-control"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">Date</label>
                <CustomInput
                  type='date'
                  className="form-control"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eventInfo" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="generalInfo"
                  id="generalInfo"
                  rows="3"
                  value={formData.generalInfo}
                  onChange={handleChange}
                ></textarea>
              </div>
              <CustomButton text="Send" className="bn5" type="submit" />
            </form>
          )}
        </div>
      </div>
      <ErrorModal error={errorEvent} show={show} onHide={handleClose} />
    </>
  );
}

export default EventForm;

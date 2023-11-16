import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import './ReservedArea.css';
import { createEvent, isLoading, eventError, resetEventError } from '../../States/EventState';
import ErrorModal from './ErrorModal';



function EventForm() {
  const dispatch = useDispatch();
  const isEventLoading = useSelector((state) => isLoading(state));
  const errorEvent = useSelector((state) => eventError(state));
  const [show, setShow] = useState(false);


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

  };
  const handleClose = () => {
    setShow(false);
    dispatch(resetEventError());
  }

  useEffect(() => {
    if (errorEvent) {
      setShow(true);
    }
  }, [errorEvent]);

  return (
    <>
      <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
        <CustomTitle text="New event" className="form-title" />
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event name</label>
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
          <label htmlFor="eventImage" className="form-label">Picture</label>
          <input
            type="file"
            name='image'
            className="form-control"
            id="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventLocation" className="form-label">Location</label>
          <input
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
          <input
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
      <ErrorModal error={errorEvent} show={show} onHide={handleClose} />
    </>
  );
}

export default EventForm;

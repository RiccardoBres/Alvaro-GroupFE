import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import './ReservedArea.css';
import ErrorModal from './ErrorModal';
import { allMerch, merchError, resetMerchError, createMerch } from '../../../States/MerchState';

function MerchandiseForm() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const errorMerch = useSelector((state)=> merchError(state))

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    size: '',
    image: null,
  });

  const cleaner = () => {
    setFormData({
      name: '',
      price: '',
      size: '',
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
    dispatch(createMerch(formData));
    cleaner();

  };
  const handleClose = () => {
    setShow(false);
    dispatch(resetMerchError())
  }

  useEffect(() => {
    if (errorMerch) {
      setShow(true);
    }
  }, [errorMerch]); 

 return (
  <>
      <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
        <CustomTitle text="New merch" className="form-title" />
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
      </form>
      <ErrorModal error={errorMerch} show={show} onHide={handleClose} />
    </>
 );
}

export default MerchandiseForm;

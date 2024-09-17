import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./PhotoVoting.module.css";
import { v4 as uuidv4 } from 'uuid';
import Marquee from "../slider/slider";

const PhotoVoting = () => {
  const lineStyle = {
    background: 'linear-gradient(to right, rgb(50, 63, 75), #0022ff)',
    width: '80px',
    height: '5px',
    margin: '0 20px',
    marginRight: '40px',
    padding: '0px',
    display: 'inline-block',
    transform: 'translateY(-20px)',
    borderRadius: '0',
  };

  const [photos, setPhotos] = useState([]);
  const [lovedPhotos, setLovedPhotos] = useState(new Set());
  const [warningMessage, setWarningMessage] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/photos');
      const sortedPhotos = response.data.sort((a, b) => b.loves - a.loves);
      setPhotos(sortedPhotos);
  
      let userId = localStorage.getItem('userId');
      if (!userId) {
        userId = uuidv4();
        localStorage.setItem('userId', userId);
      }
  
      const userResponse = await axios.get(`http://localhost:5000/users/${userId}`);
      const lovedPhotoIds = new Set(userResponse.data.lovedPhotos);
      setLovedPhotos(lovedPhotoIds);
  
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  
  const handleLoveToggle = async (photoId) => {
    let userId = localStorage.getItem('userId');
  
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    }
  
    const isLoved = lovedPhotos.has(photoId);
  
    try {
      const endpoint = isLoved ? 'unlove' : 'love';
      const response = await axios.post(`http://localhost:5000/photos/${endpoint}`, { userId, photoId });
      const { success, loves, message } = response.data;
  
      if (!success) {
        setWarningMessage(message);
        setTimeout(() => setWarningMessage(null), 3000);
        return;
      }
  
      setPhotos((prevPhotos) => {
        const updatedPhotos = prevPhotos.map((photo) =>
          photo._id === photoId ? { ...photo, loves } : photo
        );
        return updatedPhotos.sort((a, b) => b.loves - a.loves);
      });
  
      setLovedPhotos((prevLovedPhotos) => {
        const updatedLovedPhotos = new Set(prevLovedPhotos);
        if (isLoved) {
          updatedLovedPhotos.delete(photoId);
        } else {
          updatedLovedPhotos.add(photoId);
        }
        return updatedLovedPhotos;
      });
  
    } catch (error) {
      console.error('Error updating love count:', error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <>
      <header className={`${styles.backGround} text-center`}>
        <div className={`d-flex justify-content-center align-items-center ${styles.header}`}>
          <h1 className='text-white text-decoration-line-through oswald-titles main-font'>
            <span className='text-main'>LA</span> CASA <span className='text-main'>DE</span> PAPEL<span className='text-main'>VOTING</span>
          </h1>
        </div>
        <Marquee lineStyle={lineStyle} />
      </header>
      <div className="container">
        {warningMessage && <div className="alert alert-warning">{warningMessage}</div>}
        <div className='row'>
          {photos.map(photo => (
            <div className="col-md-4 col-6" key={photo._id}>
              <div className='position-relative'>
                <img src={photo.url} alt={`photo-${photo._id}`} className='rounded-4 w-100' />
                <div className="d-flex justify-content-between px-3">
                  <i
                    onClick={() => handleLoveToggle(photo._id)}
                    className={`fa-heart fa-2x text-white ${lovedPhotos.has(photo._id) ? 'fa-solid' : 'fa-regular'}`}
                  ></i>
                  <span className='text-white fs-3'>{photo.loves}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoVoting;

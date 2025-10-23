import React from 'react'
import { motion } from 'framer-motion'
import styles from './RoyalParkCars.module.css'

export default function RoyalParkCars() {
  // Dummy data for car images - replace with your actual event images
  const vertical = [
    { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=600&fit=crop', owner: 'Ali Mohamed' },
    { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=600&fit=crop', owner: 'Sara Ahmed' },
    { src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=600&fit=crop', owner: 'Youssef Ibrahim' },
    { src: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=600&fit=crop', owner: 'Noor Saleh' }
  ];

  const horizontal = [
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', owner: 'Omar Khaled' },
    { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop', owner: 'Lina Hassan' },
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop', owner: 'Ahmed Mostafa' }
  ];

  return (
    <section className={`${styles.royalParkSection} position-relative overflow-hidden`}>
      {/* Animated Background Sparkles */}
      <div className={styles.sparkles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.sparkle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 800,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container position-relative z-2 py-5">
        {/* Animated Title */}
        <motion.div 
          className="text-center mb-4 mb-md-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`${styles.pageTitle} main-font text-white mb-2 mb-md-3`}
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 0, 0, 0.5)',
                '0 0 40px rgba(255, 0, 0, 0.8)',
                '0 0 20px rgba(255, 0, 0, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ROYAL PARK EVENT
          </motion.h1>
          <motion.p 
            className="text-white oxygen fs-6 fs-md-5 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tomorrow's Modified Cars Showcase
          </motion.p>
        </motion.div>

        {/* Cars Grid Layout - Mobile First */}
        <div className="row g-3 g-md-4">
          {/* Vertical Cars Column */}
          <div className="col-12 col-lg-6">
            <div className="row g-3 g-md-4">
              {vertical.map((car, index) => (
                <motion.div
                  key={index}
                  className="col-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`${styles.carCard} ${styles.verticalCard}`}>
                    <div className={styles.imageWrapper}>
                      <img src={car.src} alt={car.owner} className={styles.carImage} />
                      {/* Shine Effect */}
                      <motion.div 
                        className={styles.shine}
                        animate={{ x: [-200, 400] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </div>
                    {/* Owner Name Below Image - Always Visible */}
                    <div className={styles.ownerName}>
                      <i className="fa-solid fa-user me-2"></i>
                      <span className="main-font">{car.owner}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Horizontal Cars Column */}
          <div className="col-12 col-lg-6">
            <div className="row g-3 g-md-4">
              {horizontal.map((car, index) => (
                <motion.div
                  key={index}
                  className="col-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`${styles.carCard} ${styles.horizontalCard}`}>
                    <div className={styles.imageWrapper}>
                      <img src={car.src} alt={car.owner} className={styles.carImage} />
                      {/* Shine Effect */}
                      <motion.div 
                        className={styles.shine}
                        animate={{ x: [-200, 600] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </div>
                    {/* Owner Name Below Image - Always Visible */}
                    <div className={styles.ownerName}>
                      <i className="fa-solid fa-user me-2"></i>
                      <span className="main-font">{car.owner}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Lines */}
      <motion.div 
        className={styles.animatedLine}
        style={{ top: '20%' }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className={styles.animatedLine}
        style={{ top: '60%' }}
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  )
}

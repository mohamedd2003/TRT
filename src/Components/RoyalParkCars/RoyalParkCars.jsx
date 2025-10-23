import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './RoyalParkCars.module.css'

export default function RoyalParkCars() {
  // Initialize AOS (loaded from CDN in index.html)
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        mirror: true
      });
    }
  }, []);

  // Dummy data for car images - replace with your actual event images
  const vertical = [
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245413/Maroki_uqy9ku.jpg', owner: 'maroki' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243609/HAZIM_KHAIRY_wzr5rc.jpg', owner: 'HaZIM kHAIRY' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243605/MoatazMostafa_vgzlao.jpg', owner: 'Moataz Mostafa' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243608/AMR_YEHIA_p5fvyg.jpg', owner: 'Amr yehia' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245395/Amr_Kamal_v0kba5.jpg', owner: 'Amr kamal' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245402/Ammar_Elganzoory_t6gw6s.jpg', owner: 'Ammar Alganzoory' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243608/ESLAM_ROSHDY_hvniio.jpg', owner: 'Eslam roshdy' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243609/MEDO_MOSTAFA_osxqdj.jpg', owner: 'MEdo mostafa' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243607/MO_AREF_dwpuuz.jpg', owner: 'MO AREF' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243606/El_DOD_xvjib7.jpg', owner: 'El dod' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761243610/MEMO_c9skml.jpg', owner: 'memo' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245395/FEKRY_MOHMAMED_kik4gf.jpg', owner: 'fekry mohamed' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245395/Elm3lm_sabry_bgonuf.jpg', owner: 'elm3lm sabry' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245397/Hassan_elbe7ery_gv89hl.jpg', owner: 'Hassan elbe7ery' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245396/Ahmed_elshemiy_kl78ol.jpg', owner: 'Ahmed elshemy' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245402/OMAR_REDA_axpuis.jpg', owner: 'omar reda' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245403/MOAMEN_MOHAMED_whajqe.jpg', owner: 'moamen Mohamed' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245404/shebaa_zd0mw9.jpg', owner: 'Shebaa ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245405/Mohamed_bekhet_acqtlz.jpg', owner: 'Mohamed bekhet ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245412/sameer_talaat_uyze6x.jpg', owner: 'sameer talaat ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245412/Hussein_Ali_rpkdoh.jpg', owner: 'Hussein Ali ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245413/Elzaem_x0t5sc.jpg', owner: 'ELZAEM  ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245458/Hossam_3sar_xfztsf.jpg', owner: 'Hossam 3sar  ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245401/Abo_Sleim_fiwejl.jpg', owner: 'Abo sleim' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245462/UK_EYAD_s0rvvm.jpg', owner: 'uk_Eyad   ' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761245462/Eslam_Ufa_xs7i2t.jpg', owner: 'eslam ufa' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247042/mostafa_sho3la_fmsmvo.jpg', owner: 'Mostafa sho3la' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247044/esmail_lathi_iu3v1v.jpg', owner: 'eslam lathi' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247043/eyad_hany_tdptds.jpg', owner: 'eyad hany' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247045/youssef_sh3ban_zehlaw.jpg', owner: 'youssef sh3ban' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247044/soly_sayed_df4xvg.jpg', owner: 'Soly sayed' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247045/ahmed_hamada_jtll0n.jpg', owner: 'ahmed hamada' },
    { src: 'https://res.cloudinary.com/dd5zgwygh/image/upload/v1761247049/alaa_eldin_hamed_hfwyd5.jpg', owner: 'all eldin hamed' },
  ];

  const horizontal = [
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', owner: 'Omar Khaled' },
    { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop', owner: 'Lina Hassan' },
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop', owner: 'Ahmed Mostafa' }
  ];

  return (
    <section className={`${styles.royalParkSection} position-relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className={styles.bgPattern}></div>
      <div className={styles.gridOverlay}></div>
      
      {/* Animated Sparkles */}
      <div className={styles.sparkles}>
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.sparkle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 1000,
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-fluid position-relative z-2 py-4 py-md-5">
        {/* Hero Header Section */}
        <div className={styles.heroHeader} data-aos="fade-down" data-aos-duration="600">
          <motion.div 
            className={styles.dateStamp}
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className={styles.dateDay}>24</span>
            <span className={styles.dateMonth}>OCT</span>
            <span className={styles.dateYear}>2025</span>
          </motion.div>
          
          <div className={styles.titleWrapper}>
            <motion.h1 
              className={styles.pageTitle}
              animate={{ 
                textShadow: [
                  '0 0 30px rgba(255, 0, 0, 0.5)',
                  '0 0 60px rgba(255, 0, 0, 0.9)',
                  '0 0 30px rgba(255, 0, 0, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ROYAL PARK
            </motion.h1>
            <div className={styles.titleAccent}></div>
            <p className={styles.subtitle}>Elsheikh Zayed</p>
          </div>
        </div>

        {/* Cars Gallery - Mobile Gallery Style */}
        <div className={styles.carsGallery}>
          {/* Vertical Cars Section */}
          {vertical.map((car, index) => (
            <motion.div
              key={`vertical-${index}`}
              className={`${styles.carCardWrapper} ${styles.verticalCard}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.carCard}>
               
                
                <div className={styles.imageContainer}>
                  <motion.div className={styles.imageBorder}>
                    <img src={car.src} alt={car.owner} className={styles.carImage} />
                    
                    {/* Animated Corner Accents */}
                    <div className={styles.cornerTL}></div>
                    <div className={styles.cornerTR}></div>
                    <div className={styles.cornerBL}></div>
                    <div className={styles.cornerBR}></div>
                    
                    {/* Shine Effect */}
                    <motion.div 
                      className={styles.shine}
                      animate={{ x: [-300, 600] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.div>
                </div>

                {/* Owner Info Card */}
                <div className={styles.ownerCard}>
                  <div className={styles.ownerLabel}>OWNER</div>
                  <div className={styles.ownerName}>{car.owner}</div>
                  <div className={styles.ownerUnderline}></div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Horizontal Cars Section */}
          {horizontal.map((car, index) => (
            <motion.div
              key={`horizontal-${index}`}
              className={`${styles.carCardWrapper} ${styles.horizontalCard}`}
              data-aos="fade-up"
              data-aos-delay={(vertical.length + index) * 100}
              data-aos-duration="800"
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.carCard}>
                <div className={styles.cardNumber}>{String(vertical.length + index + 1).padStart(2, '0')}</div>
                
                <div className={styles.imageContainer}>
                  <motion.div className={styles.imageBorder}>
                    <img src={car.src} alt={car.owner} className={styles.carImage} />
                    
                    {/* Animated Corner Accents */}
                    <div className={styles.cornerTL}></div>
                    <div className={styles.cornerTR}></div>
                    <div className={styles.cornerBL}></div>
                    <div className={styles.cornerBR}></div>
                    
                    {/* Shine Effect */}
                    <motion.div 
                      className={styles.shine}
                      animate={{ x: [-300, 600] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.div>
                </div>

                {/* Owner Info Card */}
                <div className={styles.ownerCard}>
                  <div className={styles.ownerLabel}>OWNER</div>
                  <div className={styles.ownerName}>{car.owner}</div>
                  <div className={styles.ownerUnderline}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Lines & Shapes */}
      <motion.div 
        className={styles.floatingShape}
        style={{ top: '15%', left: '5%' }}
        animate={{ 
          rotate: 360,
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className={styles.floatingShape}
        style={{ bottom: '20%', right: '10%' }}
        animate={{ 
          rotate: -360,
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      <motion.div 
        className={styles.animatedLine}
        style={{ top: '30%' }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  )
}

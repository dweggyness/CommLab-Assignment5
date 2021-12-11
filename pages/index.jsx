import React, {useState, useRef, useEffect} from 'react';
import styles from '../styles/pages/Home.module.css'
import CloudsBG from '../components/CloudsBG.jsx'

export default function Home() {
  const scrollContainer = useRef();
  const nameContainer = useRef();
  const titleRef = useRef();

  const [lockTitle, setLockTitle] = useState(false);

  let nameContainerHeight = 0;

  const handleScroll = (e) => {
    const position = e.target.scrollTop;

    if (position > nameContainerHeight) {
      setLockTitle(true);
    } else {
      setLockTitle(false);
    }
  };

  useEffect(() => {
    if (nameContainer && titleRef) {
      const nameContainerTop = nameContainer.current.getBoundingClientRect().top;
      const titleTop = titleRef.current.getBoundingClientRect().top;
      const titleHeight = titleRef.current.getBoundingClientRect().height;
      nameContainerHeight = nameContainerTop - titleTop + titleHeight / 4 ;
    }

    if (scrollContainer) {
      scrollContainer.current.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        scrollContainer.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainer, nameContainer, titleRef]);

  return (
    <>
      <div style={{display: lockTitle ? 'none' : 'flex' }} className={styles.titleContainer}>
        <h1 ref={titleRef} className={styles.text}>Jun Ming</h1>
        <h3>Welcome to my website.</h3>
        
      </div>
      <div ref={scrollContainer} className={styles.parallax}>
        <CloudsBG />
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__1}`}>
            <img src="./images/citylayers/cityLayer5.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__2}`}>
            <img src="./images/citylayers/cityLayer4.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__3}`}>
            <img src="./images/citylayers/cityLayer3.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__4}`}>
            <img src="./images/citylayers/cityLayer2.png" />
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__5}`}>
            <img src="./images/citylayers/cityLayer1.png"/>
        </div>
        <div className={`${styles.parallax__layer} ${styles.parallax__layer__6}`}>
            <img src="./images/citylayers/cityLayer0.png"/>
        </div>
        <section className={styles.mainContainer}>
          <div ref={nameContainer} className={styles.nameContainer}>
            <h1 style={{display: lockTitle ? 'block' : 'none' }} className={styles.text}>
              Jun Ming
            </h1>
          </div>
        </section>
      </div>
    </>
  )
}

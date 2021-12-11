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

      console.log(nameContainer.current.getBoundingClientRect())
      console.log(titleRef.current.getBoundingClientRect())

      nameContainerHeight = nameContainerTop - titleTop + titleHeight / 8 ;
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
        <h1 ref={titleRef} className={styles.titleText}>Jun Ming</h1>
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
          <div ref={nameContainer} className={styles.headerContainer}>
            <h1 style={{display: lockTitle ? 'block' : 'none' }} className={styles.titleText}>
              Jun Ming
            </h1>
          </div>
          <div className={styles.aboutMe}>
            <p>
              Hello! I'm Jun. I'm a <span className={styles.highlight}>Malaysian</span> sophomore at NYU Abu Dhabi.
              Interested in CS & IM.
            </p>
            <p>
              Outside of computers, I enjoy a good session of gongfu-style <span className={styles.highlight}>tea</span> brewing.
              I also play a little bit of piano. Currently
              compiling a list of the best Asian food places in Abu Dhabi.
            </p>
            <p>
              Here is my <a href="#"><span className={styles.highlight}>resume</span></a>.
            </p>
          </div>
          <div className={`${styles.headerContainer} ${styles.workHeader}`}>
            <h1 className={styles.headerText}>Works</h1>
          </div>
        </section>
      </div>
    </>
  )
}

import styles from '../styles/pages/Home.module.css'
import ParallaxBG from '../components/ParallaxBG.jsx'
import CloudsBG from '../components/CloudsBG.jsx'

export default function Home() {
  return (
    <>
      <CloudsBG />
      <div className={styles.titleContainer}>
        <h1 className={styles.text}>Jun Ming</h1>
      </div>
      <ParallaxBG />
    </>
  )
}

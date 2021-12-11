import React, {useState, useEffect} from 'react';
import styles from '../styles/components/CloudsBG.module.css';

export default function CloudsBG() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

  }, [])

  return (
    <canvas ref={canvasRef}/>
  )
}

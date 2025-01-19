'use client'

import { useEffect, useRef } from "react";
import styles from './LaserCursor.module.css';

const LaserCursor = () => {
  const triangleRef = useRef(null);

  useEffect(() => {
    if (!triangleRef.current) return;

    // gets the circle fixed to center position
    const triangleElement = triangleRef.current;
    const triangleRect = triangleElement.getBoundingClientRect();
    const triangleCenter = {
      x: triangleRect.left + triangleRect.width / 2,
      y: triangleRect.top + triangleRect.height / 2,
    };

    // initialize variables
    const mouse = { x: 0, y: 0 };
    let currentScaleX = 1, currentScaleY = 1;
    let currentAngle = 0;
    // smoothing factor (0 = smoother, 1 = instant)
    const speed = 0.2;

    const updateMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    // start animation  
    window.addEventListener("mousemove", updateMouse);
    
    const tick = () => {
      const deltaX = mouse.x - triangleCenter.x;
      const deltaY = mouse.y - triangleCenter.y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const directionX = deltaX / distance || 0;
      const directionY = deltaY / distance || 0;

      // stretches the laser
      const scaleFactor = Math.min(distance / 50, 8); // max stretch at 8x
      const targetScaleX = 0.2; // keeps width small
      const targetScaleY = 1 + scaleFactor;

      // smooth scaling
      currentScaleX += (targetScaleX - currentScaleX) * speed;
      currentScaleY += (targetScaleY - currentScaleY) * speed;
      
      // laser rotation towards cursor
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      currentAngle += (angle - currentAngle) * speed;

      // Applies the transformation
      triangleElement.style.transform = `
        translate(-50%, -50%)
        rotate(${currentAngle}deg)
        scale(${currentScaleX}, ${currentScaleY})
      `;

      requestAnimationFrame(tick);
    };

    // starts animation loop
    tick();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return <div ref={triangleRef} className={styles.triangle} />;
};

export default LaserCursor;

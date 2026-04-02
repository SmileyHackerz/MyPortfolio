import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string | number;
  containerWidth?: string | number;
  imageHeight?: string | number;
  imageWidth?: string | number;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted Card Image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${rotateAmplitude}deg`, `-${rotateAmplitude}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${rotateAmplitude}deg`, `${rotateAmplitude}deg`]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: scaleOnHover }}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <div
        className="relative shadow-2xl rounded-2xl"
        style={{
          width: containerWidth,
          height: containerHeight,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 object-cover rounded-2xl"
          style={{
            width: imageWidth,
            height: imageHeight,
            transform: "translateZ(50px)",
          }}
        />
        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ transform: "translateZ(80px)" }}
          >
            {overlayContent}
          </motion.div>
        )}
      </div>
      {showTooltip && captionText && (
        <motion.div
          className="absolute -bottom-10 text-sm text-muted font-mono"
          style={{ transform: "translateZ(30px)" }}
        >
          {captionText}
        </motion.div>
      )}
    </motion.div>
  );
}

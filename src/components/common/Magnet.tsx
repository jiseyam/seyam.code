import React, { useRef, useState, useEffect } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  enableTilt3D?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  enableTilt3D = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Check if mouse is within element bounds + padding
      const minX = rect.left - padding;
      const maxX = rect.right + padding;
      const minY = rect.top - padding;
      const maxY = rect.bottom + padding;

      if (
        mouseX >= minX &&
        mouseX <= maxX &&
        mouseY >= minY &&
        mouseY <= maxY
      ) {
        const deltaX = (mouseX - centerX) / strength;
        const deltaY = (mouseY - centerY) / strength;

        setIsHovered(true);
        setPosition({ x: deltaX, y: deltaY });
      } else {
        if (isHovered) {
          setIsHovered(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("blur", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, [padding, strength, isHovered]);

  const rotX = enableTilt3D ? -position.y * 0.18 : 0;
  const rotY = enableTilt3D ? position.x * 0.18 : 0;
  const zDepth = isHovered && enableTilt3D ? 25 : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${position.x}px, ${position.y}px, ${zDepth}px)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

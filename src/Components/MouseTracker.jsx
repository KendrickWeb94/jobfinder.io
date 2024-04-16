import  { useState, useEffect } from 'react';


const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor " style={{ left: position.x, top: position.y }}>
      {/* Customize this div as per your requirements */}
      <div className='absolute w-[100px] cursor-blob h-[100px] bg-blue-300 blur-[50px] '></div>
      <div className='absolute w-[100px] cursor-blob h-[100px] bg-blue-500 blur-[90px] '></div>
    </div>
  );
};

export default CursorTracker;

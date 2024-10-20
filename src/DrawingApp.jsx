import React, { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import './App.css';

const DrawingApp = () => {
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState('draw');
  const canvasRef = useRef(null);  

  const exportCanvasAsJPEG = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.jpeg';
    link.click();
  };

  const exportCanvasAsPNG = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';
    link.click();
  };

  return (
    <div className="container">
      <Toolbar
        color={color}
        setColor={setColor}
        tool={tool}
        setTool={setTool}
        exportCanvasAsJPEG={exportCanvasAsJPEG}
        exportCanvasAsPNG={exportCanvasAsPNG}
      />
      <Canvas color={color} tool={tool} canvasRef={canvasRef} />
    </div>
  );
};

export default DrawingApp;

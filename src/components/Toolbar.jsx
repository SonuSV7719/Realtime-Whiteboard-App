import React from 'react';
import ColorPicker from './ColorPicker';

const Toolbar = ({ color, setColor, setTool, exportCanvasAsJPEG, exportCanvasAsPNG }) => {
  return (
    <div className="toolbar">
      <ColorPicker color={color} setColor={setColor} />
      
      <button onClick={() => setTool('draw')}>
        Freehand Drawing
      </button>
      
      <button onClick={() => setTool('eraser')}>
        Eraser
      </button>

      <button onClick={exportCanvasAsJPEG}>Export as JPEG</button>
      <button onClick={exportCanvasAsPNG}>Export as PNG</button>
    </div>
  );
};

export default Toolbar;

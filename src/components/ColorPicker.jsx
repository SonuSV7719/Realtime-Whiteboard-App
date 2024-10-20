import React from 'react';

const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="color-picker-container">
      <label>Pick a Color: </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;

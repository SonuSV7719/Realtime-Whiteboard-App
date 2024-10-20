import React, { useRef, useState, useEffect } from 'react';

const Canvas = ({ color, tool, canvasRef }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        canvas.width = 3000;
        canvas.height = 3000;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1;
    }, [canvasRef]);

    const startDrawing = (e) => {

        setIsDrawing(true);
        setStartPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    };

    const draw = (e) => {
        if (!isDrawing) return;

        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;

        if (tool === 'draw') {
            context.strokeStyle = color;
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(startPos.x, startPos.y);
            context.lineTo(x, y);
            context.stroke();
            setStartPos({ x, y });
        } else if (tool === 'eraser') {
            context.strokeStyle = '#FFFFFF'; 
            context.lineWidth = 20; 
            context.beginPath();
            context.moveTo(startPos.x, startPos.y);
            context.lineTo(x, y);
            context.stroke();
            setStartPos({ x, y });
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };


    return (
        <div className="canvas-container">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
};

export default Canvas;

import React, { useEffect, useRef, useState } from 'react';
import './Practice.css'

const Practice = () => {
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);
  const modelURL ='https://teachablemachine.withgoogle.com/models/s8f40PCZO/model.json';
  const metadataURL = 'https://teachablemachine.withgoogle.com/models/s8f40PCZO/metadata.json';
  const [isRunning, setIsRunning] = useState(false);

  let model, webcam, ctx, maxPredictions;

  const init = async () => {
    console.log('Initializing...')
    if (!window.tmPose) {
      console.error('tmPose is not loaded');
      return;
    }
    const tmPose = window.tmPose;

    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 400;
    const flip = true;
    webcam = new tmPose.Webcam(size, size, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext('2d');

    const labelContainer = labelContainerRef.current;
    labelContainer.innerHTML = ''; 
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'));
    }
    canvasRef.current.style.display = 'block';
  };
 
  const stop = async () => {
    if (webcam) {
      await webcam.stop();
    }
    setIsRunning(false);
    canvasRef.current.style.display = 'none';
  };
  
  const loop = async () => {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
    }

    drawPose(pose);
  };
  
  const drawPose = (pose) => {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0);
      if (pose) {
        const minPartConfidence = 0.5;
        window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  useEffect(() => {
    return () => {
        if (webcam) {
          webcam.stop();
        }
      };
    }, []);

  return (
    <div className="machine">
      <p>Now that you've learnt some new poses and exercises, ensure that you're practicing correctly! The application below uses Google's Teachable Machine, a machine learning tool, to detect and identify your pose. Press start to begin and stop when you're done.</p>
      <h1>Teachable Machine Pose Model</h1>
      <div className='button-container'>
        <button className="control" type="button" onClick={init}>
          Start
        </button>
        <button className="control" type="button" onClick={stop}>
          Stop
        </button>
      </div>
      <div className="view">
        <canvas ref={canvasRef} id="canvas"></canvas>
        <div ref={labelContainerRef} id="label-container">         
        </div>
      </div>
    </div>
  );
};

export default Practice;
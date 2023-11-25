import React, { useLayoutEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const SpeechToText = () => {
    
    var {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
      const startListening = () => SpeechRecognition.startListening({ language: 'vi-VN' });
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      const handleAdd = (e) => {
        document.querySelector('.ql-editor').innerHTML += transcript;
      }

    
      return (
        <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={SpeechRecognition.stopListening}
            onMouseUp={SpeechRecognition.stopListening}
          >
            Hold to talk
        </button>
            <p>{transcript}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
      );
}


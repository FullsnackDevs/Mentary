import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const SpeechToText = () => {
  var {
    transcript,
    // listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ language: "vi-VN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleAdd = (e) => {
    document.querySelector(".ql-editor").innerHTML += transcript;
  };

  return (
    <div className="py-4">
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
        className="blog-btn"
      >
        Hold to talk
      </button>
      <p className="py-2 pl-2">{transcript}</p>
      <button className="blog-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

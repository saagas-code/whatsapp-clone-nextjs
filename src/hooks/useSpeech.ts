import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface Props {
  text: string
  setText: (txt: string) => void
}

export const useSpeech = ({text, setText}: Props) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // set transcript to text when speech finish
  useEffect(() => {
    if(!listening) {
      setText(text + transcript)
      resetTranscript()
    }
  }, [listening])

  // abort speech when text change
  useEffect(() => {
    if(listening) {
      SpeechRecognition.abortListening()
    }
  }, [text])

  return (
    {
      transcript, listening, 
      resetTranscript, browserSupportsSpeechRecognition,
      SpeechRecognition
    }
  )
}
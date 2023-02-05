import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAttach } from 'react-icons/io';
import { FiMoreVertical } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';


import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);


interface Props {
  
}

export default function ChatWindow({}: Props) {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('');


  const handleEmojiClick = (e: any) => {
    setText(text + e.emoji)
  }

  const handleSend = () => {
    
  }

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
  
  const handleMic = async () => {
    if(listening) {
      SpeechRecognition.abortListening()
      return 
    }
    await SpeechRecognition.startListening({language: 'pt-br'})
  }

  return (
    <div className="flex flex-col h-[100%]">
      
      <div className="h-[60px] border-b-[1px] border-[#CCC] flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="w-[40px] h-[40px] rounded-full ml-[15px] mr-[15px]" />
          <div className="text-[17px] text-[#000]">
            Matheus Almeida
          </div>
        </div>

        
          <div className="text-[#919191] flex gap-4 mr-5">
            <AiOutlineSearch className="w-[25px] h-[25px] cursor-pointer" />
            <IoMdAttach className="w-[25px] h-[25px] cursor-pointer" />
            <FiMoreVertical className="w-[25px] h-[25px] cursor-pointer" />
          </div>
        
      </div>


      <div className="flex-1 overflow-y-auto bg-[#E5DDD5] bg-cover bg-size bg-top bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
        
      </div>

      {/* Emoji Picker Area */}
      <div 
        className={`${emojiOpen ? 'h-[250px]' : 'h-[0px]'} overflow-y-hidden `}
      >
        {emojiOpen && 
          <Picker 
          onEmojiClick={handleEmojiClick}
          searchDisabled
          skinTonesDisabled
          width={'auto'}
          
          />
        }
      </div>
      {/* --------------------------- */}

      <div className="h-[62px] flex items-center gap-2 px-2  overflow-hidden">

        <div className="flex cursor-pointer mx-2 gap-4 overflow-hidden" >
          <div className={`${emojiOpen ? 'w-[25px]' : 'w-[0px]'} overflow-hidden `}>
            <AiOutlineClose 
              onClick={() => setEmojiOpen(false)} 
            />
          </div>

          <BsEmojiSmile 
            onClick={() => setEmojiOpen(true)} 
            className={`${emojiOpen ? 'text-[#009688]' : ''} ml-[-8px]`}
          />
        </div>

        <div className="flex-1">
          <input 
            type="text"
            placeholder="Digite uma mensagem"
            onChange={e => setText(e.target.value)}
            value={text}
            className="w-full h-[40px] border-0 outline-0 bg-[#FFF] rounded-full text-[15px] text-[#4A4A4A] pl-[15px]" 
          />
        </div>

        <div className="flex cursor-pointer mx-2">
          {text === '' &&
            <BsFillMicFill 
              className={`${listening ? 'animate-pulse text-[#126ECE]' : ''}`} 
              onClick={handleMic} 
            />
          }

          {text !== '' &&
            <AiOutlineSend onClick={handleSend} />
          }
        </div>
      </div>
    </div>
  )
}
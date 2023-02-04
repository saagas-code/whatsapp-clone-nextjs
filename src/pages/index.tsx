
import { useState } from 'react';
import ChatList from '@src/components/ChatList';
import Header from '@src/components/Header';
import Search from '@src/components/Search';
import ChatIntro from '@src/components/ChatIntro';
import ChatWindow from '@src/components/ChatWindow';
const avatar = "https://www.w3schools.com/howto/img_avatar.png"


const list = [
  {
    id: 1,
    name: 'Matheus Almeida',
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    lastMsg: 'Opa, Tudo bem?',
    lastMsgTime: '19:00'
  },
  {
    id: 3,
    name: 'Matheus Almeida',
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    lastMsg: 'Opa, Tudo bem?',
    lastMsgTime: '19:00'
  },
  {
    id: 2,
    name: 'Matheus Almeida',
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    lastMsg: 'Opa, Tudo bem?',
    lastMsgTime: '19:00'
  },
]

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMsg: string;
  lastMsgTime: string
}



export default function Home() {
  const [chatList, setChatList] = useState<Chat[]>(list)
  const [activeChat, setActiveChat] = useState<Chat>();

  return (
    <div className="flex h-[100vh] bg-[#EDEDED]">

      {/* LEFT SIDE */}
      <div className="w-[35%] max-w-[415px] flex flex-col border-r-2 border-[#DDD]">
        
        <Header />

        <Search />

        <ChatList chatList={chatList} activeChat={activeChat}  setActiveChat={setActiveChat} />

      </div>


      {/* RIGHT SIDE */}
      <div className="flex-1">
        {activeChat &&
          <ChatWindow />
        }

        {!activeChat &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}
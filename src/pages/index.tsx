
import { useState } from 'react';
import ChatList from '@src/components/ChatList';
import Header from '@src/components/Header';
import Search from '@src/components/Search';
import ChatIntro from '@src/components/ChatIntro';
import ChatWindow from '@src/components/ChatWindow';
import { NewChat } from '@src/components/NewChat';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '@src/utils/withSSRGuest';
import { setupAPIClient } from '@src/services/api';


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
  const [showNewChat, setShowNewChat] = useState(true);
  
  return (
    <div className="flex h-[100vh] bg-[#EDEDED]">

      {/* LEFT SIDE */}
      <div className="w-[35%] max-w-[415px] flex flex-col border-r-2 border-[#DDD]">
        <NewChat show={showNewChat} setShow={setShowNewChat} />
        
        <Header setShowNewChat={setShowNewChat} />

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

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})
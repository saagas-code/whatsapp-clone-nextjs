
import { useState } from 'react';
import FriendList from '@src/components/FriendList';
import Header from '@src/components/Header';
import Search from '@src/components/Search';
import Chat from '@src/components/ChatIntro';
import ChatIntro from '@src/components/ChatIntro';



export default function Home() {
  const [chatList, setChatList] = useState([{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},])
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="flex h-[100vh] bg-[#EDEDED]">

      {/* LEFT SIDE */}
      <div className="w-[35%] max-w-[415px] flex flex-col border-r-2 border-[#DDD]">
        
        <Header />

        <Search />

        <FriendList chatList={chatList} />

      </div>


      {/* RIGHT SIDE */}
      <div className="flex-1">
        <ChatIntro />
      </div>
    </div>
  )
}
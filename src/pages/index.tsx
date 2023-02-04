import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';


const avatar = "https://www.w3schools.com/howto/img_avatar.png"

export default function Home() {
  return (
    <div className="flex h-[100vh] bg-[#EDEDED]">
      <div className="w-[35%] max-w-[415px] flex flex-col border-r-2 border-[#DDD]">
        
        <header className="h-[60px] py-0 px-[15px] flex justify-between items-center">
          <img src={avatar} alt="" className="w-[40px] h-[40px] cursor-pointer rounded-full" />
          <div className="flex">
            <div className="text-[#919191] flex gap-4 items-center align-middle">
              <MdDonutLarge className="h-[25px] w-[25px]" />
              <BsFillChatLeftTextFill className="h-[25px] w-[25px]" />
              <FiMoreVertical className="h-[25px] w-[25px]" />
            </div>
          </div>
        </header>


        <div className="bg-[#F6F6F6] border-b-[1px] border-[#EEE] py-[5px] px-[15px]"> 
          <div className="flex bg-[#FFF] h-[40px] rounded-[20px] items-center px-[10px]"> 
            <AiOutlineSearch className="h-[25px] w-[25px] text-[#919191]" />
            <input 
              type="search" 
              placeholder={"Procurar ou comecar uma nova conversa"} 
              className="flex-1 border-0 outline-0 bg-transparent ml-[10px]"
            />
          </div>
        </div>

        <div className="">
          chatlist
        </div>
      </div>
      <div className="">
        ...
      </div>
    </div>
  )
}
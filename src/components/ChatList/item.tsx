import { Chat } from "@src/pages"

const avatar = "https://www.w3schools.com/howto/img_avatar.png"

interface Props {
  chat: Chat
  active?: boolean
}

export default function ChatItem({chat, active}: Props) {
  return (
    <div className={`flex cursor-pointer items-center h-[70px] pl-[15px] hover:bg-[#F5F5F5] ${active ? 'bg-[#EBEBEB]' : ''}`}>
      <img 
        src={chat.avatar} 
        alt="chat avatar" 
        className="w-[50px] h-[50px] rounded-full mr-[15px]" 
      />

      <div className="h-[100%] flex-1 flex flex-col justify-center border-b-[1px] border-[#EEE] pr-[15px] flex-wrap min-w-0">
        
        <div className="flex justify-between items-center w-full">
          <div className="text-[17px] text-[#000]">
            {chat.name}
          </div>
          <div className="text-[12px] text-[#999]">
            {chat.lastMsgTime}
          </div>
        </div>

        <div className="flex justify-between items-center w-full ">
          <div className="text-[14px] text-[#999] flex w-full">
            <p 
              className="truncate"
            >
              {chat.lastMsg}
            </p>
          </div>
        </div>
      </div>

    </div>  
  )
}
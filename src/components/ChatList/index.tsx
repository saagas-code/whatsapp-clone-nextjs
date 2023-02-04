import { Chat } from "@src/pages"
import ChatItem from "./item"

interface Props {
  chatList: Chat[]
  activeChat: Chat | undefined
  setActiveChat: (chat: Chat) => void
}

export default function ChatList({chatList, activeChat, setActiveChat}: Props) {
  return (
    <div className="flex-1 bg-[#FFF] overflow-y-auto">

      {chatList.map((i, k) => (

        <div key={k} className="" onClick={() => setActiveChat(i)}>
          <ChatItem chat={i} active={activeChat != undefined && activeChat.id === i.id} />
        </div>

      ))}

    </div>
  )
}
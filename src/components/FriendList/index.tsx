import ChatItem from "./item"

interface Props {
  chatList: any
}

export default function FriendList({chatList}: Props) {
  return (
    <div className="flex-1 bg-[#FFF] overflow-y-auto">

      {chatList.map((i: any, k: any) => (

        <div key={k} className="">
          <ChatItem />
        </div>

      ))}

    </div>
  )
}
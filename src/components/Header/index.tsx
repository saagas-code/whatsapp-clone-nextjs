import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { Icon } from '../Icons';

const avatar = "https://www.w3schools.com/howto/img_avatar.png"

interface Props {
  setShowNewChat: (x: boolean) => void
}

export default function Header({setShowNewChat}: Props) {

  const OpenNewChat = () => {
    setShowNewChat(true)
  }
  return (
    <header className="h-[60px] py-0 px-[15px] flex justify-between items-center">
      <img src={avatar} alt="" className="w-[40px] h-[40px] cursor-pointer rounded-full" />
      <div className="flex">
        <div className="flex gap-4 items-center align-middle ">
          <Icon>
            <MdDonutLarge className="h-[25px] w-[25px]" />
          </Icon>
          
          <Icon>
            <BsFillChatLeftTextFill onClick={() => OpenNewChat()} className="h-[25px] w-[25px]" />
          </Icon>

          <Icon>
            <FiMoreVertical className="h-[25px] w-[25px]" />
          </Icon>
        </div>
      </div>
    </header>
  )
}
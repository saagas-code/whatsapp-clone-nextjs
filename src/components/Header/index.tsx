import { MdDonutLarge } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';

const avatar = "https://www.w3schools.com/howto/img_avatar.png"

export default function Header() {
  return (
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
  )
}
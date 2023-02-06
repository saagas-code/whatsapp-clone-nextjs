import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const avatar = "https://www.w3schools.com/howto/img_avatar.png"

interface Props {
  show: boolean
  setShow: (x: boolean) => void
}

export const NewChat = ({show, setShow}: Props) => {
  const [list, setList] = useState([
    {id: '123', avatar: avatar, name: 'test'},
    {id: '123', avatar: avatar, name: 'test'},
    {id: '123', avatar: avatar, name: 'test'},
    {id: '123', avatar: avatar, name: 'test'},
  ])

  return (
    <div className={`w-[35%] max-w-[415px] fixed left-0 top-0 bottom-0 bg-[#FFF] flex flex-col border-r-[1px] border-[#DDD] transition-all duration-500 ${show ? 'left-[0px]' : 'left-[-415px]'}`}>
      <div onClick={() => setShow(false)} className="flex bg-[#00BFA5] items-center px-[15px] pt-[60px] pb-[15px]">
        
        <div className="w-[40px] h-[40px] flex content-center items-center cursor-pointer">
          <BiArrowBack className="text-[#FFF] text-2xl" />
        </div>

        <div className="text-[19px] h-[40px] leading-[40px] flex-1 font-bold text-[#FFF] ml-[20px]">
          Nova Conversa
        </div>
      </div>


      <div className="flex-1 overflow-y-auto ">

        {list.map((i, k) => (
          <div key={k} className="flex items-center p-[15px] cursor-pointer hover:bg-[#F5F5F5]">
            <img src={i.avatar} className="w-[50px] h-[50px]" alt="" />
            <div className="text-[#000] text-[17px]">
              {i.name}
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}
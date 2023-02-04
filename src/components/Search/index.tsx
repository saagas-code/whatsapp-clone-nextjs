import { AiOutlineSearch } from 'react-icons/ai';


export default function Search() {
  return (
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
  )
}
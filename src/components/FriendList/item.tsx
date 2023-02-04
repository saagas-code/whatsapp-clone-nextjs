const avatar = "https://www.w3schools.com/howto/img_avatar.png"

export default function ChatItem() {
  return (
    <div className="flex cursor-pointer items-center h-[70px] ml-[15px] hover:bg-[#F5F5F5]">
      <img 
        src={avatar} 
        alt="" 
        className="w-[50px] h-[50px] rounded-full mr-[15px]" 
      />

      <div className="h-[100%] flex-1 flex flex-col justify-center border-b-[1px] border-[#EEE] pr-[15px] flex-wrap min-w-0">
        
        <div className="flex justify-between items-center w-full">
          <div className="text-[17px] text-[#000]">
            Matheus Almeida
          </div>
          <div className="text-[12px] text-[#999]">
            19:00
          </div>
        </div>

        <div className="flex justify-between items-center w-full ">
          <div className="text-[14px] text-[#999] flex w-full">
            <p 
              className="truncate"
            >
              Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?Opa, Tudo bem?
            </p>
          </div>
        </div>
      </div>

    </div>  
  )
}
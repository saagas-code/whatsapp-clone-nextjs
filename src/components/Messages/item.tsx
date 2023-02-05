


interface Props {
  data: any
}

const user = '1'

export const MessageItem = ({data}: Props) => {

  const CorrectSide = () => {
    return user === data.author ? 'justify-end' : 'justify-start'
  }

  const CorrectColor = () => {
    return user === data.author ? 'bg-[#DCF8C6]' : 'bg-[#FFF]'
  }

  return (
    <div className={`mb-[10px] flex  ${CorrectSide()}`}>
      	<div className={`bg-[#FFF] rounded-[10px] shadow-sm shadow-[#CCC] flex flex-col p-[3px] max-w-[90%] ${CorrectColor()}`}>
          <div className="text-[14px] my-[5px] mr-[40px] ml-[5px] ">
            Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou Alou 
          </div>
          <div className="text-[11px] text-[#999] mr-[5px] text-right h-[15px] mt-[-15px]">
            19:00
          </div>
        </div>
    </div>
  )
}
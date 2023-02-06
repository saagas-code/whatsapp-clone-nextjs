

interface Props {
  children: React.ReactNode
  h?: string;
  w?: string
}

export const Icon = ({children, h, w}: Props) => {
  return (
    <div 
      className={`
      text-[#919191] 
      [&>*]:w-[${w ? w : '25px'}] 
      [&>*]:h-[${h ? h : '25px'}] 
      cursor-pointer`
      }
    >
      {children}
    </div>
  )
}
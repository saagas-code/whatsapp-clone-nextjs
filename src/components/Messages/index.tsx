import { useEffect, useRef } from 'react';
import { MessageItem } from './item';

interface Props {
  list: any[]
}

export const Messages = ({list}: Props) => {

  const body = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const current = body.current
    if(current) {
      if(current.scrollHeight > current.offsetHeight) {
        current.scrollTop = current.scrollHeight - current.offsetHeight
      }
    }
  }, [list])

  return (
    <div ref={body} className="flex-1 overflow-y-auto py-[20px] px-[30px] bg-[#E5DDD5] bg-cover bg-size bg-top bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
      {list.map((i: any, k: any) => (
        <MessageItem data={i} />
      ))}
    </div>
  )
}

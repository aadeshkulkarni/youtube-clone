import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/slice/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const Watch = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-5">
        <div className="w-[1200px]">
          <iframe className="rounded-lg" width="1200" height="800" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  )
}

export default Watch
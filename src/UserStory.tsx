import React from 'react'
import { TUserStory } from './types/Story'

export default function UserStory({ id, name, username, stories, displayPicture }: TUserStory) {
    return (
        <div className=' w-16 p-1 flex flex-col gap-4 justify-center items-center cursor-pointer'>
            <img src={displayPicture} alt={name + 'Display Picture'} className='size-14 rounded-full' />
            <p className='text-gray-700 font-light text-sm truncate w-full '>{username}</p>
        </div>
    )
}

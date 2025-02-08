import React from 'react'
import { TStory, TUserStory } from './types/Story'

export interface IUserStory {
    handleModal: (open: boolean) => void,
    id: number,
    username: string,
    name: string;
    displayPicture: string;
    stories: TStory[]

}

export default function UserStory({ id, name, username, stories, displayPicture, handleModal }: IUserStory) {
    return (
        <div className=' w-16 p-1 flex flex-col gap-4 justify-center items-center cursor-pointer' onClick={() => handleModal(true)}>
            <img src={displayPicture} alt={name + 'Display Picture'} className='size-14 rounded-full' />
            <p className='text-gray-700 font-light text-sm truncate w-full '>{username}</p>
        </div>
    )
}

import { TStory } from '../types/Story'
import { useNavigate } from 'react-router';

export interface IUserStory {
    id: string,
    username: string,
    name: string;
    displayPicture: string;
    stories: TStory[]

}

export default function UserStory({ name, username, stories, displayPicture }: IUserStory) {
    const navigate = useNavigate()

    const handleNavigate = (userName: string,) => {
        if (userName === "You" && stories.length === 0) {
            return
        } else {
            navigate(`/stories/${username}/${stories[0].id}`)
        }
    }

    return (
        <div className=' w-16 p-1 flex flex-col gap-4 justify-center items-center cursor-pointer user-story' onClick={() => handleNavigate(name)}>
            <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 size-16 rounded-full p-0.5'>
                <img src={displayPicture} alt={name + 'Display Picture'} className=' rounded-full h-full w-full' />
            </div>
            <p className='text-gray-700 font-light text-sm truncate w-full '>{username}</p>
        </div>
    )
}

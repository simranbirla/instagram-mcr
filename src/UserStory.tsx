import { TStory } from './types/Story'
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

    return (
        <div className=' w-16 p-1 flex flex-col gap-4 justify-center items-center cursor-pointer' onClick={() => navigate(`/stories/${username}/${stories[0].id}`)}>
            <img src={displayPicture} alt={name + 'Display Picture'} className='size-14 rounded-full' />
            <p className='text-gray-700 font-light text-sm truncate w-full '>{username}</p>
        </div>
    )
}

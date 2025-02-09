import { useState } from 'react'
import mockData from '../utils/data'
import { TUserStory } from '../types/Story';
import UserStory from './UserStory';

export default function Stories() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stories, _setStories] = useState<TUserStory[]>(mockData);

    return (
        <div className='min-h-[100vh] w-100vw bg-white p-8'>
            <div className='flex gap-4 overflow-x-auto scroll-smooth story-scrollbar user-stories'>
                {stories.map(s => {
                    return <UserStory {...s} key={s.id} />
                })}
            </div>
        </div>
    )
}

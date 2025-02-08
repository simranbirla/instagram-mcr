import React, { useState } from 'react'
import mockData from './data'
import { TUserStory } from './types/Story';
import UserStory from './UserStory';
import Modal from './Modal';

export default function Stories() {
    const [stories, setStories] = useState<TUserStory[]>(mockData);

    return (
        <div className='flex gap-4'>
            {stories.map(s => {
                return <div key={s.id}><UserStory {...s} /></div>
            })}
            <Modal />
        </div>
    )
}

import { Heart, Send } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router'
import mockData from './data';
import { TStory, TUserStory, } from './types/Story';

export default function Story() {
    const [story, setStory] = useState<TStory | null>(null)
    const [user, setUser] = useState<TUserStory | null>(null)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const path = useParams();

    useEffect(() => {

        if (user) {
            const findStory = user?.stories.find(st => st.id === path.storyId)

            if (!findStory) {
                setError(true)
            }

            setStory(findStory as TStory)
        }

    }, [path.storyId, user])


    useEffect(() => {
        const findUserData = mockData.find(user => user.username === path.username);

        if (!findUserData) {
            setError(true)
        }

        setUser(findUserData as TUserStory)
    }, [path.username])


    useEffect(() => {
        if (user && story) {
            setTimeout(() => {
                if (user?.stories[user.stories.length - 1].id === story?.id) {
                    navigate("/")
                } else {
                    const findIndex = user?.stories.findIndex(st => st.id === story?.id)
                    const nextStoryId = user.stories[findIndex + 1].id

                    console.log(nextStoryId, findIndex)
                    navigate(`/stories/${user.username}/${nextStoryId}`)
                }
            }, 5000)
        }
    }, [user, story])


    if (!story || !user || error) {
        return <div>
            Loading
        </div>
    }


    return (
        <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-500 text-white text-2xl`}>

            <div className='w-[85%] h-[80%] relative rounded-2xl'>
                <div className='absolute top-2 right-4 font-bold cursor-pointer' onClick={() => navigate('/')}>
                    X
                </div>
                <div className='flex gap-3 absolute top-2 left-2 items-center'>
                    <img src={user?.displayPicture} className='rounded-full size-8' alt={user?.name} />
                    <p className='text-sm'>name</p>
                    <p className='text-sm text-gray-600 font-bold'>56 min</p>
                </div>
                <img src={story.photo} className='w-full h-full rounded-xl' alt="modal-image" />
                <div className="flex gap-2 items-center justify-center mt-2" >
                    <input type="text" placeholder={`Reply to ${user?.username}`} className="border-white rounded-4xl p-2 text-sm w-[60%]" />
                    <Heart className="size-4 cursor-pointer" />
                    <Send className="size-4 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

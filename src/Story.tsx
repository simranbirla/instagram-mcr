import { Heart, Loader2, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router'
import mockData from './data';
import { TStory, TUserStory, } from './types/Story';

export default function Story() {
    const [story, setStory] = useState<TStory | null>(null)
    const [user, setUser] = useState<TUserStory | null>(null)
    const [error, setError] = useState(false)
    const [progress, setProgress] = useState(0);
    const startTimeRef = useRef<number | null>(null);
    const requestRef = useRef<number | null>(null);
    const elapsedTimeRef = useRef(0);

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


    const nextStory = (userData: TUserStory, storyData: TStory) => {
        setStory(null)
        if (userData?.stories[userData.stories.length - 1].id === storyData?.id) {
            setUser(null)
            const nextUserIndex = (mockData.findIndex(u => u.username === userData.username)) + 1;

            if (nextUserIndex === mockData.length) {
                navigate("/")
            } else {
                const nextStoryId = mockData[nextUserIndex].stories[0].id
                const nextUsername = mockData[nextUserIndex].username;

                navigate(`/stories/${nextUsername}/${nextStoryId}`)
            }
        } else {
            const findIndex = userData?.stories.findIndex(st => st.id === storyData?.id)
            const nextStoryId = userData.stories[findIndex + 1].id
            navigate(`/stories/${userData.username}/${nextStoryId}`)
        }
    }

    const prevStory = (userData: TUserStory, storyData: TStory) => {
        setStory(null)
        if (user?.stories[0].id === storyData.id) {
            setUser(null)
            const prevUserIndex = (mockData.findIndex(u => u.username === userData.username)) - 1;

            if (prevUserIndex < 0) {
                navigate("/")
            } else {
                const prevStoryId = mockData[prevUserIndex].stories[(mockData[prevUserIndex].stories.length) - 1].id
                const prevUsername = mockData[prevUserIndex].username;

                navigate(`/stories/${prevUsername}/${prevStoryId}`)
            }
        } else {
            const findIndex = userData?.stories.findIndex(st => st.id === storyData?.id)
            const prevStoryId = userData.stories[findIndex - 1].id
            navigate(`/stories/${userData.username}/${prevStoryId}`)
        }
    }


    useEffect(() => {
        let storyTimeout: number | undefined;
        if (user && story) {
            storyTimeout = setTimeout(() => {
                nextStory(user, story)
            }, 5000)
        }

        return () => {
            clearTimeout(storyTimeout)
        }
    }, [user, story])


    const handleNext = () => {
        if (user && story) {
            nextStory(user, story)
        }
    }


    const handlePrevious = () => {
        if (user && story) {
            prevStory(user, story)
        }
    }


    useEffect(() => {
        startProgress();

        return () => cancelAnimationFrame((requestRef.current as number));
    }, [story]);

    const startProgress = () => {
        startTimeRef.current = performance.now() - elapsedTimeRef.current;
        updateProgress();
    };

    const updateProgress = () => {
        const elapsedTime = performance.now() - (startTimeRef.current as number);
        const progressPercent = Math.min((elapsedTime / 5000) * 100, 100);

        setProgress(progressPercent)

        if (progressPercent < 100) {
            requestRef.current = requestAnimationFrame(updateProgress);
        }
    };

    return (
        <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-800 text-white text-2xl`}>
            {(!story || !user || error) ?
                <div className='w-[85%] h-[80%] flex justify-center items-center rounded-2xl bg-gray-700'>
                    <Loader2 className='size-16 animate-spin' />
                </div>
                : <div className='w-[85%] h-[80%] relative rounded-2xl'>
                    <div className='absolute top-2 right-4 font-bold cursor-pointer z-20' onClick={() => navigate('/')}>
                        X
                    </div>
                    <div className='flex gap-3 absolute top-2 left-2 items-center'>
                        <img src={user?.displayPicture} className='rounded-full size-8' alt={user?.name} />
                        <p className='text-sm'>{user.username}</p>
                        <p className='text-sm text-gray-600 font-bold'>56 min</p>
                    </div>

                    {/**Progress Bar */}
                    <div className='absolute top-11 w-full left-0 h-1 bg-black opacity-65'>
                        <div className={`h-full bg-white `} style={{ width: `${progress}%` }}></div>
                    </div>

                    <div className='w-[40%] absolute h-full top-0 left-0' onClick={() => handlePrevious()}></div>
                    <img src={story.photo} className='w-full h-full rounded-xl' alt="modal-image" />
                    <div className='w-[40%] absolute h-full top-0 right-0' onClick={() => handleNext()}></div>
                    <div className="flex gap-2 items-center justify-center mt-2" >
                        <input type="text" placeholder={`Reply to ${user?.username}`} className="border-white border-2 rounded-4xl p-2 text-sm w-[60%]" />
                        <Heart className="size-4 cursor-pointer" />
                        <Send className="size-4 cursor-pointer" />
                    </div>
                </div>}

        </div>
    )
}

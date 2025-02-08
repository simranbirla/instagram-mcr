import React from 'react'

export default function Modal() {
    return (
        <div className='absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-gray-500 text-white text-2xl'>
            <div className='absolute top-6 right-12 font-bold cursor-pointer'>
                X
            </div>
            <div className='w-[80%] h-[80%] relative rounded-2xl'>
                <div className='flex gap-3 absolute top-2 left-2 items-center'>
                    <img src={'https://cdn.pixabay.com/photo/2023/01/18/10/39/ai-generated-7726481_1280.jpg'} className='rounded-full size-8' />
                    <p className='text-sm'>name</p>
                    <p className='text-sm text-gray-600 font-bold'>56 min</p>
                </div>
                <img src={'https://cdn.pixabay.com/photo/2023/01/18/10/39/ai-generated-7726481_1280.jpg'} className='w-full h-full rounded-2xl' alt="modal-image" />
            </div>
        </div>
    )
}

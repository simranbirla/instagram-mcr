import { Heart, Send } from "lucide-react"

export interface IModal {
    open: boolean
    onChange: (isOpen: boolean) => void
}

export default function Modal({ open, onChange, }: IModal) {

    return (
        <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] ${open ? 'flex' : 'hidden'} justify-center items-center bg-gray-500 text-white text-2xl`}>

            <div className='w-[85%] h-[80%] relative rounded-2xl'>
                <div className='absolute top-2 right-4 font-bold cursor-pointer' onClick={() => onChange(false)}>
                    X
                </div>
                <div className='flex gap-3 absolute top-2 left-2 items-center'>
                    <img src={'https://cdn.pixabay.com/photo/2023/01/18/10/39/ai-generated-7726481_1280.jpg'} className='rounded-full size-8' />
                    <p className='text-sm'>name</p>
                    <p className='text-sm text-gray-600 font-bold'>56 min</p>
                </div>
                <img src={'https://cdn.pixabay.com/photo/2023/01/18/10/39/ai-generated-7726481_1280.jpg'} className='w-full h-full rounded-xl' alt="modal-image" />
                <div className="flex gap-2 items-center justify-center mt-2" >
                    <input type="text" placeholder={`Reply to`} className="border-white rounded-4xl p-2 text-sm w-[60%]" />
                    <Heart className="size-4 cursor-pointer" />
                    <Send className="size-4 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

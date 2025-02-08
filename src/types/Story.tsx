export type TUserStory = TUser & {
    stories: TStory[]
}


export type TUser = {
    id: string,
    username: string,
    name: string;
    displayPicture: string;
}

export type TStory = {
    photo: string;
    id: string
    createdAt: string;
}
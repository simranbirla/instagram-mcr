export type TUserStory = {
    id: number,
    username: string,
    name: string;
    displayPicture: string;
    stories: TStory[]
}


export type TStory = {
    photo: string;
    createdAt: string;
}
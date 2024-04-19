import { FC } from "react";

interface ItemDisplayBubbleProps{
    title: string;
    description: string;
    url: string;
}

export const ItemDisplayBubbleProps: FC<ItemDisplayBubbleProps> = ({title, description, url}) => {
    return(
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{url}</p>
        </div>
    )
}
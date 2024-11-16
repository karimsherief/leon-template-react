import { IconType } from "react-icons";

export interface SingleFeatureProps {
    Icon: IconType;
    Title: string;
    Body: string;
    Delay: number;
};

export interface ProjectProps {
    image: string;
    title: string;
    body: string;
    delay: number;
};

export interface SingleServiceProps {
    Icon: IconType;
    Title: string;
    Body: string;
    Delay: number;
};

export interface SpecialTitleProps {
    title: string;
    body: string;
};
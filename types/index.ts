import { title } from "process";
import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchFlavorProps {
    flavor: string;
    setFlavor: (flavor: string) => void;
}

export interface FlavorProps {
    id: number,
    name: string;
    descripcion: string;
    imagen: string;
}

export interface FilterProps {
    name: string;
    descripcion?: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
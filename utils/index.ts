import axios from 'axios'
import flavors from '../constants/flavors.json';
import { FilterProps, FlavorProps } from '@/types';

const options = {
    method: 'GET',
    url: './flavors.json',
    params: {name: 'Frutilla'}
};

// try {
//     const response = await .request(options);
//     console.log(response.data);
    
// } catch (error) {
//     console.log(error);
    
// };

export const fetchFlavors = async (filters: FilterProps) => {
    const { name, descripcion } = filters;
    
    return flavors;
};
export const generateFlavorImageUrl = (flavor: FlavorProps, angle?: string) => {

}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    
    return newPathname
}




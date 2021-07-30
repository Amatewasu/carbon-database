import fs from 'fs';
import path from 'path';

const electrictyDirectory = path.join(process.cwd(), 'public/data/electricity');

export interface Subdata {
    title: string;
    originalTitle: string;
    value: number;
    unit: string;
}

export interface Link {
    href: string;
    lang: string;
}

export interface ElectricityData {
    id: string;
    idProvider?: string;
    title: string;
    originalTitle: string;
    comment: string;
    originalComment: string;
    value: number;
    unit: string;
    subdata: Subdata[];
    uncertainty: string;
    country: string;
    link: Link;
    dateStartValidity: string;
    dateEndValidity: string;
    provider: string;
}

export function getElectricityData(): ElectricityData[] {
    const filenames = fs.readdirSync(electrictyDirectory);
    const allElectricityData = filenames.map((filename) => {
        const fullPath = path.join(electrictyDirectory, filename);
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        const json = JSON.parse(fileContent);

        return json;
    });

    return allElectricityData.flat();
}
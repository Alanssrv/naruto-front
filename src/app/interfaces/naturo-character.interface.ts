export interface NarutoCharacter {
    id: number;
    name: string;
    rank: string;
    power: number;
    profile_image: string;
    summary: string;
    village: Village;
    father: Parent | null;
    mother: Parent | null;
    jutsus: Jutsu[];
    images: Image[];
}

interface Village {
    id: number;
    name: string;
}

interface Parent {
    id: number;
    name: string;
}

interface Jutsu {
    id: number;
    name: string;
    type: string;
    power: number;
    description: string;
    character_id: number;
}

interface Image {
    image_url: string;
    image_type: string;
    character_id: number;
    id: number;
}
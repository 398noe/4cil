import { Strapi, StrapiAttributes, StrapiData } from "../types/strapi";

type WordItems = {
    [key: string]: string;
}

interface WordAttributes extends StrapiAttributes {
    list: WordItems;
}

interface WordData extends StrapiData {
    attributes: WordAttributes;
}

interface Word extends Strapi {
    data: WordData;
}

export type Methods = {
    get: {
        reqHeaders: {
            Authorization?: string,
        }
        resBody: Word
    }
}
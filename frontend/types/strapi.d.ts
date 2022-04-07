export interface StrapiAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}

export interface StrapiData {
    id: number;
    attributes: StrapiAttributes;
}

export interface Strapi {
    data: StrapiData;
    meta: Object;
}

export interface Strapis {
    data: Array<StrapiData>;
    meta: Object;
}
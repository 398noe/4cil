import { StrapiAttributes, StrapiData, Strapis } from "../types/strapi";

export interface LicenseItem {
    description: string;
    level: number;
    permission: string;
}


interface LicensesAttributes extends StrapiAttributes {
    description: string;
    level: number;
    permission: string;
}

interface LicensesData extends StrapiData {
    attributes: LicensesAttributes;
}

interface Licenses extends Strapis {
    data: Array<LicensesData>;
}

export type Methods = {
    get: {
        reqHeaders: {
            Authorization?: string,
        }
        resBody: Licenses
    }
}
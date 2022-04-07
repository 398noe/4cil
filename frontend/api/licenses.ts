import { Strapi, StrapiAttributes, StrapiData } from "../types/strapi";

interface LicensesAttributes extends StrapiAttributes {
    description: string;
    level: number;
    permission: string;
}

interface LicensesData extends StrapiData {
    attributes: LicensesAttributes;
}

interface Licenses extends Strapi {
    data: LicensesData;
}

export type Methods = {
    get: {
        reqHeaders: {
            Authorization?: string,
        }
        resBody: Licenses
    }
}
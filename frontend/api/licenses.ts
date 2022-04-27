export interface LicenseItem {
    description: string;
    level: number;
    allow: string;
    disallow: string;
}

export type LicenseItems = Array<LicenseItem>;
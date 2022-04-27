import { LicenseItems } from "../api/licenses";
import { Level } from "../types/level";
import { licenseData } from "./licenseData";

export const getLicenseData = (level: Level): LicenseItems => {
    // Get All LicenseData
    const licenses = licenseData;

    // Rebuild LicenseData
    let res: LicenseItems = [];
    for (let i = 0; i < level.length; i++) {
        licenses.filter((data => data.level == level[i])).map((data) => {
            res.push(data);
        });
    }
    return res;
}


export const getAllLicenseData = (): LicenseItems => {
    return licenseData;
}
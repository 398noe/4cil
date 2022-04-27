import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { LicenseItems } from "../../../types/licenses";
import { Level } from "../../../types/level";
import { getLicenseData } from "../../../utils/getLicenseData";
import { urlCheck } from "../../../utils/urlCheck";
import { generateHTML } from "../../../utils/generateHTML";
import { generateImage } from "../../../utils/generateImage";
import { Viewport } from "puppeteer-core";

const createOgp = async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {

    /**
     * Level check
     */
    const { dynamic } = req.query;
    const link: string = (String(dynamic) + "xxxx").slice(0, 4);
    const regex = new RegExp("n[0-7]c[0-7]");
    let level: Level = [0, 0];
    if (urlCheck(link, regex)) {
        level = [Number(link.slice(1, 2)), Number(link.slice(3, 4))];
    } else {
        res.status(404).send("Not found");
        res.end();
    }

    // Get LicenseData
    const licenses: LicenseItems = getLicenseData(level);

    try {
        const html = await generateHTML(level, licenses);

        // View Port setting
        const viewport: Viewport = { width: 1200, height: 630 };
        const image = await generateImage(viewport, html);

        // Content Type
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/png");
        // Vercel Edge Networkのキャッシュを利用するための設定
        res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
        res.end(image);
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end("Internal Error");
        console.error(error);
    }
};

export default createOgp;
import { createCanvas, registerFont } from "canvas";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { LicenseItems } from "../../../api/licenses";
import { Level } from "../../../types/level";
import { getLicenseData } from "../../../utils/getLicenseData";
import { urlCheck } from "../../../utils/urlCheck";

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
    let level: Level = [0,0];
    if (urlCheck(link, regex)) {
        level = [Number(link.slice(1, 2)), Number(link.slice(3, 4))];
    } else {
        res.status(404).send("Not found");
        res.end();
    }
    
    // Get LicenseData
    const licenses: LicenseItems = getLicenseData(level);

    const WIDTH = 1200 as const;
    const HEIGHT = 630 as const;
    const DX = 0 as const;
    const DY = 0 as const;
    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFF";
    ctx.fillRect(DX, DY, WIDTH, HEIGHT);

    registerFont(path.resolve("./fonts/NotoSansJP-Black.otf"), {
        family: "Noto Black"
    });
    registerFont(path.resolve("./fonts/NotoSansJP-Regular.otf"), {
        family: "Noto Regular"
    });
    ctx.font = "36px Noto Black";
    ctx.fillStyle = "#1a202c";
    ctx.textBaseline = "middle";

    ctx.font = "18px Noto Regular";
    ctx.textAlign = "right";
    ctx.fillText("4Character Internet License Project - 4cil.ga", 1080, 600);

    ctx.font = "54px Noto Black";
    ctx.textAlign = "center";
    ctx.fillStyle = "#1a202c";
    ctx.fillText("N" + level[0] + "C" + level[1] + "ライセンス", 600, 120);
    ctx.font = "24px Noto Regular";
    ctx.fillStyle = "#718096";
    ctx.fillText("非商用利用レベル" + level[0] + " : 商用利用レベル" + level[1], 600, 180);

    ctx.fillStyle = "#1a202c";
    ctx.font = "48px Noto Black";
    ctx.textAlign = "center";
    ctx.fillText("許可", 480, 300);
    ctx.fillText("禁止", 900, 300);

    ctx.textAlign = "right"
    ctx.fillText("非商用", 200, 360);
    ctx.fillText("商用", 200, 480);

    ctx.textAlign = "center";
    ctx.font = "24px Noto";
    ctx.fillText(licenses[0].allow, 480, 360);
    ctx.fillText(licenses[0].disallow, 900, 360);
    ctx.fillText(licenses[1].allow, 480, 480);
    ctx.fillText(licenses[1].disallow, 900, 480);

    /**
     * キャンバスを描画
     */
    const buffer = canvas.toBuffer();

    res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": buffer.length,
    });
    res.end(buffer, "binary");
};

export default createOgp;
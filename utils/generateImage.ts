import * as playwright from "playwright-aws-lambda";
import { ViewportSize } from "playwright-core";

export const generateImage = async (viewport: ViewportSize, html: string) => {

    const browser = await playwright.launchChromium({ headless: true });
    const page = await browser.newPage({ viewport });
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(150);
    const file = await page.screenshot({ type: "png" });
    await browser.close();

    return file;
}

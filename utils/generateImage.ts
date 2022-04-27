import chrome from "chrome-aws-lambda";
import core, { Viewport } from "puppeteer-core";

const exePath = process.platform === 'win32'
? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
: process.platform === 'linux'
? '/usr/bin/google-chrome'
: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export const generateImage = async (viewport: Viewport, html: string) => {
    const options = {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
    }

    const browser = await core.launch(options);
    const page = await browser.newPage();
    await page.setViewport(viewport);
    await page.setContent(html, { waitUntil: "domcontentloaded"});
    
    const file = await page.screenshot({ type: "png" });
    await browser.close();

    return file;
}
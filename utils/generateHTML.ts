import { readFileSync } from "fs";
import path from "path";
import { Level } from "../types/level";
import { LicenseItems } from "../types/licenses";

const regular = readFileSync(path.resolve("./fonts/notoRegular.otf")).toString("base64");
const black = readFileSync(path.resolve("./fonts/notoBlack.otf")).toString("base64");

/**
 * generateHTML
 * @param level 
 * @param licenses 
 * @returns HTMLData
 */
export const generateHTML = async (level: Level, licenses: LicenseItems) => {
    return `<!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OGP</title>
    </head>
    <style>
        @font-face {
            font-family: 'Noto Sans CJK JP';
            font-style: normal;
            font-weight: 500;
            src: url(data:font/otf;charset=utf-8;base64,${regular}) format("otf");
        }
    
        @font-face {
            font-family: 'Noto Sans CJK JP';
            font-style: normal;
            font-weight: 900;
            src: url(data:font/otf;charset=utf-8;base64,${black}) format("otf");
        }
    
        body {
            font-family: "Noto Sans CJK JP";
            font-weight: 400;
        }
    
        .primary {
            color: #1a202c;
        }
    
        .sub {
            color: #718096;
        }
    
        h1 {
            font-size: 54px;
            margin-bottom: 0;
            font-weight: 900;
        }
    
        h2 {
            font-size: 24px;
            margin-top: 2px;
            font-weight: normal;
        }
    
        th,
        td {
            padding: 18px;
            word-wrap: normal;
            max-width: 400px;
        }
    
        th {
            font-size: 48px;
            font-weight: 900;
        }
    
        td {
            font-size: 24px;
        }
    </style>
    
    <body>
        <div class="primary" style="display: flex; flex-direction: column; align-items: center;">
            <h1>N${level[0]}C${level[1]}ライセンス</h1>
            <h2 class="sub">非商用利用レベル${level[0]} : 商用利用レベル${level[1]}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>許可</th>
                        <th>禁止</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="text-align: right;">非商用</th>
                        <td>${licenses[0].allow}</td>
                        <td>${licenses[0].disallow}</td>
                    </tr>
                    <tr>
                        <th style="text-align: right;">商用</th>
                        <td>${licenses[1].allow}</td>
                        <td>${licenses[1].disallow}</td>
                    </tr>
                </tbody>
            </table>
            <p style="position: fixed; bottom: 0; right: 150px;">4 Character Internet License Project - 4cil.ga</p>
        </div>
        </body>
    </html> 
    `
}
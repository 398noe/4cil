import { getCreditMessage, license } from '@/settings/license';
import type { APIContext } from 'astro';
import * as fs from 'fs';
import type { ReactNode } from 'react';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

export async function getStaticPaths() {
	const levels: string[] = [];
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			levels.push(`n${i}c${j}`);
		}
	}

	const paths = levels.map((l) => {
		return {
			params: {
				level: l,
			},
		};
	});
	return paths;
}

export async function GET({ url, params, props }: APIContext): Promise<Response> {
	const { level } = params;
	const [n, c] = [parseInt(level.slice(1, 2)), parseInt(level.slice(3, 4))];
	const image = await generateImage(n, c);

	return new Response(image, {
		headers: {
			'Content-Type': 'image/png',
			// 'Cache-Control': 'public, max-age=604800', // should be add immutable
		},
	});
}

async function generateImage(n: number, c: number) {
	const extrabold = fs.readFileSync('src/fonts/Noto800.ttf');

	const template = generateHTML(n, c) as ReactNode;

	const svg = await satori(template, {
		fonts: [
			{
				name: 'Noto-ExtraBold',
				data: extrabold,
				weight: 800,
				style: 'normal',
			},
		],
		width: 1200,
		height: 630,
	});

	return await sharp(Buffer.from(svg)).png().toBuffer();
}

function generateHTML(n: number, c: number) {
	const level = 'n' + n + 'c' + c;
	return html(`
        <div class="flex flex-col w-full h-full p-4 bg-white" lang="ja-JP">
            <div class="flex flex-col items-center w-full p-4">
                <h1 class="text-6xl m-4">${level.toUpperCase()}ライセンス</h1>
        		<h2 class="text-2xl m-4">非商用利用レベル${n} : 商用利用レベル${c}</h2>
            </div>
            <div class="flex flex-col w-full items-center">
                <div class="flex max-w-2xl justify-center">
                    <p class="text-xl w-1/3"></p>
                    <p class="text-xl w-1/3">非商用利用</p>
                    <p class="text-xl w-1/3">商用利用</p>
                </div>
                <div class="flex max-w-2xl justify-center">
                    <p class="text-xl w-1/3">使用</p>
                    <p class="text-xl w-1/3">${license[n].use.allow ? 'はい' : 'いいえ'}</p>
                    <p class="text-xl w-1/3">${license[c].use.allow ? 'はい' : 'いいえ'}</p>
                </div>
                <div class="flex max-w-2xl justify-center">
                    <p class="text-xl w-1/3">加工改変</p>
                    <p class="text-xl w-1/3">${license[n].edit.allow ? 'はい' : 'いいえ'}</p>
                    <p class="text-xl w-1/3">${license[c].edit.allow ? 'はい' : 'いいえ'}</p>
                </div>
                <div class="flex max-w-2xl justify-center">
                    <p class="text-xl w-1/3">再配布</p>
                    <p class="text-xl w-1/3">${license[n].dist.allow ? 'はい' : 'いいえ'}</p>
                    <p class="text-xl w-1/3">${license[c].dist.allow ? 'はい' : 'いいえ'}</p>
                </div>
                <div class="flex max-w-2xl justify-center">
                    <p class="text-xl w-1/3">クレジット表記</p>
                    <p class="text-xl w-1/3">${getCreditMessage(n)}</p>
                    <p class="text-xl w-1/3">${getCreditMessage(c)}</p>
                </div>
            </div>
            <div class="flex flex-col w-full justify-end items-end">
                <p class="mr-8">4 Character Internet License Project - 4cil.nyao.me</p>
            </div>
        </div>
    `);
}

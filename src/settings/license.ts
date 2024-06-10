import type { License } from '@/types/license';
export const license: { [level: string]: License } = {
	0: {
		description: '使用, 加工改変, 再配布は許可されません',
		allow: '',
		level: 0,
		disallow: '使用, 加工改変, 再配布',
	},
	1: {
		description: '使用は許可されますが、加工改変, 再配布は許可されません。クレジット表記が必要です',
		allow: '使用(クレジット表記が必要)',
		level: 1,
		disallow: '加工改変, 再配布',
	},
	2: {
		description: '使用は許可されますが、加工改変, 再配布は許可されません。クレジット表記は不要です',
		allow: '使用(クレジット表記は不要)',
		level: 2,
		disallow: '加工改変, 再配布',
	},
	3: {
		description: '使用, 加工改変が許可されますが、再配布は許可されません。クレジット表記が必要です',
		allow: '使用, 加工改変(クレジット表記が必要)',
		level: 3,
		disallow: '再配布',
	},
	4: {
		description: '使用, 加工改変が許可されますが、再配布は許可されません。クレジット表記は不要です',
		allow: '使用, 加工改変(クレジット表記は不要)',
		level: 4,
		disallow: '再配布',
	},
	5: {
		description: '使用, 加工改変, 再配布が許可されます。クレジット表記が必要です',
		allow: '使用, 加工改変, 再配布(クレジット表記が必要)',
		level: 5,
		disallow: '',
	},
	6: {
		description: '使用, 加工改変, 再配布が許可されます。素材の再配布に限り、クレジット表記が必要です',
		allow: '使用, 加工改変, 再配布(再配布のみクレジット表記が必要)',
		level: 6,
		disallow: '',
	},
	7: {
		description: '使用, 加工改変, 再配布が許可されます。クレジット表記は不要です',
		allow: '使用, 加工改変, 再配布(クレジット表記は不要)',
		level: 7,
		disallow: '',
	},
};

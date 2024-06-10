import type { License } from '@/types/license';
export const license: { [level: string]: License } = {
	0: {
		description: '使用, 加工改変, 再配布は許可されません',
		level: 0,
		use: {
			allow: false,
		},
		edit: {
			allow: false,
		},
		dist: {
			allow: false,
		},
	},
	1: {
		description: '使用は許可されますが、加工改変, 再配布は許可されません。クレジット表記が必要です',
		level: 1,
		use: {
			allow: true,
			credit: true,
		},
		edit: {
			allow: false,
		},
		dist: {
			allow: false,
		},
	},
	2: {
		description: '使用は許可されますが、加工改変, 再配布は許可されません。クレジット表記は不要です',
		level: 2,
		use: {
			allow: true,
			credit: false,
		},
		edit: {
			allow: false,
		},
		dist: {
			allow: false,
		},
	},
	3: {
		description: '使用, 加工改変が許可されますが、再配布は許可されません。クレジット表記が必要です',
		level: 3,
		use: {
			allow: true,
			credit: true,
		},
		edit: {
			allow: true,
			credit: true,
		},
		dist: {
			allow: false,
		},
	},
	4: {
		description: '使用, 加工改変が許可されますが、再配布は許可されません。クレジット表記は不要です',
		level: 4,
		use: {
			allow: true,
			credit: false,
		},
		edit: {
			allow: true,
			credit: false,
		},
		dist: {
			allow: false,
		},
	},
	5: {
		description: '使用, 加工改変, 再配布が許可されます。クレジット表記が必要です',
		level: 5,
		use: {
			allow: true,
			credit: true,
		},
		edit: {
			allow: true,
			credit: true,
		},
		dist: {
			allow: true,
			credit: true,
		},
	},
	6: {
		description: '使用, 加工改変, 再配布が許可されます。素材の再配布に限り、クレジット表記が必要です',
		level: 6,
		use: {
			allow: true,
			credit: false,
		},
		edit: {
			allow: true,
			credit: false,
		},
		dist: {
			allow: true,
			credit: true,
		},
	},
	7: {
		description: '使用, 加工改変, 再配布が許可されます。クレジット表記は不要です',
		level: 7,
		use: {
			allow: true,
			credit: false,
		},
		edit: {
			allow: true,
			credit: false,
		},
		dist: {
			allow: true,
			credit: false,
		},
	},
};

export const getCreditMessage = (level: number) => {
	switch (level) {
		case 1:
		case 3:
		case 5:
			return '必要';
		case 2:
		case 4:
		case 7:
			return '不要';
		case 6:
			return '再配布時に必要';
		default:
			return '-';
	}
};

export const predictLicense = (license: License) => {
	if (license.use.allow && license.edit.allow && license.dist.allow) {
		if (license.use.credit && license.edit.credit && license.dist.credit) {
			return 5;
		} else if (!license.use.credit && !license.edit.credit && !license.dist.credit) {
			return 7;
		} else if (!license.use.credit && !license.edit.credit && license.dist.credit) {
			return 6;
		}
	} else if (license.use.allow && license.edit.allow && !license.dist.allow) {
		if (license.use.credit && license.edit.credit) {
			return 3;
		} else if (!license.use.credit && !license.edit.credit) {
			return 4;
		}
	} else if (license.use.allow && !license.edit.allow && !license.dist.allow) {
		if (license.use.credit) {
			return 1;
		} else {
			return 2;
		}
	} else if (!license.use.allow && !license.edit.allow && !license.dist.allow) {
		return 0;
	}
	return 0;
};

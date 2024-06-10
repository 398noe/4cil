export interface License {
	description: string;
	level: number;
	use: {
		allow: boolean;
		credit?: boolean;
	};
	edit: {
		allow: boolean;
		credit?: boolean;
	};
	dist: {
		allow: boolean;
		credit?: boolean;
	};
}

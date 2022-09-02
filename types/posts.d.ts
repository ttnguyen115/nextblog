export interface Author {
	name: string;
	title: string;
	profileUrl: string;
	avatarUrl: string;
}

export interface Post {
	id: string | number;
	title: string;
	publishedDate: string;
	tagList: Array<string>;
	description: string;

	slug: string;
	author?: Author;

	mdContent?: string;
	htmlContent?: string;
}

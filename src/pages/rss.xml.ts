import { postFileToId } from "../util/util";
import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("../content/posts/**/*.md", {
	eager: true,
});

const posts = Object.values(postImportResult);

export const get = () =>
	rss({
		title: "Theodore Kakagis",
		description: "Theodore Kakagis' Blog",
		site: import.meta.env.SITE,
		items: posts.map((post: any) => ({
			link: `blog/${postFileToId(post.file)}`,
			title: post.frontmatter.title,
			description: post.frontmatter.desc,
			pubDate: new Date(post.frontmatter.date),
		})),
	});

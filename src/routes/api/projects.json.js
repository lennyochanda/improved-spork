const projects = [
	{
		alt: 'Taarifa Digital website screenshots',
		coverImage: '/images/projects/taarifa.jpeg',
		description:
			'An independent online platform for Kenyan Trending news in Entertainment, Politics, Lifestyle and Business. It is built with sveltekit and styled with TailwindCSS. Posts are pulled from GraphCMS with the help of GraphQL queries.',
		features: [
			'Carbon Design System Components and icons',
			'Search function',
			'Responsive Navbar',
			'Markdown Posts that publish when saved',
			'Svelte components in Markdown',
			'sveltekit endpoints',
			'RSS feed'
		],
		stack: ['Sveltekit', 'TailwindCSS', 'Vercel', 'GraphCMS', 'GraphQL'],
		title: 'Taarifa Digital',
		url: {
			live: 'https://taarifa-digital.vercel.app',
			source: 'https://github.com/dak-384/taarifa-digital'
		}
	},
	{
		alt: 'Portfolio and Blog website screenshots',
		coverImage: '/images/projects/taarifa.jpeg',
		description:
			'Sveltekit blog is a markdown powered blog (the one you are currently on). It utilises sveltekit load function to pull posts and projects from sveltekit endpoints.',
		features: [
			'Netlify Forms contact form that sends submitted messages direct to email',
			'Markdown Posts that publish when saved',
			'Svelte components in Markdown',
			'sveltekit endpoints',
			'Basic CSS animation',
			'Jamstack',
			'RSS feed'
		],
		stack: ['Sveltekit', 'SCSS', 'Netlify'],
		title: 'Sveltekit Blog and Portfolio',
		url: {
			live: 'https://lennyochanda.netlify.app',
			source: 'https://github.com/dak-384/improved-spork'
		}
	}
];

export const get = async () => {
	return {
		status: 200,
		body: {
			projects
		}
	};
};

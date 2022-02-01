<!-- This is a template file that renders each individual markdown post inside src/routes/blog/ -->
<script>
	// These are pulled from the frontmatter of the current post
	export let title;
	export let excerpt;
	export let alt;
	export let coverImage = '';
	export let coverWidth = '';
	export let coverHeight = '';
	export let date = '';
	export let updated = '';
	export let categories = [];
	export let site_name = 'https://www.lennyochanda.netlify.app';
	import { currentPage } from '$lib/assets/js/store';
</script>

<svelte:head>
	<!-- Be sure to add your image files below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:site_name" content={site_name} />
	<meta property="og:url" content={currentPage} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:image" content={coverImage} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />

	<!--Twitter-->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content={excerpt} />
	<meta name="twitter:site" content="@lenny_ochanda" />
	<meta name="twitter:creator" content="@lenny_ochanda" />
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src={coverImage}
		{alt}
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<slot />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

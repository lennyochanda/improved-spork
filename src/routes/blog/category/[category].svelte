<!-- This dynamic page renders any page at /blog/category/* -->
<script context="module">
	export async function load({ fetch, page }) {
		const category = page.params.category;

		const res = await fetch(`/api/posts.json`);
		let { posts } = await res.json();

		const matchingPosts = posts.filter((post) => post.categories.includes(category));

		return {
			props: {
				posts: matchingPosts,
				category
			}
		};
	}
</script>

<script>
	export let posts;
	export let category;

	import PostCard from '$lib/components/PostCard.svelte';
</script>

<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<h1>Blog category: {category}</h1>

{#if posts.length}
	<ul class="posts-list">
		{#each posts as post}
			<li>
				<PostCard
					slug={post.slug}
					date={post.date}
					image={post.coverImage}
					title={post.title}
					excerpt={post.excerpt}
					categories={post.categories}
				/>
			</li>
		{/each}
	</ul>
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}

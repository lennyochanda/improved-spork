<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>


<script>
	export let posts;
	console.log(posts)

	import PostCard from '$lib/components/PostCard.svelte'
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>


<ul class="posts-list">
  {#each posts as post}
    <li>
			<PostCard slug={ post.slug } date={ post.date } image={ post.coverImage } title={ post.title } excerpt={ post.excerpt } categories={ post.categories } />
    </li>
  {/each}
</ul>
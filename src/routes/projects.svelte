<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte'

	const projects = [
    {
      title: 'Taarifa Digital',
      description: 'An independent online platform for Kenyan Trending news in Entertainment, Politics, Lifestyle and Business. It is built with sveltekit nd styled with TailwindCSS',
      slug: 'https://taarifa-digital.vercel.app',
      coverImage: '/images/projects/taarifa.jpeg',
    },
  ];
</script>

<div class="project">
	<h1>Project</h1>
	<div>
		<p>
			Here is a curated list of some of the projecs that I am working on or have worked on.
		</p>
	</div>
	{#if projects.length > 0}
    {#each projects as project}
            <ProjectCard project="{project}" />
    {/each}
  {/if}
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		max-width: 42rem;
		margin-bottom: 4rem;
	}
</style>
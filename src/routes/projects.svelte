<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte'

	const projects = [
    {
      alt: 'Taarifa Digital website screenshots',
      coverImage: '/images/projects/taarifa.jpeg',
      description: 'An independent online platform for Kenyan Trending news in Entertainment, Politics, Lifestyle and Business. It is built with sveltekit and styled with TailwindCSS',
      stack: ['Sveltekit', 'TailwindCSS'],
      title: 'Taarifa Digital',
      url: 'https://taarifa-digital.vercel.app',
    },
  ];
</script>

<div class="project">
	<h1>Project</h1>
	<div>
		<p>
			Here is a curated list of some of the projecs that I am working on.
		</p>
	</div>
	{#if projects.length}
    {#each projects as project}
            <ProjectCard project="{project}" />
    {/each}
  {:else}
  	<p>Projects I have worked on will appear here... </p>
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
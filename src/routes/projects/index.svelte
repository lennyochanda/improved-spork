<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`/api/projects.json`)
        const { projects } = await res.json()

        return {
            props: { projects }
        }
    }
</script>

<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte'

  export let projects
</script>

<div class="project">
  <div>
    <p>
      Here is a curated list of some of the projecs that I am working on.
    </p>
  </div>
  {#if projects.length}
    {#each projects as project}
            <ProjectCard project={project} />
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
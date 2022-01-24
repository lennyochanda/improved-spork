<script>
	export let project
</script>

{#if project}
  <div class="project-card">
    <h3>
      <a href={project.url.live}>{project.title}</a>
    </h3>
    <div>
    	<img
        alt="{project.alt}"
        src="{project.coverImage}"
        width="30px"
        height="50px"
      />
            
    <div>
      <ul>
        {#each project.stack as stack}
          <a href="/blog/category/{stack}" class="stack">{stack}</a>
        {/each}
      </ul>
    </div>
    <p>
      {project.description}
    </p>
    </div>
    <ul class="links">
      <a href="{project.url.live}" target="_blank">Live</a>
      <a href="{project.url.source}" target="_blank">Source</a>
    </ul>
  </div>
{/if}

<style>
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  .links {
    justify-content: space-between;
  }
</style>
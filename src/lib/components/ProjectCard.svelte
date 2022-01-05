<script>
	export let project
</script>

{#if project}
  <div>
    <div>
      <h3>
        <a href={project.url}>{project.title}</a>
      </h3>
    </div>
    <div>
    	<img
        alt="{project.alt}"
        src="{project.coverImage}"
        width="1.75rem"
        height="1.75rem"
      />
            
      <p>
        {project.description}
      </p>
    </div>
    <div>
      {#each project.stack as stack}
        <span>{stack}</span>
      {/each}
    </div>
  </div>
{/if}
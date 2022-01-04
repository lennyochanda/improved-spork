<script>
	export let project
</script>

{#if project && project.slug}
  <div>
    <div>
      <h3>
        {project.title}
      </h3>
    </div>
    <div>
    	<img
        alt="{'Lenny Ochanda'}"
        src="{project.coverImage}"
        width="1.75rem"
        height="1.75rem"
      />
            
      <p>
        {project.description}
      </p>
    </div>
  </div>

{:else}
	<p>Projects will appear here...</p>
{/if}
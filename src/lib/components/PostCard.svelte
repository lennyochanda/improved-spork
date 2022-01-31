<script>
	export let date, excerpt, image, slug, title;
</script>

<div class="blog-card">
	<div class="meta">
		<div class="photo" style="background-image: url({image});" />
		<ul class="details">
			<li class="date">
				{date}
			</li>
		</ul>
	</div>
	<div class="description">
		<h1>{title}</h1>
		<p>
			{excerpt}
		</p>
		<p class="read-more">
			<a href={slug}>Read More</a>
		</p>
	</div>
</div>

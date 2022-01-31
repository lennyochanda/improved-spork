<script>
	import NavItem from './NavItem.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav">
	<ul>
		<NavItem sveltekit:prefetch href="/blog">Blog</NavItem>
		<NavItem sveltekit:prefetch href="/projects">Projects</NavItem>
		<NavItem sveltekit:prefetch href="/about">About</NavItem>
	</ul>
</nav>

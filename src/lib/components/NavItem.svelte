<script>
  import { currentPage } from '$lib/assets/js/store';

  export let href;

  $: isCurrentPage = $currentPage.startsWith(href)
</script>


<li>
  <a
    aria-current={isCurrentPage ? 'page' : false}
    class:active={isCurrentPage}
    href={href}
    sveltekit:prefetch
  >
    <slot />
  </a>
</li>
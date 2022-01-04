<script>
  import MainNav from "./MainNav.svelte";
</script>

<footer>
  <nav>
    <ul>
      <li><a href="/rss.xml">RSS</a></li>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
  
  <MainNav />

  <p>
    &copy; {new Date().getFullYear()} | Lenny Ochanda.<br>
    All Rights Reserved.
  </p>
</footer>
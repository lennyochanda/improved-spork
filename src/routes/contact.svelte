<script>
  import Callout from "$lib/components/Callout.svelte"
</script>

<h1>Contact</h1>

<p>You can find me on the following social accounts:</p>

<ul>
  <li><a href="https://www.github.com/dak-384">Github</a></li>
  <li><a href="https://www.linkedin.com/in/lenny-onyango-742194210">LinkedIn</a></li>
  <li><a href="https://www.twitter.com/lenny_ochanda">Twitter</a></li>
</ul>

<Callout>Any suggestions, corrections, questions or greetings are welcome below. Find me on <a href="https://www.twitter.com/lenny_ochanda">Twitter</a> for the quickest reply.</Callout>

<form on:submit|preventDefault name="contact" method="POST" data-netlify="true">
  <div class="form-section">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="First name" />
  </div>
  
  <div class="form-section">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email address" />
  </div>

  <div class="form-section">
    <label for="message">Message</label>
    <textarea id="message" placeholder="Message"></textarea>
  </div>

  <button type="submit">Submit!</button>
</form>
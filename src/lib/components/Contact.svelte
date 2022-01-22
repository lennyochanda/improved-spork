<script context="module">
  export const prerender = true
</script>

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

<form id="contact" name="contact" method="POST" netlify data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact">
  <div class="form-section">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Name" value="" />
  </div>
  
  <div class="form-section">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="address@something.com" value="" />
  </div>

  <div class="form-section">
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Hi, Lenny..." value="" max-length="250"></textarea>
  </div>

  <button type="submit">Send!</button>
</form>
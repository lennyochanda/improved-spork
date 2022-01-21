<script context="module">
  export const prerender = true
</script>

<script>
  import Callout from "$lib/components/Callout.svelte"

  const handleSubmit = (e) => {
    let contactForm = document.getElementById('contact');
    let formData = new FormData(contactForm);
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then((res) => console.log('Form successfully submitted', res.json))
      .catch(error => alert(error.message))
  }
</script>

<h1>Contact</h1>

<p>You can find me on the following social accounts:</p>

<ul>
  <li><a href="https://www.github.com/dak-384">Github</a></li>
  <li><a href="https://www.linkedin.com/in/lenny-onyango-742194210">LinkedIn</a></li>
  <li><a href="https://www.twitter.com/lenny_ochanda">Twitter</a></li>
</ul>

<Callout>Any suggestions, corrections, questions or greetings are welcome below. Find me on <a href="https://www.twitter.com/lenny_ochanda">Twitter</a> for the quickest reply.</Callout>

<form id="contact" on:submit|preventDefault={ handleSubmit } name="contact" method="POST" data-netlify="true">
  <div class="form-section">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Name" />
  </div>
  
  <div class="form-section">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="myemailaddress@something.com" />
  </div>

  <div class="form-section">
    <label for="message">Message</label>
    <textarea id="message" placeholder="Hi, Lenny..." max-length="250"></textarea>
  </div>

  <button type="submit">Send!</button>
</form>
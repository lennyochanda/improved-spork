<script context="module">
	export const prerender = true;
</script>

<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

<Callout
	>Any suggestions, corrections, questions or greetings are welcome below. Find me on <a
		href="https://www.twitter.com/lenny_ochanda">Twitter</a
	> for the quickest reply.</Callout
>

<div class="contact">
	<h1>Contact Me</h1>

	<p>Social Accounts:</p>

	<ul>
		<li><a href="https://www.github.com/dak-384" target="_blank">Github</a></li>
		<li>
			<a href="https://www.linkedin.com/in/lenny-onyango-742194210" target="_blank">LinkedIn</a>
		</li>
		<li><a href="https://www.twitter.com/lenny_ochanda" target="_blank">Twitter</a></li>
	</ul>

	<form
		id="contact"
		name="contact"
		method="POST"
		netlify
		data-netlify="true"
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
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
			<textarea id="message" name="message" placeholder="Hi, Lenny..." value="" max-length="250" />
		</div>

		<button type="submit">Send!</button>
	</form>
</div>

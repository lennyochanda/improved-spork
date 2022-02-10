---
title: "Using Netlify Forms in a Sveltekit Web App."
date: "Wednesday 9th Feb, 2022"
updated: "Wednesday 9th Feb, 2022"
categories: 
  - "Netlify Forms"
  - "Snippets"
  - "Sveltekit"
coverImage: "https://ik.imagekit.io/lennyochanda/postImages/netlify-forms-in-sveltekit/sveltekit.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1644424144939"
alt: "Sveltekit logo"
coverWidth: 809
coverHeight: 379
excerpt: "In this article we will set up Netlify forms in a simple Sveltekit app and deploy it to Netlify."
---

### Intro

Handling forms can be annoying. In this article I will use Sveltekit to create a form that will integrate with Netlify to send any submissions directly to my email. This project lives [here](https://sveltekit-netlify-forms.netlify.app).

### What is Sveltekit?

>> **_Cybernetically enhanced web apps_**

Svelte is a framework for building web applications of all sizes, with a beautiful development experience. Sveltekit which is built on Svelte has a flexible file system based routing, server side rendering and other features. It is a successor to Sapper. 

Sveltekit is still in Beta as the APIs are being finalized for a 1.0 release but is already being [used in producton.](https://github.com/janosh/awesome-svelte-kit)

Find out more about the power of Sveltekit from their [docs page.](https://kit.svelte.dev/docs)

### Setting up a sveltekit app

Setting up a project using Sveltekit is as easy as:

```
npm init svelte@next sveltekit-netlify-forms
cd sveltekit-netlify-forms
npm install
npm run dev
```

Choose the skeleton template. We will not be using TypeScript, ESLint or Prettier.

As expected these commands create a new project, install its dependencies and start a server at the default port for sveltekit (port 3000). The file structure looks like this: 

<pre>
.
├── jsconfig.json
├── node_modules
│   ├── debug, esbuild...
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.html
│   └── routes
│       └── index.svelte
├── static
│   └── favicon.png
└── svelte.config.js

</pre>

Sveltekit has a file based routing system. Any file inside the src/routes directory is a route. Currently we only have index.svelte in the routes folder which maps to the home (/) route. Anything you want to show up in the home page should be in this file.  Sveltekit's file based routing system has more to offer so do check out the [documentation.](https://kit.svelte.dev/docs)

Since our application is a pretty simple one, we will not be creating any new components, pages or routes. The `src/routes/index.svelte` page will suffice.

### Netlify Forms

Netlify comes with built-in form handling (even for free tier accounts) and it is enabled by default. Netlify's build bots parse your files during deploy time looking for data attributes that will identify any forms you want to be handled by Netlify. The docs give a sample form and we are going to copy it into our `src/routes/index.svelte file`.

```html
<form name='contact' method='POST' data-netlify='true'>
	<p>
		<label for="">Your Name: 
			<input type="text" name="name"/>
		</label>
	</p>
	<p>
		<label for="email">Your Email:
			<input type="email" name="email"/>
		</label>
	</p>
	<p>
		<label for="message">
			<textarea name="message"></textarea>
		</label>
	</p>
	<p>
		<button type="submit">Send</button>
	</p>
</form>
```

The form above is not very different from a normal HTML form with a few exceptions. It has an attribute _data-netlify="true"_ inside the form tag. The form's name attribute determines what the form will be called in the Netlify app interface.

The Netlify bots parse the HTML, strip the attribute and inject a hidden input called form-name whose value matches the name attribute of our form above.
Once the form is detected we will be able to see the form in the Netlify logs. It will also be listed under Forms in the Netlify interface. 

### Deploying to Netlify

Deploying to Netlify from Github is very easy but first we need to adapt our project to our deployment target, in this case Netlify. [Adapters](https://github.com/sveltejs/kit/blob/master/documentation/docs/10-adapters.md) are small plugins that take the built app as input and generate output for deployment. By default sveltekit projects are configured to use `@sveltejs/adapter-auto`, which detects your production environment and selects the appropriate adapter where possible. Sveltekit offers a number of officially supported adapters and `adapter-netlify` is one of them.

To switch the adapter, change the following lines in the `svelte.config.js` file:

```javascript
import adapter from '@sveltejs/adapter-netlify'
```

Now that we have required adapter-netlify in the svelte config file, we need to install it:

```
npm install @sveltejs/adapter-netlify

npm install
```
And now we can deploy to Netlify.

The official Netlify website has the option to log in through Github. You can then deploy any of your projects that are on Github after granting Netlify the requisite permissions.


This is exactly what we need to do:
Once you have deployed your project, a quick scan of the Netlify logs shows that the form was not detected. We can prove this by attempting to submit a message. The page reloads but there is no new information. There is also a Forms tab on the dashboard but it registers no forms.

Netlify informs you in the logs if it detects any form and this is not the case. We need to prerender the form so that the Netlify bot can find it during deploy time.

To enable prerendering, first add the object below to the `svelte.config.js` file config.kit object:

```javascript
prerender: {
	crawl: true,
  enabled: true,
  onError: "continue",
  entries: ['*']
}
```
- `crawl`: determines whether Sveltekit should find pages to prerender by following links from the seed page(s).
- `enabled`: simply enables/disables prerendering.
- `onError`: what action to take if an error occurs. "continue" allows the build to continue, despite routing errors.
- `entries`: an array of pages to prerender or start crawling from. "\*" includes all non-dynamic routes.

_Remember to restart the dev server after editing the svelte.config.js file._

And in our home page, `src/routes/index.svelte` add the script tag below:

```html
<script context='module'>
	export const prerender = true
</script>
```

The snippet above together with the prerender object in svelte.config.js ensure that the page is prerendered and that Netlify bots parse the form correctly during deployment. 

And now when we commit the files to Github, the Netlify logs show that a form has been detected.

We can test this now by submitting a response. We should get a page from Netlify informing us that our submission was successful.


To get notified when a user submits a response, go to the site settings tab on the Netlify dashboard. Navigate to Form Notifications and press _Add notification_ under Outgoing notifications. Click email notification (or slack, webhook depending on preference), enter the email to notify and then click save. Voila!

### Summary

We have covered some basics of Sveltekit and how to add a Netlify form to a Sveltekit project. We used adapter-netlify and added prerendering to our svelte config to ensure that the Netlify bots find the forms we added.

The code for this project is [here](https://github.com/dak-384/sveltekit-netlify-forms). Please consult the linked docs for further reading.
<script>
	import Contact from '$lib/components/Contact.svelte'
</script>

<div class="about">
	<h2>About</h2>

	<p>
	Hello, I am a Front End Developer with some knowledge of the Back End. I occassionaly write about some topics that arise as I go through my journey as a software developer.
	</p>

	<p>
		My journey into web development began in 2020 when a friend introduced me to HTML and the W3C website. I went on to learn HTML and CSS, learnt <strong>C</strong> and practised with <strong>Python</strong> until February 2021 when I decided that I wanted to be a full stack web developer, concurrently while obtaining my Bachelor's Degree in Commerce(Finance Option). I have since completed the Foundations part of <em>The Odin Project</em> which covered <strong>HTML, CSS and JS</strong> and recently started building projects, some of which you may find in the <a href="/projects">Projects page</a>.
	</p>

	<p>
		I am currently working on the <em>Deep Dive into Modern Web Development</em> online course offered by The University of Helsinki. It is a hands on course where I learn by building stuff. I have so far covered:
	</p>

	<ul>
	  <li>Fundamentals of Web apps</li>
	  <li>Introduction to React</li>
	  <li>Communicating with the server and</li>
	  <li>Programming a server with NodeJS and Express.</li>
	</ul>

	<p>
		The rest of the course covers Testing, State Management with Redux, Webpack, custom hooks, GraphQL, TypeScript, React Native, CI/CD, Containers and Relational Databases.
	</p>
	        
	<p>
		I would love an opportunity to collaborate in <strong>ReactJS (NextJS), SveltJS (SvelteKit), MERN</strong> projects and the <strong>JavaScript</strong> eco-system which I find to be very broad && diverse. I will write about the above topics among others so stay tuned!
	</p>

	<p>
		Feel free to reach out to me below.
	</p>

	<p>
		Cheers.
	</p>

	<div class="🍺"></div>	
</div>




<Contact />

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.about {
		background: #ffe;
		padding: 1rem;
	}
	a {
		color: #E63946;
		text-decoration: none;
	}
	p, ul {
		margin-top: 1rem;
	}
	ul {
		list-style-type: circle;
	}
	.🍺 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 50px;
	}
	.🍺:before {
	  content: "🍺";
	  font-size: 30px;
	  animation: cheers-after 3s ease infinite;
	}
	.🍺:after {
		content: "🍺";
	  font-size: 30px;
	  animation: cheers-before 3s ease infinite;
	}

	@keyframes cheers-before {
	  0% {
	      transform: rotateZ(0) translateX(20px);
	  }
	  30% {
	      transform: rotateZ(0) translateX(0);
	  }
	  50% {
	    transform: rotateZ(-15deg) translateX(-10px);
	  }
	  70% {
	      transform: rotateZ(0) translateX(0);
	  }
	  100% {
	      transform: rotateZ(0) translateX(20px);
	  }
	}

	@keyframes cheers-after {
	  0% {
	    transform: rotateZ(0) rotateY(180deg) translateX(20px);
	  }
	  30% {
	    transform: rotateZ(0) rotateY(180deg) translateX(0);
	  }
	  50% {
	    transform: rotateZ(15deg) rotateY(180deg) translateX(-10px);
	  }
	  70% {
	      transform: rotateZ(0) rotateY(180deg) translateX(0);
	  }
	  100% {
	    transform: rotateZ(0) rotateY(180deg) translateX(20px);
	  }
	}
</style>
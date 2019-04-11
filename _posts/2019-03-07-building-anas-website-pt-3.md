---
layout: article

title: "Building Ana's Website, Pt 3"
image-dir: "Building Anas Website Pt 3"

permalink: /articles/:title

categories: [Process]
---


Hey there, welcome to the 3rd part of this series that I’ve been writing, about building my friend [Ana Guerra](https://medium.com/@anarlguerra) a personal website.

[On part 2](https://www.byvasco.com/articles/building-anas-website-pt-2) we drafted all the required pages for the website: the About Me page, which works like a home page, the Podcast page, Blog, Newsletter and Contacts page.

I have a good starting point. I’ve created a rough layout of how this might all look without using any images and colors, but I already used the two chosen typefaces (Raleway and InterUI).

To be honest, me and Ana were pretty happy with what came out. So the next step is to give these grayscale compositions a bit of life!

#### About/Home page
Starting from the beginning, this is how the About/Home page looks after going through it.

{% 
  include image.html
  type="post"
  name="home-top.png"
  alt="Ana's Website - Home page, top part."
%}

Here we have the Hero, with an introduction to who Ana is and a big “Let’s Talk” call to action, that takes us to the Contact page once clicked. We also decided to add this confetti looking thing on the background with the emojis, to give this top section some color. The emojis are a TV, some headphones and an open book: the same emojis Ana uses on her newsletter.

Above that, there’s the first content section: the Podcast, with the last 4 episodes and a link to the Podcast page.

Each other section (Blog and Newsletter) will have these big repeated titles, with a text label in-between, indicating the sharing frequency. So for example, because Ana shares a new podcast episode around once per week, we wrote “An Episode a Week or So” in that label.

Another detail is that the titles should be constantly moving, sliding from right to left, overflowing the page. I think this will make things look a bit more interesting.

And because these sections are visually similar, I wanted to find a way to clearly divide them. I ended up with these big fat titles that work really well, creating a lot of contrast.

{% 
  include image.html
  type="post"
  name="home-bottom.png"
  alt="Ana's Website - Home page, bottom part."
%}

The Newsletter section works as an introduction and clicking on the “Find Out More” button, we’ll be taken to the Newsletter page, with a bit more information. There’s also a small excerpt of a real Newsletter Ana shared on the right side, as you can see.

The footer remained as it was before, with icons/links to all social media channels that Ana is at.


#### Podcast and Blog pages
These two pages basically follow the exact same layout, excluding the fact that the podcasts are in a 4 column grid, and the blog posts in a 3 column one.

{% 
  include image.html
  type="post"
  name="podcast-blog.png"
  alt="Ana's Website - Podcast and Blog pages."
%}

It works perfectly for the purpose it has, and it fits the overall visual style for the website.

Oh, and in these “interior” pages the titles are static


#### Newsletter page
It follows the same 2 column layout from the Home page, but this time there’s a bit more information. The call-to-action remains the same, which takes us to the Whatsapp page to join it.

Above that, we have a couple of bullet points giving some more details about the newsletter.

{% 
  include image.html
  type="post"
  name="newsletter.png"
  alt="Ana's Website - Newsletter page."
%}

And here, the “demo” on the right side is actually scrollable, so instead of just a small excerpt, we have a full-size newsletter message.


#### Contact page
Finally, there’s the Contact page, with a link to send Ana an email or to open her Twitter profile.

{% 
  include image.html
  type="post"
  name="contact.png"
  alt="Ana's Website - Contact page."
%}

And on the bottom, her last 10 Instagram pictures or videos.


---


We’re really liking how this came up. It’s simple, and not too much information so it’s straight to the point: Ana’s content.

#### Next step: let’s code
So as you can imagine, the next step is to make this baby get out of Sketch and give it the life it deserves.

The goal of all this is to make Ana’s content to be the main focus. And that content needs to be managed by its maker! So, for that reason, this is going to be transformed into a custom Wordpress theme.

I’ll be honest: I’m not experienced in working with Wordpress development. I have no knowledge of what the best workflow is, or the best practices.

At the moment I’m writing this (March 6), the front-end code is already created and I’m learning Wordpress development on the fly, but I’m confident I’ll be able to pull this off!

See you soon! 👋🏼

[← Part 2](https://www.byvasco.com/articles/building-anas-website-pt-2)
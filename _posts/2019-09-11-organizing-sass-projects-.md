---
layout: article

title:  How I organize Sass projects
image-dir: organizing-sass-projects

permalink: /articles/:title

categories: Development
---

These last few days I’ve been busy working on cleaning all the stylesheets from the [H19](https://hole19golf.com) website. It may seem tedious and boring but I’m actually enjoying it, I like the idea of transforming chaos into order.

Ever since I work with Sass, I wanted to get a stable workflow and a way of organizing my files in a specific order. I have also recently started to learn and work with React, which uses components to structure everything, and that inspired me to organize the Sass files in this way, at least for larger projects. So let’s get started.

The main idea is to separate things into 3 parts:
- **Base**: things like base styles, resets, typography, variables, mixins, etc.
- **Components**: the different pieces of the website.
- **Layout**: how the components relate to each other.

I like to think like this: a component works with padding, a layout works with margins. But let’s see how this might work in a project.


#### Getting started
The first thing I do whenever I start a new project is to first create the folders where the code will live, then the “index” partial for each of them, and lastly the main file where those 3 partials will be imported.

{% include components/post/image.html
  folder = page.image-dir
  image = 'getting-started.jpg'
%}

Perfect. So now we don’t mess around with that ```main.scss``` because its main job is to import those 3 files.


#### Base
With all that created, we can start to create the base styles. I usually have a ```_base.scss```, a```_typography.scss```, ```_variables.scss```, ```_helpers.scss```, ```_reset.scss``` and that’s it.

Remember to use the ```_``` before the name of the file so that Sass knows that it’s a partial.

{% include components/post/image.html
  folder = page.image-dir
  image = 'base.jpg'
%}

Then we just need to import each of these in our ```_base-index.scss```.


#### Components
Time to take care of the components. Let’s take a look at this example right here:

{% include components/post/image.html
  folder = page.image-dir
  image = 'website-example.jpg'
%}

As you can see, this fictional web page has these 3 components: header, content and the footer.

The way I do this is basically by creating a partial for each of those components. So we would have ```_header.scss```, ```_content.scss``` and ```_footer.scss```.

Then all those partials are imported on the ```_components-index.scss``` file and that’s it!

Now, we could go in even more detail and assume that the header would have a logo component and a menu component for example. So I would create a ```header``` folder, and inside that, I’d place the ```_header.scss``` but also a ```_logo.scss``` and a ```_menu.scss```. And not to forget a ```_header-index.scss``` to import all those, which is then imported on the ```_components-index.scss```.

Something like this:

{% include components/post/image.html
  folder = page.image-dir
  image = 'components.jpg'
%}


#### Layout
Lastly, we have the layouts. In here I like to at least have a ```_structure.scss``` file where I define my containers and all that, and this is also the place where I create a file to control the layout for each page of the website I’m creating. So if I’m working with a website that has a Home and an About page, I’d have a ```_page-home.scss``` and a ```_page-about.scss``` file. Nothing too complicated.

Now, what are we doing in these layouts? Let’s take a look at our website again:

Img

We’re controlling the margins between each component of the page. In this case, for example, we would do something like this:

{% include components/post/image.html
  folder = page.image-dir
  image = 'layout.jpg'
%}

Simple!


#### Real example
This was an oversimplified example, so let’s take a look at how I’m structuring the Sass on the [H19](https://hole19golf.com) website.

Here’s the base folder:

The components:

And the layouts:


As you can see this has a bit more stuff to work with. A useful tip is to separate everything into folders as it helps to keep everything organized, and it’s much easier to find the code you’re looking for. And I find it to be pretty easy to scale as the project grows.


---

This is how I’m currently working but I’m always looking to improve my process so this is a constant work in progress.

Hope you find this useful and that it helps with your future projects. See you next time, and happy coding!
---
layout: article
title: "How I built my blog and website using Jekyll"
---


I’ve finally launched the blog here on my website! I wanted to do this for some time, mainly because I want to start writing more and I want to start building like an online home for myself, to host all my projects, my ideas, my thoughts, and even though I also share my words on Medium, it’s a good idea to have my own blog as well, so I can get full control.

### Too long, didn't read
This is kind of a large post, so here're the some links for the different sections.
- [Intro to Jekyll](#intro-to-jekyll)
  - [Markdown](#markdown)
- [Getting started](#getting-started)
- [Setting up Jekyll](#setting-up-jekyll)
- [Project structure](#project-structure)
- [Overriding the default theme](#overriding-the-default-theme)
- [Creating pages - Home](#creating-pages-home)
  - [Using variables](#using-variables)
  - [Adding logic](#adding-logic)
  - [Using includes](#using-includes)
- [Creating pages - Articles](#creating-pages-articles)
  - [Using loops](#using-loops)
- [Creating articles](#creating-articles)
  - [Using drafts](#using-drafts)


### Intro to Jekyll
Amongst a lot of options of platforms that I could’ve used to build this, I choose [Jekyll](https://jekyllrb.com/), which is a static site generator.
So, you have a bunch of source files in your local machine, and you can “compile” them into plain HTML/CSS/JavaScript. There are a lot of articles out there that do a much better job explaining how this works. [This one](https://wsvincent.com/what-is-a-static-site-generator/) by Will Vincent, [or this](https://dev.to/ruthreyer/what-are-static-site-generators-356p) by Ruth Reyer are great.

For me, there are two main reasons to use a static site generator, in this case being Jekyll:
- **Cost**: It’s super low cost to something like this. I basically just pay for my domain name, because I use Netlify to host my files.
- **Simplicity**: There are a lot of things that a SSG doesn’t allow you to do. But for my needs, it’s just perfect. I can write articles, I can create static pages, make a portfolio (which I’ll eventually create), and that’s about it. I don’t need much more that that.

There are other great reasons to use something like this, like security, scalability and speed for example.

#### Markdown
Another thing before we get started. To write articles on Jekyll, we'll use [Markdown](https://daringfireball.net/projects/markdown/) which is text-to-HTML markup language.

If you're not familiar with it, I recommend you to watch [this video](https://www.youtube.com/watch?v=HUBNt18RFbo&t=971s) by Brad Traversy, check out [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), or just search the web!


### Getting started
The first step was to design my website. This is probably the 1000th version, but this time I’m certain this one is here to stay. It’s super basic, and it currently only has a couple of pages: Home and Articles (and the  Article page of course). Here’s how it looks:

{% 
  include image.html
  type="post"
  name="home-page.png"
  caption="Home page"
  alt="ByVasco Home page design"
%}

{% 
  include image.html
  type="post"
  name="articles-page.png"
  caption="Articles page"
  alt="ByVasco Articles page design"
%}

Ok, nice, design is done. I can add and make things better later on, but for now it’s perfect.


### Setting up Jekyll
Being no expert on web development (I’m still in the beginning phases of my journey), this how-to Jekyll “guide” will be written in a super non-technical way. Also, I’m using MacOS, but I assume that it won’t change a lot for Windows.

The first thing you’ll want to do is to install it on your computer. Open up your terminal, and run:

```bash
$ gem install bundler jekyll
```

This will install [Bundler](https://bundler.io/) and Jekyll. Bundler is a tool that allows you to install all your project gems in a single command.

Next, go to the directory where you want to have your website files, and run:

```bash
$ jekyll new my-website
```

This will create a new directory called “my-website” (you can name it whatever you want). Now, navigate into that directory:

```bash
$ cd my-website
```

And run:

```bash
$ jekyll serve
```

This will run the server, so go aheada and open your browser, navigate to [http://localhost:4000](http://localhost:4000) , and there it is, your Jekyll website!


### Project structure
By default, Jekyll will create a few files for you:
- ```_config.yml``` this is your configuration file.
- ```404.html``` the page that get’s rendered on the browser when there’s a 404 error.
- ```index.md``` a .md file with the content for your Home page.
- ```about.md``` a .md file with the content for your About page.
- ```Gemfile``` and ```Gemfile.lock``` the files that allows you to manage all your required gems for the project.

And a couple of directories:
- ```_site``` this is the directory that contains all the HTML, CSS and JavaScript files, after Jekyll “compiles” everything. It’s what you’ll want to deploy to the server later on.
- ```_posts``` where all your posts’ files live.


When we created the website using the ```jekyll new``` command, Jekyll will build the site using a default gem-based theme called [Minima](https://github.com/jekyll/minima). This means that there are some files and directories that are stored in the theme's gem, and we don't have access to them.


### Overriding the default theme

In my case, I wanted to completely override this with my own styles and structure. To do this, I first opened the ```_config.yml``` file and deleted this line:

{% include code/code-caption.html caption="_config.yml" %}
```yml
theme: minima
```

And I also deleted the ```about.md``` file because I won't have an About page right now.

Then I created some new directories: 
- ```_drafts``` to store all the blog drafts.
- ```_includes``` to store HTML blocks like the site header or footer.
- ```_layouts``` to store the layouts for the pages, like the articles page.
- ```_sass``` where all the Sass files are.
- ```assets``` where we'll place all the assets we need, like images.

Here's how my site structure is looking at this stage:

```
├── Gemfile
├── Gemfile.lock
├── assets
├── _sass
├── _config.yml
├── _drafts
├── _includes
├── _layouts
├── _posts
│   └── 2019-04-11-welcome-to-jekyll.md
└── index.md
```

Now, if you try to open your site, everything will be empty. The reason why is because of how Jekyll works with pages and layouts. I’ll try to explain this in the next section.


### Creating pages - Home
Let’s first open up that ```index.md``` and checkout what’s inside.

{% include code/code-caption.html caption="index.md" %}
```
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
```

As you can see, it’s almost empty. That block of code at the start of the file, enclosed by these tripple dashes is called **Front Matter**. This is the place where we can set variables that allows us to control a few things.

Right now, there’s only that ```layout: home```. This means that the index page will use a ```layout``` called ```home```. But because we deleted the line in the ```_config.yml``` that said to Jekyll to use the Minima theme, it now has no ```home``` layout to point to. Let's fix this.
 
Create a new file inside the ```_layouts``` directory, named ```home.html```, and add  this code inside:

{% include code/code-caption.html caption="home.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Jekyll Site</title>
  </head>

  <body>
    {{ "{{ content " }}}}
  </body>
</html>
```

#### Using variables
This is a basic HTML structure, but take a look at that ```{{ "{{ content " }}}}```. That's a [Liquid](https://shopify.github.io/liquid/) tag. Liquid is a template language created by [Shopify](https://shopify.com), and in very simple terms, it allows us to introduce dynamic content inside our pages. And those double ```{``` are used to output the contents of **a variable**.

In this case, it's outputting a variable named ```content```. But if you open up your site in the browser, it is still completely empty. That's because ```content``` holds whatever you typed in your ```index.md``` file.

So, let's try this out. Open up ```index.md```, and type whatever you want after the end of the Front Matter. Here's mine:

{% include code/code-caption.html caption="index.md" %}
```
---
layout: home
---

Hello world! This is comming directly from the index.md file.
```

Go to [localhost:4000](http://localhost:4000), and this is what you be seeing:

img here

Fantastic! Now, let's try another thing. In your ```index.md```, add another variable to the front matter. Here's mine:

{% include code/code-caption.html caption="index.md front matter" %}
```
---
layout: home
title: My Jekyll Site
---
```

Now go back to your ```home.html```, and instead of having the page title hardcoded inside those ```<title>``` tags, place your ```title``` variable in there, like this:

{% include code/code-caption.html caption="home.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{ "{{ page.title " }}}}</title>
  </head>

  <body>
    {{ "{{ content " }}}}
  </body>
</html>
```

Note that we had to use ```{{ "{{ page.title " }}}}``` instead of just ```{{ "{{ title " }}}}```, because the ```title``` variable is in the front matter of that page. It's a variable within the context of a page.

In my case, I did some other stuff in the ```index.md```. I've changed the layout to one named ```default```, and added a ```page-name``` variable. You'll see why I did that, next.

Here's my ```index.md```

{% include code/code-caption.html caption="index.md" %}
```html
---
layout: default
title: A designer and developer creating things for the digital world
page-name: home
---

<section class="home-intro">
  <div class="container">
    <h1 class="intro-text title-2">Hey, I’m Vasco! A designer and developer creating things for the digital world, from <span class="location">Lisbon<span class="country body-small">(Portugal)</span></span></h1>
  </div>
</section>

<section class="home-details">
  <div class="container-narrow">
    <div class="content-section">
      <p>During the day I work in-house at <a href="https://www.hole19golf.com/">Hole19 Golf</a>, where I’m helping to build the best platform for golfers.</p>
      <p>During the night, I get busy learning new things, building my own projects, reading and fixing my old cars.</p>
    </div>
    <div class="content-section">
      <p>I’m currently building a community for old Volkswagen lovers, making a website for my friend Ana Guerra, and learning JavaScript.</p>
    </div>
    <div class="content-section">
      <p>Get in touch by reaching out at <a href="mailto:hello@byvasco.com">hello@byvasco.com</a>.</p>
      <p>Join me on <a href="https://medium.com/@byvasco" target="_blank">Medium</a>, <a href="https://twitter.com/vascogmm">Twitter</a> and <a href="https://www.instagram.com/byvasco/" target="_blank">Instagram</a>, view on-going work on <a href="https://dribbble.com/byvasco" target="_blank">Dribbble</a>, and my code on <a href="https://github.com/vascomarques" target="_blank">Github</a>.</p>
    </div>
  </div>
</section>
```

And here's my new layout ```default.html```

{% include code/code-caption.html caption="default.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{ "{{ page.title " }}}}</title>
  </head>

  <body>
    <main {{ "{% if page.page-name " }}%}class="page-{{ "{{ page.page-name " }}}}"{{ "{% endif " }}%}>
      {{ "{{ content " }}}}
    </main>
  </body>
</html>
```

Everythings' basically the same, except of that weird thing in the ```<main>``` tag that looks like an if statement. That's because it is!


#### Adding logic
Here's whats going on with that _if statement_: as you can see, I've added a ```page-name``` variable to the _front matter_ of my ```index.md```.

What I want to do with this, is to add a dynamic class name to the ```<main>```HTML tag, so that I can manipulate things differently on my CSS. But if there's no ```page-name``` variable available, I don't want to add any class.

Liquid logical statements are pretty easy to make. Here's basically the same thing that I have up there, but formatted in different lines:

```liquid
{{ "{% if page.page-name " }}%}
  class="page-{{ "{{ page.page-name " }}}}"
{{ "{% endif " }}%}
```

You can also add _elsif_ and _else_:

```liquid
{{ "{% if page.page-name " }}%}
  do something
{{ "{% elsif " }}%}
  do something else
{{ "{% else " }}%}
  do something else
{{ "{% endif " }}%}
```


#### Using includes
Before I talk about includes, there are some other things that I want to add to my ```default.html``` layout.

Firstly, I want to add some more stuff inside ```<head>```:

{% include code/code-caption.html caption="default.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ "{{ page.title " }}}} | ByVasco</title>
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <link rel="shortcut icon" type="image/png" href="/favicon.png">
  </head>

  <body>
    <main {{ "{% if page.page-name " }}%}class="page-{{ "{{ page.page-name " }}}}"{{ "{% endif " }}%}>
      {{ "{{ content " }}}}
    </main>
  </body>
</html>
```

Awesome. You can see that I've added a few ```<meta>``` tags, linked my ```main.css``` file (more on that later), and a _favicon_.

Secondly, I want to create a ```<header>``` for my website:

{% include code/code-caption.html caption="default.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ "{{ page.title " }}}} | ByVasco</title>
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <link rel="shortcut icon" type="image/png" href="/favicon.png">
  </head>

  <body>
    <header class="header-main">
      <div class="container grid-2">
        <nav class="header-navigation">
          <a href="/articles" class="link-nav">Articles</a>
        </nav>
        
        <a href="/" class="logo"></a>
      </div>
    </header>

    <main {{ "{% if page.page-name " }}%}class="page-{{ "{{ page.page-name " }}}}"{{ "{% endif " }}%}>
      {{ "{{ content " }}}}
    </main>
  </body>
</html>
```

Ok, and it's done. This is fine, it works! However, what would happen if I wanted to create another layout file, let's say an ```article.html``` layout? I would have to repeat all that ```<head>``` and ```<header>``` code. There's a better way to do this, and it's using includes.

When I was creating the directories inside the site's root, I created an ```_includes``` directory. Let's create a file inside that directory, named ```head.html```, and put all the ```<head>``` code inside it:

{% include code/code-caption.html caption="_includes/head.html" %}
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ "{{ page.title " }}}} | ByVasco</title>
  <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
  <link rel="shortcut icon" type="image/png" href="/favicon.png">
</head>
```

And now that we're here, let's do the same thing, but for the ```<header>``` code, and I'll also create another one for the site ```<footer>```. So, create a ```header.html``` file and put its code inside:

{% include code/code-caption.html caption="_includes/header.html" %}
```html
<header class="header-main">
  <div class="container grid-2">
    <nav class="header-navigation">
      <a href="/articles" class="link-nav">Articles</a>
    </nav>
    
    <a href="/" class="logo"></a>
  </div>
</header>
```

And on ```footer.html```:

{% include code/code-caption.html caption="_layouts/footer.html" %}
```html
<footer class="footer-main">
  <div class="container grid-2">
    <a href="mailto:hello@byvasco.com" class="link-nav">Email</a>

    <ul class="social-links">
      <li><a href="https://dribbble.com/byvasco" target="_blank" class="link-nav">Dribbble</a></li>
      <li><a href="https://medium.com/@byvasco" target="_blank" class="link-nav">Medium</a></li>
      <li><a href="https://www.instagram.com/byvasco/" target="_blank" class="link-nav">Instagram</a></li>
      <li><a href="https://www.twitter.com/vascogmm/" target="_blank" class="link-nav">Twitter</a></li>
      <li><a href="https://github.com/vascomarques" target="_blank" class="link-nav">Github</a></li>
    </ul>
  </div>
</footer>
```

Next, got to the ```default.html``` file, remove the ```<head>```and the ```<header>``` code, and type this in:

{% include code/code-caption.html caption="_layouts/default.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  {{ "{% include head.html " }}%}

  <body>
    {{ "{% include header.html " }}%}

    <main {{ "{% if page.page-name " }}%}class="page-{{ "{{ page.page-name " }}}}"{{ "{% endif " }}%}>
      {{ "{{ content " }}}}
    </main>
  </body>
</html>
```

Now, instead of having to repeat all that code for every layout, we can just include them where we want them to be. Another advantage for doing this is that if we want to change something in our code, we just need to change it once, and it will reflect those changes everywhere.

When using ```include```, you just need to make sure the file exists in the ```_includes``` directory. As you can see, to include a file it's as easy as this:
```liquid
{{ "{% include filename.html " }}%}
```

You can also organize your include files in directories, and access them like this:
```liquid
{{ "{% include directory/filename.html " }}%}
```

Awesome, we're done here. Now I'll just quickly create another layout file, and I'll name it ```article.html```. This is the layout that I'll use to render my individual articles.

{% include code/code-caption.html caption="_layouts/article.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  {{ "{% include head.html " }}%}

  <body>
    {{ "{% include header.html " }}%}

    <article class="article-full">
      <div class="container">
        <header class="article-header">
          <h1 class="article-title title-1">{{ "{{ page.title " }}}}</h1>
          <time class="article-date">{{ "{{ page.date | date: '%B %d, %Y' " }}}}</time>
        </header>
      </div>
      
      <div class="container-narrow">      
        <div class="article-content">
          {{ "{{ content " }}}}
        </div>
      </div>
    </article>

    {{ "{% include footer.html " }}%}
  </body>
</html>
```

By the way, take a look at how I'm outputting ```page.date```:

```html
{{ "{{ page.date | date: '%B %d, %Y' " }}}}
```

I'm using what's called a _filter_. I won't get into much detail, but just know that in this ```date``` case, we can format it in different ways. Using that format, the date will be showed like this: "April 11, 2019". Here's a usefull list of [Jekyll date formatting examples](http://alanwsmith.com/jekyll-liquid-date-formatting-examples), writen by Alan Smith.

The Home page is done, and we have all the necessary layouts and includes. Now it's time to take care of the Articles page.

### Creating pages - Articles
First, let's just take an overview of our file structure.

```
├── Gemfile
├── Gemfile.lock
├── assets
├── _sass
├── _config.yml
├── _drafts
├── _includes
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── _layouts
│   ├── default.html
│   └── article.html
├── _posts
│   └── 2019-04-11-welcome-to-jekyll.md
└── index.md
```

Ok, time to create the ```articles.md``` file:

{% include code/code-caption.html caption="articles.md" %}
```html
---
layout: default
title: Articles
page-name: articles
---

<header class="header-page">
  <div class="container">
    <h1 class="title-2 page-title">My thoughts and ideas into words.</h1>
  </div>
</header>

<section class="page-content section-articles">
  <div class="container-narrow">
    <ul class="articles-list">
      {{ "{% for post in site.posts " }}%}
        <li class="article-preview">
          <a href="{{ "{{ post.url " }}}}">
            <h2 class="article-title body-large">{{ "{{ post.title " }}}}</h2>
            <time class="article-date">{{ "{{ post.date | date: '%B %d, %Y' " }}}}</time>
          </a>
        </li>
      {{ "{% endfor " }}%}
    </ul>
  </div>
</section>
```

Almost the same as the ```index.md```, but using something new: a _for loop_. Let's take a quick look at it, and how it's used to display all the articles.


#### Using loops
You're probably familiar of how _for loops_ work. Here we use it to iterate through ```site.posts``` (```site``` is a global variable, that contains all the ```posts```). We can now display a block of code for every existing ```post```. In this case, I created an ```<li>``` with the ```post.title``` and the ```post.date```.

```html
{{ "{% for post in site.posts " }}%}
  <li class="article-preview">
    <a href="{{ "{{ post.url " }}}}">
      <h2 class="article-title body-large">{{ "{{ post.title " }}}}</h2>
      <time class="article-date">{{ "{{ post.date | date: '%B %d, %Y' " }}}}</time>
    </a>
  </li>
{{ "{% endfor " }}%}
```

So, you start the loop with ```{{ "{% for post in site.posts " }}%}```, and end with ```{{ "{% endfor " }}%}```. Everything in between that will be displayed for every iteration, and we also get access to that ```post``` variable, which in this case, contains information related to the current post iteration.

I'll talk about creating posts later, but they also have a _front matter_ where you can create variables. Here, the ```post.title``` is set in a ```title``` variable, in the post _front matter_.

The ```post.url``` and the ```post.date``` are also post-related variables, but they're automatically created by Jekyll.

At this point, I'm done with the pages for the site! Here's how your Articles page should be looking on the browser:

img er

Now let's take a look on how to create new posts!


### Creating articles
We already have that "Welcome to Jekyll", so let's and inspect what's inside that file. All your posts should be inside the ```_posts``` directory.

{% include code/code-caption.html caption="_posts/2019-04-12-welcome-to-jekyll.md" %}
```html
---
layout: post
title:  "Welcome to Jekyll!"
date:   2019-04-12 17:40:41 +0100
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

(...)
```

You can see that this is basically the same thing we have on the ```index.md``` and on the ```articles.md``` pages. Theres a _front matter_ with some variables, and everything after that is the article content.

Something important we should pay atention to, is the format we use to name our post file.

```
yyyy-mm-dd-title.md
```

They should start with **4** digits for the year, **2** for the month, **2** for the day, and then the title. Everything should be separated by hyphens.

In my case, I only use a ```layout``` and a ```title``` variable:

```
---
layout: article
title: "How I built my blog and website using Jekyll"
---
```

There are much more to know about this, but remember that I want this to be as simple as possible. If you want to know more, here's the [documentation for posts](https://jekyllrb.com/docs/posts/).


#### Using drafts
What happens if you're still working on some articles, but thei're not ready to share yet? Enter: drafts.

Remember that we created a ```_drafts``` directory? Well, this is where your drafts will live. A draft is basically the same thing as a regular post file, but without a date in its filename.

If you want to run the website with drafts, you just need to add a ```--drafts``` flag when starting the server. Like this:

```bash
$ jekyll serve --drafts
```

As easy as that!


### Adding the styles
The last thing I want to cover here is how I added the styles for my website. In my case, I've used SCSS (but Sass works too) to do that. If you don't know what Sass/SCSS is, it's a CSS pre-processor that makes our lives much easier.

There are so many resources available for you to learn it! Here a great [crash course video](https://www.youtube.com/watch?v=roywYSEPSvc), for example.

Now, 2 important things we need to to. First, we need to create a ```css``` directory, inside the ```assets``` directory, and place a ```main.scss``` inside it.

```
├── assets
│   └── css
│       └── main.scss
```

When Jekyll compiles this ```main.scss``` into our ```main.css```, it will place it inside the same directory, but in ```_site```.

So, this will result in something like this:
```
├── _site
│   └── assets
│       └── css
│           └── main.css
```

Now, what should we put inside our ```main.scss```?

First of all, it is required by Jekyll that we start the file with two lines of triple dashes, like the ones we use on the _front matter_.

{% include code/code-caption.html caption="assets/css/main.scss" %}
```sass
---
---

@import "1-base/base-main";

@import "2-layout/layout-main";

@import "3-modules/modules-main";
```

You can write you Sass/SCSS right here, or use _sass partials_. Think of _sass partials_ like the includes we used in our layouts. They are individual files that contain different parts of the website's styles, and they live inside that ```_sass``` directory.

For example, here's a basic structure for my SCSS files:

```
├── _sass
│   ├── 1-base
│   │   └── _base-main.scss
│   ├── 2-layout
│   │   └── _layout-main.scss
│   └── 3-modules
│       └── _modules-main.scss
```

Partials need to start with an "_", and when importing them in our ```main.scss``` file, we can ommit both that, and the ".scss" part.

I don't want to get into much details on this Sass/SCSS thing, because it would make this article even bigger, but I'm planning on writing another article just talking about that.
---
layout: default
title: Articles
page_name: articles
page-title: My thoughts and ideas into words.
has_footer: false
---

<header class="header-page">
  <div class="container">
    <h1 class="title-2 page-title">{{ page.page-title }}</h1>
  </div>
</header>

<section class="page-content section-articles">
  <div class="container-narrow">
    <ul class="articles-list">
      {% for post in site.posts %}
        <li class="article-preview">
          <a href="{{post.url}}">
            <h2 class="article-title title-4">{{ post.title }}</h2>
            <time class="article-date">{{ post.date | date: "%B %d, %Y" }}</time>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
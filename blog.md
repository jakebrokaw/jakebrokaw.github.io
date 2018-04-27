---
layout: large-hero--content--no-bio
title: Sometimes I put sentences together and share them here.
---

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <div class="date">
        {{ post.date | date: '%d %B %Y' }}
      </div>

      <br>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read more &rarr;</a>
    </article>
  {% endfor %}
</div>

---
layout: page
title: "log"
body_class: posts-index
permalink: /log/
---

<ul class="posts-list">
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>

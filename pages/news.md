---
layout: news
title: News
permalink: /news/
author: all
---

{% for post in site.posts %}
  {% include news/news_item.html %}
{% endfor %}

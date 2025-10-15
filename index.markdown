---
layout: home
---

<section class="intro" markdown="1">
Hi, I’m Vyoma!

![Vyoma at the Asian Art Museum in San Francisco](/assets/img/headshot.jpg)

I’m a PhD student in Information Science at Cornell Tech (NYC) advised by Angelina Wang.
</section>

<section id="about-pro" markdown="1">
## About (Professional)
I study language technologies with the goal of promoting rights and preventing injustice<!-- (skip to my publications) -->. Lately, I’ve been thinking about how language model alignment reflects societal power structures—and how to break that. I’m very grateful to be a NSF Graduate Research Fellow and a Cornell Graduate School Dean’s Scholar.

I recently completed my master’s degree in computer science at Stanford University. During that time, I benefited immensely from the advising of [Diyi Yang](https://cs.stanford.edu/~diyiy/), [Dan Ho](https://law.stanford.edu/daniel-e-ho/), [Dan Jurafsky](https://web.stanford.edu/~jurafsky/), and [Alfredo Artiles](https://ed.stanford.edu/faculty/artiles). Prior to that, I earned bachelor’s degrees in computer science and interdisciplinary studies at UC Berkeley, where I was supported by a [Google Lime Scholarship]() and was indebted to [Dan Klein](https://www2.eecs.berkeley.edu/Faculty/Homepages/klein.html), [Shreeharsh Kelkar](https://shreeharshkelkar.net/), [Rediet Abebe](https://www.redietabebe.com/), and [Alexa Koenig](https://www.law.berkeley.edu/our-faculty/faculty-profiles/alexa-koenig/) for their valuable advising.

I have previously interned at Microsoft working on responsible AI and 81cents (acquired by [Rora](https://www.teamrora.com/)) working toward closing the wage gap.
</section>

<section id="about-fun" markdown="1">
## About (Fun)
I moonlight as a [satire](https://thefreepeach.com/author/vyomaraman/) [writer](https://thesqueakywheel.org/author/vyomaraman/) and [columnist](https://www.dailycal.org/archives/constructing-a-narrative-with-supporting-columns/article_316cc3fd-e95e-5a39-be31-de0a7d733db4.html) and am deeply passionate about disability justice. In my spare time, I read, watch, and orchestrate (read: host dinner parties for) murder mysteries. I also enjoy reading [absurdist satire](https://www.goodreads.com/book/show/56269278-the-trees) and [urban fantasy](https://www.goodreads.com/book/show/42074525-the-city-we-became), and I’m on the quest to find the best hot chocolate in New York City (my picks for [Berkeley](https://casadechocolates.com/) and [Palo Alto](https://www.coupacafe.com/)).

</section>

<section id="publications" markdown="1">
## Publications

<ul class="pubs">
{% for p in site.data.publications %}
  <li>
    <a href="{{ p.url }}">{{ p.title }}</a>
    ({{ p.year }}). <em>{{ p.venue }}</em>. {{ p.authors }}.
    {% if p.website %}
      <a href="{{ p.website }}">Website</a>.
    {% endif %}
    {% if p.award %}
      <strong>{{ p.award }}</strong>.
    {% endif %}
  </li>
{% endfor %}
</ul>
</section>

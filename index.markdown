---
layout: home
---

<section class="intro" markdown="1">
Hi, I’m Vyoma!

![Vyoma at the Asian Art Museum in San Francisco](/assets/img/headshot.jpg)

I’m a PhD student in Information Science at Cornell Tech (NYC), advised by the brilliant and kind [Angelina Wang](https://angelina-wang.github.io/).
</section>

<section id="about-pro" markdown="1">
## About (Professional)
I study natural language processing with the goal of promoting rights and preventing injustice<!-- (skip to my publications) -->. Lately, I’ve been thinking about the ways in which language model alignment techniques unwittingly reify power structures—and how to unravel them. I’m very grateful to be a NSF Graduate Research Fellow and a Cornell Graduate School Dean’s Scholar.

I recently completed my master’s degree in computer science at Stanford University. During that time, I benefited immensely from the advising of [Diyi Yang](https://cs.stanford.edu/~diyiy/), [Dan Ho](https://law.stanford.edu/daniel-e-ho/), [Dan Jurafsky](https://web.stanford.edu/~jurafsky/), and [Alfredo Artiles](https://ed.stanford.edu/faculty/artiles). Prior to that, I earned bachelor’s degrees in computer science and interdisciplinary studies at UC Berkeley, where I was supported by a [Google Lime Scholarship]() and was indebted to [Dan Klein](https://www2.eecs.berkeley.edu/Faculty/Homepages/klein.html), [Shreeharsh Kelkar](https://shreeharshkelkar.net/), [Rediet Abebe](https://www.redietabebe.com/), and [Alexa Koenig](https://www.law.berkeley.edu/our-faculty/faculty-profiles/alexa-koenig/) for their valuable advising.

I am affiliated with UC Berkeley's Human Rights Center, where I research the human rights impacts of language models under the guidance of [Betsy Popken](https://humanrights.berkeley.edu/people/betsy-popken/). I have previously interned at Microsoft working on responsible AI and 81cents (acquired by Rora) working toward closing the wage gap.
</section>

<section id="about-fun" markdown="1">
## About (Fun)
I moonlight as a [satire](https://thefreepeach.com/author/vyomaraman/) [writer](https://thesqueakywheel.org/author/vyomaraman/) and [columnist](https://www.dailycal.org/archives/constructing-a-narrative-with-supporting-columns/article_316cc3fd-e95e-5a39-be31-de0a7d733db4.html) and am deeply passionate about disability justice. In my spare time, I read, watch, and orchestrate (aka host dinner parties for) murder mysteries. I also enjoy reading [absurdist satire](https://www.goodreads.com/book/show/56269278-the-trees) and [urban fantasy](https://www.goodreads.com/book/show/42074525-the-city-we-became), and I’m on a quest to find the best hot chocolate in New York City (my picks for [Berkeley](https://casadechocolates.com/) and [Palo Alto](https://www.coupacafe.com/)).

</section>

<section id="disability" markdown="1">
## Disability Culture
I value how strong disability self-identity empowers people to engage in collective advocacy, which helps keep disability rights at the center of a healthy democracy. Previously, I was a graduate student coordinator for Stanford's [Disability Community (DisCo) Space](https://icil.stanford.edu/icil-programs/disability-community-disco-space), where my efforts to engage Stanford students with disability culture both locally and globally were honored with a Stanford Community Impact Award and the [James W. Lyons Award for Service](https://deanofstudents.stanford.edu/lyons/2025-james-w-lyons-award-service-awardees).

I have also attempted to be an active creator of disability culture. My opinion column "Along for the Ride" in the Daily Californian was honored by the California College Media Association and the California News Publishers Association. I’ve also written reviews and satire highlighting disability issues in everyday situations.
</section>

<section id="publications" markdown="1">
## Publications

<ul class="pubs">
{% for p in site.data.publications %}
  <li>
    <a href="{{ p.url }}">{{ p.title }}</a>. {{ p.authors }}. <em>{{ p.venue }}</em>, {{ p.year }}.
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

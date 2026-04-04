---
layout: home
---

<section class="intro">
  <p>Hi, I’m Vyoma!</p>

  <p class="headshot-line">
    <span class="headshot-wrap" aria-label="Vyoma headshot">
      <img
        src="/assets/img/headshot.jpg"
        alt="Vyoma at the Asian Art Museum in San Francisco"
        class="headshot headshot--default"
      />
      <img
        src="/assets/img/headshot-hover.jpeg"
        alt="Vyoma in front of the Rathaus-Glockenspiel in Munich"
        class="headshot headshot--hover"
        aria-hidden="true"
      />
    </span>
    <span
      class="typing"
      data-period="2000"
      data-type='["researcher", "philomath","bookworm","interdisciplinarian"]'
    ></span>
  </p>

  <p>
    I’m a PhD student in <strong>Information Science at Cornell Tech</strong> (NYC),
    advised by the brilliant and kind
    <a href="https://angelina-wang.github.io/">Angelina Wang</a>.
  </p>
</section>

<section id="about-pro" class="collapsible-section" markdown="1">
## About (Professional)

I study natural language processing with the goal of promoting rights and preventing injustice, and I’m very grateful to be a NSF Graduate Research Fellow and a Cornell Graduate School Dean’s Scholar. Lately, I’ve been thinking about the ways that language model alignment approaches unwittingly reify power structures—and how to modify those approaches to unravel them instead.

I recently completed my master’s degree in **computer science at Stanford University**. During that time, I was fortunate to be generously advised by [Diyi Yang](https://cs.stanford.edu/~diyiy/), [Dan Ho](https://law.stanford.edu/daniel-e-ho/), [Dan Jurafsky](https://web.stanford.edu/~jurafsky/), and [Alfredo Artiles](https://ed.stanford.edu/faculty/artiles) and partially supported by Stanford's [Institute for Human-Centered AI](https://hai.stanford.edu/). Prior to that, I earned bachelor’s degrees in **computer science and interdisciplinary studies at UC Berkeley**, where I was supported by a Google Lime Scholarship and the invaluable mentorship of [Dan Klein](https://www2.eecs.berkeley.edu/Faculty/Homepages/klein.html), [Shreeharsh Kelkar](https://shreeharshkelkar.net/), [Rediet Abebe](https://www.redietabebe.com/), and [Alexa Koenig](https://www.law.berkeley.edu/our-faculty/faculty-profiles/alexa-koenig/).

I am affiliated with UC Berkeley's Human Rights Center, where I research the human rights impacts of language models under the guidance of [Betsy Popken](https://humanrights.berkeley.edu/people/betsy-popken/). I have previously interned at Microsoft working on responsible AI and at 81cents (acquired by Rora) working toward closing the wage gap.
</section>

<section id="about-fun" class="collapsible-section" markdown="1">
## About (Fun)
I moonlight as a [satire](https://thefreepeach.com/author/vyomaraman/) [writer](https://thesqueakywheel.org/author/vyomaraman/) and [columnist](https://www.dailycal.org/archives/constructing-a-narrative-with-supporting-columns/article_316cc3fd-e95e-5a39-be31-de0a7d733db4.html) and am deeply passionate about disability justice. In my spare time, I read, watch, and orchestrate (aka host dinner parties for) murder mysteries. I also enjoy reading [absurdist satire](https://www.goodreads.com/book/show/56269278-the-trees) and [urban fantasy](https://www.goodreads.com/book/show/42074525-the-city-we-became), and I’m on a quest to find the best hot chocolate in New York City (my picks for [Berkeley](https://casadechocolates.com/) and [Palo Alto](https://www.coupacafe.com/)).
</section>

<section id="disability" class="collapsible-section" markdown="1">
## Disability Culture
My work beyond research is guided by the belief that having a strong community and sense of identity is essential for individual and collective well-being. Previously, I was a graduate student coordinator for Stanford's [Disability Community (DisCo) Space](https://icil.stanford.edu/icil-programs/disability-community-disco-space), where my efforts to engage Stanford students with disability culture both locally and globally were honored with a Stanford Community Impact Award and the [James W. Lyons Award for Service](https://deanofstudents.stanford.edu/lyons/2025-james-w-lyons-award-service-awardees). I have since remained engaged in disability spaces at Cornell.

I have also attempted to be an active creator of disability culture. My opinion column "Along for the Ride" in the Daily Californian was honored by the California College Media Association and the California News Publishers Association. I’ve also written reviews and satire highlighting disability issues in everyday situations.
</section>

<section id="mentors" class="collapsible-section" markdown="1">
## Mentors
I wouldn't be who I am today without the mentorship of those further along in their academic journeys, who generously gave their time and energy to mentor me in official and unofficial capacities. In roughly chronological order, they include: Ceren Fitoz, Sabina Nong, Jean Li, Grace Lin, [Emma Lurie](https://emmalurie.github.io/), [Ezinne Nwankwo](https://sites.google.com/view/ezinnenwankwo?usp=sharing), [Eve Fleisig](https://www.efleisig.com/), [Caleb Ziems](https://calebziems.com/), [Will Held](https://williamheld.com/), [Camille Harris](https://camille2019.github.io/), [Lucy Li](https://lucy3.github.io/), [Haley Lepp](https://sites.google.com/view/hlepp/home), and [Kaitlyn Zhou](https://cs.stanford.edu/~katezhou/).
</section>

<section id="publications" class="collapsible-section">
<h2>Publications</h2>

<div class="pub-tabs" role="tablist" aria-label="Publication categories">
  <a class="pub-tab is-active" id="pub-tab-academic" href="#publications" role="tab" aria-selected="true" aria-controls="pub-panel-academic" data-target="pub-panel-academic">Academic</a>
  <a class="pub-tab" id="pub-tab-non-academic" href="#publications" role="tab" aria-selected="false" aria-controls="pub-panel-non-academic" data-target="pub-panel-non-academic">Non-Academic</a>
</div>

<div id="pub-panel-academic" class="pub-panel is-active" role="tabpanel" aria-labelledby="pub-tab-academic">
  <ul class="pubs">
  {% for p in site.data.publications %}
    <li>
      <strong>{% if p.url %}<a class="pub-title" href="{{ p.url }}">{{ p.title }}</a>{% else %}<span class="pub-title">{{ p.title }}</span>{% endif %}</strong>.
      {{ p.authors | replace: "Vyoma Raman", "<strong>Vyoma Raman</strong>" }}.
      {% if p.venue %}<em>{{ p.venue }}</em>{% if p.year %}, {% else %}.{% endif %}{% endif %}
      {% if p.year %}{{ p.year }}.{% endif %}
      {% if p.one_pager %}
        <a href="{{ p.one_pager }}">One-Page Summary</a>.
      {% endif %}
      {% if p.website %}
        <a href="{{ p.website }}">Website</a>.
      {% endif %}
      {% if p.award %}
        <strong>{{ p.award }}</strong>.
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</div>

<div id="pub-panel-non-academic" class="pub-panel" role="tabpanel" aria-labelledby="pub-tab-non-academic" hidden>
  <ul class="pubs">
  {% for p in site.data.non_academic_publications %}
    <li>
      <strong>{% if p.url %}<a class="pub-title" href="{{ p.url }}">{{ p.title }}</a>{% else %}<span class="pub-title">{{ p.title }}</span>{% endif %}</strong>.
      {{ p.authors | replace: "Vyoma Raman", "<strong>Vyoma Raman</strong>" }}.
      {% if p.venue %}<em>{{ p.venue }}</em>{% if p.year %}, {% else %}.{% endif %}{% endif %}
      {% if p.year %}{{ p.year }}.{% endif %}
      {% if p.one_pager %}
        <a href="{{ p.one_pager }}">One-Page Summary</a>.
      {% endif %}
      {% if p.website %}
        <a href="{{ p.website }}">Website</a>.
      {% endif %}
      {% if p.award %}
        <strong>{{ p.award }}</strong>.
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</div>

<script>
  (function () {
    const tabs = document.querySelectorAll("#publications .pub-tab");
    const panels = document.querySelectorAll("#publications .pub-panel");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach((panel) => {
          panel.classList.remove("is-active");
          panel.hidden = true;
        });
        const panel = document.getElementById(tab.dataset.target);
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        panel.classList.add("is-active");
        panel.hidden = false;
      });
    });
  })();
</script>
</section>

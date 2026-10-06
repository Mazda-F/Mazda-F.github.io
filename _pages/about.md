---
layout: about
title: about
permalink: /
subtitle: Electrical Engineering &middot; <a href='https://www.ubc.ca/'>The University of British Columbia</a> &middot; Robotics &amp; Hardware

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>BASc Electrical Engineering, 2027</p>
    <p>Vancouver, BC, Canada</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items

latest_posts:
  enabled: false
---

<style>
  .section-heading { margin-top: 2.5rem; scroll-margin-top: 4.5rem; clear: both; }
  .interests { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 1rem 0 0.5rem; padding: 0; list-style: none; }
  .interests li { font-size: 0.85rem; padding: 0.15rem 0.6rem; border: 1px solid var(--global-divider-color); border-radius: 999px; color: var(--global-text-color-light); }
  .timeline { position: relative; margin: 1rem 0 0; padding: 0; list-style: none; }
  .timeline::before { content: ""; position: absolute; top: 0.4rem; bottom: 0.4rem; left: 9.5rem; width: 1px; background: var(--global-divider-color); }
  .timeline > li { position: relative; display: grid; grid-template-columns: 8.5rem 1fr; column-gap: 2rem; padding-bottom: 1.4rem; }
  .timeline > li::before { content: ""; position: absolute; left: calc(9.5rem - 4px); top: 0.45rem; width: 9px; height: 9px; border-radius: 50%; background: var(--global-theme-color); }
  .timeline .when { font-size: 0.85rem; color: var(--global-text-color-light); text-align: right; padding-top: 0.1rem; }
  .timeline .org { font-weight: 600; }
  .timeline .role { font-style: italic; }
  .timeline .where { color: var(--global-text-color-light); font-size: 0.85rem; }
  .timeline p { margin: 0.2rem 0 0; font-size: 0.95rem; }
  .timeline .sub { margin-top: 0.6rem; }
  @media (max-width: 576px) {
    .timeline::before { left: 4px; }
    .timeline > li { grid-template-columns: 1fr; padding-left: 1.5rem; }
    .timeline > li::before { left: 0; }
    .timeline .when { text-align: left; }
  }
  .projects .card img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
  .projects .card img[src*="sbr-front"] { object-fit: contain; background: #fff; }
  .projects .card-title { font-size: 1.5rem; }
</style>

I'm a final-year Electrical Engineering student at the University of British Columbia, working in **robotics and hardware** with a focus on robotic actuators, control, and power electronics. After graduating, I'm looking to pursue **graduate study in robotics and mechatronics** and **full-time roles in robotics and hardware engineering**.

Most recently, I spent a year at **Tesla**, first in hardware test engineering for vehicle drive systems and then on the **Optimus** humanoid robot team, where I worked on the robot's electrical system and the design and validation of its actuators. I've also built EV electrical hardware at Fingerprint Technologies and avionics for UBC Rocket, and outside of work I design and build my own robots, like my [6-DOF robotic arm](#projects).

<ul class="interests">
  <li>Robotics</li>
  <li>Robotic actuators &amp; control</li>
  <li>Power electronics</li>
  <li>Embedded systems</li>
  <li>Mechatronic design</li>
</ul>

<h2 class="section-heading" id="experience">experience</h2>

<ul class="timeline">
  <li>
    <div class="when">Sep 2025 &ndash; Sep 2026</div>
    <div>
      <div class="org">Tesla</div>
      <div class="sub">
        <span class="role">Robotics Intern, Optimus</span>
        <span class="where">&middot; Palo Alto, CA &middot; May &ndash; Sep 2026</span>
        <p>Worked on the humanoid robot's electrical system and the design and validation of its actuators.</p>
      </div>
      <div class="sub">
        <span class="role">Hardware Test Engineering Intern</span>
        <span class="where">&middot; Fremont, CA &middot; Sep 2025 &ndash; May 2026</span>
        <p>Designed test hardware and validated power electronics for vehicle drive systems.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="when">May 2025 &ndash; Sep 2025</div>
    <div>
      <div class="org">Fingerprint Technologies</div>
      <span class="role">EV Electrical Engineering Intern</span>
      <span class="where">&middot; Vancouver, BC</span>
      <p>Designed electrical systems and hardware for high-performance e-bike drivetrains.</p>
    </div>
  </li>
  <li>
    <div class="when">Sep 2024 &ndash; Sep 2025</div>
    <div>
      <div class="org">UBC Rocket</div>
      <span class="role">Avionics Hardware Member</span>
      <span class="where">&middot; Vancouver, BC</span>
      <p>Designed avionics and electronics hardware for a 30,000 ft commercial off-the-shelf rocket.</p>
    </div>
  </li>
</ul>

<h2 class="section-heading" id="education">education</h2>

<ul class="timeline">
  <li>
    <div class="when">Expected Apr 2027</div>
    <div>
      <div class="org">The University of British Columbia</div>
      <span class="role">Bachelor of Applied Science, Electrical Engineering</span>
      <span class="where">&middot; Vancouver, BC</span>
    </div>
  </li>
</ul>

<h2 class="section-heading" id="projects">projects</h2>

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2">
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<script>
  // On phones, collapse the nav menu after tapping a same-page section link.
  document.querySelectorAll('#navbarNav a[href*="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var menu = document.getElementById("navbarNav");
      var toggle = document.querySelector(".navbar-toggler-main");
      if (menu && toggle && menu.classList.contains("show")) toggle.click();
    });
  });
</script>

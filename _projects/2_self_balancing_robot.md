---
layout: page
title: Self-Balancing Robot
description: A two-wheeled, self-balancing inverted-pendulum robot built for UBC ELEC 391, combining MATLAB modelling, cascaded PID control, and embedded hardware design.
img: assets/img/sbr-front.jpg
importance: 2
permalink: /projects/self-balancing-robot/
_styles: >
  .video-embed { position: relative; aspect-ratio: 16 / 9; margin: 1rem 0 1.5rem; }
  .video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 0.25rem; }
  .project-meta { color: var(--global-text-color-light); }
  .paper { margin: 1.5rem 0; padding: 1.25rem 1.5rem; border: 1px solid var(--global-divider-color); border-radius: 0.25rem; }
  .paper .paper-title { font-weight: 600; font-size: 1.1rem; margin-bottom: 0.25rem; }
  .paper .paper-authors, .paper .paper-venue { font-size: 0.95rem; color: var(--global-text-color-light); }
  .paper .abstract { margin: 0.9rem 0 0; font-size: 0.95rem; }
  .paper-links { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
  .paper-links a { font-size: 0.85rem; padding: 0.25rem 0.75rem; border: 1px solid var(--global-theme-color); border-radius: 0.25rem; color: var(--global-theme-color); }
  .paper-links a:hover { background: var(--global-theme-color); color: var(--global-hover-text-color); text-decoration: none; }
  .pdf-viewer { width: 100%; height: 85vh; min-height: 600px; border: 1px solid var(--global-divider-color); border-radius: 0.25rem; background: var(--global-card-bg-color); overflow: auto; }
  .pdf-viewer iframe { width: 100%; height: 100%; border: 0; display: block; }
  .pdf-viewer canvas { display: block; width: 100%; height: auto; margin: 0 auto 8px; background: #fff; }
  .pdf-status { padding: 1rem; color: var(--global-text-color-light); font-size: 0.9rem; }
  .callout { margin: 2rem 0 0; padding: 0.9rem 1.1rem; border-left: 3px solid var(--global-theme-color); background: var(--global-card-bg-color); font-size: 0.9rem; color: var(--global-text-color-light); }
---

<p class="project-meta">UBC ELEC 391 &middot; Jan &ndash; Apr 2025 &middot; with <a href="https://www.linkedin.com/in/aqzhou/">Alex Zhou</a> &middot; MATLAB/Simulink, C++ (Arduino), Python, Fusion 360</p>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/I9QuAMcz9hc" title="Self-Balancing Robot demo" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

This project was done in collaboration with Alex Zhou for the course ELEC 391 at UBC. The goal was to create a self-balancing, maneuverable two-wheeled inverted pendulum robot. It involved extensive MATLAB simulation and modelling of the physical system and its cascaded PID control system, as well as software and hardware design and integration.

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/sbr-front.jpg" title="Final robot" alt="Front view of the final self-balancing robot" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-8 mt-3 mt-md-0 d-flex align-items-center">
    {% include figure.liquid path="assets/img/sbr-hardware.png" title="Hardware overview" alt="Diagram of the robot's hardware components: GUI, Arduino with BLE and IMU, ESP32 camera, servo, motor driver and motors" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: front view of the final robot. Right: overview of the hardware components and how they interact.</div>

## Report

<div class="paper">
  <div class="paper-title">Cascaded PID Control of a Two-Wheel Inverted Pendulum Robot</div>
  <div class="paper-authors"><strong>Mazda Farrahi</strong>, Qinnan (Alex) Zhou</div>
  <div class="paper-venue">ELEC 391 final report, Electrical and Computer Engineering, The University of British Columbia, April 2025</div>
  <p class="abstract"><strong>Abstract.</strong> This project report paper details the entire process of implementing a self-balancing, maneuverable two-wheeled inverted pendulum robot. Main aspects include system modeling, control simulation, and careful considerations pertaining to microcontroller programming, PID setup, and system model validation.</p>
  <div class="paper-links">
    <a href="{{ '/assets/pdf/ELEC391_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> PDF</a>
    <a href="{{ '/assets/pdf/ELEC391_Final_Report.pdf' | relative_url }}" download><i class="fa-solid fa-download"></i> Download</a>
    <a href="https://drive.google.com/file/d/1bYAw1rlwZUaqoBukN-ig3Ub3g-CFnvVJ/view?usp=sharing" target="_blank" rel="noopener"><i class="fa-solid fa-folder-open"></i> Project documentation</a>
  </div>
</div>

<div class="pdf-viewer" id="pdf-viewer" data-src="{{ '/assets/pdf/ELEC391_Final_Report.pdf' | relative_url }}">
  <noscript>
    <iframe src="{{ '/assets/pdf/ELEC391_Final_Report.pdf' | relative_url }}" title="ELEC 391 final report"></iframe>
  </noscript>
</div>

<div class="callout">
  Disclaimer: As per UBC's Academic Honesty and Integrity policy, any usage of the resources on this page must be referenced by students. A violation of this policy may result in charges of academic misconduct.
</div>

<script>
  // Use the browser's built-in PDF viewer where it exists (desktop browsers).
  // Where it doesn't (most phones), render every page with PDF.js instead.
  (function () {
    var box = document.getElementById("pdf-viewer");
    var src = box.getAttribute("data-src");
    if (navigator.pdfViewerEnabled) {
      var frame = document.createElement("iframe");
      frame.src = src + "#view=FitH";
      frame.title = "ELEC 391 final report";
      frame.loading = "lazy";
      box.appendChild(frame);
      return;
    }
    box.style.height = "auto";
    box.style.maxHeight = "85vh";
    var status = document.createElement("div");
    status.className = "pdf-status";
    status.textContent = "Loading report…";
    box.appendChild(status);
    var lib = document.createElement("script");
    lib.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    lib.onload = function () {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      pdfjsLib.getDocument(src).promise.then(function (pdf) {
        status.remove();
        var scale = Math.min(2, (window.devicePixelRatio || 1) * 1.5);
        var chain = Promise.resolve();
        for (var i = 1; i <= pdf.numPages; i++) {
          (function (n) {
            chain = chain.then(function () {
              return pdf.getPage(n).then(function (page) {
                var viewport = page.getViewport({ scale: scale });
                var canvas = document.createElement("canvas");
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                box.appendChild(canvas);
                return page.render({ canvasContext: canvas.getContext("2d"), viewport: viewport }).promise;
              });
            });
          })(i);
        }
      }).catch(function () {
        status.textContent = "The report couldn't be displayed here. Use the PDF button above to open it.";
      });
    };
    lib.onerror = function () {
      status.textContent = "The report couldn't be displayed here. Use the PDF button above to open it.";
    };
    document.body.appendChild(lib);
  })();
</script>

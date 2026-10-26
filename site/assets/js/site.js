/* AI Video Production — field guide. Shared behaviour.
   Classic script (no modules, no fetch) so every page works from file://.
   Adding a page = add one entry to PAGES. */
(function () {
  "use strict";

  var PAGES_EN = [
    { group: "Start here" },
    { file: "watch.html", num: "▶", title: "Watch the 22-minute tutorial" },
    { file: "index.html", num: "0", title: "The big picture" },
    { file: "01-taxonomy.html", num: "1", title: "Taxonomy: how video gets made" },
    { group: "Foundations" },
    { file: "02-neural-video.html", num: "2", title: "Neural video generation" },
    { file: "03-programmatic-graphics.html", num: "3", title: "Programmatic 2D/3D & rendering" },
    { file: "04-audio.html", num: "4", title: "Audio: speech, music, sound" },
    { file: "05-editing-compositing.html", num: "5", title: "Editing, compositing, encoding" },
    { group: "Landscape" },
    { file: "06-ecosystem.html", num: "6", title: "Ecosystem map (tool explorer)" },
    { group: "The agent as director" },
    { file: "07-agent-director.html", num: "7", title: "Agent architecture & QA loop" },
    { file: "08-worked-example.html", num: "8", title: "Worked example: rocket documentary" },
    { file: "09-architectures.html", num: "9", title: "Local, cloud, hybrid" },
    { group: "Strategy" },
    { file: "10-video-types.html", num: "10", title: "12 video types, 12 strategies" },
    { file: "11-documented-workflows.html", num: "11", title: "Documented agent workflows" },
    { file: "12-engineering-legal.html", num: "12", title: "Engineering, cost, legal" },
    { file: "13-decision-framework.html", num: "13", title: "Decision framework & stacks" },
    { file: "14-maturity.html", num: "14", title: "What works today (maturity)" },
    { file: "15-roadmap.html", num: "15", title: "Learning roadmap & next steps" },
    { group: "Reference" },
    { file: "glossary.html", num: "G", title: "Glossary" },
    { file: "sources.html", num: "S", title: "Sources & method" }
  ];
  var PAGES_ZH = [
    { group: "从这里开始" },
    { file: "watch.html", num: "▶", title: "看 24 分钟教程" },
    { file: "index.html", num: "0", title: "总览" },
    { file: "01-taxonomy.html", num: "1", title: "分类：视频是怎么做出来的" },
    { group: "基础" },
    { file: "02-neural-video.html", num: "2", title: "神经视频生成" },
    { file: "03-programmatic-graphics.html", num: "3", title: "程序化图形与渲染" },
    { file: "04-audio.html", num: "4", title: "声音：语音、音乐、音效" },
    { file: "05-editing-compositing.html", num: "5", title: "剪辑、合成、编码" },
    { group: "版图" },
    { file: "06-ecosystem.html", num: "6", title: "工具版图" },
    { group: "代理当导演" },
    { file: "07-agent-director.html", num: "7", title: "代理架构与质检循环" },
    { file: "08-worked-example.html", num: "8", title: "实例：助推器纪录片" },
    { file: "09-architectures.html", num: "9", title: "本地、云端、混合" },
    { group: "策略" },
    { file: "10-video-types.html", num: "10", title: "十二种视频，十二种做法" },
    { file: "11-documented-workflows.html", num: "11", title: "已记录的代理工作流" },
    { file: "12-engineering-legal.html", num: "12", title: "工程、成本、法律" },
    { file: "13-decision-framework.html", num: "13", title: "决策框架与技术栈" },
    { file: "14-maturity.html", num: "14", title: "今天什么可靠" },
    { file: "15-roadmap.html", num: "15", title: "学习路线" },
    { group: "参考" },
    { file: "glossary.html", num: "G", title: "术语表" },
    { file: "sources.html", num: "S", title: "资料与方法" }
  ];
  var PAGES = isZh() ? PAGES_ZH : PAGES_EN;
  window.SITE_PAGES = PAGES;

  var EV_TITLES = {
    v: "Verified fact — checked against a primary source (docs, repo, paper, official announcement).",
    p: "Evidence-supported practice — widely documented way practitioners work.",
    i: "Technical analysis / inference — the author's reasoning from the evidence, not a sourced fact.",
    u: "Unverified claim — reported or marketed, but not independently confirmed.",
    x: "Emerging / experimental — works in demos or research, not yet dependable in production."
  };

  function safeGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }
  /* htmlpreview.github.io renders this site before GitHub Pages is switched on.
     Its sidebar and pager are built after that host rewrites links, so those
     hrefs have to point back at the preview or they open raw source. */
  function previewQuery() {
    if (location.hostname !== "htmlpreview.github.io") return "";
    var q = location.search.length > 1 ? location.search.slice(1) : "";
    try { q = decodeURIComponent(q); } catch (e) { /* keep the raw query */ }
    var hash = q.indexOf("#");
    if (hash >= 0) q = q.slice(0, hash);
    return q;
  }
  function currentFile() {
    var q = previewQuery();
    if (q) {
      var name = q.slice(q.lastIndexOf("/") + 1);
      return name || "index.html";
    }
    var p = decodeURIComponent(location.pathname).replace(/\\/g, "/");
    var f = p.substring(p.lastIndexOf("/") + 1);
    return f || "index.html";
  }
  function pageHref(file) {
    var q = previewQuery();
    if (!q) return file;
    return "https://htmlpreview.github.io/?" + q.slice(0, q.lastIndexOf("/") + 1) + file;
  }
  function otherLangHref() {
    var file = currentFile();
    var q = previewQuery();
    if (q) {
      var swapped = isZh() ? q.replace("/zh/", "/") : q.replace(/\/site\//, "/site/zh/");
      return "https://htmlpreview.github.io/?" + swapped;
    }
    return isZh() ? "../" + file : "zh/" + file;
  }
  function slug(s) {
    return s.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  }

  function isZh() {
    if (location.pathname.indexOf("/zh/") >= 0) return true;
    var q = previewQuery();
    return q.indexOf("/zh/") >= 0;
  }

  /* ---------- theme ---------- */
  var saved = safeGet("aiv-theme");
  if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);

  function effectiveTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function buildChrome() {
    var cur = currentFile();
    var body = document.body;
    var main = document.querySelector("main");
    if (!main) return;

    // top bar
    var top = el("header", { "class": "topbar" });
    var zh = isZh();
    var other = otherLangHref();
    top.innerHTML =
      '<button class="icon-btn" id="menu-btn" aria-label="' + (zh ? "打开导航" : "Open navigation") + '">☰</button>' +
      '<a class="brand" href="' + pageHref("index.html") + '">' +
        (zh ? "人工智能视频制作 <small>给工程师的实地指南 · 2026年10月</small>"
            : "AI Video Production <small>a field guide for engineers · Oct 2026</small>") +
      '</a>' +
      '<span class="spacer"></span>' +
      '<a class="icon-btn" id="lang-btn" href="' + other + '">' + (zh ? "English" : "中文") + '</a>' +
      '<button class="icon-btn" id="ev-btn" title="' + (zh ? "证据标签" : "Evidence label legend") + '">' + (zh ? "标签" : "Labels") + '</button>' +
      '<button class="icon-btn" id="theme-btn" aria-label="' + (zh ? "切换深色模式" : "Toggle dark mode") + '"></button>';
    body.insertBefore(top, body.firstChild);

    // layout wrapper
    var layout = el("div", { "class": "layout" });
    var side = el("nav", { "class": "sidebar", "aria-label": "Pages" });
    var html = "";
    PAGES.forEach(function (p) {
      if (p.group) { html += '<div class="group">' + p.group + "</div>"; return; }
      html += '<a href="' + pageHref(p.file) + '"' + (p.file === cur ? ' class="active" aria-current="page"' : "") +
        '><span class="num">' + p.num + "</span><span>" + p.title + "</span></a>";
    });
    side.innerHTML = html;
    var toc = el("aside", { "class": "toc", "aria-label": zh ? "本页目录" : "On this page" });
    main.parentNode.insertBefore(layout, main);
    layout.appendChild(side);
    layout.appendChild(main);
    layout.appendChild(toc);

    // pager
    var list = PAGES.filter(function (p) { return p.file; });
    var idx = -1;
    list.forEach(function (p, i) { if (p.file === cur) idx = i; });
    var content = main.querySelector(".content") || main;
    if (idx >= 0) {
      var pager = el("nav", { "class": "pager", "aria-label": zh ? "上一页和下一页" : "Previous and next page" });
      var ph = "";
      if (idx > 0) ph += '<a class="prev" href="' + pageHref(list[idx - 1].file) + '"><small>' + (zh ? "← 上一页" : "← Previous") + "</small>" + list[idx - 1].title + "</a>";
      else ph += "<span></span>";
      if (idx < list.length - 1) ph += '<a class="next" href="' + pageHref(list[idx + 1].file) + '"><small>' + (zh ? "下一页 →" : "Next →") + "</small>" + list[idx + 1].title + "</a>";
      pager.innerHTML = ph;
      content.appendChild(pager);
    }

    // headings → ids + TOC
    var heads = content.querySelectorAll("h2, h3");
    var used = {};
    var th = '<div class="label">' + (zh ? "本页目录" : "On this page") + "</div>";
    Array.prototype.forEach.call(heads, function (h) {
      if (h.closest && h.closest("details")) return;
      if (!h.id) {
        var base = slug(h.textContent) || "s"; var id = base; var n = 2;
        while (used[id] || document.getElementById(id)) { id = base + "-" + n++; }
        h.id = id;
      }
      used[h.id] = true;
      var a = el("a", { "class": "anchor", href: "#" + h.id, "aria-label": "Link to this section" }, "#");
      h.appendChild(a);
      var text = h.textContent.replace(/#$/, "");
      th += '<a class="' + h.tagName.toLowerCase() + '" href="#' + h.id + '">' + text + "</a>";
    });
    toc.innerHTML = heads.length ? th : "";

    // scrollspy
    if ("IntersectionObserver" in window && heads.length) {
      var links = toc.querySelectorAll("a");
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            Array.prototype.forEach.call(links, function (l) {
              l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id);
            });
          }
        });
      }, { rootMargin: "-60px 0px -70% 0px" });
      Array.prototype.forEach.call(heads, function (h) { obs.observe(h); });
    }

    // theme button
    var tb = document.getElementById("theme-btn");
    function paint() { tb.textContent = effectiveTheme() === "dark" ? (zh ? "☀ 浅色" : "☀ Light") : (zh ? "☾ 深色" : "☾ Dark"); }
    paint();
    tb.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      safeSet("aiv-theme", next);
      paint();
    });

    // mobile menu
    document.getElementById("menu-btn").addEventListener("click", function () { body.classList.toggle("nav-open"); });
    side.addEventListener("click", function (e) { if (e.target.closest("a")) body.classList.remove("nav-open"); });

    // evidence legend
    document.getElementById("ev-btn").addEventListener("click", function () {
      var ex = document.getElementById("ev-legend");
      if (ex) { ex.remove(); return; }
      var box = el("div", { id: "ev-legend", "class": "callout", style: "position:fixed;right:16px;top:64px;z-index:40;max-width:420px;box-shadow:0 6px 24px rgba(0,0,0,.18)" });
      var titles = zh ? {
        v: "已核对的事实——对照过原始来源（文档、仓库、论文、官方公告）。",
        p: "有证据支持的做法——从业者广泛记录的工作方式。",
        i: "技术分析或推断——作者根据证据做的推理，不是一条带来源的事实。",
        u: "未核实的说法——有人报告或在营销，但没有独立确认。",
        x: "新兴或实验——在演示或研究里能工作，生产上还不可靠。"
      } : EV_TITLES;
      box.innerHTML = '<span class="title">' + (zh ? "每页使用的证据标签" : "Evidence labels used on every page") + "</span>" +
        '<p><span class="ev v">' + (zh ? "已核对" : "Verified") + "</span> " + titles.v + "</p>" +
        '<p><span class="ev p">' + (zh ? "实践" : "Practice") + "</span> " + titles.p + "</p>" +
        '<p><span class="ev i">' + (zh ? "推断" : "Inference") + "</span> " + titles.i + "</p>" +
        '<p><span class="ev u">' + (zh ? "未核实" : "Unverified") + "</span> " + titles.u + "</p>" +
        '<p><span class="ev x">' + (zh ? "实验" : "Experimental") + "</span> " + titles.x + "</p>" +
        '<p class="small muted">' + (zh ? "再点一次“标签”关闭。" : 'Click "Labels" again to close.') + "</p>";
      body.appendChild(box);
    });
  }

  /* ---------- evidence badge tooltips ---------- */
  function decorateBadges() {
    var titles = isZh() ? {
      v: "已核对的事实——对照过原始来源（文档、仓库、论文、官方公告）。",
      p: "有证据支持的做法——从业者广泛记录的工作方式。",
      i: "技术分析或推断——作者根据证据做的推理，不是一条带来源的事实。",
      u: "未核实的说法——有人报告或在营销，但没有独立确认。",
      x: "新兴或实验——在演示或研究里能工作，生产上还不可靠。"
    } : EV_TITLES;
    Array.prototype.forEach.call(document.querySelectorAll(".ev"), function (b) {
      for (var k in titles) if (b.classList.contains(k) && !b.title) b.title = titles[k];
    });
  }

  /* ---------- sortable tables: <table data-sortable> ---------- */
  function initSortable(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll("table[data-sortable]"), function (t) {
      var ths = t.querySelectorAll("thead th");
      Array.prototype.forEach.call(ths, function (th, col) {
        th.setAttribute("data-sort", "");
        th.addEventListener("click", function () {
          var tbody = t.tBodies[0]; var rows = Array.prototype.slice.call(tbody.rows);
          var dir = th.getAttribute("data-dir") === "asc" ? "desc" : "asc";
          Array.prototype.forEach.call(ths, function (x) { x.removeAttribute("data-dir"); });
          th.setAttribute("data-dir", dir);
          rows.sort(function (a, b) {
            var x = (a.cells[col].getAttribute("data-v") || a.cells[col].textContent).trim();
            var y = (b.cells[col].getAttribute("data-v") || b.cells[col].textContent).trim();
            var nx = parseFloat(x.replace(/[^0-9.\-]/g, "")), ny = parseFloat(y.replace(/[^0-9.\-]/g, ""));
            var r = (!isNaN(nx) && !isNaN(ny) && /^[\d.,\-\s~k+]+$/i.test(x) && /^[\d.,\-\s~k+]+$/i.test(y)) ? nx - ny : x.localeCompare(y);
            return dir === "asc" ? r : -r;
          });
          rows.forEach(function (r) { tbody.appendChild(r); });
        });
      });
    });
  }
  window.SITE_initSortable = initSortable;

  /* ---------- quick filter: <input data-filter-for="tableId"> ---------- */
  function initFilters() {
    Array.prototype.forEach.call(document.querySelectorAll("input[data-filter-for]"), function (inp) {
      var t = document.getElementById(inp.getAttribute("data-filter-for"));
      if (!t) return;
      inp.addEventListener("input", function () {
        var q = inp.value.toLowerCase();
        Array.prototype.forEach.call(t.tBodies[0].rows, function (r) {
          r.style.display = r.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
        });
      });
    });
  }

  /* ---------- tabs: <div data-tabs> with .tabs buttons[data-tab] and .tab-panel[data-panel] ---------- */
  function initTabs() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-tabs]"), function (box) {
      var btns = box.querySelectorAll(".tabs button");
      var panels = box.querySelectorAll(".tab-panel");
      function show(name) {
        Array.prototype.forEach.call(btns, function (b) { b.setAttribute("aria-selected", b.getAttribute("data-tab") === name ? "true" : "false"); });
        Array.prototype.forEach.call(panels, function (p) { p.hidden = p.getAttribute("data-panel") !== name; });
      }
      Array.prototype.forEach.call(btns, function (b) {
        b.setAttribute("role", "tab");
        b.addEventListener("click", function () { show(b.getAttribute("data-tab")); });
      });
      if (btns.length) show(btns[0].getAttribute("data-tab"));
    });
  }

  /* ---------- expand/collapse all: <button data-toggle-all="containerId"> ---------- */
  function initToggleAll() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-toggle-all]"), function (b) {
      b.addEventListener("click", function () {
        var c = document.getElementById(b.getAttribute("data-toggle-all"));
        if (!c) return;
        var ds = c.querySelectorAll("details");
        var anyClosed = Array.prototype.some.call(ds, function (d) { return !d.open; });
        Array.prototype.forEach.call(ds, function (d) { d.open = anyClosed; });
        b.textContent = anyClosed ? (isZh() ? "全部折叠" : "Collapse all") : (isZh() ? "全部展开" : "Expand all");
      });
    });
  }

  function init() {
    buildChrome();
    decorateBadges();
    initSortable();
    initFilters();
    initTabs();
    initToggleAll();
    if (typeof window.PAGE_INIT === "function") window.PAGE_INIT();
    decorateBadges();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

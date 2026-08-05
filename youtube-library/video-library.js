(function () {
  "use strict";
  const videos = Array.isArray(window.PROGRAMMABLE_LIGHT_VIDEOS) ? window.PROGRAMMABLE_LIGHT_VIDEOS : [];
  const list = document.getElementById("video-list");
  const topicNav = document.getElementById("topic-nav");
  const emptyState = document.getElementById("empty-state");
  const modal = document.getElementById("video-modal");
  const frame = document.getElementById("player-frame");
  const modalTitle = document.getElementById("modal-title");
  const modalExternal = document.getElementById("modal-external");
  const closeButton = document.getElementById("close-button");
  let returnFocus = null;
  const text = (value) => String(value ?? "");
  const slug = (value) => text(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const make = (tag, className, content) => { const element = document.createElement(tag); if (className) element.className = className; if (content !== undefined) element.textContent = content; return element; };

  function checkedVideos() {
    const required = ["topic", "videoId", "title", "channel", "duration", "theoryTitle", "theoryHref", "watchFor", "rationale"];
    const seen = new Set();
    return videos.filter((video, index) => {
      const valid = required.every((field) => text(video[field]).trim()) && /^[A-Za-z0-9_-]{11}$/.test(text(video.videoId)) && !seen.has(video.videoId);
      if (!valid) console.warn("Video entry rejected", index);
      seen.add(video.videoId);
      return valid;
    });
  }

  function openVideo(video, trigger) {
    returnFocus = trigger;
    modalTitle.textContent = video.title;
    frame.title = video.title;
    frame.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`;
    modalExternal.href = `https://www.youtube.com/watch?v=${video.videoId}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closeVideo() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    frame.src = "about:blank";
    document.body.style.overflow = "";
    if (returnFocus) returnFocus.focus();
  }

  function renderCard(video) {
    const article = make("article", "video-card");
    article.id = `clip-${slug(video.topic)}-${video.videoId}`;
    const thumbnailButton = make("button", "thumbnail-button");
    thumbnailButton.type = "button";
    thumbnailButton.setAttribute("aria-label", `Play ${video.title}`);
    const image = document.createElement("img");
    image.src = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;
    image.alt = `YouTube thumbnail for ${video.title}`;
    image.loading = "lazy";
    thumbnailButton.append(image, make("span", "play-badge", "Play"));
    thumbnailButton.addEventListener("click", () => openVideo(video, thumbnailButton));

    const content = make("div", "video-content");
    content.append(make("p", "topic-pill", video.topic), make("h2", "video-title", video.title), make("p", "video-meta", `${video.channel} · ${video.duration}`));
    const theory = make("a", "theory-link", `Read first: ${video.theoryTitle}`);
    theory.href = video.theoryHref;
    const watch = make("p", "watch-for");
    watch.append(make("strong", "", "Watch for: "), document.createTextNode(video.watchFor));
    const rationale = make("p", "rationale");
    rationale.append(make("strong", "", "Why this clip: "), document.createTextNode(video.rationale));
    const actions = make("div", "actions");
    const play = make("button", "button primary", "Play here");
    play.type = "button";
    play.addEventListener("click", () => openVideo(video, play));
    const external = make("a", "button", "Open on YouTube (non-embed fallback)");
    external.href = `https://www.youtube.com/watch?v=${video.videoId}`;
    external.target = "_blank";
    external.rel = "noopener";
    actions.append(play, external);
    content.append(theory, watch, rationale, actions);
    article.append(thumbnailButton, content);
    list.append(article);
  }

  const validVideos = checkedVideos();
  emptyState.hidden = validVideos.length > 0;
  topicNav.hidden = validVideos.length === 0;
  [...new Set(validVideos.map((video) => video.topic))].forEach((topic) => {
    const first = validVideos.find((video) => video.topic === topic);
    const link = make("a", "", topic);
    link.href = `#clip-${slug(topic)}-${first.videoId}`;
    topicNav.append(link);
  });
  validVideos.forEach(renderCard);
  closeButton.addEventListener("click", closeVideo);
  modal.addEventListener("click", (event) => { if (event.target === modal) closeVideo(); });
  window.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal.classList.contains("open")) closeVideo(); });
})();

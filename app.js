const listEl = document.getElementById("list");
const emptyEl = document.getElementById("empty");
const countEl = document.getElementById("count");
const searchEl = document.getElementById("search");

function render(items) {
  listEl.innerHTML = "";
  emptyEl.style.display = items.length ? "none" : "block";
  countEl.textContent =
    items.length + (items.length === 1 ? " esquema" : " esquemas");

  items.forEach((s, i) => {
    if (s.video === null) return;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb">
        <span class="br1"></span><span class="br2"></span>
        <img src="${s.image}" alt="Vista previa del esquema: ${s.name}" loading="lazy">
      </div>
      <div class="content">
        <div class="head">
          <h3>${s.name}</h3>
          <div class="tags">${s.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        ${
          s.video
            ? `<a class="video-link" href="${s.video}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 7.4.2 7.4.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.8-.2-3.5-.2-3.5zM9.9 14.6V8.4l5.8 3.1-5.8 3.1z"/></svg>
              Ver el vídeo
            </a>`
            : `<span class="video-pending">Vídeo todavía sin grabar</span>`
        }
        ${
          s.comment
            ? `<p class="comment"><span class="comment-label">Comentario</span>${s.comment}</p>`
            : ""
        }
        <div class="code-row">
          <textarea id="code-${i}" readonly spellcheck="false">${s.code}</textarea>
          <button class="copy-btn" data-target="code-${i}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="12" height="12" rx="1.5"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
            <span>Copiar</span>
          </button>
        </div>
      </div>
    `;
    listEl.appendChild(card);
  });

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const ta = document.getElementById(btn.dataset.target);
      try {
        await navigator.clipboard.writeText(ta.value);
      } catch (e) {
        ta.select();
        document.execCommand("copy");
      }
      const label = btn.querySelector("span");
      const original = label.textContent;
      btn.classList.add("copied");
      label.textContent = "Copiado";
      setTimeout(() => {
        btn.classList.remove("copied");
        label.textContent = original;
      }, 1500);
    });
  });
}

searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  render(schematics.filter((s) => s.name.toLowerCase().includes(q)));
});

render(schematics);

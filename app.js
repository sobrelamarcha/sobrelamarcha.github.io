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
      <div class="thumb checkerboard">
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
              <svg class="icon"><use href="#icon-youtube"></use></svg>
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
            <svg class="icon"><use href="#icon-copy"></use></svg>
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

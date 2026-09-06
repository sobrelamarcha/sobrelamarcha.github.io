(function () {
  var sprite = `<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 12l9-9 9 9M5 10v10h14V10" />
    </symbol>

    <symbol id="icon-grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 3v18M3 8h18" />
    </symbol>

    <symbol id="icon-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </symbol>

    <symbol id="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </symbol>

    <symbol id="icon-youtube" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 7.4.2 7.4.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.8-.2-3.5-.2-3.5zM9.9 14.6V8.4l5.8 3.1-5.8 3.1z" />
    </symbol>

    <symbol id="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <rect x="9" y="9" width="12" height="12" rx="1.5" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </symbol>
  </svg>`;

  document.currentScript.insertAdjacentHTML("afterend", sprite);
})();

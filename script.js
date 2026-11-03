(function () {
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('footer a[href]').forEach(function (link) {
    if (link.getAttribute('href') === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.setAttribute('rel', 'noopener noreferrer');
  });

  if (window.location.protocol === 'file:') {
    var video = document.querySelector('.video');
    var iframe = video && video.querySelector('iframe');
    var fallback = video && video.querySelector('.video-fallback');

    if (iframe) {
      iframe.parentNode.removeChild(iframe);
    }

    if (fallback) {
      fallback.removeAttribute('hidden');
    }
  }
}());

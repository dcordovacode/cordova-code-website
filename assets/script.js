document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  if (typeof mermaid !== 'undefined') {
    var css = getComputedStyle(document.documentElement);
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        background: css.getPropertyValue('--bg').trim(),
        primaryColor: css.getPropertyValue('--bg-alt').trim(),
        primaryTextColor: css.getPropertyValue('--text').trim(),
        primaryBorderColor: css.getPropertyValue('--teal').trim(),
        lineColor: css.getPropertyValue('--teal').trim(),
        secondaryColor: css.getPropertyValue('--line').trim(),
        tertiaryColor: css.getPropertyValue('--bg-alt').trim(),
        fontFamily: "'JetBrains Mono', monospace"
      }
    });
  }
});

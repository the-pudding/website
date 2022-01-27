(function() {
  var DPR = Math.min(2, window.devicePixelRatio);
  var ORIG = 640;

  window.generalSidebar = function() {
    const $menu = d3.select('.menu');
    const $sidebar = d3.select('.sidebar');
    const $toggleOn = $menu.select('.toggle--on');
    const $toggleOff = $menu.select('.toggle--off');
    $toggleOn.on('click', () => {
      $sidebar.classed('is-reveal', true);
      $menu.classed('is-reveal', true);
      $toggleOn.classed('is-hidden', true);
      $toggleOff.classed('is-hidden', false);
    });
    $toggleOff.on('click', () => {
      $sidebar.classed('is-reveal', false);
      $menu.classed('is-reveal', false);
      $toggleOn.classed('is-hidden', false);
      $toggleOff.classed('is-hidden', true);
    });
  };

  window.generalRandom = function() {
    var numColors = 4;
    var r = Math.floor(Math.random() * numColors);
    var c = 'colorize--' + r;
    var classBackground = 'random-background--' + r;
    var classColor = 'random-color--' + r;
    var linkColor = 'random-link--' + r;
    var classStroke = 'random-stroke--' + r;
    d3.selectAll('.random-background').classed(classBackground, true);
    d3.selectAll('.random-color').classed(classColor, true);
    d3.selectAll('.random-stroke').classed(classStroke, true);
    d3.select('body').classed(linkColor, true);
  };

  function loadImage(url, cb) {
    var img = new Image();
    img.onload = function() {
      cb(null, img);
    };
    img.onerror = function() {
      cb(`error loading image: ${url}`);
    };
    img.src = url;
  }

  window.generalImages = function() {
    // 640
    // 1280 = w * 2
    // 1920 = w * 3
    d3.selectAll('.story-item .item__img img').each(function() {
      var $img = d3.select(this);
      var w = $img.node().offsetWidth;
      if (w) {
        var factor = Math.min(3, Math.ceil((w * DPR) / ORIG));
        if (factor > 1) {
          var src = $img.attr('src');
          var newSrc = src.replace(ORIG, factor * ORIG);
          loadImage(newSrc, function(err) {
            if (!err) $img.attr('src', newSrc);
          });
        }
      }
    });
  };

  generalSidebar();
  generalRandom();
  generalImages();
})();

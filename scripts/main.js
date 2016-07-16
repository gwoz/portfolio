$(document).ready(function() {
  
  // Fullpage.js Settings

  $('#fullpage').fullpage({
    anchors:['main', 'development', 'consulting'],
    continuousVertical: true,
    sectionsColor : ['#78CAD2', '#FFF07C', '#52B788']
  });

  // iPhone Previews

  bioMp(document.getElementById('battleground-preview'), {
    url: 'https://github.com/gwoz/battleground',
    view: 'front',
    image: '../images/iphone6_front_black.png',
    scale: 0.4
  });

  bioMp(document.getElementById('meteor404-preview'), {
    url: 'http://meteor404.herokuapp.com',
    view: 'front',
    image: '../images/iphone6_front_black.png',
    scale: 0.4
  });
});
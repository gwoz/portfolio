$(document).ready(function() {
  
  // Fullpage.js Settings
  if (screen && screen.width > 700) {
    $('#fullpage').fullpage({
      continuousVertical: true,
      anchors:['main', 'development', 'consulting']
    });
  }

  // iPhone Previews

  // bioMp(document.getElementById('battleground-preview'), {
  //   url: 'https://github.com/gwoz/battleground',
  //   view: 'front',
  //   image: '../images/iphone6_front_black.png',
  //   scale: 0.4
  // });

  // bioMp(document.getElementById('meteor404-preview'), {
  //   url: 'http://meteor404.herokuapp.com',
  //   view: 'front',
  //   image: '../images/iphone6_front_black.png',
  //   scale: 0.4
  // });
});
// Configurations :
var project = {};
// project.name = '';
// project.dest = '../www/wp-content/themes/' + project.name + '/assets/';
project.dest = '../www/assets/';

module.exports = {
  clean: {
    dest: project.dest
  },
  css: {
    src: [
      './src/sass/*.scss',
      './src/sass/**/*.scss'
    ],
    dest: project.dest + '/css/'
  },
  fonts: {
    src: './src/fonts/**/*',
    dest: project.dest  + '/fonts/'
  },
  img: {
    src: [
      './src/img/*.jpeg',
      './src/img/*.jpg',
      './src/img/*.png',
      './src/img/*.gif',
      '!./src/img/._*.jpeg',
      '!./src/img/._*.jpg',
      '!./src/img/._*.png',
      '!./src/img/._*.gif',
    ],
    dest: project.dest  + '/img/'
  },
  script: {
    mainSrc: ['./src/js/main.js', './src/js/**/*.js', '!./src/js/vendor/**'],
    vendorHeaderSrc: '',
    vendorFooterSrc: [
      './bower_components/jquery/dist/jquery.js',
      './bower_components/owl.carousel/dist/owl.carousel.js',
      './bower_components/jquery-lazy/jquery.lazy.js',
      './bower_components/wow/dist/wow.js',
      './bower_components/svgxuse/svgxuse.js'
    ],
    dest : project.dest + '/js/'
  },
  svg: {
    src: [
      './src/img/svg/*.svg',
      '!./src/img/svg/._*.svg'
    ],
    dest: project.dest  + '/img/svg/'
  }
};
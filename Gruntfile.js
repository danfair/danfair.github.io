module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/jquery.waypoints.min.js', 'js/main.js']
        }
      }
    },

    jshint: {
      src: ['Gruntfile.js', 'js/main.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,  // avoid some non-errors
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true
        }
      }
    },

    sass: {  
      dist: {                 
        options: {                       
          style: 'expanded',
          require: [
            'sass-globbing',
            'susy'
          ]
        },
        files: {                      
          'style.css': 'sass/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 9'],
        map: false
      },
      dist: {
        files: [{
          expand: true,
          src: 'style.css'
        }]
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['style.css'],
          dest: '.',
          ext: '.min.css'
        }]
      }
    },

    watch: {
        scripts: {
          files: 'js/main.js',
          tasks: ['uglify'],
          options: {
            livereload: 35729,
          }
        },
        css: {
          files: 'sass/**/*',
          tasks: 'sass'
        },
        autoprefixer: {
          files: 'sass/style.scss',
          tasks: 'autoprefixer'
        },
        cssmin: {
          files: 'style.css',
          tasks: 'cssmin',
          options: {
            livereload: 35729,
          }
        }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', ['uglify', 'sass', 'watch', 'autoprefixer', 'cssmin']);


};
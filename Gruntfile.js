module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: "dist",
      tmp: 'tmp'
    },
    concat: {
      less: {
        src: [
          'vendor/components/bootstrap/less/variables.less',
          'vendor/components/bootstrap/less/mixins/responsive-visibility.less',
          'less/<%= pkg.name %>.less'
        ],
        dest: 'tmp/<%= pkg.name %>.less'
      },
      sass: {
        src: [
          'vendor/components/bootstrap-sass-official/assets/stylesheets/bootstrap/_variables.scss',
          'vendor/components/bootstrap-sass-official/assets/stylesheets/bootstrap/mixins/_responsive-visibility.scss',
          'sass/<%= pkg.name %>.scss'
        ],
        dest: 'tmp/<%= pkg.name %>.scss'
      }
    },
    less: {
      dist: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map',
          modifyVars: {
            'screen-xs': '200px',
            'screen-sm': '470px',
            'screen-md': '992px',
            'screen-lg': '1200px'
          }
        },
        src: ['tmp/<%= pkg.name %>.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'tmp/<%= pkg.name %>.scss'
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('build', [
    'clean:dist',
    'concat:' + (grunt.option('sass') ? 'sass' : 'less'),
    (grunt.option('sass') ? 'sass' : 'less') + ':dist',
    'cssmin:dist',
    'clean:tmp'
  ]);
  
  grunt.registerTask('default', [
    'build'
  ]);
  
  
};
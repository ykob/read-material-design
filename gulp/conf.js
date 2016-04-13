// 設定ファイル
// 対象パスやオプションを指定

const DIR = module.exports.DIR =  {
  PATH: '',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'build'
};

module.exports.serve = {
  notify: false,
  startPath: DIR.PATH,
  ghostMode: false,
  server: {
    baseDir: DIR.DEST,
    index: 'index.html',
    routes: {
      [DIR.PATH]: `${DIR.DEST}${DIR.PATH}/`
    }
  }
};

module.exports.scripts = {
  common: '',
  entryFiles: [
    `./${DIR.SRC}/js/main.js`,
  ],
  browserifyOpts: {
    transform: [
      ['babelify', {
        babelrc: false,
        presets: ['es2015']
      }],
      'envify'
    ]
  },
  dest: `${DIR.DEST}${DIR.PATH}/js`
};

module.exports.uglify = {
  src: `./${DIR.DEST}${DIR.PATH}/js/main.js`,
  dest: `${DIR.BUILD}${DIR.PATH}/js`,
  opts: {
    preserveComments: (node, comment) => /This header is generated by licensify/.test(comment.value)
  }
};

module.exports.jade = {
  src: [
    `${DIR.SRC}/**/*.jade`,
    `!${DIR.SRC}/**/_**/*.jade`,
    `!${DIR.SRC}/**/_*.jade`
  ],
  dest: `${DIR.DEST}${DIR.PATH}`,
  opts: {
    pretty: true
  }
};


module.exports.sass = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`
  ],
  dest: `${DIR.DEST}${DIR.PATH}/css`,
  browsers: [
    'last 2 versions',
    'ie >= 9',
    'Android >= 4',
    'ios_saf >= 8',
  ]
};

module.exports.minifyCss = {
  src: `${DIR.DEST}${DIR.PATH}/css/main.css`,
  dest: `${DIR.BUILD}${DIR.PATH}/css`
};

module.exports.imagemin = {
  src: [
    `${DIR.DEST}${DIR.PATH}/**/*.{jpg,jpeg,png,gif}`
  ],
  dest: `${DIR.BUILD}${DIR.PATH}/img`
};

module.exports.replace = {
  src: [
    `${DIR.DEST}${DIR.PATH}/**/*.html`
  ],
  dest: `${DIR.BUILD}${DIR.PATH}`
};

module.exports.copy = {
  src: [
    `${DIR.SRC}/js/plugin/*.js`,
  ],
  dest: `${DIR.DEST}${DIR.PATH}/js/`
};

module.exports.clean = {
  path: [`${DIR.BUILD}${DIR.PATH}`]
};

module.exports.filelist = {
  src: `${DIR.DEST}${DIR.PATH}/img/`,
  option: {
    flatten: true
  },
  entry: [
    `common`
  ]
};

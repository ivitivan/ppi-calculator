import babel from 'rollup-plugin-babel';

export default {
  entry: './src/bin.js',
  dest: './dist/bin.js',
  format: 'cjs',
  banner: '#!/usr/bin/env node',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup']
    })
  ]
}


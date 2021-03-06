const typescript = require('rollup-plugin-typescript2');
const uglifyjs = require('rollup-plugin-uglify');
const path = require('path');

export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    file: path.resolve(__dirname, '../dist/monitor.js'),
    format: 'umd',
    name: 'monitorjs',
  },
  plugins: [
    typescript({}),
    uglifyjs.uglify(),
  ],
};
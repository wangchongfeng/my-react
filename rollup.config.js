import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
export default {
  input: {
    'react': './packages/react/index.js',
    'react-dom': './packages/react-dom/index.js',
  },
  output: {
    dir: './dist',
    format: 'es'
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    // uglify(),
    livereload(),
    // serve({
    //   open: true, // 自动打开页面
    //   port: 8000,
    //   openPage: '/public/index.html', // 打开的页面
    //   contentBase: ''
    // })
  ]
}
/*
 * @Description:
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-14 19:19:29
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 12:03:01
 */
const path = require('path')
const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader')
const list = {}
// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js',
//   link: './components/lib/link/index.js',
//   button: './components/lib/button/index.js',
// }

async function getComponents(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/*.js`)
  files.forEach((file) => {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  })
}
getComponents('components/lib', list)
module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}

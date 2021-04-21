class DeleteSourceMap {
  constructor () {
  }

  apply (compiler) {
    compiler.plugin('done', (stats) => {
      const fs = require('fs')
      let countMatchMapAssets = 0
      Object.keys(stats.compilation.assets)
      .filter(name => /\.js\.map/.test(name))
      .forEach((name) => {
        countMatchMapAssets += 1
        const { existsAt } = stats.compilation.assets[name]
        fs.unlinkSync(existsAt)
      })
      console.log(`⭐⭐⭐deleted map file: ${countMatchMapAssets} asset(s) processed`);
    })
  }
}

module.exports = DeleteSourceMap

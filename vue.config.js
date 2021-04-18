module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'CONV/ETH Pool Data'
        return args
      })
    }
  }
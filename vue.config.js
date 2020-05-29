module.exports = {
  devServer: {
    host: 'localhost'
    },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/_variables.scss";
        @import "@/scss/_reset.scss";`

      }
    }
  }
};


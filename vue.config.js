module.exports = {
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Aencespoir";
            return args;
        });
    },
    publicPath: '/',
    devServer: {
        port: 8000,
        proxy: {
            '/public': {
                target: 'http://192.168.1.6:4000',
                changeOrigin: true,
                ws: true
            }
        }
    }
}
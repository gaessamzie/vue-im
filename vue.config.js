module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/base/typography.scss";
                `
            }
        }
    },
    devServer: {
        overlay: false
    },
};
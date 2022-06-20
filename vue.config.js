module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/base/mixin.scss";
                    @import "@/assets/scss/base/typography.scss";
                `
            }
        }
    },
    devServer: {
        overlay: false
    },
};
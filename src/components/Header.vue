<template>
    <header class="header">
        <h1 class="header__title">집에서 작업한걸 올려볼까 두번째</h1>
        <button type="button" class="header__menu-button" v-on:click="asideOpen">메뉴</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: [
        'aside'
    ],
    methods: {
        asideOpen() {
            this.$emit('asideChange', this.aside = true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/header';
</style>
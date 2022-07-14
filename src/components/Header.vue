<template>
    <header class="header">
        <h1 class="header__title">집에서 작업한걸 올려볼까 두번째</h1>
        <button type="button" class="header__menu-button" v-on:click="asideOpen">메뉴</button>
    </header>
</template>

<script>
import eventBus from '@/main';

export default {
    name: 'Header',
    methods: {
        asideOpen() {
            eventBus.$emit('asideChange', true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/header';
</style>
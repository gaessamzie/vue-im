<template>
    <aside class="aside">
        햄버거 임시{{aside}}
        <button type="button" v-on:click="asideClose">닫기</button>
    </aside>
</template>

<script>
import eventBus from '@/main';

export default {
    name: 'Aside',
    data() {
        return {
            aside: false
        }
    },
    methods: {
        asideClose() {
            this.aside = false;
        }
    },
    created() {
        eventBus.$on('asideChange', data => {
            this.aside = data;
        });
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/aside';
</style>
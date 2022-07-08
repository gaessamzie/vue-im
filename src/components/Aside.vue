<template>
    <aside class="aside">
        햄버거 임시
        <button type="button" v-on:click="asideClose">닫기</button>
    </aside>
</template>

<script>
export default {
    name: 'Aside',
    props: [
        'aside'
    ],
    methods: {
        asideClose() {
            this.$emit('asideChange', this.aside = false);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/aside';
</style>
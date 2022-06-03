<template>
    <footer class="footer">
        <ul class="footer__menu">
			<li><router-link to="/">홈</router-link></li>
            <li><router-link to="">회사소개</router-link></li>
            <li><router-link to="">이용약관</router-link></li>
            <li><router-link to="/privacy"><strong>개인정보처리방침</strong></router-link></li>
		</ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/footer';
</style>
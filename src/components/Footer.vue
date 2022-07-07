<template>
    <footer class="footer">
        <ul class="menu">
			<li class="menu__item"><router-link to="/">홈</router-link></li>
            <li class="menu__item"><router-link to="">회사소개</router-link></li>
            <li class="menu__item"><router-link to="">이용약관</router-link></li>
            <li class="menu__item"><router-link to="/privacy"><strong>개인정보처리방침</strong></router-link></li>
		</ul>
        <div class="information">
            <button v-bind:class="[address_sh ? 'information__adr-button--active' : 'information__adr-button']" v-on:click="address_sh =! address_sh">사업자정보</button>
            <address class="information__adr-detail" v-show="address_sh">
                대표 : 신대표<br />
                서울 성동구 아차산로17길<br />
                전화 : 070-000-0000<br />
                사업자등록번호 : 001-01-00001
            </address>
            <p class="information__copy">Copyright © NCGN. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            address_sh: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/footer';
</style>
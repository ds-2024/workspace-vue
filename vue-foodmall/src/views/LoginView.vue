<template>
    <!-- <AppHeader /> -->
    <!-- //header -->

    <body>
        <div class="main-container">
            <div class="container">

                <img class="logo" src="@/assets/images/삼뚜기.png" alt="로고">

                <div class="header">엔 다 있다!</div>
            </div>
            <div class="login-form">
                <form v-on:submit.prevent="login" method="post">
                    <input type="text" placeholder="아이디">
                    <input type="password" placeholder="비밀번호">
                    <button type="submit" class="login">로그인</button>
                    <router-link to="/loginform" class="signup">회원가입</router-link>
                </form>
            </div>
        </div>
        <!--<AppFooter />-->
        <!--//footer-->
    </body>
</template>


<script>
import "@/assets/css/login.css"
//import AppFooter from '@/components/AppFooter.vue';
//import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "LoginView",
    components: {
        //AppFooter,
        //AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>


<style></style>
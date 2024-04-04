<template>
    <div>
        <div id="header">
            <span>FITNESS ON</span>
            <router-link to="/member/main" id="HomeBtn">Home</router-link>
            <router-link to="/member/login" id="LogOutBtn">Logout</router-link>

        </div>
        <div id="JoinOkAll">
            <h1 id="JoinOktitle1">회원가입을</h1>
            <h1 id="JoinOktitle2">축하합니다!</h1>
            <img src="@/assets/img/fitness-icon.png" alt="" id="JoinOkImg">
            <router-link to="/member/login" id="JoinOkBtn">로그인으로</router-link>
           
        </div>
    </div>
</template>


<script>
import "@/assets/css/JoinOk.css"
export default {
    name: "JoinOkView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
<template>
<head>    
    <title>LoginFormView</title>
</head>
<body>

<h2 id="threemall">삼뚜기mall엔 다 있다!</h2>

<form v-on:submit.prevent="login" method="post">
    <div class="input id">
        <input type="text" id="username" name="username" required>
    </div>
    <div class="input pw">
        <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">로그인</button>
</form>

<p><a href="/register">회원가입</a></p>

</body>


</template>


<script>
import "@/assets/css/loginView.css"
export default {
    name: "LoginFormView",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>


<style></style>
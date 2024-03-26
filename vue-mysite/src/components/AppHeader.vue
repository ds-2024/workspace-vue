<template>
    <div>
        <div id="header" class="clearfix">
                <h1>
                
                    <router-link to="/">Mysite</router-link>
                </h1>

   
                <ul v-if="this.$store.state.authUser != null">
                    <li>{{this.$store.state.authUser.name}}님 안녕하세요^^ </li>
                    <li><button v-on:click="logout" type="button" class="btn_s">로그아웃</button></li>
                    <li><router-link class="btn_s" to="/user/modifyform">회원정보수정</router-link></li>

                </ul>
   
                <ul v-if="this.$store.state.authUser == null">
                    

                    
                    <li><router-link class="btn_s" to="/user/loginform">로그인</router-link></li>
                        
                    <li><router-link class="btn_s" to="/user/modifyform">회원가입</router-link></li>
                    
                        
                </ul>

            </div>
            <!-- //header --> 
    </div>
</template>


<script>
export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
        logout(){
                console.log("로그아웃");
                this.$store.commit("setAuthUser", null);
                this.$store.commit("setToken", null);
            }
    },
    created(){}
};
</script>

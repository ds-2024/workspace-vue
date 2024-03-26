<template>
    <div>
        <div id="wrap">

<AppHeader />
<!-- //header -->

<div id="nav">
    <ul class="clearfix">
        <li><a href="">입사지원서</a></li>
        <li><a href="">게시판</a></li>
        <li><a href="">갤러리</a></li>
        <li><a href="">방명록</a></li>
    </ul>
</div>
<!-- //nav -->

<div id="container" class="clearfix">
    <div id="aside">
        <h2>회원</h2>
        <ul>
            <li>회원정보</li>
            <li>로그인</li>
            <li>회원가입</li>
        </ul>
    </div>
    <!-- //aside -->

    <div id="content">
    
        <div id="content-head">
            <h3>회원정보</h3>
            <div id="location">
                <ul>
                    <li>홈</li>
                    <li>회원</li>
                    <li class="last">회원정보</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
         <!-- //content-head -->

        <div id="user">
            <div id="modifyForm">
                <form v-on:submit.prevent="modifyUser" action="" method="">

                    <!-- 아이디 -->
                    <div class="form-group">
                        <label class="form-text" for="input-uid">아이디</label> 
                        <span class="text-large bold">{{userVo.id}}</span>
                    </div>

                    <!-- 비밀번호 -->
                    <div class="form-group">
                        <label class="form-text" for="input-pass">패스워드</label> 
                        <input type="text" id="input-pass" name="password" v-model="userVo.password" placeholder="비밀번호를 입력하세요"	>
                    </div>

                    <!-- 이메일 -->
                    <div class="form-group">
                        <label class="form-text" for="input-name">이름</label> 
                        <input type="text" id="input-name" name="name" v-model="userVo.name" placeholder="이름을 입력하세요">
                    </div>

                    <!-- //나이 -->
                    <div class="form-group">
                        <span class="form-text">성별</span> 
                        
                        <label for="rdo-male">남</label> 
                        <input type="radio" id="rdo-male" name="gender" value="male" v-model="userVo.gender"> 
                        
                        <label for="rdo-female">여</label> 
                        <input type="radio" id="rdo-female" name="gender" value="female" v-model="userVo.gender"> 

                    </div>

                    <!-- 버튼영역 -->
                    <div class="button-area">
                        <button type="submit" id="btn-submit">회원정보수정</button>
                    </div>
                    
                </form>
            
            
            </div>
            <!-- //modifyForm -->
        </div>
        <!-- //user -->
    </div>
    <!-- //content  -->

</div>
<!-- //container  -->

<AppFooter />
<!-- //footer -->

</div>
<!-- //wrap -->

    </div>
</template>


<script>
import axios from 'axios';
import "@/assets/css/user.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "ModifyFormView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
           userVo:{
                no: "",
                id: "",
                password: "",
                name:"",
                gender: ""
           }
        };
    },
    methods: {
        getAuthUser() {
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9000/api/users/modify',
                headers: { "Content-Type": "application/json; charset=utf-8",
                            "Authorization": "Bearer " + this.$store.state.token
            }, //전송타입 + 토큰
                
                responseType: 'json' //수신타입
            }).then(response => {

                //data.apiData 안에 싸져서 userVo 받음
                if(response.data.result == "success"){ 
                console.log(response);//수신데이타
                this.userVo = response.data.apiData; /* 일일이 데이터에 name: 안고쳐도 되니 얼마나 편한가 */
                
                }else{
                    console.log("토큰X, 로그인실패, 변조");
                    this.$router.push({ path:'/user/loginform' });
                    alert("로그인해주세요");
                    
                }

            }).catch(error => {
                console.log(error);
            });
        },
        modifyUser(){   
            console.log("클릭");
            console.log(this.userVo);
            //서버로 전송
            axios({
                method: 'put', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/users/modify', //''따옴표 문법도 중요
                headers: { 
                    "Content-Type": "application/json; charset=utf-8",  
                    "Authorization": "Bearer " + this.$store.state.token
                }, //토큰 매번 보내라
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => { 
                console.log(response); //수신데이타
                console.log("---------------------");
                console.log(response.data.apiData);
                console.log("---------------------");

                if(response.data.result == "success"){
                    let name = response.data.apiData;

                    //vuex 의 이름을 변경
                    this.$store.commit("setAuthName", name);

                    //메인으로 이동
                    this.$router.push({ path:'/' });

                }else{//토큰오류, 로그인되지 않은상황
                         //vux token, authVo 삭제
                        //메인페이지 이동
                    console.log("result = fail");
                    console.log(response.data.message);
                    this.$store.commit("setAuthUser", null);
                    this.$store.commit("setToken", null);
                   
                }

                
                
                //let name =response.data;
                
                /*if(name != "fail"){
                    console.log(name);
                     //vuex의 이름을 변경
                    this.$store.commit("setAuthName", name);
                
                    //메인으로 이동
                    this.$router.push({ path:'/' });


                }else{//토큰오류, 로그인되지 않은상황
                         //vux token, authVo 삭제
                        //메인페이지 이동
                    console.log("실패일때");
                    alert("로그인하세요");
                    this.$store.commit("setAuthUser", null);
                    this.$store.commit("setToken", null);
                   
                    this.$router.push({ path:'/user/loginform' });
                }
                    */
               

            }).catch(error => { 
                console.log(error);
            });


        }    
    },
    created(){
        this.getAuthUser(); //methods 이름고쳤으면 당연히 수정해줘야 페이지 뜬다
    }//중괄호 정리!!! 오류 안뜬다고 맞게 묶인게 아님.


       
};
</script>


<style></style>
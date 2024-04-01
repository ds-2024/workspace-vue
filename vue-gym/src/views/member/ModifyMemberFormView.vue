<template>
    <div class="member-profile">
        <h2>회원 정보 수정</h2>
        <form v-on:submit.prevent="modifyMember" method="put">
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" v-model="memberVo.name">
            </div>
            <div class="form-group">
                <label for="gender">성별</label>
                <input type="text" id="gender" v-model="memberVo.gender">
            </div>
            <div class="form-group">
                <label for="hp">HP</label>
                <input type="text" id="hp" v-model="memberVo.hp">
            </div>
            <div class="form-group">
                <label for="registerDate">등록일</label>
                <input type="text" id="registerDate" v-model="memberVo.registerDate">
            </div>
            <div class="form-group">
                <label for="remainDate">잔여일</label>
                <input type="text" id="remainDate" v-model="memberVo.remainDate">
            </div>
            <div class="form-group">
                <label for="ptCount">PT 횟수</label>
                <input type="text" id="ptCount" v-model="memberVo.ptCount">
            </div>
            <button type="submit">저장</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            memberVo: {
                name: '',
                gender: '',
                hp: '',
                registerDate: '',
                remainDate: '',
                ptCount: ''
            }
        };
    },
    methods: {
        modifyform() {
            console.log("modifyForm");
            console.log(this.memberVo);
            //서버로 전송
            axios({
                method: 'get', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/member/modify', //''따옴표 문법도 중요
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                    , "Authorization": "Bearer " + this.$store.state.token
                },
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                data: this.memberVo.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                
                this.memberVo = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });

        },
        modifyMember(){   
            console.log("클릭");
            console.log(this.memberVo);
            //서버로 전송
            axios({
                method: 'put', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/member/modify', //''따옴표 문법도 중요
                headers: { 
                    "Content-Type": "application/json; charset=utf-8"
                    , "Authorization": "Bearer " + this.$store.state.token
                }, 
                //params: guestbookVo, 
                data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => { 
                console.log(response); //수신데이타
                console.log(response.data.apiData)
                    //메인으로 이동
                   // this.$router.push({ path:'/' });
                if(response.data.result == "success"){
                console.log("result: success");
                let name = response.data.apiData;

                //vuex의 이름을 변경
                this.$store.commit("setAuthName", name);

                //메인페이지로 이동
                this.$router.push("/member/logininfo");
                } else {
                console.log(response.data.message);
                this.$store.commit("setAuthUser", null);
                this.$store.commit("setToken", null);
                }   
                
                   
            }).catch(error => { 
                    console.log(error);
            });
        },
    
    },
    created(){
        this.modifyform();
    }
};
</script>

<style scoped>
.member-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input[type="text"],
select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
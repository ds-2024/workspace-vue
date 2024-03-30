<template>

  <div class="member-profile">
    <h2>회원 정보</h2>
    <form v-on:submit.prevent="modifyMember" action="" method=""></form>
    <div class="member-details">
      <p><strong>이름:</strong> {{ memberVo.name }}</p>
      <p><strong>성별:</strong> {{ memberVo.gender }}</p>
      <p><strong>HP:</strong> {{ memberVo.hp }}</p>
      <p><strong>등록일:</strong> {{ memberVo.registerDate }}</p>
      <p><strong>잔여일:</strong> {{ memberVo.remainDate }}</p>
      <p><strong>PT 횟수:</strong> {{ memberVo.ptCount }}</p>
      <button type="submit">회원정보수정</button>

    </div>

    <router-link to="/" class="pt-button">PT 등록</router-link>
    <!--div v-if="showTrainersList" class="trainers-list" -->
    <!--
      <h3>강사 리스트</h3>
      <ul>
        <li v-for="trainer in trainers" :key="trainer.id">{{ trainer.name }}</li>
      </ul>
      -->
  </div>


</template>


<script>
import axios from 'axios';
export default {
  name: "AfterLoginFormView",
  components: {},
  data() {
    return {
      memberVo: {
        name: "",
        gender: "",
        hp: "",
        registerDate: "",
        remainDate: "",
        ptCount: ""
      }
    };
  },

  methods: {
    getAuthMember() {
      axios({
        method: 'get', // put, post, delete 
        url: 'http://localhost:9000/api/member/login',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": "Bearer " + this.$store.state.token
        }, //전송타입 + 토큰

        responseType: 'json' //수신타입
      }).then(response => {

        //data.apiData 안에 싸져서 memberVo 받음

        console.log(response.data.apiData);//수신데이타
        this.memberVo = response.data.apiData;


      }).catch(error => {
        console.log(error);
      });
    },
    modifyMember() {
      console.log("클릭");
      console.log(this.memberVo);
      //서버로 전송
      axios({
        method: 'put', // put, post, delete  //불러오는것은 GET //저장은 POST
        url: 'http://localhost:9000/api/member/modify/' + this.memberVo.name, //''따옴표 문법도 중요
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },

        data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response); //수신데이타
        //메인으로 이동
        // this.$router.push({ path:'/' });


        this.$router.push({ path: '/member/logininfo' }) //'따옴표 주의!'


      }).catch(error => {
        console.log(error);
      });


    },
    created() {
      this.getAuthMember();
    }
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

.member-details {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.pt-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #73cae9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pt-button:hover {
  background-color: hsla(213, 100%, 37%, 0.748);
}
</style>
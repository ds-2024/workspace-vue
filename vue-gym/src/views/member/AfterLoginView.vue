<template>

  <div class="member-profile">
    <h2>회원 정보</h2>
    <div class="member-details">
      <p><strong>이름:</strong> {{ memberVo.name }}</p>
      <p><strong>성별:</strong> {{ memberVo.gender }}</p>
      <p><strong>HP:</strong> {{ memberVo.hp }}</p>
      <p><strong>등록일:</strong> {{ memberVo.registerDate }}</p>
      <p><strong>잔여일:</strong> {{ memberVo.remainDate }}</p>
      <p><strong>PT 횟수:</strong> {{ memberVo.ptCount }}</p>
      <router-link to="/member/modify" class="modifyMember">회원정보수정</router-link>

    </div>

    <router-link to="/" class="pt-button">PT 등록</router-link>
  
  </div>

</template>


<script>
import axios from 'axios';
export default {
  name: "AfterLoginView",
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
  }, 
  created() {
    console.log("화면에 보일때");
    this.getAuthMember();
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
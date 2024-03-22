<template>
    <div>
        <form v-on:submit.prevent="removeGuest" action="" method="">
		<table>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" name="password" v-model="password"></td>
				<td><button type="submit">삭제</button></td>
			</tr>
		</table>
	</form>
	
	<br><br>
	<router-link to="/">메인리스트 이동</router-link>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "DelFormView",
    components: {},
    data() {
        return {
            password: "",
            no: this.$route.params.no
        };
    },
    methods: {
        removeGuest(){
            console.log(this.password); //this 실수 
            console.log(this.no);
            axios({
				method: 'delete', // put, post, delete 
				url: 'http://localhost:9000/api/guests/'+this.no,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				data: {password: this.password}, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
                console.log("--------------"); //수신데이타
				console.log(response.data); //수신데이타
                console.log("--------------"); //수신데이타
                if(response.data.count>0){
                    this.$router.push({ path: '/' })
                }else{
                    alert("패스워드를 확인 해주세요.")
                }
				

			}).catch(error => {
				console.log(error);
			});
        }
    },
    created(){}
};
</script>


<style></style>
<template>
    <div>
        <h1>전화번호부</h1>

	<h2>등록폼</h2>

	<p>
		전화번호를 등록하려면<br> 아래 항목을 기입하고 "등록" 버튼을 클릭하세요
	</p>

	<form v-on:submit.prevent="addPhoneList" action="" method="">
		<div>
			<label>이름(name)</label> 
			<input type="text" name="name" v-model="personVo.name">
		</div>

		<div>
			<label>핸드폰(hp)</label>
			<input type="text" name="hp" v-model="personVo.hp">
		</div>

		<div>
			<label>회사(company)</label> 
			<input type="text" name="company" v-model="personVo.company">
		</div>

		<button type="submit">등록</button>
	</form>

	<br>
	<br>
    <router-link to="/">리스트 이동</router-link>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "PhoneWriteFormView",
    components: {},
    data() {
        return {
            personVo: {
                
                name: "",
                hp: "",
                company: ""
            }

        };
    },
    methods: {
        addPhoneList(){
            console.log("확인");
            axios({
                method: 'post', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/persons', //''따옴표 문법도 중요
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입 
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data:this.personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 responseType: 'json' //수신타입. 위에 자료 있으면 this.붙여주기
            
                responseType: 'json' //수신타입
            }).then(response => { 
                console.log(response.data); //수신데이타
                //this.guestbookList.unshift(response.data); //기존데이터 위에 가져온 데이터 1개 올려놓기.엄청난 코드임.

            }).catch(error => { 
                console.log(error);
            });                    



        }
    },
    created(){}
};
</script>


<style></style>
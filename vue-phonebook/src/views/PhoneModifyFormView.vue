<template>
    <div>
        <h1>전화번호부</h1>

<h2>수정폼</h2>

<p>
	전화번호를 수정하려면<br>
	아래 항목을 기입하고 "수정" 버튼을 클릭하세요
</p>

<form v-on:submit.prevent="modifyUser" action="" method="">
	<div>
		<label>이름(name)</label>
		<input type="text" name="name" v-model="personVo.name" >
	</div>
	
	<div>
		<label>핸드폰(hp)</label>
		<input type="text" name="hp" v-model="personVo.hp">
	</div>
	
	<div>
		<label>회사(company)</label>
		<input type="text" name="company" v-model="personVo.company">
	</div>
	
	<input type="text" name="personId" v-model="personVo.personId"><br>
	<button type="submit">수정</button>
	
</form>

<br><br>

<router-link to="/">리스트 이동</router-link>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "PhoneModifyFormView",
    components: {},
    data() {
        return {
			personVo:{
                personId: this.$route.params.personId,
				name: "",
				hp: "",
				company: ""
			}
		};
    },
    methods: {
		modifyform(){
			console.log("수정폼");
            console.log(this.personVo);
            //서버로 전송
            axios({
                method: 'get', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/persons/modify/'+ this.personVo.personId, //''따옴표 문법도 중요
                headers: { 
                    "Content-Type": "application/json; charset=utf-8"
                }, 
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                data: this.personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => { 
                console.log(response); //수신데이타
                    //메인으로 이동
                    this.personVo = response.data;
                   
			}).catch(error => { 
                console.log(error);
			});

		},
		modifyUser(){   
            console.log("클릭");
            console.log(this.personVo);
            //서버로 전송
            axios({
                method: 'put', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9000/api/persons/modify/' + this.personVo.personId, //''따옴표 문법도 중요
                headers: { 
                    "Content-Type": "application/json; charset=utf-8"
                }, 
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                data: this.personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => { 
                console.log(response); //수신데이타
                    //메인으로 이동
                   // this.$router.push({ path:'/' });
                  
                   
                    this.$router.push({ path: '/' })
                
                   
			}).catch(error => { 
                console.log(error);
			});
		}	
	
	},
    created(){
		this.modifyform();
	}
};
</script>


<style></style>
<template>
	<div>
		<form v-on:submit.prevent="addGuest" action="" method="">
			<table border="1" width="540px">
				<tr>
					<td>이름</td>
					<td><input type="text" name="" v-model="guestbookVo.name"></td>
					<td>비밀번호</td>
					<td><input type="password" name="" v-model="guestbookVo.password"></td>
				</tr>
				<tr>
					<td colspan="4"><textarea v-model="guestbookVo.content" name="content" cols="72"
							rows="5"></textarea></td>
				</tr>
				<tr>
					<td colspan="4">
						<button type="submit">등록</button>
					</td>
				</tr>
			</table>
		</form>
		<br>


		<div v-bind:key="i" v-for="(guestbookVo, i) in guestbookList">
			<table border="1" width="540px">
				<tr>
					<td>{{ guestbookVo.no }}</td>
					<td>{{ guestbookVo.name }}</td>
					<td>{{ guestbookVo.regDate }}</td>
					<td>
						<router-link v-bind:to="`/delete/${guestbookVo.no}`">삭제</router-link>
					</td>
					
				</tr>
				<tr>
					<td colspan="4">{{ guestbookVo.content }}</td>
				</tr>
			</table>
			<br>
		</div>
	</div>
</template>


<script>
import axios from 'axios';


export default {
	name: "AddListView",
	components: {},
	data() {
		return {
			guestbookList: [],
			guestbookVo: {
				name: "",
				password: "",
				content: ""
			}
		};
	},
	methods: {
		getList() {
			console.log("데이터 가져오기");
			this.$store.state.apiBaseUrl

			axios({
				method: 'get', // put, post, delete 
				url: `${this.$store.state.apiBaseUrl}/api/guests`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response); //수신데이타
				this.guestbookList = response.data;
			}).catch(error => {
				console.log(error);
			});
		},
		addGuest() {
			console.log("저장");
			console.log(this.guestbookVo);
			axios({
				method: 'post', // put, post, delete 
				url: `${this.$store.state.apiBaseUrl}/api/guests`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				this.guestbookList.unshift(response.data);

			}).catch(error => {
				console.log(error);
			});
		}
	},
	created() {
		this.getList();
	}
};
</script>


<style></style>
<template>
    <div>
        <h1>학생연락처개인과제</h1>


        <table class="student-list" border="1">
           
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>핸드폰</th>
                    <th>회사</th>
                    <th>성별</th>
                </tr>
            </thead>
            <tbody v-bind:key="i" v-for="(student, i) in students">
                <tr>
                    <td>{{ i+1 }}</td>
                    <td>{{ student.name }}</td>
                    <td> {{ student.hp }}</td>
                    <td> {{ student.company }}</td>
                    <td> {{ student.gender }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>



<script>
import axios from 'axios';
export default {
    name: "ListView",
    components: {},
    data() {
        return {
            students: []
        };
    },
    methods: {
        getList() {
			console.log("데이터 가져오기");


			axios({
				method: 'get', // put, post, delete 
				url: 'https://raw.githubusercontent.com/clz2024-red/api/main/person.json',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response); //수신데이타
				this.students = response.data
			}).catch(error => {
				console.log(error);
			});
		}
    },
    created(){
       this.getList();
    }
};
</script>


<style>
.student-list {
    width: 500px;
    border-collapse : collapse
}
.student-list th, .student-list td {
    text-align: center;
    border: 1px solid black;
    border-collapse : collapse
}

.student-list th {
    background-color: #d6d6d6;
}

.student-list th:first-child(1) {
    width: 40px;
}
.student-list th:first-child(2) {
    width: 70px;
}
.student-list th:first-child(3) {
    width: 150px;
}
.student-list th:first-child(4) {
    width: 160px;
}
.student-list th:first-child(5) {
    width: 40px;
}

</style>
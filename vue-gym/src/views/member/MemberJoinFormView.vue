<template>
    <div class="memberJoinform">
        <div id="join-heading">
            WELCOME
        </div>
        <div class="member-join">
            회원가입
        </div>

        <div>
            <form v-on:submit.prevent="join" action="">
                <div id="id-All">
                    <label class="id" for="">ID</label>
                    <input class="idbox" type="text" v-model="memberVo.id">
                    <button class="dvcheck" v-on:click="idCheck" type="button">중복체크</button><br>
                </div>
                <p id="duid">중복된 아이디 입니다.</p>
                <p v-if="isDuplicated">이미 사용중인 아이디입니다.</p>
                <p v-else-if="isNotDuplicated">사용 가능한 아이디입니다.</p>
                <p v-else>아이디를 입력해주세요</p>

                <label class="pw" for="">PW</label>
                <input class="pwbox" type="text" v-model="memberVo.password"><br>

                <label class="name" for="">성명</label>
                <input class="namebox" type="text" v-model="memberVo.name"><br>

                <label class="age" for="">나이</label>
                <input class="agebox" type="text" v-model="memberVo.age"><br>

                <label class="address" for="">주소</label>
                <input class="addressbox" type="text" v-model="memberVo.address"><br>

                <label class="hp" for="">HP</label>
                <input class="hpbox" type="text" placeholder="" v-model="memberVo.hp"><br>

                <label class="gender" for="">성별</label>
                <input class="genderbox" type="text" placeholder="" v-model="memberVo.gender"><br>
                <br>



                <button class="mjoin" type="submit">회원가입</button>
            </form>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import "@/assets/css/joinform.css"

export default {
    name: "MemberJoin",
    components: {},
    data() {
        return {
            memberVo: {
                id: "",
                password: "",
                name: "",
                address: "",
                gender: "",
                hp: "",
                age: ""
            },
            check: 0,
            isDuplicated: false,
            isNotDuplicated: false
        }
    },
    methods: {
        idCheck() {
            //let id = this.memberVo.id;
            console.log(this.memberVo);
            if (this.memberVo.id == "") {
                alert("아이디를 입력해주세요")
            } else {
                console.log(this.memberVo);
                axios({
                    method: 'put', // put, post, delete
                    url: 'http://localhost:9000/api/member/join',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: userVo, //get방식 파라미터로 값이 전달
                    data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if (response.data == 0) {
                        this.isNotDuplicated = true;
                        this.isDuplicated = false;
                        this.check = 1;
                    } else {
                        this.isDuplicated = true;
                        this.isNotDuplicated = false;
                    }

                }).catch(error => {
                    console.log(error);
                });
            }

        },
        join() {
            if (this.check != 1) {
                alert("아이디 중복확인을 해주세요")
            } else {//중복체크 완료되면 바꾸기 ++ 빈칸 잇으면 메세지창 띄우기
                console.log(this.memberVo)
                axios({
                    method: 'post', // put, post, delete 
                    url: 'http://localhost:9000/api/member/join',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if (response.data == 1) {
                        this.$router.push("/member/login");
                    } else {
                        alert("회원가입에 실패하였습니다");
                    }


                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
}

</script>
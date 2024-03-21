<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    
    <!--form 전송 클릭이벤트와 다르다. ※form에 submit 이벤트, ※양방향 v-model-->
    <form v-on:submit.prevent="getPersonVo" action="" method="get">
        <label for="uName">이름</label>
        <input id="uName" type="text" name="name" v-model="personVo.name" > <!--한방향-->
        <br>
        <label>전화번호</label>
        <input type="text" name="hp"  v-model="personVo.hp"> <!--양방향(수정된값이 반영이 된다)-->
        
        <br>
        <textarea name="content" v-model="personVo.content"></textarea>
        
        <br><br>
        <button v-on:click="setPersonVo" type="button">값쓰기</button> <!--이벤트 잡고 => 메소드에"" 값으로 진짜 메소드 작성하자 =>데이터부분 조작 -->
        <button type="submit">값 수정</button>
    </form>
</template>
<script>

export default
 
{
    name: "Ex05View",
    components: {},
    data () {
    
        return {
            title: "vue공부",
            subTitle: "폼-text,textarea: 양방향바인딩->폼에는 v-model 써라",
            personVo: {
                name: "",
                hp: "",
                content: ""
            }
        };
    },
    methods: {
        setPersonVo(){
            
            console.log("서버로부터 데이터를 받는중.........");
            let pVo ={
                name: "정우성",
                hp: "010-2222-2222",
                content: "영화배우 정우성입니다."
            }
            this.personVo = pVo;

            /*
            this.name="정우성";
            this.hp="010-2222-2222";
            this.content="영화배우 정우성입니다.";
            */
        },
        getPersonVo(){
            
            console.log("데이터수집");
            console.log(this.personVo);

            /*
            console.log(this.name);
            console.log(this.hp);
            console.log(this.content);
            */
        }
    },
};
</script>
<style></style>
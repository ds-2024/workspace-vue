<template>
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>

    <ul>
        <li>{{menus[0]}}</li>
        <li>{{menus[1]}}</li>
        <li>{{menus[2]}}</li>
    </ul>
    <ul>
        <li v-bind:key="i" v-for="(menu, i) in menus">{{menu}}</li>
        
    </ul>

    <table border="1">
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{personVo.no}}</td>
                <td>{{personVo.name}}</td>
                <td>{{personVo.hp}}</td>
                <td>{{personVo.company}}</td>
            </tr>
        </tbody>
    </table>

    <p>{{ content }}</p>

    <p v-html="content"></p>

    <img v-bind:src="imgUrl"> <!--단방향-->
    
</template>
<script>

export default
 
{
    name: "Ex02View", //파일이름과 반드시 같을 필요는 없음. 자바 부분이라 주석 표시도 //
    components: {},
    data () {
        return {
            title: "vue공부",
            subTitle: "데이터바인딩",
            menus: ["게시판","갤러리","방명록"],
            personVo:{
                no: 1,
                name: "이효리",
                hp: "010-9999-9999",
                company: "02-9999-9999"
            },
            content: "지금부터 <strong>열심히</strong> 공부하겠습니다.",
            imgUrl: "https://mml.pstatic.net/www/mobile/edit/20240318_1095/upload_1710771613913KFcqp.gif" 
        };
    },
    methods: {}, //현재 예제에서는 메서드가 정의되어 있지 않으므로 빈 객체로 남아있는것임.
};
</script>



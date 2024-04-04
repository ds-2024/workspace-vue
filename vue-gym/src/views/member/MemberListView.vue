<template>
    <div id="MbCommentList">
        <div>
            <h1 id="Mbtxt">MEMBER<br>LIST</h1>
        </div>
        <div>
            <p id="CallMb"><strong id="Mb">{{memberVo.name}}</strong> 회원님</p>
            <p id="Hp">핸드폰 번호: {{ memberVo.hp }}</p>
        </div>
        
        <div>
            <table id="ptAll">
                
                    <tr id="ptInfo">
                        <th class="tab2">받은PT횟수</th>
                        <td class="tab3">{{ ptVo.pttotal }}</td>
                        <th class="tab2">전체PT횟수</th>
                        <td class="tab3">{{ptVo.ptcount}}</td>
                    </tr>
            </table>    
            <table id="dateCmt" v-bind:key="i" v-for="(lessonVo, i) in lessonList">    
                <tbody >
                    <!-- <div v-bind:key="i" v-for="(lessonVo, i) in lessonList"> -->
                        <tr>
                            <td colspan="2" class="tab2">PT받은날짜</td>
                            <td colspan="2" class="tab3">{{lessonVo.ldate}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="2" class="tab2">COMMENT</td>
                            <td colspan="2" class="tab3">{{lessonVo.comment}}</td>
                        </tr>
                </tbody>
            </table>
        </div>
        
        <GymFooter />
        <!-- //footer -->
    
    </div>
</template>
<script>
import '@/assets/css/MemberList.css'
import GymFooter from '@/components/GymFooter.vue';
import axios from 'axios';
export default {
    name: 'MemberListView',
    components: {
        GymFooter
    },
    data() {
        return {
            memberVo: {
                name: "",
                hp: "",
            },
            ptVo: {
                pttotal: "",
                ptcount: ""
            },
            lessonList: []
            
        };
    },    
    methods: {
        getList(){
            console.log("commentlist");
            console.log(this.memberVo);
            axios({
            method: "get",
            url: "http://localhost:9000/api/member/lessonlist",
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: "Bearer " + this.$store.state.token
            },
            responseType: "json"
        }).then(response => {
            console.log(response.data);
           
            this.memberVo = response.data.apiData.memberVo;
            this.ptVo = response.data.apiData.ptInfoList[0];
            //this.memberVo = response.data.apiData.memberlessonlist;
            this.lessonList=response.data.apiData.mblessonList;
           
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
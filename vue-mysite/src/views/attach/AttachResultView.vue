<template>
    <div>
        <div id="wrap">

            <AppHeader />
<!-- //header -->

<div id="nav">
    <ul class="clearfix">
        <li><a href="">입사지원서</a></li>
        <li><a href="">게시판</a></li>
        <li><a href="">갤러리</a></li>
        <li><a href="">방명록</a></li>
    </ul>
</div>
<!-- //nav -->


<div id="container" class="clearfix">
    <div id="aside">
        <h2>갤러리</h2>
        <ul>
            <li><a href="">일반갤러리</a></li>
            <li><a href="">파일첨부연습</a></li>
        </ul>
    </div>
    <!-- //aside -->
    
    
    <div id="content">

        <div id="content-head">
            <h3>첨부파일연습</h3>
            <div id="location">
                <ul>
                    <li>홈</li>
                    <li>갤러리</li>
                    <li class="last">첨부파일연습</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <!-- //content-head -->
    
    
        <div id="file">
            
                <div>
                    <img id="resultImg" v-bind:src="`http://localhost:9000/upload/${this.$route.query.saveName}`"> <!-- saveName의 parameter로 갖고 있음 -->
                </div>
                <p>
                    <router-link to="/attach/form">다시 업로드 하기</router-link>

                    <!--<a id="btnUpload" href="">다시 업로드 하기</a>  a링크 조심 router-link 로 변환 -->
                </p>
            
        </div>
        <!-- //file -->

    </div>
    <!-- //content  -->

</div>
<!-- //container  -->


<AppFooter />
<!-- //footer -->
</div>
<!-- //wrap -->
    </div>
</template>


<script>
import "@/assets/css/gallery.css"

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"
export default {
    name: "AttachResultView",
    components: {
        AppFooter, //컴포넌트에 있는애 import 했으면
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>


<style></style>
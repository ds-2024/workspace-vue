<template>
    <!-- <AppHeader /> -->
    <!-- //header -->
    <div class="form-container">

        <h2 class="mbModifytxt">회원 정보 수정</h2>
        <form v-on:submit.prevent="modifyMember" method="put">
            <div class="id-group">
                <label class="id" for="id">아이디</label>
                <span id="id">DS</span>
            </div>
            <div class="form-field">
                <label for="password">비밀번호*</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-field">
                <label for="confirmPassword">비밀번호 확인*</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required>
            </div>
            <div class="form-field">
                <label for="email">이메일*</label>
                <input type="email" id="email" v-model="email" required>
            </div>

            <div class="form-field">
                <label for="birthdate">생년월일</label>
                <input type="date" id="birthdate" v-model="birthdate">
            </div>
            <div class="form-field">
                <label class="address" for="address">주소</label>
                <textarea class="addressbox" v-model="address"></textarea>
                <button type="button" v-on:click="postalCode">우편번호</button>
            </div>
            <div class="form-field">
                <label class="address" for="address">배송지</label>
                <textarea class="addressbox" v-model="address"></textarea>
                <button type="button" v-on:click="postalCode">우편번호</button>
            </div>
            <button type="submit" v-on:click="updateInfo">회원정보수정</button>
        </form>

    </div>
    <!--<AppFooter />-->
    <!--//footer-->
</template>

<script>
import "@/assets/css/modifyform.css"
//import AppFooter from '@/components/AppFooter.vue';
//import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "ModifyFormView",
    components: {
        //AppFooter,
        //AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>
<template>
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    
    <div class="box" v-bind:class="{'box-red': isRed, 
                                    'box-blue': isBlue, 
                                    'f-bold': isBold,
                                    'f-big': isSize }">
        {{boxText}}
    </div>

    <button v-on:click="redBox" type="button">빨간박스</button>
    <button v-on:click="blueBox" type="button">파란박스</button>
    <button v-on:click="boldOnOff" type="button">볼드on/off</button>
    <button v-on:click="sizeOnOff" type="button">크기on/off</button> 
    
    <br><br><br><br>
    <p style="color: #ff0000;">인라인스타일로 태그에 스타일 직접 추가</p>
    
    <p v-bind:style="type">인라인스타일로 태그에 스타일 직접 추가</p>
    <button v-on:click="changeType" type="button">인라인스타일변경</button>
</template>
<script>

export default
 
{
    name: "Ex04View",
    components: {},
    data () {
    
        return {
            title: "Vue공부",
            subTitle: "class속성 제어",
            boxText: "vue공부 재미있나요?",
            isRed: false,
            isBlue: false,
            isBold: true,
            isSize: true,
            type:""
        };
    },
    methods: {
        redBox(){
            this.isRed = true;
            this.isBlue =  false;
        },
        blueBox(){
            this.isBlue = true;
            this.isRed =  false;
        },
        boldOnOff(){
            console.log("볼드클릭");
            if (this.isBold == true) {
                this.isBold = false;
            }else{
                this.isBold =  true;
            } 
        
        },
        sizeOnOff(){
            console.log("사이즈조절");

            this.isSize = !this.isSize;
            /*if (this.isSize == true) {
                this.isSize = false;
            }else{
                this.isSize =  true;
            } 
            */
        },
        changeType(){
            console.log("체인지");
            this.type="font-size: 40px; color: #ff0000;";
        }
    },
};
</script>
<style>
.box{
    width: 150px;
    border: 1px solid #000000;
}

.box-red{
    background-color: #ff0000;
}

.box-blue{
    background-color: #0000ff;
}

.f-bold{ font-weight: bold;}

.f-big{ font-size: 20px;}

.f-ita{ font-style: italic;}
</style>
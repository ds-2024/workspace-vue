<template>
    <div>
        <div id="l-footer">
            <div id="l-footer-group">CodeCrafters</div>
            <div id="l-Copyright">Copyright (c) All right Reserved</div>
        </div>
            <!-- //l-footer --> 
    </div>
</template>

<script>
export default {
    name: "GymFooter",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>

<style>
#l-footer{
    margin: 750px 0px 0px 200px;
}

#l-footer #l-footer-group{
    color: #ff0066;
    font-size: 60px;
    font-family: "VITRO CORE TTF";
    font-style: italic;
    margin-left: 150px;
}
#l-footer #l-Copyright{
    color: #ff0066;
    font-size: 50px;
    font-family: "VITRO PRIDE TTF";
    margin-top: 20px;
}
</style>
<template>
    <div class="wrapper-main">
        <div class="banner-box"> </div>
        <BackTop/>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'

    export default {

        name: 'about',
        components: {
            BackTop
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/css/about.less";
    @import "../assets/layui/css/layui.css";
</style>

<template>
    <div class="wrapper-main">
        <div class="banner-box"> </div>
        <div class="page white-bg">
            <div class="page-title" id="pageContents">
                <ul>
                    <li><router-link to="/about" href="./about/aboutMe.vue">关于我们</router-link></li>
                    <li><router-link to="/contact" href="./about/contact.vue">联系我们</router-link></li>
                    <li><router-link to="/help" href="./about/help">帮助问答</router-link></li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
        <BackTop/>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'
    import "../assets/layui/css/layui.css";
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

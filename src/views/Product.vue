<template>
    <div class="wrapper-main">
        <div class="banner-box"></div>
        <div class="wrapper-content">
            <sticky>
               <div style="background: #FAFAFA; ">
<!--               填充-->
               </div>
            </sticky>
<!--            产品展示-->
            <div class="layui-container">
                <div class="hot-cate">
                    <p class="house-title">热门分类</p>
                    <div class="layui-row">
                        <div class="layui-col-xs4 cateFir cate">
                            <a href="javascript:void(0);">
                                <img src="~@/assets/img/bicycle-el01.jpg">
                                <div>
                                    <p>电动自行车</p>
                                    <span>185元起</span>
                                </div>
                            </a>
                        </div>
                        <div class="layui-col-xs4 cateSec cate">
                            <a href="javascript:void(0);">
                                <img src="~@/assets/img/bicycle-el01.jpg">
                                <div>
                                    <p>电动自行车</p>
                                    <span>559元起</span>
                                </div>
                            </a>
                        </div>
                        <div class="layui-col-xs4 cateThir cate">
                            <a href="javascript:void(0);">
                                <img src="~@/assets/img/bicycle-el01.jpg">
                                <div>
                                    <p>电动自行车</p>
                                    <span>1888元起</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="hot-sell">
                    <p class="house-title">热销推荐<a href="">更多优品  &gt;</a></p>
                    <div class="layui-row layui-col-space20">
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                    </div>
                </div>
                <div class="hot-sell">
                    <p class="house-title">新品推荐<a href="">更多优品  &gt;</a></p>
                    <div class="layui-row layui-col-space20">
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                        <a href="javascript:void(0);" class="layui-col-xs3 text">
                            <div><img src="~@/assets/img/bicycle-el01.jpg"></div>
                            <p>电动自行车</p>
                            <p class="price">￥200</p>
                        </a>
                    </div>
                </div>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

    </div>
</template>

<script>
    import "../assets/layui/css/layui.css";
    import Sticky from '@/components/Sticky'
    export default {
        name: "product",
        components: { Sticky },
        data() {
            return {

            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    @import "../assets/css/product.less";

</style>

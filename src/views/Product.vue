<template>
    <div class="wrapper-main">
        <div class="banner-box"></div>
        <div class="title-box">
            <h1 class="title-name">用科技赋能口岸物流，为客户创造价值</h1>
            <div class="title-border"></div>
        </div>
        <div class="wrapper-content">
            <sticky>
                <div class="crumbs-bar flex">
                    <div class="select-result flex">
                        <label>全部结果：</label>
                        <div class="result-item">
                            <el-tag
                                    v-for="tag in ResultTags"
                                    :key="tag.name"
                                    closable size="medium"
                                    @close="handleResultTagClose(tag)"
                                    type="info">
                                {{ tag.name }}
                            </el-tag>
                        </div>
                    </div>
                    <div class="select-type">
                        <el-radio-group v-model="selectForm.showType" size="mini">
                            <el-radio-button label="productList">按产品展示</el-radio-button>
                            <el-radio-button label="supplierList">按服务商展示</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="selector">
                    <table class="table">
                        <tr>
                            <td>区域：</td>
                            <td>
                                <ul>
                                    <li>全部</li>
                                    <li>深圳市</li>
                                    <li>广州市</li>
                                    <li>东莞市</li>
                                    <li>佛山市</li>
                                    <li>中山市</li>
                                    <li>江门市</li>
                                    <li>珠海市</li>
                                    <li>阳江市</li>
                                    <li>厦门市</li>
                                </ul>
                                <el-button size="mini">更多<i class="iconfont icon-add f-s-12"></i></el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>类型：</td>
                            <td>
                                <ul>
                                    <li>全部</li>
                                    <li>报关</li>
                                    <li>仓储</li>
                                    <li>配送</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </sticky>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Sticky from '@/components/Sticky'
    export default {
        name: "product",
        components: { Sticky },
        data() {
            return {
                loading: true,
                ResultTags: [
                    {
                        name: '深圳市',
                        type: '',
                        id: ''
                    },
                    {
                        name: '报关',
                        type: '',
                        id: ''
                    }
                ],
                selectForm: {
                    showType: 'productList'
                },
            }
        },
        watch: {
            'selectForm.showType': function(curVal) {
                this.$router.push({name: curVal})
            }
        },
        mounted() {
            this.$router.push({name: this.selectForm.showType})
        },
        methods: {
            handleResultTagClose(tag) {
                console.log(tag);
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    @import "../assets/css/product.less";
</style>
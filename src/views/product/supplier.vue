<template>
    <div class="supplier-box">
        <div class="item-row" v-for="item in supplierList">
            <div class="item">
                <div class="item-info flex">
                    <div class="logo">
                        <img :src="item.logo" v-if="item.logo != null && item.logo != ''">
                        <img src="`../../img/img.png" v-else>
                    </div>
                    <div class="detail">
                        <h2>{{ item.name }}</h2>
                        <div class="range detail-row">
                            <i class="iconfont icon-kehuguanli"></i>
                            <span class="text-muted">服务范围：</span>
                            <div>
                                <template  v-for="(range, index) in item.ranges" v-if="index % 2 == 0" >
                                    <span>{{ range }}</span>
                                    <span class="line"></span>
                                </template >
                                <template  v-else>
                                    <span>{{ range }}</span>
                                </template >
                            </div>
                        </div>
                        <div class="detail-row">
                            <i class="iconfont icon-quyu"></i>
                            <span class="text-muted">所在地：</span>
                            <span>{{ item.address }}</span>
                        </div>
                        <div class="detail-row">
                            <i class="iconfont icon-dianhuaben"></i>
                            <span class="text-muted">联系人：</span>
                            <span>{{ item.contacts }}</span>
                        </div>
                    </div>
                </div>
                <div class="item-action"><a href="javascript:;" role="button" class="button">我要合作</a></div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="pagination-box">
            <el-pagination
                    background
                    @current-change="handleProductPageChange"
                    :current-page.sync="currentPage"
                    :page-size="pagination.pageSize"
                    layout="prev, pager, next, total, jumper"
                    :total="pagination.total">
            </el-pagination>
        </div>
        <BackTop/>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'
    export default {
        name: "supplierList",
        components: {BackTop},
        data() {
            return {
                loading: true,
                pagination: {
                    total: 1000,
                    pageSize: 100
                },
                currentPage: 3,
                supplierList: [
                    {
                        logo: '../img/logo-jyd.jpg',
                        name: '深圳市金运达国际物流有限公司',
                        ranges: [
                            '普通仓','监管仓','保税仓','整箱','拼箱','进出口报关'
                        ],
                        address: '广东省深圳市-罗湖区',
                        contacts: 'X先生'
                    },
                    {
                        logo: '',
                        name: '广州市乔飞物流有限公司',
                        ranges: [
                            '普通仓','监管仓','保税仓','整箱'
                        ],
                        address: '广东省-广州市',
                        contacts: 'B先生'
                    },
                    {
                        logo: '',
                        name: '广州市众泰物流有限公司',
                        ranges: [
                            '普通仓','监管仓','保税仓','整箱'
                        ],
                        address: '广东省-广州市',
                        contacts: 'H先生'
                    },
                    {
                        logo: '',
                        name: '广州市海旺报关有限公司',
                        ranges: [
                            '普通仓','监管仓','保税仓','整箱'
                        ],
                        address: '广东省-广州市',
                        contacts: 'W先生'
                    }
                ]
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
            },
            handleProductPageChange(pageIndex) {
                console.log(pageIndex)
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .item-row {
        margin-top: 30px;
        width: 100%;
        border: 1px solid #ddd;
        transition: all .5s;
        &:hover {
            border-color: #455E9E;
        }
        .item {
            padding: 20px;
            .item-info {
                width: 70%;
                float: left;
                border-right: 1px solid #ddd;
                .logo {
                    width: 152px;
                    height: 152px;
                    img {
                        width: 152px;
                        height: 152px;
                        margin: 0 auto;
                    }
                }
                .detail {
                    margin-left: 20px;
                    color: #333;
                    h2 {
                        margin: 0 0 10px;
                        line-height: 1.5;
                    }
                    .detail-row {
                        margin: 6px 0;
                        font-size: 14px;
                    }
                    .line {
                        background: #ddd;
                        margin: 0 10px;
                        display: inline-block;
                        height: .9em;
                        width: 1px;
                        vertical-align: middle;
                        position: relative;
                        top: -.06em;
                    }
                    .text-muted {
                        color: #666 !important;
                    }
                    i.iconfont {
                        margin-right: 10px;
                    }
                    .range {
                        display: flex;
                        span {
                            color: #455E9E;
                        }
                    }
                }
            }
            .item-action {
                width: 29%;
                float: left;
                text-align: center;
                padding-top: 58px;
                a {
                    text-decoration: none;
                    color: #455E9E;
                    border: 1px solid #455E9E;
                    transition: all .3s;
                    &:hover {
                        border-radius: 20px;
                    }
                }
            }
        }
    }

    .pagination-box {
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
</style>
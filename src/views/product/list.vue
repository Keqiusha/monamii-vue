<template>
    <div class="product-box flex">
        <div class="item-box" v-for="product in productList">
            <div class="item">
                <div class="product-img">
                    <img src="../../assets/img/img.png">
                </div>
                <div class="product-content">
                    <div class="title flex">
                        <div class="left">{{ product.title }}</div>
                        <div class="right">服务商：{{ product.supplier }}</div>
                    </div>
                    <div class="description" v-for="item in product.description"><label>{{ item.title
                        }}：</label>{{ item.content }}
                    </div>
                </div>
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
        <BackTop />
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'

    export default {
        name: "productList",
        components: {
            BackTop
        },
        data() {
            return {
                productList: [
                    {
                        img: '../img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '疏港出口运输',
                        supplier: '金运达',
                        description: [
                            {
                                title: '服务范围',
                                content: '广州市内'
                            },
                            {
                                title: '车型',
                                content: '3T 5T 7T 10T 20GP 40HQ'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '出口报关',
                        supplier: '金运达',
                        description: [
                            {
                                title: '报关口岸',
                                content: '黄埔'
                            },
                            {
                                title: '资质',
                                content: '高级AEO认证'
                            }
                        ]
                    },
                    {
                        img: '../img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '疏港出口运输',
                        supplier: '金运达',
                        description: [
                            {
                                title: '服务范围',
                                content: '广州市内'
                            },
                            {
                                title: '车型',
                                content: '3T 5T 7T 10T 20GP 40HQ'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '出口报关',
                        supplier: '金运达',
                        description: [
                            {
                                title: '报关口岸',
                                content: '黄埔'
                            },
                            {
                                title: '资质',
                                content: '高级AEO认证'
                            }
                        ]
                    },
                    {
                        img: '../img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '疏港出口运输',
                        supplier: '金运达',
                        description: [
                            {
                                title: '服务范围',
                                content: '广州市内'
                            },
                            {
                                title: '车型',
                                content: '3T 5T 7T 10T 20GP 40HQ'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '出口报关',
                        supplier: '金运达',
                        description: [
                            {
                                title: '报关口岸',
                                content: '黄埔'
                            },
                            {
                                title: '资质',
                                content: '高级AEO认证'
                            }
                        ]
                    },
                    {
                        img: '../img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '疏港出口运输',
                        supplier: '金运达',
                        description: [
                            {
                                title: '服务范围',
                                content: '广州市内'
                            },
                            {
                                title: '车型',
                                content: '3T 5T 7T 10T 20GP 40HQ'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '出口报关',
                        supplier: '金运达',
                        description: [
                            {
                                title: '报关口岸',
                                content: '黄埔'
                            },
                            {
                                title: '资质',
                                content: '高级AEO认证'
                            }
                        ]
                    },
                    {
                        img: '../img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '监管仓',
                        supplier: '金运达',
                        description: [
                            {
                                title: '地址',
                                content: '深圳市罗湖区'
                            },
                            {
                                title: '面积',
                                content: '500平米'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '疏港出口运输',
                        supplier: '金运达',
                        description: [
                            {
                                title: '服务范围',
                                content: '广州市内'
                            },
                            {
                                title: '车型',
                                content: '3T 5T 7T 10T 20GP 40HQ'
                            }
                        ]
                    },
                    {
                        img: '../assets/img/test.png',
                        title: '出口报关',
                        supplier: '金运达',
                        description: [
                            {
                                title: '报关口岸',
                                content: '黄埔'
                            },
                            {
                                title: '资质',
                                content: '高级AEO认证'
                            }
                        ]
                    }
                ],
                pagination: {
                    total: 1000,
                    pageSize: 100
                },
                currentPage: 3,
                loading: true
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
    .product-box {
        justify-content: space-between;
        .item-box {
            margin-top: 25px;
            width: 282px;
            height: 380px;
            border: 1px solid #ddd;
            transition: all .3s;
            .item {
                padding: 12px;
                .product-img {
                    width: 250px;
                    height: 250px;
                    margin: 0 auto;
                    img {
                        width: 100%;
                    }
                }
                .product-content {
                    margin-top: 15px;
                    .title {
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 10px;
                        .left {
                            font-size: 18px;
                            line-height: 1.5;
                            color: #455E9E;
                        }
                        .right {
                            font-size: 12px;
                            color: #999;
                        }
                    }
                    .description {
                        font-size: 14px;
                        line-height: 22px;
                        color: #333;
                        > label {
                            color: #666;
                        }
                    }
                }
            }
            &:hover {
                border-color: #455E9E;
            }
        }
    }

    .pagination-box {
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }
</style>
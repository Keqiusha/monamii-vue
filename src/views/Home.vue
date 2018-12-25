<template>
    <div class="wrapper-main">

        <div class="banner-box">
            <el-carousel height="500px">
                <el-carousel-item>
                    <div class="banner-item one">
                        <button class="button">立即注册</button>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-item two"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!--入驻开始-->
        <div class="enter-box">

            <div class="title-box">
                <h1 class="title-name">一站式搞定您的口岸物流</h1>
                <p>仓库、拖车、报关、保险、物理金融......连接数千家联盟商</p>
                <p>提供多样化的平台服务，全方位匹配您的业务需求</p>
                <div class="title-border"></div>
            </div>

            <div class="product-box flex">
                <div @mouseover="activeItem = item.key" :class="{'active':activeItem == item.key}" class="product-item"
                     v-for="item in product">
                    <div class="item-title">
                        <i :class="item.title.icon"></i>
                        <h3>{{ item.title.name }}</h3>
                    </div>
                    <div class="item-content flex">
                        <div class="content-item" v-if="childen.name != null" v-for="childen in item.items">
                            <div class="content-item">
                                <div class="m-t-15">
                                    <i :class="childen.icon"></i>
                                    <p>{{ childen.name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="content-item add" v-else>
                            <div class="content-item">
                                <div class="m-t-15">
                                    <i class="iconfont icon-add"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--入驻结束-->

        <!--订单流程开始-->
        <!--  <div class="flow-box" style="background-color: #fafafa">
              <div class="title-box">
                  <h1 class="title-name">口岸物流新时代，做有深度的交互</h1>
                  <p>为您提供出口服务数据节点，实现口岸物流全场可视化</p>
                  <div class="title-border"></div>
              </div>
              <div class="process-content">
                  <img src="../assets/img/liuchengtu.jpg" width="1250" height="280" alt="">
              </div>
          </div>-->
        <!--订单流程结束-->


        <div class="range-box">
            <div class="title-box">
                <h1 class="title-name">立足珠三角&nbsp;&nbsp;面向全国&nbsp;&nbsp;辐射全球</h1>
                <p>让口岸物流可视、可控、有保障</p>
                <p>平台赋能联盟商，提供多场景的仓、关、配解决方案，让业务更高效，服务有保证！</p>
                <div class="title-border"></div>
            </div>
            <div class="range-content flex">
                <div class="map-box">
                    <div class="map"></div>

                    <div class="guangdong">
                        <div class="round lg"></div>
                        <div class="round md"></div>
                        <div class="round sm"></div>
                        <div class="round xs"></div>
                        <div class="message">立足珠三角辐射全国</div>
                    </div>

                </div>
                <div class="table-box">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>区域</th>
                            <th>仓库位置</th>
                            <th>报关口岸</th>
                            <th>配送覆盖</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        <tr>
                            <td>深圳</td>
                            <td>盐田</td>
                            <td>盐田</td>
                            <td>广东省内</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!--交互开始-->
        <div id="interactive" class="interactive-box">
            <div class="title-box">
                <h1 class="title-name">口岸物流新时代，做有深度的交互</h1>
                <p>为您提供口岸物流业务核心节点数据，实现全流程可视监控</p>
                <div class="title-border"></div>
            </div>
            <div class="interactive-content">
                <div class="platform">
                    <div class="procedure">
                        <div class="node-box">
                            <div class="node-icon ">1</div>
                            <div class="node-icon ">2</div>
                            <div class="node-icon ">3</div>
                            <div class="node-icon ">4</div>
                            <div class="node-icon ">5</div>
                            <div class="node-icon ">6</div>
                            <div class="node-icon ">7</div>
                            <div class="node-icon ">8</div>
                            <div class="node-icon ">9</div>
                            <div class="node-icon ">10</div>
                            <div class="node-icon ">11</div>
                            <div class="node-icon ">12</div>
                            <div class="node-icon ">13</div>
                            <div class="node-icon ">14</div>
                        </div>
                        <div class="round-box">
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                            <div class="round-item "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--交互结束-->


        <!-- 全流程可视开始 -->
        <div id="visibleFlow" class="visible-box">
            <div class="title-box">
                <h1 class="title-name">全流程可视</h1>
                <div class="title-border"></div>
            </div>
            <div class="process-content">
                <div class="map"></div>
                <template v-for="(item, i) in visible">
                    <div :class="'item active item-'+i" v-if="item.isActive">
                        <div class="bg"></div>
                        <div :class="item.icon"></div>
                        <div class="content">
                            <p>{{ item.time }}</p>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                    <div :class="'item item-'+i" v-else>
                        <div class="bg"></div>
                        <div :class="item.icon"></div>
                        <div class="content">
                            <p>{{ item.time }}</p>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <!-- 全流程可视结束 -->

        <!--安全稳定的平台服务开始-->
        <div class="stability">
            <div class="title-box">
                <h1 class="title-name">安全稳定的平台服务</h1>
                <div class="title-border"></div>
            </div>
            <div class="stability-box flex">
                <div class="box-item" v-for="item in stability">
                    <div class="item">
                        <div class="item-logo" :class="item.logoClass"></div>
                        <div class="item-content">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--安全稳定的平台服务结束-->


        <!--行业实践开始-->
        <div class="practice-box">
            <div class="title-box">
                <h1 class="title-name">行业实践</h1>
                <div class="title-border"></div>
            </div>
            <div class="practice-content flex">
                <div class="content-item" v-for="item in practice">
                    <div class="item-title dial-box">
                        <div class="ring"></div>
                        <div class="data-num"><span>{{ item.number }}</span><em>+</em></div>
                        <div class="data-name">{{ item.title }}</div>
                    </div>
                    <div class="item-content">{{ item.description }}</div>
                </div>
            </div>
            <ul class="link-box flex">
                <li class="link-item">海外货主</li>
                <li class="line"></li>
                <li class="link-item">海外货代</li>
                <li class="line"></li>
                <li class="link-item">海外工厂</li>
                <li class="line"></li>
                <li class="link-item">国内工厂</li>
                <li class="line"></li>
                <li class="link-item">国内货代</li>
                <li class="line"></li>
                <li class="link-item">国内码头</li>
                <li class="line"></li>
                <li class="link-item">国内堆场</li>
                <li class="line"></li>
                <li class="link-item">拖车行</li>
                <li class="line"></li>
                <li class="link-item">报关行</li>
            </ul>
        </div>
        <!--行业实践结束-->
        <BackTop/>
    </div>
</template>

<script>

    import BackTop from '@/components/BackTop'

    export default {
        components: {BackTop},
        name: 'home',
        data() {
            return {
                popoverVisible: true,
                detune: 100,
                activeItem: 'storage',
                //一站式搞定您的口岸物流数据
                product: [
                    {
                        key: 'customs',
                        title: {
                            icon: 'iconfont icon-haiguan',
                            name: '报关'
                        },
                        items: [
                            {
                                icon: 'iconfont icon-jinkou',
                                name: '进口报关代理'
                            },
                            {
                                icon: 'iconfont icon-chukou',
                                name: '出口报关代理'
                            },
                            {
                                icon: 'iconfont icon-consult',
                                name: '关务咨询'
                            },
                            {
                                icon: 'iconfont icon-iconwangge',
                                name: '预归类服务'
                            }, {
                                icon: 'iconfont icon-hongjiujia',
                                name: '红酒进口清关'
                            }, {
                                icon: 'iconfont icon-food',
                                name: '进口食品报关'
                            },
                            {
                                icon: 'iconfont icon-huanbaoshui',
                                name: '保税进口报关'
                            },
                            {
                                icon: 'iconfont icon-security',
                                name: '出口监管报关'
                            }, {
                                icon: 'iconfont icon-daiban',
                                name: '许可证商务代办'
                            }
                        ]
                    },
                    {
                        key: 'storage',
                        title: {
                            icon: 'iconfont icon-m003',
                            name: '仓储'
                        },
                        items: [
                            {
                                icon: 'iconfont icon-fenbobumen',
                                name: '进口分拨'
                            },
                            {
                                icon: 'iconfont icon-pintu',
                                name: '出口集拼'
                            }, {
                                icon: 'iconfont icon-zhongzhuan',
                                name: '口岸中转仓'
                            },
                            {
                                icon: 'iconfont icon-icon-baoshuicang',
                                name: '保税仓储'
                            }, {
                                icon: 'iconfont icon-yingjijiagongqiye',
                                name: '仓内加工'
                            },
                            {
                                icon: 'iconfont icon-chakucun',
                                name: '监管仓'
                            }, {
                                icon: 'iconfont icon-yitihua',
                                name: '仓配一体'
                            },
                            {
                                icon: 'iconfont icon-quancang-kanban',
                            },
                            {
                                icon: 'iconfont icon-quancang-kanban',
                            }
                        ]
                    },
                    {
                        key: 'trailer',
                        title: {
                            icon: 'iconfont icon-huoche1',
                            name: '配送'
                        },
                        items: [
                            {
                                icon: 'iconfont icon-guoshengganxian',
                                name: '干线运输'
                            }, {
                                icon: 'iconfont icon-quyu',
                                name: '区域配送'
                            }, {
                                icon: 'iconfont icon-peisong2',
                                name: '末端配送'
                            }, {
                                icon: 'iconfont icon-gangkou',
                                name: '疏港短驳'
                            }, {
                                icon: 'iconfont icon-carrier',
                                name: '拼箱承运'
                            },
                            {
                                icon: 'iconfont icon-haiyunchukouzhengxiang',
                                name: '整箱承运'
                            }, {
                                icon: 'iconfont icon-hailukongguojihuoyundaili',
                                name: '海陆联运'
                            }, {
                                icon: 'iconfont icon-huoche',
                                name: '区港配送'
                            }, {
                                icon: 'iconfont icon-huoche',
                            }
                        ]
                    }
                ],
                //行业实践数据
                practice: [
                    {
                        number: '1000',
                        title: '入驻联盟商',
                        description: '平台提供行业级解决方案，助力联盟商数字化转型，行业领先的仓关配信息系统，线下1000+服务商入驻'
                    },
                    {
                        number: '20,000',
                        title: '注册用户',
                        description: '连接口岸物流各节点，重新定义用户体验，超20000+用户享用懿点网高效服务'
                    },
                    {
                        number: '20,000',
                        title: '日均订单数',
                        description: '行业头部客户先行入，驻日均订单20000单'
                    }
                ],
                //安全开始
                stability: [
                    {
                        logoClass: 'one',
                        title: '高效',
                        description: '精选各口岸的实力联盟商入驻平台，多年经验提炼成丰富的行业解决方案，全程可视化的物流信息系统支持。'
                    },
                    {
                        logoClass: 'two',
                        title: '安全',
                        description: '线下联盟商的标准化SOP管理，对联盟商的定期KPI考核，对联盟商准入的前期考察（硬件、保险、团队等），全程可控、可视、可追溯，平台实力背书。'
                    },
                    {
                        logoClass: 'three',
                        title: '经济',
                        description: '提供一站式的仓储、拖车、报关服务，降低客户寻源节本，打通口岸物流各节点信息孤岛，减少各环节的沟通成本。'
                    },
                    {
                        logoClass: 'four',
                        title: '稳定',
                        description: '平台提供丰富的仓关配资源保障，各口岸联盟商服务质量稳定，节假日高峰期平台资源联动。'
                    }
                ],
                //全流程可视数据
                visible: [
                    {
                        isActive: false,
                        icon: 'iconfont icon-maker-order',
                        time: '2018-12-14 10:35',
                        name: '下订单'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-lihuo',
                        time: '2018-12-14 12:35',
                        name: '工厂提货'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-ruku1',
                        time: '2018-12-14 12:35',
                        name: '入监管仓'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-peizhi1',
                        time: '2018-12-14 13:35',
                        name: '预配舱单'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-out-warehouse-order',
                        time: '2018-12-14 16:35',
                        name: '出口报关'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-haiguan',
                        time: '2018-12-14 17:35',
                        name: '海关查验'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-ganghang',
                        time: '2018-12-14 18:35',
                        name: '货柜进港'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-matou',
                        time: '2018-12-14 19:35',
                        name: '交货码头'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-ganggutong',
                        time: '2018-12-14 20:35',
                        name: '装车离港'
                    },
                    {
                        isActive: false,
                        icon: 'iconfont icon-zhijiandan-',
                        time: '2018-12-15 9:35',
                        name: '支付结算'
                    }
                ],
                interactiveOver: false,
                visibleFlowOver: false
            }
        },
        mounted() {
            const interactive = document.getElementById("interactive").offsetTop - 100;
            const visibleFlow = document.getElementById("visibleFlow").offsetTop - 100;
            window.onscroll = () => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > interactive) {
                    if (!this.interactiveOver) {
                        this.interactiveOver = true;
                        this.interactiveAnimation()
                    }
                }
                if (scrollTop > visibleFlow) {
                    if (this.visibleFlowOver) {
                        return false;
                    }
                    this.visibleFlowOver = true;
                    let length = this.visible.length,
                        index = -1,
                        visibleInterval = window.setInterval(() => {
                            if (++index < length) {
                                this.visible[index].isActive = true;
                            } else {
                                window.clearInterval(visibleInterval)
                            }
                        }, 500)
                }
            }
        },
        methods: {
            interactiveAnimation() {
                let nodeItems = document.querySelectorAll('.interactive-content .node-icon'),
                    roundItems = document.querySelectorAll('.interactive-content .round-item'),
                    length = nodeItems.length,
                    roundLength = roundItems.length,
                    roundIndex = -1,
                    index = -1;
                let interactiveInterval = window.setInterval(() => {
                    if (++index < length) {
                        nodeItems[index].classList.add('green');
                        roundItems[++roundIndex].classList.add('green');
                    } else {
                        window.clearInterval(interactiveInterval)
                    }
                }, 500)
            }
        }
    }
</script>
<style type="text/less" lang="less">
    @import "../assets/css/home.less";
</style>

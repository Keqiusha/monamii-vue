<template>
    <div class="wrapper-main">
        <div class="banner-box">
            <el-carousel height="500px">
                <el-carousel-item>
                    <div class="banner-item one">
                        <button class="button">立即入驻</button>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-item two"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-item three"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!--入驻条件开始-->
        <div class="condition">
            <div class="title-box">
                <h1 class="title-name">入驻条件</h1>
                <div class="title-border"></div>
            </div>

            <div class="condition-box flex">
                <div @mouseover="activeItem = 'bgh'" :class="{'active':activeItem == 'bgh'}" class="condition-item">
                    <div class="item-title">
                        <i class="iconfont icon-haiguan"></i>
                        <h3>报关行</h3>
                    </div>
                    <div class="item-content">
                        <div class="content-item">
                            <ul>
                                <li>
                                    <div class="seq">01</div>
                                    有代理报关/报检资质
                                </li>
                                <li>
                                    <div class="seq">02</div>
                                    1000+万注册资金
                                </li>
                                <li>
                                    <div class="seq">03</div>
                                    B级以上报关资质
                                </li>
                                <li>
                                    <div class="seq">04</div>
                                    三年以上出口代理报关经验
                                </li>
                                <li>
                                    <div class="seq">05</div>
                                    有代理品牌公司或大型工厂报关
                                </li>
                                <li>
                                    <div class="seq">06</div>
                                    年代理报关10000+单以上
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div @mouseover="activeItem = 'ccgs'" :class="{'active':activeItem == 'ccgs'}" class="condition-item ">
                    <div class="item-title">
                        <i class="iconfont icon-m003"></i>
                        <h3>仓储公司</h3>
                    </div>
                    <div class="item-content">
                        <div class="content-item">
                            <ul>
                                <li>
                                    <div class="seq">01</div>
                                    2000万以上保险
                                </li>
                                <li>
                                    <div class="seq">02</div>
                                    有消防合格证明
                                </li>
                                <li>
                                    <div class="seq">03</div>
                                    房产证或村租合同
                                </li>
                                <li>
                                    <div class="seq">04</div>
                                    租期6年以上
                                </li>
                                <li>
                                    <div class="seq">05</div>
                                    仓库为四面砖墙或钢架结构
                                </li>
                                <li>
                                    <div class="seq">06</div>
                                    有三年以上运营管理经验
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div @mouseover="activeItem = 'tch'" :class="{'active':activeItem == 'tch'}" class="condition-item">
                    <div class="item-title">
                        <i class="iconfont icon-huoche1"></i>
                        <h3>拖车行</h3>
                    </div>
                    <div class="item-content">
                        <div class="content-item">
                            <ul>
                                <li>
                                    <div class="seq">01</div>
                                    1000+万注册资金
                                </li>
                                <li>
                                    <div class="seq">02</div>
                                    自有车辆20+台以上
                                </li>
                                <li>
                                    <div class="seq">03</div>
                                    三年以上车队管理经验
                                </li>
                                <li>
                                    <div class="seq">04</div>
                                    我有多种车型资源（拖车、吨车）
                                </li>
                                <li>
                                    <div class="seq">05</div>
                                    有服务品牌公司或大型工厂
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--入驻条件结束-->

        <!--优势开始-->
        <div class="advantage">
            <div class="title-box">
                <h1 class="title-name">入驻优势</h1>
                <p>以科技驱动“关、仓、配”三张网，赋能口岸物流</p>
                <p>帮助联盟商为客户提供行业领先的线上线下外贸物流生态场景，创造生态服务价值</p>
                <div class="title-border"></div>
            </div>

            <div class="advantage-box flex">
                <div class="advantage-item">
                    <div class="item-logo"><img src="../assets/img/ruzhuyoushi-01.jpg"></div>
                    <div class="item-content">
                        <h2>协同</h2>
                        <h4>业务线上化，让业务协同更高效</h4>
                        <p>提供从B2B门户、订单、客户管理、大数据、BI报表等一站式应用服务，通过数据驱动，让您和合作伙伴在一个平台上联动。</p>
                    </div>
                </div>

                <div class="advantage-item">
                    <div class="item-logo"><img src="../assets/img/ruzhuyoushi-02.jpg"></div>
                    <div class="item-content">
                        <h2>连接</h2>
                        <h4>大数据连接，让数据无限畅达</h4>
                        <p>平台连接海关、商检、税务、外汇、拖车、班轮、集装箱、港口、码头、工商、保险、银行等业务大数据与风险大数据，使数据通过传递创造价值。</p>
                    </div>
                </div>

                <div class="advantage-item">
                    <div class="item-logo"><img src="../assets/img/ruzhuyoushi-03.jpg"></div>
                    <div class="item-content">
                        <h2>管控</h2>
                        <h4>全程可视化，让业务风险更可控</h4>
                        <p>依托企业内部数据和外部数据，通过平台实现360°口岸物流的全程可视化服务，通过深度嵌入外贸产业链，轻松识别业务过程中的风险，自动预警。</p>
                    </div>
                </div>
            </div>
        </div>
        <!--优势结束-->

        <!--平台价值开始-->
        <div class="worth">
            <div class="worth-box">
                <div class="worth-title">懿点网平台</div>
                <div class="worth-content">
                    <div class="content-item left">
                        <div class="item">
                            <h2>平台一体化服务解决方案</h2>
                            <p>连通联盟商ERP系统，实现线下业务与懿点网平台协同融合。赋能联盟商</p>
                            <div class="flow">
                                <div class="el-steps el-steps--vertical">
                                    <div class="el-step is-vertical">
                                        <div class="el-step__head">
                                            <div class="el-step__line"></div>
                                            <div class="el-step__icon is-text"></div>
                                        </div>
                                        <div class="el-step__main">
                                            <div class="el-step__title">
                                                线下的客户、合同、订单、结算管理通过数据驱动，更加智能高效，以及提供更加丰富、便捷、有效的服务手段。
                                            </div>
                                            <div class="el-step__description"></div>
                                        </div>
                                    </div>
                                    <div class="el-step is-vertical">
                                        <div class="el-step__head is-process">
                                            <div class="el-step__line"></div>
                                            <div class="el-step__icon is-text"></div>
                                        </div>
                                        <div class="el-step__main">
                                            <div class="el-step__title is-process">
                                                线上门户的建设与管理更加无缝、低成本，同时把联盟商在线下服务数据、服务能力透传到线上，帮助联盟商快速拓展线上商业场景。
                                            </div>
                                            <div class="el-step__description is-process"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-item right"></div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--平台价值结束-->


        <!--选择我们开始-->
        <div class="reason-box">
            <div class="title-box">
                <h1 class="title-name">选择懿点网平台，无法抗拒的理由</h1>
                <div class="title-border"></div>
            </div>
            <div class="reason-content flex">
                <div class="content-item">
                    <div class="item-title">
                        从基础物流到<br>科技物流的转型
                    </div>
                    <div class="item-content">
                        依拖懿点网平台，集中进行平台化合作，并通过平台科技支撑，快速建立专属子平台，实现产业互联网转型，向互联网+物流方向开拓进取，使您企业的估值不断提升。
                    </div>
                </div>
                <div class="content-item two">
                    <div class="item-title">
                        迅速提升您的知名度
                    </div>
                    <div class="item-content">
                        为您提供专属门户，搭建自助式精准服务平台，结合懿点网BI大数据系统让每一个流量价值最大化，让每个客户找到你、选择你。
                    </div>
                </div>
                <div class="content-item three">
                    <div class="item-title">
                        提升管理效率
                    </div>
                    <div class="item-content">
                        加入懿点网平台，将业务数据线上化、操作流程标准化，可大大提高内部管理效率，管理更加规范。
                    </div>
                </div>
                <div class="content-item four">
                    <div class="item-title">
                        普通物流商<br>转变为区域领军者
                    </div>
                    <div class="item-content">
                        普通物流商实力弱小，做大做强难度巨大，联合平台伙伴，形成口岸物流联盟商圈，可扩大和夯实供应链上下游影响力。
                    </div>
                </div>
            </div>
        </div>
        <!--选择我们结束-->


        <!--入驻流程开始-->
        <div class="flow">
            <div class="title-box">
                <h1 class="title-name">入驻流程</h1>
                <div class="title-border"></div>
            </div>
            <div class="flow-row">
                <div class="flow-box flex">
                    <div class="flow-item one">
                        <div class="shade"></div>
                        <div class="shade-bg"></div>
                        <div class="item-content">
                            <h1>01</h1>
                            <p>在线注册</p>
                            <span>约1-2分钟</span>
                            <ol class="item-box">
                                <li class="item">注册懿点网懿账通账号</li>
                                <li>录入我的公司名称、验证手机号</li>
                                <li>确认入驻协议</li>
                            </ol>
                        </div>
                    </div>
                    <div class="flow-item two">
                        <div class="shade"></div>
                        <div class="shade-bg"></div>
                        <div class="item-content">
                            <h1>02</h1>
                            <p>填写/提交入驻资料</p>
                            <span>约1小时</span>
                            <ol class="item-box">
                                <li class="item">填写公司基本信息，提交资质</li>
                                <li>选择服务类型</li>
                                <li>提交审核</li>
                            </ol>
                        </div>
                    </div>
                    <div class="flow-item three">
                        <div class="shade"></div>
                        <div class="shade-bg"></div>
                        <div class="item-content">
                            <h1>03</h1>
                            <p>等待审核</p>
                            <span>约1-3个工作日</span>
                            <ol class="item-box">
                                <li class="item">懿点网在1-3个工作日内反馈审核结果</li>
                                <li>我可查询入驻审核进度</li>
                            </ol>
                        </div>
                    </div>
                    <div class="flow-item four">
                        <div class="shade"></div>
                        <div class="shade-bg"></div>
                        <div class="item-content">
                            <h1>04</h1>
                            <p>入驻上线</p>
                            <span>约1天</span>
                            <ol class="item-box">
                                <li class="item">懿点网协助门户开通，完善资料</li>
                                <li>登陆工作台，业务操作</li>
                                <li>入驻成功</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--入驻流程结束-->

        <BackTop/>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'

    export default {
        name: "league",
        components: {
            BackTop
        },
        data() {
            return {
                activeItem: 'ccgs'
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    @import "../assets/css/league.less";
</style>
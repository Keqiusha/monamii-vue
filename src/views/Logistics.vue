<template>
    <div class="wrapper-main">
        <div class="banner-box"></div>

        <div class="wrapper-content">
            <!--服务开始-->
            <div class="server-box">
                <div class="title-box">
                    <h1 class="title-name">懿点网云仓</h1>
                    <p>懿点云仓以整合共享实力仓储资源为基础，数据服务为核心，输出技术、标准和管理</p>
                    <p>打造世界级仓储品牌，建设物流和科技相融合的云仓储基础设施平台</p>
                    <div class="title-border"></div>
                </div>
                <div class="server-content flex">
                    <div class="content-item">
                        <div class="content-logo"></div>
                        <div class="content-remark">
                            <h3>订单报表</h3>
                            <ul>
                                <li>入库单</li>
                                <li>出库单</li>
                                <li>仓储订单</li>
                                <li>库存报表</li>
                                <li>异常报表</li>
                                <li>出入库明细表</li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="content-logo"></div>
                        <div class="content-remark">
                            <h3>仓储管理</h3>
                            <ul>
                                <li>货品管理</li>
                                <li>入库管理</li>
                                <li>出库管理</li>
                                <li>调拨管理</li>
                                <li>库存管理</li>
                                <li>库位管理</li>
                                <li>波次管理</li>
                                <li>复核装箱</li>
                            </ul>
                        </div>
                    </div>
                    <div class="content-item">
                        <div class="content-logo"></div>
                        <div class="content-remark">
                            <h3>增值服务</h3>
                            <ul>
                                <li>司机预约</li>
                                <li>打包服务</li>
                                <li>贴标服务</li>
                                <li>扫描服务</li>
                                <li>方案设计</li>
                                <li>仓储规划</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--服务结束-->


            <div class="delivery-box">
                <div class="title-box">
                    <h1 class="title-name">懿点配送</h1>
                    <p>领先的创新懿点配送，将口岸物流环节中的工厂、货代、司机和仓库链接在同一平台</p>
                    <p>实现人、车、货、仓可视化管理，车辆在途跟踪、货物到达时间提前预判、异常情况及时报警等</p>
                    <p>帮助客户提高物流时效，最终实现业务系统化、标准化、信息化、智能化、无纸化</p>
                    <div class="title-border"></div>
                </div>
                <div class="delivery-content">
                    <div class="flow">
                        <ul class="node">
                            <li class="node-item">
                                <span class="circular"></span>
                                <div class="node-text"><p>发车</p></div>
                            </li>
                            <li class="node-item">
                                <span class="circular"></span>
                                <div class="node-text"><p>在途</p></div>
                            </li>
                            <li class="node-item">
                                <span class="circular"></span>
                                <div class="node-text"><p>运抵</p></div>
                            </li>
                            <li class="node-item">
                                <span class="circular"></span>
                                <div class="node-text"><p>签收</p></div>
                            </li>
                        </ul>
                    </div>
                    <div class="table-content">
                        <div class="table-box">
                            <div class="table-title">
                                <h2>车辆的三维状态管理</h2>
                                <p>动态信息的更新：根据车辆状态自动更新，随时掌握车辆即时状态。</p>
                            </div>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>A车</th>
                                    <th>B车</th>
                                    <th>C车</th>
                                    <th>D车</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>任务</td>
                                    <td>发车</td>
                                    <td>在途</td>
                                    <td>运抵</td>
                                    <td>签收</td>
                                </tr>
                                <tr>
                                    <td>时间</td>
                                    <td>2018-12-21 10:37</td>
                                    <td>2018-12-21 10:37</td>
                                    <td>2018-12-21 10:37</td>
                                    <td>2018-12-21 10:37</td>
                                </tr>
                                <tr>
                                    <td>位置</td>
                                    <td>深圳罗湖</td>
                                    <td>深圳罗湖</td>
                                    <td>深圳罗湖</td>
                                    <td>深圳罗湖</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div class="source-box">
                <div class="title-box">
                    <h1 class="title-name">懿点关务</h1>
                    <p>懿点关务生态，覆盖口岸物流的全方位关务协同，连接货代、工厂、报关行、运输公司、仓储公司大数据驱动的关务生态服务</p>
                    <div class="title-border"></div>
                </div>
                <div class="item-content">
                    <div class="content-box flex source">
                        <div @mouseover="companySource = 'one'" :class="{'active': companySource==='one'}"
                             class="content-item">
                            <div class="item-title">
                                <div class="icon">
                                    <i class="iconfont icon-zhinengdaozhen"></i>
                                </div>
                                <h5>智能判断</h5>
                            </div>
                            <div class="item-content">
                                智能判断，0差错
                            </div>
                        </div>
                        <div @mouseover="companySource = 'two'" :class="{'active': companySource==='two'}"
                             class="content-item">
                            <div class="item-title">
                                <div class="icon">
                                    <i class="iconfont icon-zhuanjiazhuye"></i>
                                </div>
                                <h5>关务专家</h5>
                            </div>
                            <div class="item-content">
                                整合通关领域专家团队，20年+进出口行业报关经验的沉淀与积累
                            </div>
                        </div>
                        <div @mouseover="companySource = 'three'" :class="{'active': companySource==='three'}"
                             class="content-item">
                            <div class="item-title">
                                <div class="icon">
                                    <i class="iconfont icon-shuju"></i>
                                </div>
                                <h5>历史数据</h5>
                            </div>
                            <div class="item-content">
                                20+年历史报关商品归类数据信息
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BackTop/>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop.vue'
    export default {
        name: "logistics",
        data() {
            return {
                companySource: 'two',
                loading: true
            }
        },
        components: {
            BackTop
        },
        mounted() {
        }
    }
</script>

<style scoped type="text/less" lang="less">
    @import "../assets/css/logistics.less";
</style>
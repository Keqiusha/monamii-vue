<template>
    <div class="wrapper-main">
        <div class="banner-box">
            <div class="banner-description">
                <h1>深圳市金运达国际物流有限公司</h1>
                <button class="button">我要合作</button>
            </div>
        </div>

        <div class="menu-box flex">
            <div class="menu-item"><span @click.stop="jump(0)">公司概况</span></div>
            <div class="menu-item"><span @click.stop="jump(1)">仓储优势</span></div>
            <div class="menu-item"><span @click.stop="jump(2)">运输优势</span></div>
            <div class="menu-item"><span @click.stop="jump(3)">报关优势</span></div>
        </div>

        <div class="wrapper-content">
            <div class="item-box company d_jump">
                <div class="item-title">
                    <div class="title-name">公司概况</div>
                </div>
                <div class="item-content">
                    深圳市金运达国际物流有限公司成立于1997年，是经中国外经贸部和深圳市人民政府批准注册的专业化现代物流企业。公司具备一级货代经营权，代理报关、报检经营权，海关监管仓、保税仓经营权，道路运输经营权，进出口贸易经营权等，经营范围涵盖全程物流供应链服务。并且同时经营广州状元谷与深圳前海电商仓配服务。公司总部位于深圳，拥有员工400余人。分公司7家，办事处10家，自有海关监管仓、进口保税仓60，000平方米，海关驻仓办理报关。并在全国设立了超过200，000平方米的仓储配送中心。自有运输车辆60多台，整合管理车辆200多台。物流服务网络覆盖珠三角地区，并逐步形成遍布全国的物流节点。
                </div>
                <div class="wall"></div>
            </div>

            <!--<div class="item-box server d_jump">
                <div class="item-title">
                    <div class="title-name">服务类型</div>
                </div>
                <div class="item-content">
                    <div @mouseover="serverType = 'one'" :class="{'active': serverType==='one'}"  class="content-item">
                        <div class="title"><p>口岸仓储</p></div>
                        <div class="content"><p>
                            是经中国外经贸部和深圳市人民政府批准注册的专业化现代物流企业。公司具备批准注册的专业化现代物流企业。公司具备批准注册的专业化现代物流企业。公司具备一级货代经营权</p>
                        </div>
                        <div class="logo-box">
                            <div class="box-content">
                                <div class="line"></div>
                                <div class="computer"><i class="iconfont icon-xitongcopy"></i></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>

                    <div @mouseover="serverType = 'two'" :class="{'active': serverType==='two'}" class="content-item">
                        <div class="title"><p>口岸仓储</p></div>
                        <div class="content"><p>
                            是经中国外经贸部和深圳市人民政府批准注册的专业化现代物流企业。公司具备一级货代经营权企业。公司具备一级货代经营权企业。公司具备一级货代经营权</p></div>
                        <div class="logo-box">
                            <div class="box-content">
                                <div class="line"></div>
                                <div class="computer">
                                    <i class="iconfont icon-xitongcopy"></i>
                                </div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>

                    <div @mouseover="serverType = 'three'" :class="{'active': serverType==='three'}" class="content-item">
                        <div class="title"><p>口岸仓储</p></div>
                        <div class="content"><p>是经中国外经贸部和深圳市人民政府批准注册的专业化现代物流企业。公司具备一级货代经营权</p>
                        </div>
                        <div class="logo-box">
                            <div class="box-content">
                                <div class="line"></div>
                                <div class="computer"><i class="iconfont icon-xitongcopy"></i></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>

                    <div @mouseover="serverType = 'four'" :class="{'active': serverType==='four'}" class="content-item">
                        <div class="title"><p>口岸仓储</p></div>
                        <div class="content"><p>
                            是经中国外经贸部和深圳市人民政府批准注册的专业化现代物流企业。公司具备一级货代经营权公司具备一级货代经营权货代经营权公司具备一级货代经营权</p></div>
                        <div class="logo-box">
                            <div class="box-content">
                                <div class="line"></div>
                                <div class="computer"><i class="iconfont icon-xitongcopy"></i></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->

            <div class="item-box d_jump storage">
                <div class="item-title">
                    <div class="title-name">仓储优势</div>
                </div>
                <div class="item-content flex">
                    <div class="item">
                        <div class="logo"></div>
                        <div class="remark">
                            <div>这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="logo"></div>
                        <div class="remark">
                            <div>这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="logo"></div>
                        <div class="remark">
                            <div>这个是一个说明这个是一个说明这个是一说明这个这个是一个说明个说明这个是一个说明这个这个是一个说明这个是一个说明这个是一个说明</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="logo"></div>
                        <div class="remark">
                            <div>这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明这个是一个说明</div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- 我们的能力开始 -->
            <div class="item-box ability d_jump">
                <div class="item-title">
                    <div class="title-name">运输优势</div>
                </div>
                <div class="ability-content flex">
                    <div class="left"></div>
                    <div class="right">
                        <div class="item flex">
                            <div class="icon"></div>
                            <div class="title">网络</div>
                            <div class="content">配送网络覆盖范围</div>
                        </div>
                        <div class="item flex">
                            <div class="icon"></div>
                            <div class="title">车型</div>
                            <div class="content">封闭式箱式货车、拖车</div>
                        </div>
                        <div class="item flex">
                            <div class="icon"></div>
                            <div class="title">系统</div>
                            <div class="content">GPS跟踪</div>
                        </div>
                        <div class="item flex">
                            <div class="icon"></div>
                            <div class="title">资源</div>
                            <div class="content">可控车辆数（含自由、外协）</div>
                        </div>
                        <div class="item flex">
                            <div class="icon"></div>
                            <div class="title">货运保险</div>
                            <div class="content">险种、金额</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我们的能力结束 -->

            <div class="item-box d_jump">
                <div class="item-title">
                    <div class="title-name">报关优势</div>
                </div>
                <div class="item-content">
                    <div class="content-box preponderance flex">
                        <div class="box-item">
                            <div class="item">
                                <h2>优势的标题一</h2>
                                <p>优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，
                                    优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，</p>
                            </div>
                            <div class="item">
                                <h2>优势的标题一</h2>
                                <p>优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，
                                    优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，优势的内容一，</p>
                            </div>
                        </div>
                        <div class="box-item">
                            <img src="../assets/img/s.png">
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
        name: "jyd",
        components: {BackTop},
        data() {
            return {
                serverType: 'two'
            }
        },
        methods: {
            jump(index) {
                let jump = document.querySelectorAll('.d_jump')
                let total = jump[index].offsetTop
                let distance = document.documentElement.scrollTop || document.body.scrollTop
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = total / 50
                if (total > distance) {
                    smoothDown()
                } else {
                    let newTotal = distance - total
                    step = newTotal / 50
                    smoothUp()
                }

                function smoothDown() {
                    if (distance < total) {
                        distance += step
                        document.body.scrollTop = distance
                        document.documentElement.scrollTop = distance
                        setTimeout(smoothDown, 10)
                    } else {
                        document.body.scrollTop = total
                        document.documentElement.scrollTop = total
                    }
                }

                function smoothUp() {
                    if (distance > total) {
                        distance -= step
                        document.body.scrollTop = distance
                        document.documentElement.scrollTop = distance
                        setTimeout(smoothUp, 10)
                    } else {
                        document.body.scrollTop = total
                        document.documentElement.scrollTop = total
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less" type="text/less">
    @import "../assets/css/company.less";
</style>
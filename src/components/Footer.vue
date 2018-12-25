<template>
    <div class="wrapper-footer">
        <div class="footer">
            <!-- <div class="blogroll">
                 <ul class="link-box flex">
                     <li class="link-item">海外货主</li>
                     <li class="link-item">海外货代</li>
                     <li class="link-item">海外工厂</li>
                     <li class="link-item">国内工厂</li>
                     <li class="link-item">国内货代</li>
                     <li class="link-item">国内码头</li>
                     <li class="link-item">国内堆场</li>
                     <li class="link-item">拖车行</li>
                     <li class="link-item">报关行</li>
                 </ul>
                 <div class="copyright">
                     <span>Copyright ©2017 - 2020 深圳市懿点网网络有限公司 <a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备16010768号</a></span>
                 </div>
             </div>-->
            <div class="address flex">
                <div :style="{marginLeft: 122 + 'px'}">
                    <ul>
                        <li>服务热线：0755-22315509</li>
                        <li>地 址：深圳市罗湖区清水河一路博隆大厦大厦804</li>
                    </ul>
                    <div class="copyright">
                        <span>Copyright ©2017 - 2020 深圳市懿点网网络有限公司<a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备16010768号</a></span>
                    </div>
                </div>
                <div class="qrcode">
                    <img src="../assets/img/wechat-img.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style type="text/less" scoped lang="less">
    .wrapper-footer {
        clear: both;
        background-color: #232f3d;
        position: relative;
        z-index: 100;
        color: rgba(255, 255, 255, .8);
        .footer {
            padding: 24px 0;
            font-size: 14px;
            .copyright {
                font-size: .75rem;
                color: rgba(255, 255, 255, 0.65);
                
                a {
                    color: rgba(255, 255, 255, 0.65);
                    text-decoration: none;
                    margin-left: 25px;
                }
            }
            .blogroll {
                .link-box .link-item {
                    list-style: none;
                    padding: 0 15px;
                    line-height: 1;
                    + .link-item {
                        border-left: 1px solid;
                    }
                }
            }

            .address {
                justify-content: center;
                align-items: center;
                text-align: center;
                ul {
                    overflow: hidden;
                    margin-top: 0;
                    margin-bottom: 5px;
                    
                    li {
                        list-style: none;
                        float: left;
                    
                        &+li {
                            margin-left: 40px;
                        }
                    }
                }
            }
            .qrcode {
                width:72px;
                height:72px;
                margin-left: 50px;
                
                img {
                    max-width: 100%;
                }
            }
        }

        .blogroll .copyright {
            padding-left: 14px;
        }
    }
</style>
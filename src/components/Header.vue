<template>
    <div class="header flex">
        <div class="logo flex">
            <img src="../assets/img/logo.png">
            <span class="title">口岸物流<br/>综合平台</span>
        </div>
        <div class="menu flex">
            <div class="menu-item-box flex">
                <div class="menu-item" v-for="(item,index) in menuList" v-if="item.exterior">
                    <a :href="item.route" target="_blank">{{ item.title }}</a>
                </div>
                <div class="menu-item" :class="{'active': item.isActive}" @click="handelMenu($event, index)" v-else>{{
                    item.title }}
                </div>
            </div>
            <div class="menu-login-box flex">
                <div class="button-group-item">
                    <a href="#" class="button button-link">登入</a>
                </div>
                <div class="button-group-item">
                    <a href="#" class="button button-link">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Header",
        data() {
            return {
                menuList: [
                    {
                        isActive: true,
                        exterior: false,
                        route: '/home',
                        title: '首页'
                    },
                    /* {
                         isActive: false,
                         exterior: false,
                         route: '/solution',
                         title: '行业解决方案'
                     },*/
                    {
                        isActive: false,
                        exterior: false,
                        route: '/product',
                        title: '物流产品'
                    },
                    {
                        isActive: false,
                        exterior: false,
                        route: '/league',
                        title: '联盟商入驻'
                    },
                    /*{
                        isActive: false,
                        exterior: false,
                        route: '/jyd',
                        title: '金运达'
                    },
                    {
                        isActive: false,
                        exterior: true,
                        route: 'http://120.79.152.237:9091/jydController/index',
                        title: '区块链平台'
                    },*/
                    {
                        isActive: false,
                        exterior: false,
                        route: '/about',
                        title: '关于懿点网'
                    }
                ]
            }
        },
        methods: {
            handelMenu(event, index) {
                this.menuList.forEach((v) => {
                    v.isActive = false
                })
                this.menuList[index].isActive = true;
                let route = this.menuList[index].route
                this.$router.push({
                    path: route
                })
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .wrapper-header {
        .header {
            height: 60px;
            justify-content: space-around;
            align-items: center;
            transition: background 1s ease-out;
        }
        &.headroom--top .header:hover {
            background-color: rgba(255, 255, 255, .2);
        }
        .logo {
            align-items: center;
        }
        .title {
            font-size: .875rem;
            border-left: 1px solid #ffffff;
            padding-left: 10px;
            margin-left: 7px;
            color: #fff;
            line-height: 1.3;
        }
        .menu {
            justify-content: center;
            align-items: center;
        }
        .banner-button {
            position: absolute;
            left: 46%;
            top: 83%;
            background: #455e9e;
            color: #fff;
            border: 1px solid #455e9e;
        }

        .menu-item-box {
            .menu-item {
                color: rgba(255, 255, 255, .8);
                padding: 15px 20px;
                cursor: pointer;
                position: relative;
                font-size: 1rem;
                a {
                    text-decoration: none;
                    color: rgba(255, 255, 255, .8);
                }
                &:hover {
                    color: #fff;
                    > a {
                        color: #fff;
                    }
                }
                &:after {
                    content: " ";
                    background: #fff;
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    transition: all .3s;
                }
                &:hover:after {
                    width: 80%;
                    margin-left: -40%;
                }
                &.active {
                    color: #fff;
                }
            }
        }
        .menu-login-box {
            height: 60px;
            line-height: 60px;
            margin-left: 5px;

            .button-group-item {
                .button {
                    padding-left: 15px;
                    padding-right: 15px;
                    font-size: .875rem;
                    border: solid 1px rgba(255, 255, 255, .0);
                }
                &:hover {
                    background-color: #455e9e;
                }
            }
            .button {
                color: #fff;
                text-decoration: none;
                border: 0;
            }
        }
        &.headroom--not-top .menu-login-box {
            .button-group-item {
                padding: 0px;
                a {
                    margin-top: 10px;
                    padding-top: 11px;
                    padding-bottom: 11px;
                    border-radius: 4px;
                    transition: all .3s;
                    &:hover {
                        border-radius: 20px;
                        background: rgba(255, 255, 255, .15);
                    }
                }
            }

        }
    }
</style>
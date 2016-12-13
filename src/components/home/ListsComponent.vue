<template>
    <div>
        <el-menu default-active="/" :unique-opened="true" class="zinn-lists-menu" @open="handleOpen" @close="handleClose" @select="handleSelect">
            <el-submenu v-for="(item, index) in data" :index="item.no" :class="{'zinn-lists-no_item' : !item.children.length}">              
                <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                <el-menu-item-group  v-if="item.children.length" v-for="option in item.children" @open="handleOpen" @close="handleClose">
                    <el-menu-item :index="option.url">{{option.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'listsComponent',
        data() {
            return {
                data:  [
                    {
                        "name": "首页",
                        "no": "IM-01",
                        "url": "/",
                        "rank": 1,
                        "children": []
                    },
                    {
                        "name": "住房管理",
                        "no": "IM-02",
                        "url": null,
                        "rank": 2,
                        "children": [
                        {
                            "name": "公寓管理",
                            "no": "IM-02-01",
                            "url": "/apartment/",
                            "rank": 1,
                            "children": []
                        },
                        {
                            "name": "房间管理",
                            "no": "IM-02-02",
                            "url": "/room/",
                            "rank": 2,
                            "children": []
                        }
                        ]
                    },
                    {
                        "name": "智能家居管理",
                        "no": "DM-01",
                        "url": null,
                        "rank": 3,
                        "children": [
                        {
                            "name": "智能设备管理",
                            "no": "DM-01-01",
                            "url": "/device/",
                            "rank": 1,
                            "children": []
                        },
                        {
                            "name": "智能门锁管理",
                            "no": "DM-01-02",
                            "url": "/lock/",
                            "rank": 2,
                            "children": []
                        }
                        ]
                    },
                    {
                        "name": "租户管理",
                        "no": "IM-03",
                        "url": "/user/tenant/",
                        "rank": 4,
                        "children": []
                    },
                    {
                        "name": "集中抄表",
                        "no": "IM-04",
                        "url": "/meter_reading/",
                        "rank": 5,
                        "children": []
                    },
                    {
                        "name": "账单管理",
                        "no": "BM-01",
                        "url": "/bill/",
                        "rank": 6,
                        "children": []
                    },
                    {
                        "name": "意见反馈",
                        "no": "MM-01",
                        "url": "/suggestion/",
                        "rank": 7,
                        "children": []
                    },
                    {
                        "name": "报修管理",
                        "no": "MM-02",
                        "url": "/repair/",
                        "rank": 8,
                        "children": []
                    },
                    {
                        "name": "消息管理",
                        "no": "MM-03",
                        "url": null,
                        "rank": 9,
                        "children": [
                        {
                            "name": "已收消息",
                            "no": "MM-03-01",
                            "url": "/message/",
                            "rank": 1,
                            "children": []
                        },
                        {
                            "name": "系统通知",
                            "no": "MM-03-02",
                            "url": "/notice/",
                            "rank": 2,
                            "children": []
                        },
                        {
                            "name": "设备故障报警",
                            "no": "MM-03-03",
                            "url": "/device_fault/",
                            "rank": 3,
                            "children": []
                        }
                        ]
                    },
                    {
                        "name": "系统日志",
                        "no": "SM-01",
                        "url": "/log/",
                        "rank": 10,
                        "children": []
                    },
                    {
                        "name": "用户管理",
                        "no": "AM-01",
                        "url": null,
                        "rank": 11,
                        "children": [
                        {
                            "name": "系统用户管理",
                            "no": "AM-01-01",
                            "url": "/user/system/",
                            "rank": 1,
                            "children": []
                        },
                        {
                            "name": "公寓运营方管理",
                            "no": "AM-01-02",
                            "url": "/user/organization/",
                            "rank": 2,
                            "children": []
                        },
                        {
                            "name": "APP用户管理",
                            "no": "AM-01-03",
                            "url": "/user/app/",
                            "rank": 3,
                            "children": []
                        },
                        {
                            "name": "角色权限管理",
                            "no": "AM-01-04",
                            "url": "/role/",
                            "rank": 4,
                            "children": []
                        }
                        ]
                    }
                    ]
            }
        },
        mounted(){
            console.log(this.data);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                 console.log('key:' + key + '|' + 'keyPath:' + keyPath);
            },
            getLists(){
                
            }
        }
    }
</script>

<style>
.zinn-lists-menu {
    background-color: #fff;
}
.zinn-lists-no_item .el-submenu__icon-arrow {
    display: none;
}
</style>
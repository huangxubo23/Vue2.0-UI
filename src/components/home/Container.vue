<template>
    <div class="zinn-container">
        <el-button>{{data}}</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'container',
        data() {
            return {
                data: 'I am a button'
            }
        }
    }
</script>

<style scoped>
    .zinn-container {
        margin-left: 250px;
        min-height: 500px;
        border-right: 1px solid #fff;
    }
</style>
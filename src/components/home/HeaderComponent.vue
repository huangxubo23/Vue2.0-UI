<template>
    <div class="zinn-header">
        <el-button>{{data}}</el-button>
    </div>
</template>

<script>
    export default {
        name: 'headerComponent',
        data() {
            return {
                data: 'I am a button'
            }
        }
    }
</script>

<style scoped>
    .zinn-header {
        height: 80px;
        background-color: #ef9732;
    }
</style>
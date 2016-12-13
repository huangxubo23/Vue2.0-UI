<template>
    <div>
        <el-button>{{data}}</el-button>
    </div>
</template>

<script>
    export default {
        name: 'listsComponent',
        data() {
            return {
                data: 'I am a button'
            }
        }
    }
</script>

<style scoped>
    .zinn-container {
        /*width: 250px;*/
        min-height: 500px;
        border-right: 1px solid #dbdbdb;
    }
</style>
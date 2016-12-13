<template>
    <div>
        <header-component></header-component>
       <div class="zinn-home-left">
            <lists-component></lists-component>
        </div>
        <div class="zinn-home-content">
            <container></container>
        </div>
    </div>
</template>

<script>
    import headerComponent from './HeaderComponent.vue'
    import listsComponent from './ListsComponent.vue'
    import container from './Container.vue'

    export default {
        name: 'home',
        data() {
            return {
                data: 'I am a button'
            }
        },
        components: {
            headerComponent,
            listsComponent,
            container
        }
    }
</script>

<style>
    .zinn-home-content {
        margin-left: 250px;
        min-height: 500px;
    };
    .zinn-home-left {
        float: left;
        width: 250px;
        background-color: #fff;
        min-height: 500px;
    }
</style>
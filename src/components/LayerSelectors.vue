<template lang="pug">
.tab-group
    ph-tab-item(v-for="layer in layers" :key="layer.title" :active='layer.active') {{ layer.title }}
    .tab-item.tab-item-fixed
        ph-icon(icon="plus")
</template>

<script>
export default {
    name: 'tab-group',
    data () {
        return {
            layers: [
                {title: 'a', active: true},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'},
                {title: 'a'}
            ]
        }
    }
}
</script>

<style scoped>
.tab-group {
    position: relative;
    margin: 5px 10px;
    width: calc(100% - 20px - 3px);
    & .tab-item{
        &:not(.tab-item-fixed) {
            min-width: 100px;
        }
        &:first-child {
            border-left: 1px solid #989698;
        }
        &:last-child {
            border-right: 1px solid #989698;
        }
    }
    border-bottom: none;

    overflow-x: scroll;
    overflow-y: hidden;
}

</style>

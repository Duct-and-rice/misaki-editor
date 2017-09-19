<template lang="pug">
.tab-group
    ph-tab-item(v-for="tab in tabs" :key="tab.title") {{ tab.title }}
    .tab-item.tab-item-fixed
        ph-icon(icon="plus")
</template>

<script>
export default {
    name: 'tab-group',
    data () {
        return {
            tabs: [{title: 'a'}]
        }
    }
}
</script>

<style scoped>

</style>

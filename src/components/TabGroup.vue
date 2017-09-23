<template lang="pug">
.tab-group
    ph-tab-item(v-for="(tab, index) in tabs" 
        :key="tab.title"
        :class="{active : index == current}"
        @click.native="onClickTab(index)"
        ) {{ tab.title }}
    .tab-item.tab-item-fixed(@click="addNewTab")
        ph-icon(icon="plus")
</template>

<script>
export default {
    name: 'tab-group',
    data () {
        return {
        }
    },
    props: {
        tabs: {
            type: Array,
            required: true
        },
        current: {
            type: Number,
            default: 0
        }
    },
    methods: {
        onClickTab (tabIndex) {
            console.log(tabIndex)
            this.$emit('update:current', tabIndex)
        },
        addNewTab () {
            this.$emit('addNewTab')
        }
    }
}
</script>

<style scoped>

</style>

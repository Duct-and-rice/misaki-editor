<template lang="pug">
ph-window.main
    app-header
    app-tab-group(:tabs="tabs" :current="currentTab" @update:current="updateCurrentTab" @addNewTab="$store.dispatch('tab/addNewTab')")
    ph-window-content
        ph-window
            ph-pane-group
                ph-pane.flex
                    aa-area(:value.sync="page")
                    app-layer-selectors
                ph-pane(:sidebar="true" size="sm")
    app-footer
</template>

<script>
import TabGroup from './TabGroup'
import LayerSelectors from './LayerSelectors'
import AAArea from './AAArea'
import { mapState } from 'vuex'

export default {
    name: 'main',
    data () {
        return {
            page: ''
        }
    },
    created () {
        if (this.tabs.length <= 0) {
            this.$store.dispatch('tab/addNewTab')
        }
    },
    computed: {
        ...mapState({
            tabs: state => state.tab.tabs,
            currentTab: state => state.tab.current
        })
    },
    methods: {
        updateCurrentTab (index) {
            this.$store.dispatch('tab/selectTab', index)
        }
    },
    components: {
        'app-tab-group': TabGroup,
        'app-layer-selectors': LayerSelectors,
        'aa-area': AAArea
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
}
</style>

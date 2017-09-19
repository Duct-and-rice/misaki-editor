<template lang="pug">
ph-window.main
    app-header
    app-tab-group(:tabs="tabs")
    ph-window-content
        ph-window
            ph-pane-group
                ph-pane
                ph-pane(:sidebar="true" size="sm")
            app-layer-selectors
    app-footer
</template>

<script>
import TabGroup from './TabGroup'
import LayerSelectors from './LayerSelectors'
import { mapState } from 'vuex'

export default {
    name: 'main',
    data () {
        return {
        }
    },
    created () {
        if (this.tabs.length <= 0) {
            this.$store.dispatch('addNewTab')
        }
    },
    computed: {
        ...mapState({
            tabs: 'tabs'
        })
    },
    components: {
        'app-tab-group': TabGroup,
        'app-layer-selectors': LayerSelectors
    }
}
</script>

<style scoped>
</style>

<template lang="pug">
ph-window.main
    app-header
    app-tab-group
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

export default {
    name: 'main',
    data () {
        return {
        }
    },
    components: {
        'app-tab-group': TabGroup,
        'app-layer-selectors': LayerSelectors
    }
}
</script>

<style scoped>
</style>

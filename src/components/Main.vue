<template lang="pug">
ph-window.main
    app-header
    app-tab-group(:tabs="tabs"
        :current.sync="currentTab"
        @add="$store.dispatch('tab/add')"
        @close="closeTab"
        )
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
            this.$store.dispatch('tab/add')
        }
    },
    computed: {
        ...mapState({
            tabs: state => state.tab.tabs
        }),
        currentTab: {
            get () {
                return this.$store.state.tab.current
            },
            set (index) {
                this.$store.dispatch('tab/select', index)
            }
        }
    },
    methods: {
        closeTab (index) {
            this.$store.dispatch('tab/close', index)
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
@keyframes flexGrow {
  to {
    flex: 1;
  }
}

@keyframes flexShrink {
  to {
    flex: .01;
    flex: .00001;
  }
}
.flex {
    display: flex;
    flex-direction: column;
}
</style>

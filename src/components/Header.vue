<template lang="pug">
ph-toolbar(type="header" title="Misaki Editor")
    ph-toolbar-actions
        ph-button-group
            ph-button: ph-icon(icon="home")
            ph-button: ph-icon(icon="folder")
    app-tab-group(:tabs="tabs"
        :current.sync="currentTabIndex"
        @add="$store.dispatch('tab/addTab')"
        @close="closeTab"
        :transparentTabs="true"
        )
</template>

<script>
import TabGroup from './TabGroup'
import { mapState } from 'vuex'
export default {
    name: 'header',
    data () {
        return {}
    },
    computed: {
        ...mapState({
            tabs: state => state.tab.tabs,
            currentIndex: state => state.tab.currentIndex
        }),
        currentTabIndex: {
            get () {
                return this.currentIndex
            },
            set (tabIndex) {
                this.$store.dispatch('tab/selectTab', {tabIndex})
            }
        }
    },
    methods: {
        closeTab (index) {
            this.$store.dispatch('tab/closeTab', index)
        }
    },
    components: {
        'app-tab-group': TabGroup
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar {
    border-bottom-width: 0px;
}
</style>

<template lang="pug">
ph-window.main
    app-header
    app-tab-group(:tabs="tabs"
        :current.sync="currentTabIndex"
        @add="$store.dispatch('tab/addTab')"
        @close="closeTab"
        )
    ph-window-content
        ph-window
            ph-pane-group
                ph-pane.flex
                    aa-area(:value.sync="text")
                    app-tab-group.layers(:tabs="layers"
                        :current.sync="currentLayerIndex"
                        @add="addAtCurrentPage"
                        )
                ph-pane(:sidebar="true" size="sm")
    app-footer
</template>

<script>
import TabGroup from './TabGroup'
import AAArea from './AAArea'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'main',
    data () {
        return {
        }
    },
    created () {
        if (this.tabs.length <= 0) {
            this.$store.dispatch('tab/addTab')
        }
    },
    computed: {
        ...mapState({
            tabs: state => state.tab.tabs
        }),
        ...mapGetters({
            currentTab: 'tab/currentTab',
            currentPage: 'tab/currentPage',
            currentLayer: 'tab/currentLayer',
            currentIndexes: 'tab/currentIndexes'
        }),
        text: {
            get () {
                return this.currentLayer.text
            },
            set (text) {
                this.$store.dispatch('tab/editLayer', {...this.currentIndexes, text})
            }
        },
        currentTabIndex: {
            get () {
                return this.currentIndexes.tabIndex
            },
            set (tabIndex) {
                this.$store.dispatch('tab/selectTab', {tabIndex})
            }
        },
        currentPageIndex: {
            get () {
                return this.currentIndexes.pageIndex
            }
        },
        currentLayerIndex: {
            get () {
                return this.currentIndexes.layerIndex
            },
            set (layerIndex) {
                this.$store.dispatch('tab/selectLayer', { ...this.currentIndexes, layerIndex })
            }
        },

        pages: {
            get () {
                return this.currentTab.children
            }
        },
        layers: {
            get () {
                return this.currentPage.children
            }
        }
    },
    methods: {
        closeTab (index) {
            this.$store.dispatch('tab/closeTab', index)
        },
        addAtCurrentPage () {
            this.$store.dispatch('tab/addLayer',
                {tabIndex: this.currentTabIndex, pageIndex: this.currentPageIndex})
        },
        closeLayer (index) {
            this.$store.dispatch('tab/closeLayer',
                {tabIndex: this.currentTabIndex, pageIndex: this.currentPageIndex}, index)
        }
    },
    components: {
        'app-tab-group': TabGroup,
        'aa-area': AAArea
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
}
.layers {
    margin: 5px 10px;
    width: calc(100% - 20px - 3px);
    border-bottom: none;
}
</style>

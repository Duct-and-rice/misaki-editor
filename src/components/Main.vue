<template lang="pug">
ph-window.main
    app-header
    app-tab-group
    ph-window-content
    app-footer
</template>

<script>
import TabGroup from './TabGroup'

export default {
    name: 'main',
    data () {
        return {
        }
    },
    components: {
        'app-tab-group': TabGroup
    }
}
</script>

<style scoped>

</style>

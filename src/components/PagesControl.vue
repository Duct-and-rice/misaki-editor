<template lang="pug">
.toolbar
    ph-button-group
        ph-button(size="mini" @click.native="addNew")
            ph-icon(icon="plus")
        ph-button(size="mini") +*
</template>

<script>
export default {
    name: 'pages-control',
    data () {
        return {
        }
    },
    props: {
    },
    methods: {
        addNew () {
            console.log('add')
            this.$emit('add')
        }
    }
}
</script>

<style scoped >
@import '../styles/variables.css';

.toolbar {
    /*border-bottom: 1px solid var(--toolbar-border-color);*/
}

.btn-group {
    padding: 2px 2px;
}
</style>

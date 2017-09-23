<template lang="pug">
.tab-group
    transition-group.tabs(name="tab" tag="div")
        ph-tab-item(v-for="(tab, index) in tabs" 
            :key="tab.title"
            :class="{active : index == current}"
            @click.native="onClick(index)"
            @cancel="onClickClose(index)"
            ) {{ tab.title }}
    .tab-item.tab-item-fixed(@click="addNew")
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
        onClick (index) {
            this.$emit('update:current', index)
        },
        addNew () {
            this.$emit('add')
        },
        onClickClose (index) {
            this.$emit('close', index)
        }
    }
}
</script>

<style scoped>
.tab-transition {
    
}
.tab-enter {
    flex: 0;
}
.tab-enter-active {
    animation: flexGrow .1s linear forwards;
    white-space: nowrap;
}
.tab-leave {
    flex: 0;
}
.tab-leave-active {
    animation: flexShrink .1s linear forwards;
    white-space: nowrap;
}
.tabs {
    transition: all 1s linear forwards;
    display: flex;
    flex: 1;
}
@keyframes flexGrow {
    to {
        flex: 1;
    }
}

@keyframes flexShrink {
    to {
        flex: 1;
        flex: 0;
    }
}
</style>

<template lang="pug">
.tab-group(:class="{column : column}")
    pages-control(v-if="column")
    transition-group.tabs(name="tab" tag="div" :class="{column : column}")
        ph-tab-item(v-for="(tab, index) in tabs" 
            :key="tab.title"
            :class="{active : index == current}"
            @click.native="onClick(index)"
            @cancel="onClickClose(index)"
            ) {{ tab.title }}
    .tab-item.tab-item-fixed(@click="addNew" v-if="!column")
        ph-icon(icon="plus")
</template>

<script>
import PagesControl from './PagesControl.vue'
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
        },
        column: {
            type: Boolean,
            default: false
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
    },
    components: {
        'pages-control': PagesControl
    }
}
</script>

<style scoped>
@import '../styles/variables.css';

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
.tab-group {
    position: relative;
    & .tab-item {
        &:not(.tab-item-fixed) {
            min-width: 100px;
        }
        /*&:first-child {
            border-left: 1px solid var(--border-color);
        }
        &:last-child {
            border-right: 1px solid var(--border-color);
        }*/
        border-width: 0px;
    }

    border-bottom-width: 0px;

    overflow-x: scroll;
    overflow-y: hidden;
}
.column {
    flex-direction: column;
}
</style>

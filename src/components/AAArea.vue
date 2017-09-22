<template lang="pug">
textarea(:value='value' @input='update($event.target.value)')
</template>

<script>
export default {
    name: 'aa-area',
    data () {
        return {}
    },
    props: ['value'],
    methods: {
        update (value) {
            this.$emit('update:value', value)
        }
    }
}
</script>

<style scoped>
textarea {
    font-family: Stmr;
    font-size: 16px;
    line-height: 18px;
    white-space: nowrap;

    display: flex;
    flex: 1;
    margin: 5px 10px;

    outline: none;
    resize: none;
}
</style>

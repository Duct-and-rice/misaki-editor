<template lang="pug">
#app
    router-view.window
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
    font-family: "Noto Sans Japanese", sans-serif;
    height: 100%;
    display: flex;
}
::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}
::-webkit-scrollbar-track {
    border-radius: 1px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 1px;
    box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
}
</style>

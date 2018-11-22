<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style >
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #000000;
    }

    #nav {
        padding: 0px;
        a {
            font-weight: bold;
            color: #0000;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

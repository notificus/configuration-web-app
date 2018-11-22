<template>
    <div id="main">
        <img id="image" alt="Notificus logo" src="../assets/nlogo.png" width="200px" height="200px">
        <b-button id="login" aling="center" v-on:click="login()">Login</b-button>
    </div>
</template>

<script>
    import bButton from 'bootstrap-vue/es/components/button/button';

    export default {
        name: "CAS",
        component: {
            bButton
        },
        data: function () {
            return {
                auth: String
            }
        },
        methods: {
            login: function () {
                window.location = 'http://localhost:8081/login';
            }
        }
    }
</script>

<style scoped>
    #main {
        display: grid;
        align-content: center;
    }

    #image {
        margin: auto;
    }

    #login {
        background-color: green;
        border: none;
        color: white;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    #login:hover {
        background-color: lightgreen;
    }
</style>
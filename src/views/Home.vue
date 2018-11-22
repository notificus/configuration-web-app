<template>
    <div id="home" class="home">
        <div>
            <img alt="Notificus logo" src="../assets/nlogo.png" width="200px" height="200px">
            <HelloMsg greet="Welcome,"></HelloMsg>
        </div>
        <div>
            <Prefs id="prefs" ref="prefs"></Prefs>
            <div id="buttons">
                <b-button id="okBtn" ref="okBtn" v-on:click="applyChanges">Apply</b-button>
                <b-button id="cancelBtn" v-on:click="cancelChanges">Cancel</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import HelloMsg from '../components/templates/HelloMsg.vue'
    import Prefs from "../components/templates/Prefs";

    import bButton from 'bootstrap-vue/es/components/button/button';

    export default {
        name: 'home',
        components: {
            Prefs,
            HelloMsg,
            bButton
        },
        methods: {
            applyChanges: function () {
                this.$refs.prefs.applyUserPref();
            },
            cancelChanges: function () {
                this.$refs.prefs.reset();
            }
        }
    }

</script>

<style scope>
    #buttons {
        display: inline-flex;
        flex-direction: row;
        margin-top: 60px;
        transform: scale(2);
    }

    #okBtn {
        width: 75px;
        display: inline-flex;
        background-color: green;
        padding: 0px 17px;
        border-radius: 6px;
    }

    #okBtn:hover {
        background-color: lightgreen;
    }

    #okBtn:focus {
        outline: none;
    }

    #cancelBtn {
        width: 75px;
        display: inline-flex;
        background-color: green;
        border-radius: 6px;
        margin-left: 10px;
    }

    #cancelBtn:hover {
        background-color: lightgreen;
    }

    #okBtn:focus {
        outline: none;
    }
</style>
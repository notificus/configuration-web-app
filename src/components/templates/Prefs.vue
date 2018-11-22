<template>
    <div>
        <div id="ActivateEmail">
            <b-form-checkbox id="emailcheck" ref="enable" v-model="emailEnabledVal">Enable Emails</b-form-checkbox>
        </div>
        <div id="EmailContainer">
            <h1 id="emailLabel">Emails:</h1>
            <div id="input">
                <b-form-input id="inputBox1" ref="e1" type="text" v-model="eval_1" ></b-form-input>
                <b-form-input id="inputBox2" ref="email2" type="text" v-model="eval_2" ></b-form-input>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
    import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: "Prefs",
        components: {
            bFormInput,
            bFormCheckbox
        },
        data: function () {
            return {
                eval_1: String,
                eval_2: String,
                emailEnabledVal: Boolean
            }
        },
        created: function () {
            const url = 'http://localhost:8081/users/me/configurations';
            axios.get(url, {withCredentials: true})
                .then(response => {
                    this.eval_1 = response.data.emails[0];
                    this.eval_2 = response.data.emails[1];
                    this.emailEnabledVal = response.data.emailEnabled;
                });
        },
        methods: {
            applyUserPref: function () {
                const url = 'http://localhost:8081/users/me/configurations';
                axios.put(url, {
                    emailEnabled: this.emailEnabledVal,
                    emails: [this.eval_1,this.eval_2]
                }, {withCredentials: true});
            },
            reset: function () {
                window.location = 'home';
            }
        }
    }
</script>

<style scoped>
    #EmailContainer {
        display: flex;
        margin-top: 20px;
        margin-left: 20px;
    }

    #inputBox1 {
        margin-top: 5px;
        margin-left: 50px;
    }

    #inputBox2 {
        margin-top: 5px;
        margin-left: 50px;
    }

    #ActivateEmail {
        display: flex;
        margin-top: 20px;
        margin-left: 20px;
    }

    #emailcheck {
        text-align: justify;
    }
</style>
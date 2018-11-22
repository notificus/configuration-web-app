<template>
    <div>
        <div id="ActivateEmail">
            <b-form-checkbox id="emailcheck" ref="enable">Enable Emails</b-form-checkbox>
        </div>
        <div >
            <!--<h1 id="emailLabel">Emails:</h1>-->
            <!--<div id="input">-->
            <!--<b-form-input id="inputBox1" type="email" :value="current" ref="email1"></b-form-input>-->
            <!--<b-form-input id="inputBox2" type="email" :value="current" ref="email2"></b-form-input>-->
            <!--</div>-->
            <b-form id="EmailContainer">
                <b-form-group id="emailLabel" label="Adresses Couriels:">
                    <b-form-input id="inputBox1" type="email" :value="email1" ref="email1"></b-form-input>
                    <b-form-input id="inputBox2" type="email" :value="email2" ref="email2"></b-form-input>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>

<script>
    import CheckBox from "./CheckBox";
    import axios from 'axios';

    import bForm from 'bootstrap-vue/es/components/form/form';
    import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
    import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';

    export default {
        name: "Prefs",
        components: {
            CheckBox,
            bForm,
            bFormGroup,
            bFormInput,
            bFormCheckboxGroup
        },
        data: function(){
            return {
                email1: String,
                email2: String,
                emailEnabled: Boolean,
                pref2: Boolean
            }
        },
        created: function () {
            const url = 'http://localhost:8081/users/me/configurations';
            axios.get(url, {withCredentials: true})
                .then(response => {
                    this.email1 = response.data.emails[0];
                    this.email2 = response.data.emails[1];
                    this.$refs.enable.checked = response.data.emailEnabled;
                });
        },
        methods: {
            applyUserPref: function () {
                const url = 'http://localhost:8081/users/me/configurations';
                axios.put(url, {
                    emailEnabled: this.$refs.enable.checked,
                    emails: [this.$refs.email1.value, this.$refs.email2.value]
                }, {withCredentials: true});
            },
            reset: function () {
                this.$refs.email1.value = this.email1;
                this.$refs.email2.value = this.email2;
                this.$refs.enable.checked = this.emailEnabled;
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
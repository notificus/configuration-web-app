<template>
  <div class="HelloMsg">
      <h1>{{greet}} {{userName}}</h1>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'HelloMsg',
        props: {
            greet: String
        },
        data: function () {
            return {
                userName: ""
            }
        },
        created: function () {
            this.userName = this.getUserName();
        },
        methods: {
            getUserName: function () {
                const url = 'http://localhost:8081/users/me'
                axios.get(url, {withCredentials:true})
                    .then(response => (this.userName = response.data.firstName))
            }
        }
    }
</script>
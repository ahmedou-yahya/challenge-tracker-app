<template>
  <div  class="login">
    <SignupForm v-if="!showLogin" @click="show"/>
    <LoginForm v-if="showLogin" @click="show"/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
export default {
  name: 'Login',
  components:{
    LoginForm,
    SignupForm
  },
  data() {
    return {
      showLogin: true,
    }
  },
  methods:{
    show(){
      this.showLogin = !this.showLogin
    }
  }
}
</script>

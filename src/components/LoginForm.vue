<template>
    <div>
        <div v-if="!showLogin" class="card">
            <article class="card-body">
                <a href="" @click.prevent="show" class="float-right btn btn-outline-primary">Sign In</a>
                <h4 class="card-title mb-4 mt-1">Sign up</h4>
                <p>
                    <a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
                    <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
                </p>
                <hr>
                <form>
                    <Input :type="emailType" placeholder="Enter your mail" /> <br/>   
                    <Input type="text" placeholder="Enter your Username" />   <br/>                         
                    <Input :type="passwordType" placeholder="Enter your password" />                                  
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block"> Sign up  </button>
                            </div> <!-- form-group// -->
                        </div>
                        <div class="col-md-6 text-right">
                            <a class="small" href="#">Forgot password?</a>
                        </div>                                            
                    </div>                                                              
                </form>
            </article>
        </div>

        <div v-if="showLogin" class="card">
            <article class="card-body">
                <a href="" @click.prevent="show" class="float-right btn btn-outline-primary">Sign up</a>
                <h4 class="card-title mb-4 mt-1">Sign in</h4>
                <p>
                    <a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
                    <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
                </p>
                <hr>
                <form>
                    <Input :type="emailType" placeholder="Enter your mail"  />   <br/>                             
                    <Input :type="passwordType" placeholder="Enter your password"  />                                
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block"> Login  </button>
                            </div> <!-- form-group// -->
                        </div>
                        <div class="col-md-6 text-right">
                            <a class="small" href="#">Forgot password?</a>
                        </div>                                            
                    </div>                                                              
                </form>
            </article>
        </div>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    justify-content: centre;
}
</style>
<script>
import Input from '../components/Input.vue'
export default {
   name: 'LoginForm',
   data() {
       return {
           showLogin: true,
           emailType: "email",
           passwordType: "password",
           usernameType: "Username",
       }
   },
   methods:{
       show(){
           this.showLogin  = !this.showLogin
       }
   },
   components:{
       Input
   }
}
</script>
<style scoped>

</style>
<template>
    <div class="card container">
            <a href="" @click.prevent="show" class="float-right btn btn-outline-primary">Sign In</a>
            <h4 class="card-title mb-4 mt-1">Sign up</h4>
            <p>
                <a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
                <a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
            </p>
            <hr>
            <form>
                <div class="form-group">
                    <input v-model="inputValue"  name="" type="email" placeholder="Enter your email" class="form-control">
                </div>   <br/>                             
                <div class="form-group">
                    <input v-model="inputValue"  name="" type="text" placeholder="Enter your username" class="form-control">
                </div>   <br/>             
                <div class="form-group">
                    <input v-model="inputValue"  name="" type="password" placeholder="Enter your password" class="form-control">
                </div>   <br/>                                             
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
        </div>
</template>
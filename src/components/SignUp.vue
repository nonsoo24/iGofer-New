<template>
    <div signin-page>
        <section>
            <div class="row">
                <div class="col-md-5 write-up">
                    <h3>A convienent and affordable way to <br> get things done.</h3>
                    <p class="choose-igofer">Choose from a pool of iGofer trained and verified professionals to <br> get
                        your job done </p>
                </div>
                <div class="col-md-5 signin-details">
                    <h5>Create a free account</h5>
                    <p>Welcome, let's get your account set up</p>
                    <form @submit.prevent="submit">
                        <div class="form-group" :class="{'invalid': $v.userData.name.$error}">
                            <label for="full-name">Full name</label>
                            <input type="text" class="form-control form-control-sm" id="full-name"
                                aria-describedby="fullnameHelp" v-model.trim="$v.userData.name.$model">
                            <div class="error" v-if="!$v.userData.name.required">Field is required</div>
                            <div class="error" v-if="!$v.userData.name.minLength">Name must have at least
                                {{$v.userData.name.$params.minLength.min}} letters.</div>
                        </div>

                        <div class="form-group" :class="{'invalid': $v.userData.email.$error}">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control form-control-sm" id="email"
                                aria-describedby="emailHelp"
                                v-model.trim="$v.userData.email.$model">
                            <div class="error" v-if="!$v.userData.email.required">Field is required</div>
                            <div class="error" v-if="!$v.userData.email.email">Please enter a valid E-mail address</div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-2 mt-2 p-0 text-right">
                                    <span class="bg-dark p-2">+234</span>
                                </div>
                                <div class="col p-0 text-right">
                                    <input type="text" class="form-control form-control-sm m-0">
                                </div>
                            </div>
                            <!-- <label for="phone-number">Phone Number</label>
                            <div class="input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">+234</span>
                                </div>
                                <input type="number" class="form-control form-control-sm" id="phone-number"
                                    v-model="userData.phoneNumber">
                            </div> -->
                        </div>

                        <div class="form-group" :class="{'invalid': $v.userData.password.$error}">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="password"
                            v-model.trim="$v.userData.password.$model">
                            <div class="error" v-if="!$v.userData.password.required">Field is required</div>
                            <div class="error" v-if="!$v.userData.password.minLength">
                                Password should be up to {{$v.userData.password.$params.minLength.min}} Characters</div>
                        </div>

                        <div class="form-group" :class="{'invalid': $v.userData.confirmPassword.$error}">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control form-control-sm" id="confirm-password"
                            v-model="$v.userData.confirmPassword.$model">
                             <div class="error" v-if="!$v.userData.confirmPassword.required">Field is required</div>
                            <div class="error" v-if="!$v.userData.confirmPassword.sameAsPassword">
                                Passwords must be identical</div>
                        </div>

                        <!-- put a tick box showing you agree to our terms and condtitions -->

                        <!-- <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> -->
                        <button type="submit" class="btn btn-primary mb-3" :disabled="submitStatus === 'PENDING'">Create
                            Account</button>
                            <div class="error" v-if="submitStatus === 'OK'">Thanks for your submission!</div>
                            <div class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</div>
                            <div class="error" v-if="submitStatus === 'PENDING'">Sending...</div>

                             <!-- <button type="submit" class="btn btn-primary mb-3">Create
                            Account</button> -->
                        <p>Already have an account? <span>Log in</span></P>
                        <p>By signing up you agree to our<span> Terms of Service</span></p>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {required, minLength, email, sameAs} from 'vuelidate/lib/validators'
//import axios from 'axios'
//const touchMap = new WeakMap()
export default {
    //name:   'formValidation',
    data() {
        return {
            userData: {
                name: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                // termsAndCondition: false,
                submitStatus: null
                // accountCreated: false
            }
        }
    },
validations: {
    userData: {
        email: {
            required,
            email
        },

        name: {
            required,
            minLength: minLength(3)
        },
        phoneNumber: {
            required
        },
        password: {
            required,
            minLength: minLength(8),
            // rege(x){
            //     let
            // }
        },
        confirmPassword: {
            required,
            sameAsPassword: sameAs('password')
        }
    }

},
    methods: {

        // delayTouch($v) {
        //     $v.$reset()
        //     if (touchMap.has($v)) {
        //         clearTimeout(touchMap.get($v))
        //     }
        //     touchMap.set($v, setTimeout($v.$touch, 1000))
        // },
        // onSubmit(){
        //     userData = {Y
        //         name: this.userData.name,
        //         email: this.userData.email,
        //         phoneNumber: this.userData.phoneNumber,
        //         password: this.userData.password,
        //         confirmPassword: this.userData.confirmPassword,
                // termsAndCondition: false,
                //submitStatus:
                // accountCreated: false
            //}
            //console.log(formData)
            //axios.post('/')


        //},

        submit() {
            //console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                //alert('hello')
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                //alert('hello')
                this.submitStatus = 'PENDING'
                this.onSubmit()
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
            }
        }
        }

    }


</script>

<style scoped>
[signin-page] {
    /* width: 1334.5px; */
    width: 100%;
    /* height: 100vh; */
    background-size: cover;
    background: linear-gradient(180deg, rgba(242, 97, 50, 0.05) 0%, rgba(232, 25, 12, 0.05) 100%), url(../img/signIn-cover.jpg);
}

.write-up {
    margin: 350px 0px 0px 100px;
    color: #fff;
    text-align: left;
}

h3 {
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 44px;
    color: #FFFFFF;
}

.choose-igofer {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 27px;
    color: #FFFFFF;
}


h5 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 20px;
    line-height: 36px;
    color: #333333;
    text-align: left;
    margin-left: 23px
}

.signin-details {
    height: 580px;
    margin: 5.625em 0em 2.2em 0em;
    padding-top: 15px;
    background: #FFFFFF;
}

input {
    margin: 0px 0px 0px 20px;
    width: 90% !important;
    /* border: 1px #000 solid !important; */
}

h5+p {
    margin: 0px 0px 10px 23px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* line-height: 21px; */
    color: #333333;
}

label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    /* line-height: 24px; */
    text-align: left !important;
    color: #000;
    display: block;
    margin-left: 23px
}

button {
    background: linear-gradient(180deg, #F26132 0%, #E8190C 100%);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 1px #F26132 solid;
    color: #fff
}

span {
    color: #F26132;
}

label:nth-of-type(3) + input{
    margin-right: 40px;
}

form p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 0px;
    color: #000000;
}

.form-group.invalid input{
    background-color: #ffc9aa;
    border: 1px solid red
}

.form-group.invalid label, .error{
   color: red;
}
</style>
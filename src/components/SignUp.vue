<template>
    <div signin-page>
        <section>
            <div class="row">
                <div class="col-md-6 write-up">
                    <h3>A convienent and affordable way to <br> get things done.</h3>
                    <p class="choose-igofer">Choose from a pool of iGofer trained and verified professionals to <br> get your job done </p>
                </div>
                <div class="col-md-4 signin-details">
                    <h5>Create a free account</h5>
                    <p>Welcome, let's get your account set up</p>
                    <form>
                    <div class="form-group">
                            <label for="full-name" :class="{invalid: $v.email.$error}">Full name</label>
                            <input type="text" class="form-control form-control-sm" id="full-name"
                                aria-describedby="fullnameHelp"
                                v-model="userData.fullname">
                        </div>
                        <div class="form-group" :class="{invalid: $v.email.$error}">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control form-control-sm"
                             id="email"
                            aria-describedby="emailHelp"
                            @blur="$v.email.$touch()"
                            v-model="userData.email">
                            <p v-if="!$v.email.email" class="text-danger text-left pl-4">Please enter a valid email</p>
                            <p v-if="!$v.email.required" class="text-danger text-left pl-4">This field is required</p>
                        </div>

                              <label for="phone-number">Phone Number</label>
                            <div class="input-group-sm d-flex">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">+234</span>
                                </div>
                                <input type="number" class="form-control form-control-sm" id="phone-number"
                                v-model="userData.phoneNumber">
                            </div>


                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="password"
                            v-model="userData.password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control form-control-sm" id="confirm-password"
                            v-model="userData.confirmPassword">
                        </div>
                        <!-- <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> -->
                        <button type="submit" class="btn btn-primary mb-3" @click.prevent="createAccount()">Create Account</button>
                        <p>Already have an account? <span>Log in</span></P>
                        <p>By signing up  you agree to our<span> Terms of Service</span></p>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            userData: {
                fullname: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                accountCreated: false

            }

        }
    },

    validations: {
        email: {
            required,
            email
        },
        fullname: {
            required
        },
         phoneNumber: {
            required
        }

    },
    methods: {
        createAccount() {
            this.accountCreated = true

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

/* .form-group.invalid label{
   color: red;
} */
</style>
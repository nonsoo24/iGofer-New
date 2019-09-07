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
                            <label for="full-name">Full name</label>
                            <input type="text" class="form-control form-control-sm" id="full-name"
                                aria-describedby="fullnameHelp">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control form-control-sm" id="email"
                                aria-describedby="emailHelp">
                        </div>

                        <div class="form-group">
                            <label for="phone-number">Phone Number</label>
                            <input type="number" class="form-control form-control-sm" id="phone-number">
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control form-control-sm" id="confirm-password">
                        </div>
                        <!-- <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> -->
                        <button type="submit" class="btn btn-primary mb-3">Create Account</button>
                        <p>Already have an account? <span>Log in</span></P>
                        <p>By signing up  you agree to our<span> Terms of Service</span></p>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    
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

.write-up{
     margin: 350px 0px 0px 100px;
     color: #fff;
     text-align: left;
}

h3{
    font-family: 'Muli', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 44px;
color: #FFFFFF;
}

.choose-igofer{
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
    height: 570px;
    margin: 5.625em 0em  2.2em 0em;
    padding-top: 15px;
    background: #FFFFFF;
}

input {
    margin: 0px 0px 0px 20px;
    width: 90% !important;
    /* border: 1px #000 solid !important; */
}

h5 + p{
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
span{
    color: #F26132;
}

form p{
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
margin-bottom: 0px;
color: #000000;
}
</style>
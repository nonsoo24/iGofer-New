<template>
    <div signin-page>
        <section>
            <div class="row">
                <div class="col-md-6 write-up">
                    <h3>A convienent and affordable way to <br> get things done.</h3>
                    <p class="choose-igofer">Choose from a pool of iGofer trained and verified professionals to <br> get your job done </p>
                </div>
                <div class="col-md-4 signin-details">
                    <h5>Sign In</h5>
                    <form>
                        <div class="form-group">
                            <label for="email" style="margin: left">Email address</label>
                            <input type="email" class="form-control" id="email"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <!-- <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> -->
                        <button type="submit" class="btn btn-primary mb-3">Sign In</button>
                        <p>Forgot Password?</P>
                        <p>Don't have an account? <span class="text-">Sign Up</span></p>
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
    margin: 5.625em 0em  0em 0em;
    margin-bottom: 2.2em;
    padding-top: 150px;
    background: #FFFFFF;
}

input {
    margin: 0px 0px 0px 20px;
    width: 90% !important;
    /* border: 1px #000 solid !important; */
}

label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
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
color: #000000;
}
</style>
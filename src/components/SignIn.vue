<template>
    <div>
        <section signin-page>
            <div class="row">
                <div class="col-md-4 offset-7 signin-details">
                    <h5>Sign In</h5>
                    <form>
                        <div class="form-group">
                            <label for="email">Email address</label>
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
                        <button type="submit" class="btn btn-primary">Sign In</button>
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
[signin-page]{
    background: linear-gradient(180deg, rgba(242, 97, 50, 0.05) 0%, rgba(232, 25, 12, 0.05) 100%), url(../img/signIn-cover.jpg);
}

h5{
    font-family: Poppins;
font-style: normal;
font-weight: bolder;
font-size: 24px;
line-height: 36px;
color: #333333;
text-align: left;
}

.signin-details{
height: 600px;
margin-top: 100px;
padding-top: 150px;
background: #FFFFFF;
}

input{
    margin: 0px 20px 0px 20px;
    width: 90% !important;
    /* border: 1px #000 solid !important; */
}

label{
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: right !important;
color: #000;
}
</style>
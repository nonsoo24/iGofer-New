<template>
    <div>
        <section class="container" hire-form>
        <h5 class="text-center">Hire a worker</h5>
        <p class="text-center">Tell us about your work and we will match you with the best and nearest worker.</p>
        <form action="">
            <h6 class="pb-5">What type of work do you need done? </h6>
            <div class="row work-type-div container">
                <div class="col-md-6 d-flex flex-column">
                    <div class="radio">
                        <input type="radio" class="form-radio" checked="checked" id="carpentry">
                        <label for="carpentry">Carpentry</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="painting">
                        <label for="painting">Painting and Interior design</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="plumbing">
                        <label for="plumbing">Plumbing</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="roofing">
                        <label for="roofing">Roofing Repairs</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="bricklaying">
                        <label for="bricklaying">Bricklaying</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="tiling">
                        <label for="tiling">Tiling</label>
                    </div>

                    </div>
                <div class="col-md-6">
                <div>
                    <input type="radio" class="form-radio" id="cleaning">
                    <label for="cleaning">General Cleaning</label>
                </div>

                    <div>
                        <input type="radio" class="form-radio" id="electrical">
                        <label for="electrical">Electrical Services</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="security">
                        <label for="security">Security Systems</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="catering">
                        <label for="catering">Food and Catering</label>
                    </div>

                    <div>
                        <input type="radio" id="academic">
                        <label for="academic">Academic Services</label>
                    </div>

                    <div>
                        <input type="radio" class="form-radio" id="evironmental">
                        <label for="evironmental">Environmental</label>
                    </div>
                </div>
            </div>
            <button class="btn">Next</button>
        </form>
        </section>

        <app-footer />
    </div>
</template>

<script>
import Footer from './Shared/Footer.vue'
export default {
    components: {
        'app-footer': Footer
    }

}
</script>

<style scoped>
    [hire-form] {
        margin-top: 100px;
    }




    form {
        border: 1px solid #BEBEBE;
        padding: 30px;
        margin: 50px auto
    }

    h5,
    h5+p,
    h6,
    button {
        font-family: "Poppins", "sans-serif";
        font-style: normal;
        color: #333333;
    }

    h5,
    h6 {
        font-weight: 600;
        font-size: 25px;
    }

    h5+p {
        font-weight: normal
    }

    button {
        background: linear-gradient(180deg, #F26132 0%, #E8190C 100%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 5px 40px;
        color: #fff;
        position: relative;
        left: 300px;
        top: 20px;
        margin: 30px 0px 50px 0px;
        font-size: 15px;
        font-weight: 600;
    }
    /* input[type=radio]:checked ::before{
        background: #F26132;

    } */
    input[type="radio"]:checked + label{
        color: #F26132;

    }

    /* checkbox */
 input[type="radio"] {
  position: absolute;
  /* opacity: 0; */
  cursor: pointer;
  left: 170px;
  margin-top: 4px;
  height: 15px;
  width: 15px;
}


/* On mouse-over, add a grey background color */
input[type="radio"]:hover {
  background-color: #ccc;
}

input[type="radio"]:checked {
  background-color: #2196F3;
}

</style>
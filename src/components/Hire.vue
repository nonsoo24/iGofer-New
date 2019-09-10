<template>
    <div>
        <section class="container" hire-form>
        <h5 class="text-center">Hire a worker</h5>
        <p class="text-center">Tell us about your work and we will match you with the best and nearest worker.</p>
        <form action="">
            <p>What type of work do you need done? </p>
            <div class="row work-type-div">
                <div class="col-md-6">
                    <input type="radio" name="work-type" id="">Carpentry
                    <input type="radio" name="work-type" id="">Painting and Interior design
                    <input type="radio" name="work-type" id="">Plumbing
                    <input type="radio" name="work-type" id="">roofing Repairs
                    <input type="radio" name="work-type" id="">Bricklaying
                    <input type="radio" name="work-type" id="">Tiling
                </div>
                <div class="col-md-6">
                    <ul>
                        <li> <input type="radio" name="work-type" id="cleaning">
                    <label for="cleaning">General Cleaning</label>
                    </li>

                    <li>
                    <input type="radio" name="work-type" id="electrical">
                    <label for="electrical">Electrical Services</label>
                    </li>

                    <li>
                    <input type="radio" name="work-type" id="security">
                    <label for="security">Security Systems</label>
                    </li>
                    
                    <input type="radio" name="work-type" id="catering">
                    <label for="catering">Food and Catering</label>
                    <input type="radio" name="work-type" id="academic">
                    <label for="academic">Academic Services</label>
                    <input type="radio" name="work-type" id="evironmental">
                    <label for="evironmental">Environmental</label>
                    </ul>
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

    input {
        display: block;
        text-align: left
    }

    form {
        border: 1px solid #BEBEBE;
        padding: 30px;
        margin: 50px auto
    }

    h5,h5+p, button {
        font-family: "Poppins", "sans-serif";
        font-style: normal;
        color: #333333;
    }

    h5 {
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
  ul li{
  color: #AAAAAA;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
	border-bottom: 1px solid #333;
}
</style>
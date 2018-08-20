<template>
    <div class="container">
		<div class="page-wrap" id="root">
             <div class="col-lg-12 col-md-12 text-center">
                    <transition name="leftMove" type="animation">
                        <app-header>
                            <span> <router-link to="MyBlog"> <a> My Blog </a> </router-link> </span>
                            <span> <a href=""> My Portfolio </a> </span>
                            <span> <router-link to="/"> <a> Home </a> </router-link> </span>
                            <span> <router-link to="AboutMe"> <a> About Me </a> </router-link> </span>
                            <span> </span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span> <a href=""> Become a writer </a> </span>
                            <span> <router-link to="FindTopics"> <a> Find Topics </a> </router-link> </span>
                        </app-header>
                    </transition>
                </div>

			<!-- Content-->
			<div class="wil-content mt-5">

				<!-- Section -->
				<section class="awe-section">
					<div class="container">

						<!-- page-title -->
						<div class="page-title pb-40">
							<h2 class="page-title__title">Get in touch</h2>
							<p class="page-title__text">  Feel free to contact me about anything.<br> <img id="hand-shake" src="../assets/img/icons/hand-shake.png" alt=""> If you want to contact me for an interview please
                            use "Employment" as a subject for your message.
                            </p>
							<div class="page-title__divider"></div>
						</div><!-- End / page-title -->

					</div>
				</section>
				<!-- End / Section -->
                <div class="container m-3">
                    <div class="row">
                        <ul class="nav nav-pills">
                            <div class="col-sm-6-col-md-6">
                                <li class="nav-item">
                                <button @click="currentComponent ='contact-form'" class="btn tabLink"> Contact Form </button>
                            </li>
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <li class="nav-item">
                                <button @click="currentComponent = 'social-media'" class="btn tabLink"> Social Media <span class="p-1"> <i class="fab fa-reddit"></i></span>  </button>
                            </li>
                            </div>

                        </ul>
                    </div>
                </div>

                <keep-alive>
				    <component :is="currentComponent"> </component>
				</keep-alive>

				<!-- End / Section -->
			</div>
			<!-- End / Content-->
		</div>
    </div>
</template>

<script>
import Header from "./Header.vue";
import ContactForm from "./ContactForm.vue";
import SocialMedia from "./SocialMedia.vue";

export default {
  data() {
    return {
      currentComponent: this.$route.query.activeComponent
        ? this.$route.query.activeComponent
        : SocialMedia,
      activeContactClass:'',
      mediaActive:true   
    };
  },
  components: {
    appHeader: Header,
    contactForm: ContactForm,
    socialMedia: SocialMedia
  },
  methods: {
    loadComponent() {
      if (currentComponent === "contact-form") {
      } else return "contact-form";
    }
  }
};
</script>

<style scoped>
#root {
  background-color: linear-gradient(
    to right bottom,
    rgba(2, 3, 5, 0.8),
    rgba(240, 180, 253, 0.2)
  );
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;
  color: #555;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Raleway;
  font-weight: 300;
  color: #333;
}
p {
  line-height: 28px;
  margin-bottom: 25px;
  font-size: 18px;
}
.centered {
  text-align: center;
}
.goright {
  text-align: right;
}
.mt {
  padding-top: 25px;
}

a:before,
a:after {
  -webkit-transition: color 0.1s ease-in, background 0.1s ease-in;
  -moz-transition: color 0.1s ease-in, background 0.1s ease-in;
  -ms-transition: color 0.1s ease-in, background 0.1s ease-in;
  -o-transition: color 0.1s ease-in, background 0.1s ease-in;
  transition: color 0.1s ease-in, background 0.1s ease-in;
}
span a {
  color: black;
  text-decoration: none;
}

.headerwrap a:hover a:focus {
  color: #16a085;
  text-decoration: none;
  outline: 0;
}

a {
  text-decoration: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

.page-wrap {
  overflow: hidden;
}

.awe-section {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 9;
  padding-top: 2%;
  padding-bottom: 1%;
  font-family: Lato;
}

.contact {
  position: relative;
  padding-left: 55px;
  margin-bottom: 30px;
  z-index: 9;
}

.contact__icon {
  position: absolute;
  top: 5px;
  left: 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #16a085;
  color: #16a085;
  font-size: 20px;
}

.contact__title {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 5px;
  font-family: Lato;
}

.contact__text {
  font-size: 14px;
}

.form-item {
  margin-bottom: 25px;
  overflow: hidden;
}

.form__label {
  display: block;
  font-family: Lato;
  text-transform: capitalize;
  color: #333;
  margin-bottom: 10px;
}

.form-wrapper {
  margin: 0 -15px;
  overflow: hidden;
}

.form-wrapper .form-item {
  padding: 0 15px;
}

.form-item-btn-center {
  text-align: center;
}

.page-title {
  padding: 110px 0 40px 0;
}

.page-title__title {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0;
  color: aliceblue;
}

.page-title {
  padding: 8%;
  margin-top: -6%;
  background-color: black;
}

.page-title__title {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 0;
}

@media (min-width: 320px) {
  .page-title__title {
    font-size: calc(2.27273vw + 22.72727px);
  }
}

@media (min-width: 1200px) {
  .page-title__title {
    font-size: 50px;
  }
}

.page-title__title .typing__module {
  display: inline-block;
}

.page-title__text {
  font-size: 16px;
  color: #a3a3a3;
}

.page-title__divider {
  width: 40px;
  height: 3px;
  background-color: #333;
  margin-top: 30px;
}

.page-title__social {
  margin-top: 30px;
}

.page-title__social > a {
  width: 40px;
  height: 40px;
  line-height: 40px;
}

.post-detail__title {
  font-size: 25px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 5px;
}

.contact-button {
  width: 100%;
  background-color: #16a085;
  color: white;
}

.contact-button:hover {
  background-color: #16a074;
}

#hand-shake {
  border-radius: 20px;
  border-color: white;
  padding: 1%;
}

.tabLink {
  background-color: #16a085;
  color: white;
}

.tabLink:hover{
  background-color: white;
  color:#16a074;
}

</style>

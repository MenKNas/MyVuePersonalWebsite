<template>
    <div>
        <!-- Section -->
				<section class="awe-section bg-gray">
					<div class="container">
                        <h3> Contact me </h3>
						<div class="row p-3">
							<div class="col-md-4 col-lg-3 ">

								<!-- contact -->
								<div class="contact">
									<div class="contact__icon"><i class="fas fa-map-marked-alt"></i></div>
									<h3 class="contact__title">address</h3>
									<div class="contact__text">6 Solomou St, Ioannina, Greece (Zip Code: 45221) </div>
								</div><!-- End / contact -->


								<!-- contact -->
								<div class="contact">
									<div class="contact__icon"><i class="fas fa-phone"></i></div>
									<h3 class="contact__title">call me</h3>
									<div class="contact__text">+30-6940308662</div>
								</div><!-- End / contact -->


								<!-- contact -->
								<div class="contact">
									<div class="contact__icon"><i class="far fa-envelope"></i></div>
									<h3 class="contact__title">e-mail</h3>
									<div class="contact__text"><a href="#">men.nasies@gmail.com</a></div>
								</div><!-- End / contact -->

							</div>
							<div class="col-md-7 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-1 ">
								<div class="form-wrapper">
									<form @submit="onSubmit" class="pageclip-form" method="post">
                                        <!-- form-item -->
                                        <div class="form-item form-item--half">
                                            <input class="form-control" :class="{error:errors.has('name')}" type="text" name="name" v-model="name" placeholder="Your name" v-validate="'required|alpha_spaces'"/>
                                            <p v-if="errors.has('name')" class="warning"> {{errors.first('name')}} </p>
                                        </div><!-- End / form-item -->


                                        <!-- form-item -->
                                        <div class="form-item form-item--half">
                                            <input class="form-control" :class="{error:errors.has('email')}" type="text" name="email" v-model="email" placeholder="Your email" v-validate="'required|email'"/>
                                            <p v-if="errors.has('email')" class="warning"> {{errors.first('email')}} </p>
                                        </div><!-- End / form-item -->


                                        <!-- form-item -->
                                        <div class="form-item">
                                            <input class="form-control" :class="{error:errors.has('subject')}" type="text" name="subject" v-model="subject" placeholder="Subject" v-validate="'required'"/>
                                            <p v-if="errors.has('subject')" class="warning"> {{errors.first('subject')}} </p>
                                        </div><!-- End / form-item -->


                                        <!-- form-item -->
                                        <div class="form-item">
                                            <textarea class="form-control" :class="{error:errors.has('body')}" name="body" placeholder="Your message" v-model="body" style="min-height:200px;" v-validate="'required'"></textarea>
                                            <p v-if="errors.has('body')" class="warning"> {{errors.first('body')}} </p>
                                        </div><!-- End / form-item -->

                                        <!-- form-item -->
                                        <div class="form-item">
                                            <button class="btn contact-button pageclip-form__submit">
                                                Send message
                                                <span style="color:white;">
                                                <img class="p-1" src="../assets/img/icons/paper-plane.png" alt="paper plane icon"> </span>
                                            </button>
                                        </div><!-- End / form-item -->
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
          </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      subject: this.$route.query.employment
        ? this.$route.query.employment
        : null,
      body: null,
      showModal: false,
      keepUser: ""
    };
  },
  methods: {
    onSubmit(e) {
      let formData = {
        name:this.name,
        email:this.email,
        subject:this.subject,
        body:this.body
      }
      this.keepUser = this.name;
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$http.post("https://send.pageclip.co/2ZV66dypkUKOsbGHHYyF3hFAtCa1Q0sN/contact-form",formData)
          alert("Form submitted!");
          this.$router.push({
            path: "/ThankYou",
            query: { user: this.keepUser }
          });
        } else {
          e.preventDefault();
        }
      });
    }

    // validateBeforeSubmit(){
    //     this.$validator.validateAll()
    //         .then(res => {
    //             const data = {
    //                 name:this.name,
    //                 email:this.email,
    //                 subject:this.subject,
    //                 body:this.message
    //             }
    //             if (res) {
    //                 Pageclip.send('2ZV66dypkUKOsbGHHYyF3hFAtCa1Q0sN','contact-form', data , function(error,response){
    //                     if(error){
    //                         console.log(error)
    //                     }
    //                     else {
    //                         console.log('Form submitted')
    //                     }
    //                 })
    //                 return ;
    //             }
    //         })
    // }
  }
};
</script>

<style scoped>
page-wrap {
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

.warning {
  color: red;
}

.error {
  border: 1px solid red;
}
</style>

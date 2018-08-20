<template>
    <div id="headerwrap">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="mainheading"> Thank you <span> {{user}} </span> </h1>
					<h2 class="mainsub-heading"> I will view you your message and catch back to you as soon as possible </h2>
          <h3 class="mainsub-heading"> In the meantime, don't forget to check me on <router-link to="/ContactMe"> <a> Social Media</a> </router-link> </h3>
          <router-link to="/"> <a class="btn btn-green">  <i class="fas fa-home"></i> </a></router-link>
				</div>
			</div><!-- row -->
		</div><!-- /container -->
	</div><!-- /headerwrap -->
</template>

<script>
export default {
  data() {
    return {
      user: this.$route.query.user
    };
  }
};
</script>

<style scoped>
#headerwrap {
  background-image: linear-gradient(
      to right bottom,
      rgba(2, 3, 5, 0.8),
      rgba(240, 180, 253, 0.2)
    ),
    url("../assets/img/about-bg.jpg");
  margin-top: -10px;
  margin-bottom: 0%;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 750px;
  width: 100%;
  height: 102vh;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

span {
  color: darkgreen;
}

.mainheading {
  /* animation-name: moveInLeft;
    animation-duration: 1.5s;
    animation-timing-function: ease-out ;
    animation-fill-mode: forwards; */
}

.mainheading span {
  color: white;
  font-style: italic;
  font-family: Raleway;
}

.jello {
  animation-duration: 5s;
}

.mainsub-heading {
  /* animation: moveInRight 2s ease-out;
    animation-fill-mode: forwards; */
}

.mainsub-heading2 {
  margin-top: 6%;
  /* animation-delay: 8s;
    animation: moveInBottom 3s ease-out;
    animation-fill-mode: forwards; */
}

#headerwrap h1 {
  margin-top: 10%;
  color: #fff;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 3px;
}

#headerwrap h2 {
  color: #fff;
  font-size: 50px;
  font-weight: 100;
  letter-spacing: 2px;
}
#headerwrap i {
  font-size: 35px;
  color: #fff;
}
#headerwrap .spacer {
  margin-top: 220px;
}

.btn-green {
  color: #fff;
  background-color: #1abc9c;
  border-color: #1abc9c;
  font-weight: 300;
  margin: 5%;
}
.btn-green:hover,
.btn-green:focus,
.btn-green:active,
.btn-green.active,
.open .dropdown-toggle.btn-green {
  color: #fff;
  background-color: #16a085;
  border-color: #16a085;
  font-weight: 300;
}

a {
  text-decoration: none;
  color: white;
}
</style>

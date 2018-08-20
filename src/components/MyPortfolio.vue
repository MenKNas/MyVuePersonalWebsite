<template>
    <div>
      <div id="headerwrap">
		<div class="container">
            <div class="row">
                <!-- <button id="headerButton" @mouseenter="showMenu"> {{menuText}} </button> -->
                <div class="col-lg-12 col-md-12 text-center">
                    <transition name="leftMove" type="animation">
                        <app-header>
                            <span> <router-link to="MyBlog"> <a> My Blog </a> </router-link> </span>
                            <span> <router-link to="/"> <a> Home </a> </router-link> </span>
                            <span> <router-link to="ContactMe"> <a> Contact Me </a> </router-link> </span>
                            <span> <router-link to="AboutMe"> <a> About Me </a> </router-link> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> <router-link to="#"> <a> Become a Writer </a> </router-link> </span>
                            <span> <router-link to="FindTopics"> <a> Find Topics </a> </router-link> </span>
                        </app-header>
                    </transition>
                </div>
            </div>
			<div class="row">
				<div class="col-lg-12">
					<h1 class="mainheading p-5 animated bounce delay-5s"> My portfolio </h1>
					<h2 class="mainsub-heading animated jello delay-2s"> Time to check some of my work </h2>
				</div>
			</div><!-- row -->
		</div><!-- /container -->
	</div><!-- /headerwrap -->
    <!-- <h1 id="bestOfHead"> The best of both worlds </h1> -->

    <!-- <div id="headerwrap2">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                  <h1 class="m-2 p-5 left-head"> Designer & Photographer </h1>
                  <ul style="list-style:none" class="left-list">
                    <li> Best visual representation of your product. </li>
                    <li> Complete Design solutions using the latest of Web Design trends and CSS technologies like Bootstrap, Materialize CSS and much more. </li>
                    <li> Best Photography and Videography solutions using the best of editing software like Adobe Photoshop, Premiere and more.  </li>
                    <li> Great experience in creating beautiful templates from the ground up, always considering the latest trends in UI/UX Design and Digital Marketing. </li>
                  </ul>
                  <button class="btn btn-green"> View my Design & Photography work <i class="fas fa-camera-retro"></i></button>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3"> </div>
                <div class="col-md-3">
                  <h1 class="m-2 p-5 right-head"> <br> <br> < Developer >  </h1>
                  <ul style="list-style:none" class="right-list">
                    <li> Clean and solid code to create the best of UI in interactive and dynamic applications. </li>
                    <li> Strong foundation on HTML and JavaScript. </li>
                    <li> Implementation of the latest JavaScript frameworks including Vue.Js, Nuxt, React and Meteor.  </li>
                    <li> Back-end Implementation using Node.js, MongoDB, Express.js and much more tools.  </li>
                  </ul>
                    <button class="btn btn-green"> View my Development work <i class="far fa-file-code"></i> </button>
                </div>
            </div>
        </div>
    </div> -->
    <div class="mt-5 mb-5">
        <design-portfolio></design-portfolio>
    </div>
  
    </div>
</template>

<script>
import Header from "./Header.vue";
import DesignPortfolio from "./DesignPortfolio.vue";

export default {
  components: {
    appHeader: Header,
    designPortfolio: DesignPortfolio
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
    url("../assets/img/homebg.jpg");
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

#headerwrap2 {
  background-image: url("../assets/img/trasparent-me2.png");
  margin-bottom: 0%;
  margin-top: 0%;
  padding-top: 0px;
  text-align: center;
  background-attachment: relative;
  background-position: center;
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
  font-family: Raleway;
}

mainheading {
  /* animation-name: moveInLeft;
    animation-duration: 1.5s;
    animation-timing-function: ease-out ;
    animation-fill-mode: forwards; */
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
  margin-top: 130px;
  color: #fff;
  font-size: 140px;
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

span a {
  font-family: Lato;
  font-weight: 200;
}

span a:hover :focus {
  text-decoration: none;
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
  color: white;
  text-decoration: none;
}

span a:hover {
  color: #16a085;
}

.headerwrap a:hover a:focus {
  color: #16a085;
  text-decoration: none;
  outline: 0;
}


.btn-green {
  color: #fff;
  background-color: #1abc9c;
  border-color: #1abc9c;
  font-weight: 300;
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

#headerwrap2 .btn {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.item-1,
.item-2,
.item-3 {
  position: absolute;
  display: block;
  top: 1%;
  width: 60%;
  font-size: 1em;
  animation-duration: 20s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.item-1 {
  animation-name: anim-1;
}

.item-2 {
  animation-name: anim-2;
}

.item-3 {
  animation-name: anim-3;
}

@keyframes anim-1 {
  0%,
  8.3% {
    left: -100%;
    opacity: 0;
  }
  8.3%,
  25% {
    left: 25%;
    opacity: 1;
  }
  33.33%,
  100% {
    left: 110%;
    opacity: 0;
  }
}

@keyframes anim-2 {
  0%,
  33.33% {
    left: -100%;
    opacity: 0;
  }
  41.63%,
  58.29% {
    left: 25%;
    opacity: 1;
  }
  66.66%,
  100% {
    left: 110%;
    opacity: 0;
  }
}

@keyframes anim-3 {
  0%,
  66.66% {
    left: -100%;
    opacity: 0;
  }
  74.96%,
  91.62% {
    left: 25%;
    opacity: 1;
  }
  100% {
    left: 110%;
    opacity: 0;
  }
}
</style>

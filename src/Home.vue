<template>
    <div id="body">
        	<!-- Menu -->

        <!-- MAIN IMAGE SECTION -->
	<div id="headerwrap">
		<div class="container">
            <div class="row">
                <!-- <button id="headerButton" @mouseenter="showMenu"> {{menuText}} </button> -->
                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                    <transition name="leftMove" type="animation">
                        <app-header>
                            <span> <router-link to="MyBlog"> <a> My Blog </a> </router-link> </span>
                            <span> <router-link to="/MyPortfolio"> <a> My Portfolio </a> </router-link> </span>
                            <span> <router-link to="ContactMe"> <a> Contact Me <br> <i style="font-size:14px; background-color:green;" class="animated infinite hinge"> Available for Hire </i> </a> </router-link> </span>
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
				<div class="col-lg-12 col-md-12 col-sm-12">
					<h1 class="mainheading">I create </h1>
					<h2 class="mainsub-heading"> You enjoy </h2>
					<h2 class="mainsub-heading2"> Wait a minute...? <p> Who is this guy? </p></h2>
					<router-link to="/AboutMe"> <a> <i id="arrow-down1" class="fa fa-angle-down"> </i> </a> </router-link>
				</div>
			</div><!-- row -->
		</div><!-- /container -->
	</div><!-- /headerwrap -->


<!-- PORTFOLIO SECTION -->
    <!-- <div id="portfolio">
    	<div class="container">
	    	<div class="row mt">
				<ul class="grid effect-2" id="grid">
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/3.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/3.jpg"></a></li>
                    <li><a href="singleproject.html"><img src="./assets/img/portfolio/4.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/5.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/6.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/7.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/8.jpg"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/9.jpg"></a></li>
                    <li><a href="singleproject.html"><img src="./assets/img/portfolio/12.png"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/11.png"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/10.png"></a></li>
					<li><a href="singleproject.html"><img src="./assets/img/portfolio/2.jpg"></a></li>
				</ul> -->
	    <!--	</div> row -->
	    <!-- </div> container -->
    <!-- </div> portfolio -->
<!-- SERVICES SECTION -->
	<div>
		<div class="container mt-5 mb-5 services">
        <h1 class="mainheading mb-5 mt-2"> I can help you grow <i style="font-size:15px; color:#16a085;" class="fas fa-circle"></i> <br> How?  </h1>
			<div class="row mt text-justify">
				<div class="col-lg-4 col-sm-12 col-md-6 mb-3">
					<h3 @mouseover="textValue1 = !textValue1" @mouseout ="textValue1 = !textValue1"> Quality Design & Material </h3>
					<p>Pixel accurate layouts following a mobile first approach,using the latest front-end technologies.
						Beautiful templates, readable content with the latest typography trends. Adjustable to customers needs.
						Photography and video coverage the need of your website can be provided.
					</p>
				</div>
				<div class="col-lg-4 col-sm-12 col-md-6 mb-3">
					<h3 @mouseover="textValue2 = !textValue2" @mouseout ="textValue2 = !textValue2"> Latest Technologies </h3>
					<p> As you can see at my personal info page, I use the latest technology toolset in the industry. Implementing everything with state of the art cross platform frameworks following the
						most amazing UI/UX trends, able to give your web app a real boost that will absolutely speak to the heart of your clients.
					</p>
				</div>
				<div class="col-lg-4 col-sm-12 col-md-6 mb-3">
					<h3 @mouseover="textValue3 = !textValue3" @mouseout ="textValue3 = !textValue3">Knowledge Providing</h3>
					<p> Stay updated with the latest trends in the industry by reading my articles and tutorials. But wait! I don't simply write about Web Technologies.
						Explore my website to find articles,news and much more content concerning a wide variety of subjects. Main interests include Computer Science,
					Photography, Machine Learning, Neuroscience, Pyschology, Cosmology and more. </p>
				</div>
                <!-- <div class="col-lg-3">
					<h3>Knowledge Providing</h3>
					<hr>
					<p> Stay updated with the latest trends in the industry by reading my articles and tutorials. But wait! I don't simply write about Web Technologies.
						Explore my website to find articles,news and much more content concerning a wide variety of subjects. Main interests include Computer Science,
					Photography, Machine Learning, Neuroscience, Pyschology, Cosmology and more. </p>
				</div> -->

			</div><!-- row -->
		</div><!-- container -->
	</div><!-- services section -->

<div class="blogSection mt-5">
    <!-- BlogsComponent -->
    <app-blogs-grid>
        <app-header> </app-header>
    </app-blogs-grid>
</div>

<div id="footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <h5 style="color:white"> Menelaos Nasies &copy; 2018 </h5>
            </div>
             <div class="col-sm-12 col-md-12 col-lg-12">
                <h6 style="color:white"> All rights reserved. </h6>
            </div>
            <hr>
             <div class="col-sm-12 col-md-12 col-lg-12 p-3">
                <p style="color:white; margin:2%;"> Complete Website is built exclusively by me. All photos are my property. Most of them are captured/edited by me and some are bought from online resources.
                    You are not allowed to use any of the website material without my permission. If you want to use any of the material available,
                    <router-link to="/ContactMe"> <a style="color:#16a085;"> please contact  </a> </router-link>
                    me first.
                </p>
            </div>
        </div>
    </div>


</div>





    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import BlogsGrid from "./components/BlogsGrid.vue";
import Header from "./components/Header.vue";
import moment from "moment";

export default {
  data() {
    return {
      sidebar: true,
      showHeader: false,
      menuText: "Show menu",
      currentDate: moment().format("MMM Do YY"),
      textValue1: false,
      textValue2: false,
      textValue3: false
    };
  },
  components: {
    appSidebar: Sidebar,
    appBlogsGrid: BlogsGrid,
    appHeader: Header
  },
  methods: {
    showMenu() {
      if (this.showHeader) {
        this.menuText = "Show menu";
        this.showHeader = !this.showHeader;
      } else {
        this.menuText = "Hide menu";
        this.showHeader = !this.showHeader;
      }
    }
  }
};
</script>

<style scoped>
#body {
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
/* a {
    color: #16a085;
    word-wrap: break-word;
    -webkit-transition: color .1s ease-in, background .1s ease-in;
    -moz-transition: color .1s ease-in, background .1s ease-in;
    -ms-transition: color .1s ease-in, background .1s ease-in;
    -o-transition: color .1s ease-in, background .1s ease-in;
    transition: color .1s ease-in, background .1s ease-in;
}
a:hover, a:focus {
    color: #7b7b7b;
    text-decoration: none;
    outline: 0;
} */
a:before,
a:after {
  -webkit-transition: color 0.1s ease-in, background 0.1s ease-in;
  -moz-transition: color 0.1s ease-in, background 0.1s ease-in;
  -ms-transition: color 0.1s ease-in, background 0.1s ease-in;
  -o-transition: color 0.1s ease-in, background 0.1s ease-in;
  transition: color 0.1s ease-in, background 0.1s ease-in;
}
.headerwrap a {
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
.btn {
  border-radius: 0;
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
.tm {
  font-size: 14px;
  line-height: 20px;
}
.menu {
  position: fixed;
  right: -200px;
  width: 260px;
  height: 100%;
  top: 0;
  z-index: 10;
  text-align: left;
}
.menu.menu-open {
  right: 0;
}
.menu-wrap {
  position: absolute;
  top: 0;
  left: 60px;
  background: #1a1a1a;
  width: 200px;
  height: 100%;
}
.menu h1.logo a {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.15em;
  line-height: 40px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
}
.menu h1.logo a:hover {
  color: #1abc9c;
}
.menu img.logo {
  margin: 20px 0;
  max-width: 160px;
}
.menu a {
  margin-left: 20px;
  color: gray;
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.menu a:hover {
  color: #fff;
}
.menu a:active {
  color: #fff;
}
.menu a > i {
  float: left;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  width: 25px;
  font-size: 14px;
  line-height: 40px;
  margin: 25px 2px;
}
.menu-close {
  cursor: pointer;
  display: block;
  position: absolute;
  font-size: 14px;
  color: gray;
  width: 40px;
  height: 40px;
  line-height: 40px;
  top: 20px;
  right: 5px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
.menu-close:hover {
  color: #fff;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
.body-push {
  overflow-x: hidden;
  position: relative;
  left: 0;
}
.body-push-toright {
  left: 200px;
}
.body-push-toleft {
  left: -200px;
}
.menu,
.body-push {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.services h3{
  border-bottom:5px solid #16a085;
  padding:2%;
}



#headerwrap {
  background-image: linear-gradient(
      to right bottom,
      rgba(2, 3, 5, 0.8),
      rgba(240, 180, 253, 0.2)
    ),
    url("./assets/img/bg-photo2.jpg");
  margin-top: -10px;
  margin-bottom: 0%;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 750px;
  width: 100%;
  height: 104vh;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  #headerwrap h1.mainheading,
  h2.mainsub-heading,
  h2.mainsub-heading2 {
    font-size: 40px;
  }
}

@media only screen and (min-width: 600px) {
  #services {
    height:150vh;
    margin-bottom:70%;
  }
  #services h1.mainheading {
    font-size: 100%;
  }
  #services h3 {
    font-size: 20px;
  }
  #services p {
    font-size: 10px;
  }
}

#footer {
  background-image: linear-gradient(
      to right bottom,
      rgba(2, 3, 5, 0.8),
      rgba(240, 180, 253, 0.2)
    ),
    url("./assets/img/header-bg3.jpg");
  margin-top: 3%;
  margin-bottom: 0%;
  padding-top: 1%;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  width: 100%;
  height: 23vh;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Raleway;
  font-size:30%;
}

#footer hr {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

@media only screen and (max-width: 740px) {
  #footer p {
    font-size: 220%;
  }
  #footer h5,h6{
    font-size:220%;
  }
  #footer{
    height:auto;
  }
}

@media only screen and (max-width: 740px) {
  #headerwrap{
    height:auto;
  }
  #headerwrap span {
    width:112%;
  }
  #headerwrap span a{
    height:auto;
    font-size:90%;
    display:flex;
    flex-direction: column;
    vertical-align: start;
  }
}


#arrow-down1 {
  animation-delay: 8s;
  animation: moveInBottom 3s ease-out;
  animation-fill-mode: forwards;
}

.mainheading {
  animation-name: moveInLeft;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

.mainsub-heading {
  animation: moveInRight 2s ease-out;
  animation-fill-mode: forwards;
}

.mainsub-heading2 {
  margin-top: 6%;
  animation-delay: 8s;
  animation: moveInBottom 3s ease-out;
  animation-fill-mode: forwards;
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
#mapwrap {
  margin: 0;
  padding: 0;
}
#serviceswrap {
  background: url("./assets/img/services-bg.jpg") no-repeat center top;
  margin-top: -10px;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 500px;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#serviceswrap h2 {
  color: #fff;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 150px;
}
#aboutwrap {
  background: url("./assets/img/about-bg.jpg") no-repeat center top;
  margin-top: -10px;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 500px;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#aboutwrap h2 {
  color: #fff;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 150px;
}
#portwrap {
  background: url("./assets/img/portfolio-bg.jpg") no-repeat center top;
  margin-top: -10px;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 500px;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#portwrap h2 {
  color: #fff;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 150px;
}
#sp {
  background: #2f2f2f;
  padding-top: 35px;
  padding-bottom: 35px;
}
#sp h2 {
  color: #fff;
}
#sp-standout {
  background: url("./assets/img/sp-standout-bg.jpg") no-repeat center top;
  margin-top: -10px;
  padding-top: 20px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  min-height: 500px;
  width: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#portfolio {
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
  background-color: rgba(2, 3, 5, 0.8);
}
#services {
  color: black;
  margin: 0 auto;
  padding: 0%;
  width: 90%;
  height: 80vh;
  border-bottom: 15px solid #16a085;
  
 
}

#blogSection {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
}

#blogSection:hover {
  animation-name: moveInLeft2;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#services h3 {
  color: black;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 2%;
  text-align: center;
}

#services h3:hover {
  color: #16a085;
  border-bottom: 1px solid #16a085;
  cursor: pointer;
}

#services p {
  color: black;
  animation: moveInLeft2;
  animation-duration: 1.5s;
  font-weight: 300;
  font-size:100%;
}

#services i {
  color: black;
  font-size: 35px;
  margin-top: 22px;
}

#services .mainheading {
  margin-top: 3%;
  margin-bottom: 5%;
  color: black;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: center;
}

#lg {
  background: #ebebeb;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  margin-top: 6%;
  margin-bottom: -1.2%;
}

/* #lg img{
    width:100px;
    height:100px;
} */

#lg img:hover {
  opacity: 0.7;
  cursor: pointer;
}

#lg .desc {
  text-align: left;
}
#call {
  background: #2f2f2f;
  margin-top: 1%;
  margin-bottom: 3%;
  padding: 3%;
  text-align: center;
}
#call h3 {
  color: #fff;
  text-align: center;
}
#call p {
  color: #fff;
  text-align: center;
}
#sf {
  display: block;
  width: 100%;
  background-color: black;
}
#sf .container {
  width: 100%;
}
#sf .col-lg-4 {
  margin: 0;
  padding: 15px;
}
#sf .lg {
  background-color: #1abc9c;
}
#sf .dg {
  background-color: #16a085;
}
#sf h4 {
  color: #fff;
}
#sf p {
  color: #fff;
}
#sf .ml {
  margin-left: 30px;
}
#sf i {
  font-size: 70px;
  color: #fff;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
#cf {
  background: white;
}
#cf h4 {
  color: black;
  margin-left: 15px;
  margin-top: 15px;
}
#cf p {
  color: black;
  font-size: 15px;
  line-height: 18px;
  margin-left: 15px;
}
#cf .container {
  width: 100%;
}
#cf .col-lg-8 {
  margin: 0;
  padding: 0;
}
.process {
  max-width: 69em;
  list-style: none;
  margin: 30px auto;
  padding: 0;
}
.process li {
  display: block;
  float: left;
  padding: 1px;
  width: 100%;
  opacity: 0;
}
.process li.shown,
.no-js .process li,
.no-cssanimations .process li {
  opacity: 1;
}
.process li a,
.process li img {
  outline: 0;
  border: 0;
  display: block;
  max-width: 100%;
}

.process.effect-2 li.animate {
  -webkit-transform: translateY(200px);
  -moz-transform: translateY(200px);
  transform: translateY(200px);
  -webkit-animation: moveUp 0.65s ease forwards;
  -moz-animation: moveUp 0.65s ease forwards;
  animation: moveUp 0.65s ease forwards;
}

@-webkit-keyframes moveUp {
  to {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
@-moz-keyframes moveUp {
  to {
    -moz-transform: translateY(0);
    opacity: 1;
  }
}
@keyframes moveUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
#chartwrap {
  width: 100%;
}
#chartwrap .container {
  margin-left: 0;
  padding-left: 0;
}
#chartwrap h1,
#chartwrap p {
  margin-left: 10px;
}
.cardinfo {
  background: #fff;
  padding: 15px;
  margin: 2px;
  text-align: left;
}
.cardinfo i {
  font-size: 18px;
  padding-right: 20px;
}
.grid {
  max-width: 69em;
  list-style: none;
  margin: 30px auto;
  padding: 0;
}
.grid li {
  display: block;
  float: left;
  padding: 7px;
  width: 33%;
  opacity: 0;
}
.grid li.shown,
.no-js .grid li,
.no-cssanimations .grid li {
  opacity: 1;
}
.grid li a,
.grid li img {
  outline: 0;
  border: 0;
  display: block;
  max-width: 100%;
}
.grid img {
  opacity: 0.7;
}
.grid img:hover {
  opacity: 1;
}
.grid.effect-2 li.animate {
  -webkit-transform: translateY(200px);
  -moz-transform: translateY(200px);
  transform: translateY(200px);
  -webkit-animation: moveUp 0.65s ease forwards;
  -moz-animation: moveUp 0.65s ease forwards;
  animation: moveUp 0.65s ease forwards;
}

#headerButton {
  margin-top: 2%;
  animation: moveInLeft2;
  animation-duration: 4s;
}

@-webkit-keyframes moveUp {
  to {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
@-moz-keyframes moveUp {
  to {
    -moz-transform: translateY(0);
    opacity: 1;
  }
}
@keyframes moveUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInLeft2 {
  0% {
    opacity: 0.3;
    transform: translateX(-10rem);
  }
  40% {
    opacity: 0.45;
  }
  60% {
    opacity: 0.65;
  }
  80% {
    transform: translateX(1rem);
    opacity: 0.8;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>

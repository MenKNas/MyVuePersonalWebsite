<template>
   <div id="body">
       <div id="headerwrap">
            <div class="container">
                <div class="row">
                    <!-- <button id="headerButton" @mouseenter="showMenu"> {{menuText}} </button> -->
                    <div class="col-lg-12 col-md-12 text-center">
                        <transition name="leftMove" type="animation">
                            <app-header>
                                <span> <router-link to="MyBlog"> <a> My Blog </a> </router-link> </span>
                                <span> <router-link to="/MyPortfolio"> <a> MyPortfolio </a> </router-link> </span>
                                <span> <router-link to="/ContactMe"> <a> Contact Me </a> </router-link> </span>
                                <span> <router-link to="/"> <a> Home </a> </router-link> </span>
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
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="mainsub-heading"> Hey there, <br> My name is Menelaos Nasies </h2>
                        <h2 class="mainsub-heading2"> <p> I am a Web Developer, Graphic Designer, Photographer and Blogger <br> <button class="btn btn-green btn-left" @click="workWithMe"> Work with me </button>
                        <button @click="viewMyWork" class="btn btn-green btn-right"> View my work </button> </p></h2>
                    </div>
                </div><!-- row -->
            </div><!-- /container -->
	    </div><!-- /headerwrap -->
         <div id="headerwrap2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-justify">
                       <h2> My story </h2>
                       <hr id="hr1">
                       <p> <span style="font-weight:500; font-size:135%;"> I </span> was born in Ioannina, a beautiful lake-side city in North-Western Greece. Since I first got my hands on a computer around the age of 12 I decided that this would be my future job about. Of course, things have evolved rather fast since that time and technology is now ubiquitous, an important aspect of our lives that nobody can live without.    </p>
                       <p>
                         Few years later, I went to college to study Computer Engineering and Telecoms Engineering at the University of Thessaly, in another beautiful city (by the sea this time) in central Greece, named Volos. It was an amazing time, getting into a university, learning everything about your favorite subject and meeting people who share this common passion. I followed more than 40 different courses on a wide variety of subjects extending from Calculus and Statistics to Programming, Scientific Computing, AI and Machine Learning, even lots of Hardware classes (which was never my strong part I have to admit).
                         <p>
                           While studying I had the opportunity to work on various demanding projects, improve my ability on decision making and problem solving, managing time and working under pressure. Of course the most important gain from university projects was the ability to work in a team. You learn how to expand your communicational skills and work with your fellow students and for me that's one of the most important aspects you need to focus on if you want to pursue a career in technologies.
                         </p>
                         <p>
                           After my service to the greek Army during 2017 I decided that I wanted to focus more on Design and Development. I had already taken lots of classes, I was really good at using design tools and software but I felt like Web Development is the future I wanted. After a year of hard work I feel now more confident on my skills, ready to join the market and find a job opportunity which will help me evolve and become even better as a modern Web Developer.
                         </p>
                         <p> If you want to read more: <br>
                            <a class="text-link" href="https://en.wikipedia.org/wiki/Ioannina" target="_blank"> <i class="fas fa-map-pin"></i> Ioannina, Greece </a> <br>
                            <a class="text-link" href="https://en.wikipedia.org/wiki/Volos" target="_blank"> <i class="fas fa-map-pin"></i> Volos, Greece </a> <br>
                            <a class="text-link" href="https://www.e-ce.uth.gr/" target="_blank"> <i class="fas fa-graduation-cap"></i> Department of Electrical and Computer Engineering, University of Thessaly </a>
                         </p>
                    </div>
                </div><!-- row -->
                <div class="dividerNew">
                </div>
                <div class="row">
                    <div class="col-lg-12 text-justify">
                       <h2> My education </h2>
                       <hr id="hr1">
                       <p> <span style="font-weight:500; font-size:135%;"> R</span>ight below you will find a timeline of my complete education background: </p>
                       <p>
                         <ul class="eduList">
                           <li>  <strong> [2006-2009]</strong> 1st Lyceum of Ioannina, GPA: 19/20 </li>
                           <li>  <strong> [2009-2015]</strong> Computer and Telecommunications Engineering, University of Thessaly (pause of studies, graduation pending)</li>
                           <li>  <strong> [2016] </strong> <a class="text-link" href="https://www.futurevoice.edu.gr/"> Future Voice </a> Informatics School of Ioannina, Photoshop and Design Tools </li>
                           <li>  <strong> [2017- 2018] </strong> Web Development,
                           <a class="text-link" href="https://en.uoa.gr/" target="_blank"> National Kapodistrian University of Athens</a>
                           </li>
                           <li>  <strong> [2018] </strong> Marketing and Branding, National Kapodistrian University of Athens (3-month program) </li>
                         </ul>
                       </p>
                    </div>
                </div><!-- row -->

                 <div class="dividerNew">
                </div>

                 <div class="row">
                    <div class="col-lg-12 text-justify">
                       <h2> My skills </h2>
                       <hr id="hr1">
                       <p> <span style="font-weight:500; font-size:135%;"> I</span>n this section you can see a complete list of all the different technologies I use on my projects  </p>
                       <a class="btn btn-green2 mb-4" target="_blank" href="https://files.fm/u/8yvar44n#/view/MyCV.pdf"> View my CV in pdf </a>
                       </div>
                  </div><!-- row -->
                  <div class="row text-justify">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                      <h5 class="title"> Front End Technologies</h5>
                      <ul>
                        <li> HTML 5 </li>
                        <li> CSS 3 </li>
                        <li> JavaScript (ES5, ES6, ES7) </li>
                        <li> jQuery </li>
                        <li> Bootstrap 4 </li>
                        <li> Materialize CSS </li>
                        <li> Semantic UI </li>
                        <li> SCSS </li>
                      </ul>
                      <h5 class="title"> Front End Frameworks/Libraries </h5>
                      <ul>
                        <li> Vue.js ( including Vuex ) </li>
                        <li> React.js (including Redux ) </li>
                        <li> Nuxt.js </li>
                        <li> Meteor.js </li>
                        <li> <i> Currently learning Angular 6 </i></li>
                      </ul>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                      <h5 class="title"> Back End Technologies </h5>
                      <ul>
                        <li> Node.js </li>
                        <li> Express.js </li>
                        <li> Next.js </li>
                        <li> PHP (no frameworks) </li>
                        <li> Restful APIs </li>
                        <li> GraphQL </li>
                      </ul>
                      <h5 class="databases title"> Databases </h5>
                      <ul>
                        <li> SQL </li>
                        <li> PostgreSQL </li>
                        <li> MongoDB </li>
                        <li> Firebase </li>
                        <li> AWS </li>
                      </ul>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <h5 class="title"> Other technologies </h5>
                      <ul>
                        <li> Adobe Creative Suite (incl. Photoshop, Premiere, Lightroom, inDesign, DreamWeaver, Illustrator) </li>
                        <li> Webpack </li>
                        <li> Parcel </li>
                        <li> CMSs (Joomla, Drupal, Wordpress) </li>
                        <li> Heroku Deployment </li>
                        <li> Git/GitHub </li>
                      </ul>
                    </div>
                  </div>



                <div class="dividerNew">
                </div>

                       <div class="row">
                    <div class="col-lg-12 text-justify">
                       <h2> My interests </h2>
                       <hr id="hr1">
                       <p> <span style="font-weight:500; font-size:135%;"> M</span>y main areas of interest expand a wide area of topics including modern techniques of Web and Graphic Design, latest Web Development technologies, Databases, Data Mining and Web Scrapping, AI and Machine Learning, Neuroscience and Theories of Learning. </p>
                       <h5 class="title"> Web & Graphic Design </h5>
                       <ul>
                         <li> CSS preprocessors (SASS, Less) </li>
                         <li> Modern Animation and Animation Libraries </li>
                         <li> Modern CSS frameworks (Bootstrap 4, Materialize CSS, Semantic UI and more) </li>
                         <li> UI/UX </li>
                         <li> Mobile Design </li>
                       </ul>
                       <h5 class="title"> Web Development </h5>
                       <ul>
                         <li> Front-end JavaScript frameworks and libraries (Vue, Nuxt, React, Meteor, Angular) </li>
                         <li> Progressive Web Apps (PWAs) </li>
                         <li> Native Apps Development </li>
                         <li> SEO </li>
                         <li> Digital Marketing Strategies in modern applications </li>
                       </ul>
                       <h5 class="title">  Server Side </h5>
                       <ul>
                         <li> Modern NoSQL databases </li>
                         <li> RESTful APIs and GraphQL APIs </li>
                       </ul>
                       <h5 class="title"> AI & Machine learning </h5>
                       <ul>
                         <li> Machine Learning on the Browser (Tensorflow.js) </li>
                         <li> Data Mining with Python </li>
                         <li> Learning models with ANNs </li>
                         <li> Deep Learning </li>
                       </ul>
                       <h5 class="title"> Neuroscience </h5>
                       <ul>
                         <li> How the brain works </li>
                         <li> Modeling and simulating the brain </li>
                       </ul>
                    </div>
                </div><!-- row -->

               <div class="dividerNew">
                </div>

                    <div class="row">
                    <div class="col-lg-12 text-justify moreAboutMe">
                       <h2> Get to know me more... </h2>
                       <hr id="hr1">
                       <p> <span style="font-weight:500; font-size:135%;"> B</span>eing a restless spirit I don't stop doing things after work. I just keep doing more.  
                       In this section you can read a short summary of my hobbies and find out more about Menelaos ( no, I don't always talk about myself in 3rd person).
                       </p>
                       <ul style="list-style:none;">
                         <li> <strong>Basketball addict </strong> Used to play in a team as Point Guard. Big fan of LA Lakers and Kobe ( now Lakers and LeBron). NBA is a major part of my after work daily routine.</li>
                         <li> <strong>Passionate photographer. </strong> I have worked as a photographer professionally, but the love and hobbyist approach of photography will never stop. </li>
                         <li> <strong>Nature enthusiast. </strong> Nothing better than a walk in the woods or a climb on a mountain. Combine that with the love for photography and you get the most amazing pictures you could ever imagine.</li>
                         <li> <strong>Video game lover. </strong> (nothing to comment here, just trying to build my own battlestation). </li>
                         <li> <strong>Reader. </strong> Ah, that feeling of grabbing a book, sitting on the sofa next to the burning fireplace.  </li>
                         <li> <strong>Coffee freak. </strong> Needless to say, who can code without coffee ? </li>
                       </ul>
                       <img class="img me-nature" src="../assets/img/nature-me.png" alt="">
                       <br>
                       <p class="mt-2 mb-5"> Me at <a class="text-link" href="https://en.wikipedia.org/wiki/Zagori" target="_blank">Zagori </a> in 2017. </p>
                    </div>
                </div><!-- row -->


            </div><!-- /container -->
	    </div><!-- /headerwrap -->
   </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {
    appHeader: Header
  },
  methods: {
    workWithMe() {
      this.$router.push({
        path: "/ContactMe",
        query: { activeComponent: "contact-form", employment: "Employment" }
      });
    },
    viewMyWork() {
      this.$router.push("/MyPortfolio");
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

#headerwrap {
  background-image: linear-gradient(
      to right bottom,
      rgba(2, 3, 5, 0.8),
      rgba(240, 180, 253, 0.2)
    ),
    url("../assets/img/meniosnasies1-1.jpg");
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

#headerwrap2 {
  /* background-color:rgba(2, 3, 5, 0.8); */
  margin-top: 0px;
  margin-bottom: 0%;
  padding-top: 4%;
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

.dividerNew {
  background-image: url("../assets/img/header-bg3.jpg");
  margin-top: 2%;
  margin-bottom: 2%;
  height: 20vh;
  width: 100%;
}

#headerwrap2 h2 {
  color: black;
}

#hr1 {
  width: 20%;
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

.mainheading {
  animation-name: moveInLeft;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

.mainsub-heading {
  margin-top: 33vh;
  animation: moveInRight 2s ease-out;
  animation-fill-mode: forwards;
}

.mainsub-heading2 {
  margin-top: 6%;
  animation-delay: 8s;
  animation: moveInBottom 3s ease-out;
  animation-fill-mode: forwards;
}

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
  font-weight:200;
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
  animation: moveInRight 2s ease-out;
  animation-fill-mode: forwards;
}

.btn-left {
  animation: moveInRight 2s ease-out;
  animation-fill-mode: forwards;
}

.btn-right {
  animation: moveInLeft 2s ease-out;
  animation-fill-mode: forwards;
}

.btn-green {
  color: #fff;
  background-color: #1abc9c;
  border-color: #1abc9c;
  font-weight: 300;
}

.btn-green2 {
  background-color: white;
  color: #1abc9c;
  border: 1px solid #1abc9c;
}

.btn-green2:hover,
.btn-gree2:focus,
.btn-green2:active,
.btn-green2.active,
.open .dropdown-toggle.btn-green2 {
  background-color: #1abc9c;
  color: white;
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

.eduList {
  list-style: none;
  text-align: left;
}

.eduList li {
  margin-top: 1.5%;
  margin-bottom: 1.5%;
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

.databases {
  margin-top: 12%;
}

.title {
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 1%;
}

.text-link{
  color:#1abc9c;
  font-style: italic;
}

.moreAboutMe li{
  margin:1%;
  padding:1%;
}

.me-nature{
  margin:0 auto;
}
</style>

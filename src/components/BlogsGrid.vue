<template>
    <div id="blogsGrid">
        <div class="container">
             <transition name="leftMove" type="animation">
                        <app-header v-if=" this.$route.path === '/MyBlog'">
                            <span> <router-link to="/"> <a> Home</a> </router-link> </span>
                            <span> <router-link to="MyPortfolio"> <a> My Portfolio </a> </router-link> </span>
                            <span> <router-link to="/ContactMe"> <a> Contact Me </a> </router-link> </span>
                            <span> <router-link to="/AboutMe"> <a> About Me </a> </router-link> </span>
                            <span> </span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span> <a href=""> Become a writer </a> </span>
                            <span> <router-link to="FindTopics"> <a> Find Topics </a> </router-link> </span>
                        </app-header>
                    </transition>
                    <hr id="headerDiv">
                     <h1 class="mainheading mb-5 mt-2"> Expand your knowledge <i style="font-size:15px; color:#16a085;" class="fas fa-circle"></i> <br> Read  </h1>
			 <section style="background-size: cover; background-position: center center" class="hero">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-7">
                        <h1> Welcome to the Blogs Grid </h1> <router-link class="hero-link" to="/MyBlog"> <a> Read Here </a></router-link>
                    </div>
                    </div>
                </div>
            </section>

              <section class="intro">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 text-justify">
                            <h2 class="mb-4"> Reading Section | Recent Posts </h2>
                            <p class="text-big">In this section of the website you can read about the <strong>latest news</strong> in the industry, stay informed and follow your <strong>favorite topics </strong> and learn new stuff every week with <strong> new tutorials and articles </strong> on a wide variety of subjects. You can also subscribe to our
                            <strong> newsletter </strong> to learn all about new updates of our blog. </p>
                        </div>
                         <div class="col-lg-4">
                            <div class="row">
                                <div class="col-md-6 m-3">
                                    <router-link class="btn articles-button" to="#"> <a> See all articles </a></router-link>
                                    <router-link class="btn articles-button" to="#"> <a> Find By Category </a></router-link>
                                    <router-link class="btn articles-button" to="#"> <a> Article of the Week </a></router-link>
                                    <a class="btn articles-button" href="#dailyNewsFeed"> Daily News Feed </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

		<div class="row blogSection">
            <div class="col-sm-12 col-md-8 col-lg-8">
                 <app-blog v-for="blog in blogs" :blog="blog"> </app-blog>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 featured-articles">
                <h3> Featured Articles </h3>
            </div>
            <div id="dailyNewsFeed" class="col-sm-12 col-md-12 col-lg-12">
              <h1 class="mainheading mb-5 mt-5"> Get the latest news <i style="font-size:15px; color:#16a085;" class="fas fa-circle"></i> <br> Stay informed </h1>
              <h3 class="text-center mt-2 mb-5"> Your daily News Feed </h3>
                <news-list></news-list>
            </div>
		</div><!-- row -->

       <!-- Newsletter Section-->
    <section v-if=" this.$route.path === '/MyBlog'" class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Subscribe to our Newsletter</h2>
            <p class="text-big"> Stay informed and updated on the latest articles and news that appear on the website .</p>
          </div>
          <div class="col-md-8">
            <div class="form-holder">
              <form action="#">
                <div class="form-group">
                  <input type="email" name="email" id="email" placeholder="Type your email address">
                  <button type="submit" class="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


	</div><!-- container -->
    </div>
</template>

<script>
import Blog from "./Blog.vue";
import Header from "./Header.vue";
import NewsList from "./NewsList.vue";

export default {
  data() {
    return {
      blogs: [
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post01",
          category: "Technology"
        },
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post02",
          category: "Photography"
        },
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post03",
          category: "Machine Learning"
        },
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post03",
          category: "Technology"
        },
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post03",
          category: "Neuroscience"
        },
        {
          title: "This is the first post ever in this website",
          content:
            " This is the content of the first ever post in this website and I really hope you enjoy it!",
          date: "30/8/2018",
          thumbnail: "post03",
          category: "Travel"
        }
      ],
      currentPath: this.$route.path
    };
  },
  components: {
    appBlog: Blog,
    appHeader: Header,
    newsList: NewsList
  },
  methods: {}
};
</script>

<style scoped>
.goright {
  text-align: right;
}

#blogsGrid h3 a {
  color: green;
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
  font-family: Lato;
  font-weight: 300;
}

.headerwrap a:hover a:focus {
  color: #16a085;
  text-decoration: none;
  outline: 0;
}

a {
  text-decoration: none;
}

section {
  padding: 100px 0;
  overflow-x: hidden;
  font-family: Lato;
}

section.hero {
  padding: 0;
  color: #fff;
  font-family: Lato;
  background-image: url("../assets/img/meniosnasies1-1.jpg");
}

section.hero .container {
  padding: 200px 20px;
  position: relative;
  font-family: Lato;
}

section.hero h1 {
  line-height: 1.2em;
  color: white;
  font-family: Raleway;
}

.section.here h2 {
  color: black;
  font-family: Raleway;
}

section.hero .continue {
  position: absolute;
  bottom: 30px;
  left: 20px;
  text-decoration: none !important;
  color: inherit !important;
  text-transform: uppercase;
  font-size: 0.75em;
  opacity: 0.8;
  font-family: Lato;
}

section.hero .continue i {
  margin-right: 5px;
}

a.hero-link {
  color: inherit !important;
  text-transform: uppercase;
  font-size: 1em;
  text-decoration: none !important;
  margin-top: 20px;
  font-weight: 300;
  font-family: Lato;
}

a.hero-link::after {
  content: "";
  width: 100%;
  height: 1px;
  display: block;
  background: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

a.hero-link:hover {
  color: #999 !important;
}

a.hero-link:hover::after {
  background: #999;
}

.featured-articles {
  height: 100vh;
  background-image: url("../assets/img/about-bg.jpg");
}

.featured-articles h3 {
  text-align: center;
  margin-top: 3%;
}

section.newsletter {
  background-image: url("../assets/img/portfolio-bg.jpg");
  margin: 2%;
}

section.newsletter .form-group {
  position: relative;
}

section.newsletter input {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 15px;
  border: 1px solid #16a085;
  font-size: 1.1em;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}

section.newsletter .submit {
  height: 60px;
  padding: 0 30px;
  line-height: 60px;
  background: #16a085;
  border: 1px solid #16a085;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  font-family: "Open Sans", sans-serif;
}

section.newsletter .submit:hover {
  cursor: pointer;
  background-color: #16a074;
}

/* Newsletter Section Media Query ------------------------------------- */
@media (max-width: 575px) {
  section.newsletter input {
    font-size: 0.95em;
    width: 100%;
  }
  section.newsletter .submit {
    position: static;
    width: 100%;
    margin-top: 10px;
  }
}

.articles-button {
  background-color: #16a085;
  margin: 3%;
  color: white;
  width: 100%;
}

.articles-button:hover {
  animation: buttonAnimation 1s forwards;
}

@keyframes buttonAnimation {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(23px);
  }
}

#headerDiv{
  border:0.4px solid #16a074;
}
</style>

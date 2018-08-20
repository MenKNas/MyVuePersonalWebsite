<template>
    <div class="container">
       <div class="headerwrap">
            <app-header>
                <span> <router-link to="MyBlog"> <a> My Blog </a> </router-link> </span>
                <span> <a href="" > My Portfolio </a> </span>
                <span> <a href=""> Contact Me </a></span>
                <span> <router-link to="/AboutMe"> <a> About Me </a> </router-link> </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span> <a href=""> Become a writer </a> </span>
                <span> <router-link to="/"> <a> Home </a> </router-link> </span>
            </app-header>
		    <div class="container-fluid mt-5">
            <div class="row mt">
                <div class="col-lg-12 col-md-12 mt-12">
                    <h1> Find Topics </h1>
                    <hr>
                    <p style="padding:4%; text-align:justify; line-height:180%;">
                        <span style="font-weight:500; font-size:40px;"> F</span>ind interesting articles, resources, tutorials, reviews and latest news on a wide variety of different topics.
                        All of the material can be found organized in the following parts:
                    </p>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12 col-md-4 col-lg-4 box">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/topics/web dev.jpg" alt="">
                        <div class="overlay">
                            <h2> Web Development & Design </h2>
                            <a class="info" href="#"> Read about the latest frameworks,trends, tricks and more </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 box">
                   <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/topics/volos-37NEW.jpg" alt="">
                        <div class="overlay">
                            <h2> Photography </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 box">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/topics/travel photo.jpg" alt="">
                        <div class="overlay">
                            <h2> Travel </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 box mt-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="">
                        <div class="overlay">
                            <h2> AI & Machine Learning </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4 box mt-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="">
                        <div class="overlay">
                            <h2> General Computer Science </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4 box mt-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="">
                        <div class="overlay">
                            <h2> Neuroscience </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 box mt-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="">
                        <div class="overlay">
                            <h2> Books </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 box mt-4">
                    <div class="hovereffect">
                        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="">
                        <div class="overlay">
                            <h2> Opinions </h2>
                            <a class="info" href="#"> Latest information on Web Development and Design  </a>
                        </div>
                    </div>
                </div>
            </div>
	        </div><!-- /container -->
	    </div><!-- /headerwrap -->
    
    </div>
</template>

<script>
    import Header from './Header.vue';


    export default {

        components:{
            appHeader:Header
        }
    }

</script>

<style scoped>
    a {
    color:black;
    word-wrap: break-word;
    -webkit-transition: color .1s ease-in, background .1s ease-in;
    -moz-transition: color .1s ease-in, background .1s ease-in;
    -ms-transition: color .1s ease-in, background .1s ease-in;
    -o-transition: color .1s ease-in, background .1s ease-in;
    transition: color .1s ease-in, background .1s ease-in;
    }
    a:before, a:after {
        -webkit-transition: color .1s ease-in, background .1s ease-in;
        -moz-transition: color .1s ease-in, background .1s ease-in;
        -ms-transition: color .1s ease-in, background .1s ease-in;
        -o-transition: color .1s ease-in, background .1s ease-in;
        transition: color .1s ease-in, background .1s ease-in;
    }

    .headerwrap {
        margin-top: -10px;
        margin-bottom:3%;
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
        font-family: Lato;
        font-weight: 300;
        font-size: 16px;
        color: #555;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
}

.headerwrap h1,h2,h3,h4,h5,h6 {
    font-family: Raleway;
    font-weight: 300;
    color: #333;
}

    .headerwrap img {
        width:100%;
        height:45vh;
        backface-visibility: hidden;
        transition: .5s ease;
    }

    .headerwrap a{
        color:black;
        text-decoration: none;
    }


    .headerwrap a:hover a:focus{
        color: #16a085;
        text-decoration: none;
        outline: 0;
    }

.hovereffect {
width:100%;
height:100%;
float:left;
overflow:hidden;
position:relative;
text-align:center;
cursor:default;
}

.hovereffect .overlay {
width:100%;
height:100%;
position:absolute;
overflow:hidden;
top:0;
left:0;
opacity:0;
background-color:rgba(0,0,0,0.5);
-webkit-transition:all .4s ease-in-out;
transition:all .4s ease-in-out
}

.hovereffect img {
display:block;
position:relative;
-webkit-transition:all .4s linear;
transition:all .4s linear;
}

.hovereffect h2 {
text-transform:uppercase;
color:#fff;
text-align:center;
position:relative;
font-size:17px;
background:rgba(0,0,0,0.6);
-webkit-transform:translatey(-100px);
-ms-transform:translatey(-100px);
transform:translatey(-100px);
-webkit-transition:all .2s ease-in-out;
transition:all .2s ease-in-out;
padding:10px;
}

.hovereffect a.info {
    text-decoration:none;
    display:inline-block;
    text-transform:none;
    text-align:center;
    color:#fff;
    border:1px solid #fff;
    background-color:transparent;
    opacity:0;
    filter:alpha(opacity=0);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    margin-top:50%;
    padding:3%;
}

.hovereffect a.info:hover {
    box-shadow:0 0 5px #fff;
    color:#16a085;
    border-color:#16a085;
}

.hovereffect:hover img {
    -ms-transform:scale(1.2);
    -webkit-transform:scale(1.2);
    transform:scale(1.2);
}

.hovereffect:hover .overlay {
    opacity:1;
    filter:alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
    opacity:1;
    filter:alpha(opacity=100);
    -ms-transform:translatey(0);
    -webkit-transform:translatey(0);
    transform:translatey(0);
}

.hovereffect:hover a.info {
    -webkit-transition-delay:.2s;
    transition-delay:.2s;
}

a:before, a:after {
    -webkit-transition: color .1s ease-in, background .1s ease-in;
    -moz-transition: color .1s ease-in, background .1s ease-in;
    -ms-transition: color .1s ease-in, background .1s ease-in;
    -o-transition: color .1s ease-in, background .1s ease-in;
    transition: color .1s ease-in, background .1s ease-in;
}
span a{
        color:black;
        text-decoration: none;
}

span a:hover{
    color: #16a085;
}


.headerwrap a:hover a:focus{
        color: #16a085;
        text-decoration: none;
        outline: 0;
}





</style>
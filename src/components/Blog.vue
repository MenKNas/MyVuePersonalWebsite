<template>

    <!-- <div class="col-md-4">
        <img class="img-fluid" src="../assets/img/blogging.jpg" alt="Single blog image">
        <h1> {{blog.title}} </h1>
        <hr>
        <p> {{blog.content}} </p>
        <hr>
        <p> {{blog.date}} </p>
    </div> -->

    <div>
     <section class="featured-posts no-padding-top">
            <div class="container">
                  <hr>
                <div class="row d-flex align-items-stretch">
                    <div class="text col-lg-7">
                        <div class="text-inner d-flex align-items-center">
                            <div class="content">
                                <header class="post-header">
                                <div class="category"><a href="#"> {{blog.category}} </a></div><a href="#">
                                    <h2 class="h4 mt-2">{{blog.title}}</h2></a>
                                </header>
                                <p> {{blog.content }} </p>
                                <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img src="../assets/img/me1.jpg" alt="..." class="img-fluid"></div>
                                    <div class="title"><span>John Doe</span></div></a>
                                <div class="date"><img src="../assets/img/icons/calendar.png" alt=""> {{blog.date}} </div>
                                <div class="comments"> <img src="../assets/img/icons/chat.png" alt=""> 12 </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                <div class="image col-lg-5"><img src='../assets/img/me1.jpg' alt="..."></div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        props:['blog']
    }
</script>

<style scoped>

.goright {
    text-align: right;
}

#blogsGrid h3 a {
    color:green;
}

h1, h2, h3, h4, h5, h6 {
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

.headerwrap a:hover a:focus{
        color: #16a085;
        text-decoration: none;
        outline: 0;
}

a{
    text-decoration:none;
}

section {
  padding: 0% 0;
  overflow-x: hidden;
  font-family: Lato;
}

section.hero {
  padding: 0;
  color: #fff;
  font-family: Lato;
  background-image:url('../assets/img/meniosnasies1-1.jpg')
}

section.hero .container {
  padding: 200px 20px;
  position: relative;
  font-family: Lato;
}

section.hero h1 {
  line-height: 1.2em;
  color:white;
  font-family:Raleway;
}

.section.here h2{
    color:black;
    font-family:Raleway;
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
  content: '';
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

section.featured-posts .row:nth-of-type(odd) .text {
  background: white;

}

.changeBackground{
    background:white;
}

section.featured-posts .row:last-of-type {
  margin-bottom: 0;
}

section.featured-posts p {
  font-weight: 400;
  color: #777;
  font-size: 0.95em;
}

section.featured-posts .text-inner {
  padding: 70px 30px;
  height: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

section.featured-posts a {
  color: inherit;
  text-decoration: none;
}

section.featured-posts h2 {
  line-height: 1.1em;
  color: #333;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

section.featured-posts h2:hover {
  color: #555;
}

section.featured-posts .avatar {
  max-width: 40px;
  min-width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
}

section.featured-posts .title,
section.featured-posts .date,
section.featured-posts .comments {
  font-size: 0.8em;
  font-weight: 400;
  color: #999;
}

section.featured-posts .title i,
section.featured-posts .date i,
section.featured-posts .comments i {
  margin-right: 5px;
}

section.featured-posts .title::after,
section.featured-posts .date::after,
section.featured-posts .comments::after {
  content: '|';
  display: inline-block;
  margin: 0 7px;
  font-size: 0.9em;
  color: #ccc;
}

section.featured-posts .comments::after {
  display: none;
}

section.featured-posts .image {
  max-height: 200px;
  width: auto;
  overflow: hidden;
  padding: 0;
}

section.featured-posts .image img {
  height: 100%;
}

section.featured-posts .post-header {
  margin-bottom: 10px;
}

section.featured-posts .post-footer {
  margin-top: 30px;
}

/* Featured Posts Section Media Query ------------------------------------- */
@media (max-width: 991px) {
  section.featured-posts .image {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    max-height: 300px;
    min-height: auto !important;
  }
  section.featured-posts .image img {
    width: 100%;
    height: auto !important;
  }
  section.featured-posts .text {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
}

@media (max-width: 575px) {
  section.featured-posts .post-footer {
    font-size: 0.9em;
  }
}

@media (max-width: 350px) {
  section.featured-posts .text-inner {
    padding: 15px;
  }
  section.featured-posts .post-footer {
    font-size: 0.75em;
  }
}



</style>
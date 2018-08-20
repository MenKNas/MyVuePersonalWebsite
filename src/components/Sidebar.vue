<template>
    <div>
        <nav class="menu" id="theMenu">
            <div class="menu-wrap">
                <h1 class="logo"><a href="">LINK</a></h1>
                <i class="fa fa-arrow-right menu-close"></i>
                <a href="">Home</a>
                <a href=""> Blog </a>
                <a href=""> Latest News </a>
                <a href="">Services</a>
                <a href="">Portfolio</a>
                <a href="">About Me</a>
                <a href="#contact">Contact Me</a>
                <a href=""><i class="fab fa-facebook"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-dribbble"></i></a>
                <a href=""><i class="fab fa-envelope"></i></a>
            </div>
        <!-- Menu button -->
            <div id="menuToggle"><i class="fas fa-bars"></i></div>
	    </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
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
    height: 100%}
.menu h1.logo a {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: .15em;
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
    letter-spacing: .1em;
    text-transform: uppercase;
}
.menu a:hover {
    color: #fff;
}
.menu a:active {
    color: #fff;
}
.menu a>i {
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
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
}
.menu-close:hover {
    color: #fff;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
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
.menu, .body-push {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
#menuToggle {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 11;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #fff;
    width: 60px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    background: transparent;
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
}
#menuToggle:hover {
    color: #fff;
    background: rgba(0, 0, 0, .2);
    -webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
}
</style>
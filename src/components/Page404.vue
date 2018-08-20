<template>
    <div>
        <div id="headerwrap">
		<div class="container">
            <div class="row">
                <!-- <button id="headerButton" @mouseenter="showMenu"> {{menuText}} </button> -->
                <div class="col-lg-12 col-md-12 text-center">
                    <transition name="leftMove" type="animation">  
                        <app-header> 
                            <span> <router-link to="/MyBlog"> <a> My Blog </a> </router-link> </span>
                            <span> <router-link to="#"> <a> My Portfolio </a> </router-link> </span>
                            <span> <router-link to="/ContactMe"> <a> Contact Me  </a> </router-link> </span>
                            <span> <router-link to="/AboutMe"> <a> About Me </a> </router-link> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> <router-link to="#"> <a> Become a Writer </a> </router-link> </span>
                            <span> <router-link to="/FindTopics"> <a> Find Topics </a> </router-link> </span>
                        </app-header>
                    </transition>    
                </div>
            </div>
			<div class="row mainPart">
				<div class="col-lg-12">
					<h1 class="mainheading"> 4O4 </h1>
					<h2 class="mainsub-heading"> Ooops...Something went wrong </h2>
                    <hr>
                    <router-link to="/"> <a class="btn btn-home">  <span> <i class="fas fa-chevron-circle-left"></i> </span>Return Home </a> </router-link> 
				</div>
			</div><!-- row -->
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

#headerwrap {
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
}

#headerwrap a{
        color:black;
        text-decoration: none;
        font-family: Lato;
}

#headerwrap span a:hover{
    color:#1abc9c ;
}

.mainPart{
    margin-top:15%;
}

.mainheading{
    animation-name: moveInLeft;
    animation-duration: 1.5s;
    animation-timing-function: ease-out ;
    animation-fill-mode: forwards;
}

.mainsub-heading{
    animation: moveInRight 2s ease-out; 
    animation-fill-mode: forwards;
}

.mainsub-heading2{
    margin-top:6%;
    animation-delay: 8s;
    animation: moveInBottom 3s ease-out; 
    animation-fill-mode: forwards;
}

#headerwrap h1 {
    margin-top: 5%;
    color: #1abc9c ;
    font-size: 140px;
    font-weight: 700;
    letter-spacing: 3px;
}

#headerwrap h2 {
    color: darkgray;
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

#headerwrap .btn-home{
    background-color:#1abc9c ;
    color:white;
    margin-top:1%;
}

#headerwrap .btn-home i{
   font-size:100%;
   margin-right:5%;
}

#headerwrap .btn-home:hover{
    background-color: #16a074;
}

</style>
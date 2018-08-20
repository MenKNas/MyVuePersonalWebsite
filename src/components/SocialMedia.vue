<template>
    <div>
        <!-- Section -->
				<section class="awe-section bg-gray">
					<div class="container p-3">
                        <h3> You can find me on most of the popular social networks </h3>
                        <h4> Connect with me. Find me on social media.</h4>
						<div class="row m-5">
							<div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://www.facebook.com/profile.php?id=723807020"> <img class="social" src="../assets/img/icons/facebook.png" alt="" target="_blank"> </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://www.instagram.com/men_nas/" target="_blank"> <img class="social" src="../assets/img/icons/instagram.png" alt=""> </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://github.com/MenKNas" target="_blank"> <img class="social" src="../assets/img/icons/github.png" alt=""> </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://www.reddit.com/user/men_nas_io" target="_blank"> <img class="social" src="../assets/img/icons/reddit.png" alt=""> </a>
							</div>
						</div>
                        <div class="row m-5">
							<div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://gr.pinterest.com/menioskn/" target="_blank"> <img class="social" src="../assets/img/icons/pinterest.png" alt=""> </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="#" target="_blank"> <img class="social" src="../assets/img/icons/skype.png" alt="" > </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="#" target="_blank"> <img class="social" src="../assets/img/icons/medium.png" alt=""> </a>
							</div>
                            <div class="col-md-4 col-lg-3 col-sm-6 p-2">
								<a href="https://plus.google.com/u/0/107584822759445445922" target="_blank"> <img class="social" src="../assets/img/icons/google-plus.png" alt=""> </a>
							</div>
						</div>
					</div>
				</section>
        </div>
</template>

<script>
    export default {
        
    }
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
    padding-bottom:1%;
    font-family: Lato;
}

.contact-button {
    width:100%;
    background-color:#16a085;
    color:white;
}

.contact-button:hover{
    background-color: #16a074;
}

.social:hover{
    opacity:0.7;
    animation:moveUp 1s forwards;
}

@keyframes moveUp{
    0%{
        transform:translateY(0px);
    }
    100%{
        transform:translateY(15px);
    }
}

</style>
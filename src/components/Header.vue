<template>
    <div class="row">
        <slot> </slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

   span{
        color:white;
        text-align: center;
        margin:1%;
        margin-left:2%;
        margin-right:2%;
        padding:8px;
        animation-delay:3s;
        animation-duration:2s;
        animation:moveInLeft;
   }

   a{
       color:white;
   }

   a:hover{
       color:#1abc9c ;
   }

   


   @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem); }
    80% {
      transform: translateX(1rem); }
    100% {
      opacity: 1;
      transform: translate(0); } }


</style>
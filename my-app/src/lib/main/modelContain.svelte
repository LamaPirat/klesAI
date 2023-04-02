
<div class="container">
    <img src="images/modell1.png" alt="">
    <div class="whiteBox"></div>
    <div class="paintBox1">
        <img id="paint1-1" src="images/paint1.png" alt="">
        <img id="paint1-2" src="images/paint1.png" alt="">
    </div>
</div>




<style>
    .container{
        width: 100%;
        height: 50%;
        overflow: hidden;
        position: relative;
        background-color: rgb(100, 200, 230, 0.2);
    }
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        z-index: 100;
    }

    .whiteBox{
        width: 100%;
        height: 90%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;}

    .paintBox1{
        width: 40%;
        height: 60%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        display: flex;
        /* rotate 45deg */
        transform: rotate(45deg);
    }
    #paint1-2{
        transform: scaleX(-1);
        margin-left: -2px;
    }
</style>
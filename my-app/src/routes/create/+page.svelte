<!-- <script src="https://cdnjs.deepai.org/deepai.min.js">
    deepai.setApiKey("YOUR_API_KEY");

</script> -->


<div class="create-contain">
    <div class="create-display">
        <img src="images/plainTShirt.png" alt="">
        <div class="creation-display">
            <img id="creation-image" src="" alt="">
        </div>
    </div>
    <div class="input-container">
        <div class="demo-flex-spacer"></div>
        <div class="webflow-style-input">
          <input class="" type="email" placeholder="What's on your mind?">
          <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
        </div>
    </div>
</div>




<style>
    .creation-display{
        width: 150px;
        height: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        z-index: 101;
    }
    .create-display{
        width: 100%;
        height: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        
    }
    .create-display img{
        max-width: 30%;
        max-height: 30%;
        object-fit: cover;
        z-index: 100;
    }
    .create-contain{
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    }
.input-container{
    width: 100%;
    height: 100px;
}
html {
	box-sizing: border-box;
	font-size: 10px;
}
*, *:before, *:after {
	box-sizing: inherit;
}
body, ul, li {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
p, h1, h2, h3, h4, h5, h6 {
	margin-top: 0;
}
a {
	text-decoration: none;
}
input {
	border-style: none;
	background: transparent;
	outline: none;
}
button {
	padding: 0;
	background: none;
	border: none;
	outline: none;
}
body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	background-image: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);
}
h1.demo {
	text-align: center;
	font-size: 2.4rem;
	font-weight: normal;
	margin-bottom: 1rem;
	color: #f5f6ff;
}
a.demo {
	text-align: center;
	font-size: 1.6rem;
	font-weight: normal;
	color: rgba(202, 205, 239, 0.8);
	margin-bottom: 3rem;
}
.demo-flex-spacer {
	flex-grow: 1;
}
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	max-width: 1600px;
	padding: 0 15px;
	margin: 0 auto;
}
@keyframes gradient {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 100% 0;
	}
}
.webflow-style-input {
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	border-radius: 2px;
	padding: 1.4rem 2rem 1.6rem;
	background: rgba(57, 63, 84, 0.8);
}
.webflow-style-input:after {
	content: "";
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 999;
	height: 2px;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	background-position: 0% 0%;
	background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
	background-size: 500% auto;
	animation: gradient 3s linear infinite;
}
.webflow-style-input input {
	flex-grow: 1;
	color: #BFD2FF;
	font-size: 1.8rem;
	line-height: 2.4rem;
	vertical-align: middle;
}
.webflow-style-input input::-webkit-input-placeholder {
	color: #7881A1;
}
.webflow-style-input button {
	color: #7881A1;
	font-size: 2.4rem;
	line-height: 2.4rem;
	vertical-align: middle;
	transition: color .25s;
}
.webflow-style-input button:hover {
	color: #BFD2FF;
}

    
</style>

.card-container{
  position: relative;
  width:320px;
  height:320px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  background: url('coffee1.jpg');
  background-size: cover;
  margin: 0 auto;
  border-radius: 0 20px 0 0;
  transform: scale(1);
  transition: all .5s ease;
}
.card{
  position: absolute;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.7);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 0 20px 0 0;
  opacity:0;
}
.card-container:hover .card{
  opacity:1;
}
.card p {
  color:#fff;
  text-align: center;
  vertical-align: middle;

}

.card-container:hover{
  transform: scale(1.05);
}

<div class = 'card-container'>
  <div class = 'card'>
    <p>
      Well my webpack-dev server serves from /dist and my images are in /src so do you know how I would reference the images in my .css file? Are the images supposed to be rolled up with my bundle.js? I'm just not sure how to get them to /dist since the /dist folder is just a virtual one served from webpack-dev-server
    </p>
  </div>
</div>

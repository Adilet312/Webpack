/*
CSS:

.card-container{
  width:300px;
  height:400px;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  position: relative;
}
.card{
  width:100%;
  height:100%;
  background: #fff;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}
.front-card{
  width:100%;
  height:100%;
  background: #fff;
  position: absolute;
  backface-visibility:hidden;
  text-align: center;
  background: rebeccapurple;

}
.card:hover{
  transform: rotateY(180deg);
}
.back-card{
  width:100%;
  height:100%;
  background: #fff;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility:hidden;
  text-align: center;
  background: yellow;
  }
HTML:

<div class = 'card-container'>
  <div class = 'card'>
    <div class = 'front-card'>
      <h1> Front face</h1>
    </div>
    <div class = 'back-card'>
      <h1>Back face</h1>
    </div>
  </div>
</div>
*/

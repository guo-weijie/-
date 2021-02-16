<template>
  <div>
    <div class="beauty"></div>
    <input type="checkbox" id="dice">
    <label for="dice">
      <div class="dice"></div>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style>
.beauty{
  width: 100%;
  height: 400px;
  background: url('../../assets/macao-beauty.jpg') no-repeat center top;
}
.dice {
  /* height: 100%;
  line-height: 100%; */
  background-image: url(../../assets/random-dice.png);
  width: 366px;
  height: 366px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-position: 0% 100%;
  animation: 0.2s identifier steps(5, start) infinite;
}
.dice::before{
  content: '?';
  background-color: rgba(255, 255, 255, .8);
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 60px;
}
@keyframes identifier {
  to {
    background-position: 100% 100%;
  }
}
#dice{
  display: none;
}
#dice:checked + label .dice {
  animation-play-state: paused;
}
#dice:checked + label .dice::before{
  display: none;
}
</style>
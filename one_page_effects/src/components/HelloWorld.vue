<template>
  <div class="container">
    <section>
      <video src="../assets/videos/lotus.mp4" type="video/mp4" autoplay />
    </section>
    <section>
      <img src="../assets/images/g63.jpg" />
    </section>
    <section>
      <h1>Page ThreeThreeThreeThreeThreeThreeThree</h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    scroll-snap-type: y proximity;
    overflow-x: scroll;
    display: flex;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  section {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
  }
  h1 {
    font-size: 64px;
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
  img {
    object-fit: contain;
    background-color: black;
  }
</style>

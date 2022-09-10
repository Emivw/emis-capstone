<template>
<div class="card-one">
      <div class="card-content">
        <h2 class="card-title">Angry manul</h2>
        <p class="card-body">Photo by Johannes Heel</p>
        <a
          href="https://unsplash.com/photos/Jh0xMZLWcr4"
          class="button"
          target="_blank"
          title="Photo credit"
          >Unsplash</a
        >
      </div>
    </div>

    <div class="card-two">
      <div class="card-content">
        <h2 class="card-title">Sus manul</h2>
        <p class="card-body">Photo by Oleksandr Sushko</p>
        <a
          href="https://unsplash.com/photos/65v_L2hLNA8"
          class="button"
          target="_blank"
          title="Photo credit"
          >Unsplash</a
        >
      </div>
    </div>

    <div class="card-three">
      <div class="card-content">
        <h2 class="card-title">Calm manul</h2>
        <p class="card-body">Photo by Johannes Heel</p>
        <a
          href="https://unsplash.com/photos/jH8Z95u7dl4"
          class="button"
          target="_blank"
          title="Photo credit"
          >Unsplash</a
        >
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    :root {
  --backgroung-clr: #18392b;
  --text-clr: #fff;
  --btn-n-line: #ffaa00;
  --padding: 1.5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

template {
  min-height: 98vh;
  background-color: var(--backgroung-clr);
  display: grid;
  grid: auto / repeat(auto-fit, minmax(15em, 1fr));
  gap: 15px;
  place-items: center;
  line-height: 1.6;
  font-family: Arial, Helvetica, sans-serif;
}

.card-one,
.card-two,
.card-three {
  background-size: cover;
  width: 250px;
  padding: 10rem 0 0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 500ms ease;
  color: var(--text-clr);
}

.card-one:hover,
.card-two:hover,
.card-three:hover {
  transform: scale(1.05);
}

.card-one {
  background-image: url(https://i.imgur.com/UxKfKpt.jpg);
}

.card-two {
  background-image: url(https://i.imgur.com/4hiGQ0Z.jpg);
}

.card-three {
  background-image: url(https://i.imgur.com/u4G7NZa.jpg);
}

.card-content {
  padding: var(--padding);
  background: linear-gradient(
    180deg,
    rgba(82, 65, 117, 0) 0%,
    rgba(0, 0, 0, 1) 95%
  );
  transform: translateY(55%);
  transition: transform 500ms ease;
}

.card-one:hover .card-content,
.card-two:hover .card-content,
.card-three:hover .card-content {
  transform: translateY(0);
  transition-delay: 500ms;
}

.card-content > *:not(.card-title) {
  opacity: 0;
  transition: opacity 500ms linear;
}

.card-one:hover .card-content > *:not(.card-title),
.card-two:hover .card-content > *:not(.card-title),
.card-three:hover .card-content > *:not(.card-title) {
  opacity: 1;
  transition-delay: 1000ms;
}

.card-title {
  position: relative;
  width: max-content;
  text-transform: uppercase;
}

.card-title::after {
  content: "";
  position: absolute;
  width: calc(100% + var(--padding));
  height: 3px;
  left: calc(var(--padding) * -1);
  bottom: 0;
  background-color: var(--btn-n-line);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}

.card-one:hover .card-title::after,
.card-two:hover .card-title::after,
.card-three:hover .card-title::after {
  transform: scaleX(1);
}

.card-body {
  color: rgb(255 255 255 / 0.8);
}

.button {
  cursor: pointer;
  display: inline;
  text-decoration: none;
  color: var(--clr-neutral-900);
  background-color: var(--btn-n-line);
  padding: 0.5em 1.25em;
  border-radius: 0.25em;
}

.button:hover,
.button:focus {
  cursor: pointer;
  background-color: #ff7b00;
}


</style>
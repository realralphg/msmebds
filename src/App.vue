<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /* overflow-x: hidden; */
  font-size: 18px;
  font-family: "Montserrat", sans-serif !important;
}
.splide__arrow svg {
  display: none;
}
.what-we-do::-webkit-scrollbar {
  /* background: #189b78; */
  width: 0.3rem;
}

/* .what-we-do::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */

.what-we-do::-webkit-scrollbar-thumb {
  /* background-color: #00eaab; */
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);

  /* outline: 1px solid blue; */
}
.what-we-do {
  overflow: scroll;
}
a {
  text-decoration: none;
}

li {
  list-style: none;
}
.q-tab__indicator {
  /* background: #FED12E !important;  */
  background: none;
}

.nav .q-tab__label {
  text-transform: capitalize;
  font-size: 1.2rem;
  /* color: #C4C4C4; */
}

.splide__arrow {
  display: none;
}

.info {
  color: #52d972 !important;
}

.white {
  color: #fff !important;
}

.splide__pagination__page.is-active {
  background: #222 !important;
  transform: scale(1.4);
}

.splide__arrow svg {
  fill: #fff;
  height: 2.5em;
  transition: fill 0.2s linear;
  width: 2.5em;
}
.splide__pagination {
  bottom: -5% !important;
  left: 0;
  padding: 0 1em;
  position: absolute;
  right: 0;
  z-index: 1;
}

.griid .q-tabs__content {
  padding: 1rem;
  background: #189b78;
}
.griid .q-tab__content {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.42);
  padding: 1rem;
  border-radius: 8px;
}

.q-panel.scroll {
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
}
img {
  width: 100%;
  object-fit: contain;
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.q-btn:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: none;
}
</style>

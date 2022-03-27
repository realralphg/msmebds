<template>
  <q-layout class="hue" view="lHh Lpr lFf">
    <div class="wrap">
      <div class="nav container">
        <div class="logo">
          <img src="images/logo.png" alt="" />
        </div>

        <nav>
          <ul>
            <q-tabs active-color="primary">
              <q-route-tab to="/" label="Home" />
              <q-route-tab
                class="text-secondary nav"
                to="/about"
                label="About Us"
              />
              <q-route-tab
                class="text-secondary nav"
                to="/associates"
                label="Associates"
              />
              <q-route-tab
                class="text-secondary nav"
                to="/services"
                label="Services"
              />
              <q-route-tab
                class="text-secondary nav"
                to="/programs"
                label="Programs"
              />
              <q-route-tab
                class="text-secondary nav"
                to="/projects"
                label="Projects"
              />
              <!-- <q-btn
                class="text-white bg-primary q-py-sm q-px-lg"
                to="/page3"
                label="Contact Us"
              /> -->
            </q-tabs>
          </ul>
        </nav>

        <q-btn
          flat
          dense
          class="hide"
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-drawer
          side="right"
          v-model="leftDrawerOpen"
          bordered
          :breakpoint="1400"
        >
          <q-list class="q-pa-lg">
            <!-- <q-item-label header></q-item-label> -->

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-drawer>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "quasar.dev",
    icon: "school",
    link: "/",
  },
  {
    title: "About Us",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/about",
  },
  {
    title: "Associates",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "/associates",
  },
  {
    title: "Services",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "/services",
  },
  {
    title: "Programs",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "/programs",
  },
  {
    title: "Projects",
    caption: "@QuasarFramework",
    icon: "public",
    link: "/projects",
  },
  // {
  //   title: "Contact Us",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.wrap {
  background: #ffff;
}

.nav {
  font-size: 1.3rem !important;
}
.q-tab__label {
  font-size: 1.3rem !important;
  line-height: 1.715em;
  font-weight: 500;
}

.q-tab__indicator {
  background: none;
}
.q-drawer-container {
  display: none;
}
.hue {
  box-shadow: -1px 0 4px hsl(190, 64%, 15%, 0.15);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

ul {
  font-size: 2rem;
}

.hide {
  display: none;
}

@media (max-width: 1100px) {
  .hide {
    display: block;
    position: absolute;
    /* top: 1px; */
    z-index: 1000;
    right: 20px;
  }

  .q-drawer-container {
    display: block;
  }

  nav {
    display: none;
  }
}
</style>

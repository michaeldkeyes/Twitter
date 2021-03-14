<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-md lt-md header-icon"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" show-if-above side="left" :width="283" bordered>
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />
      <q-list>
        <q-item v-ripple to="/" clickable exact>
          <q-item-section avatar>
            <q-icon class="text-h6 text-weight-bold" name="home" size="md" />
          </q-item-section>

          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item v-ripple to="/about" clickable exact>
          <q-item-section avatar>
            <q-icon class="text-h6 text-weight-bold" name="help" size="md" />
          </q-item-section>

          <q-item-section>About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="right" show-if-above side="right" bordered>
      <q-input
        class="q-ma-md"
        placeholder="Search Twitter"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus nam perspiciatis amet dolorum blanditiis
              necessitatibus quas inventore, cupiditate repudiandae enim
              pariatur incidunt tempore iusto minus quo consequuntur magnam
              laudantium odit!</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus nam perspiciatis amet dolorum blanditiis
              necessitatibus quas inventore, cupiditate repudiandae enim
              pariatur incidunt tempore iusto minus quo consequuntur magnam
              laudantium odit!</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus nam perspiciatis amet dolorum blanditiis
              necessitatibus quas inventore, cupiditate repudiandae enim
              pariatur incidunt tempore iusto minus quo consequuntur magnam
              laudantium odit!</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
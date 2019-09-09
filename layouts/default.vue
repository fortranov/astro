<template>
  <div class="container">
    <div>
      <b-navbar type="light" variant="light">
        <b-navbar-nav>
          <b-nav-item href="/">Главная</b-nav-item>
          <b-nav-item-dropdown text="Услуги">
            <b-dropdown-item href="map">Натальная карта</b-dropdown-item>
            <b-dropdown-item href="horoscope">Гороскоп</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="about">О нас</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="logout()">{{ $store.state.auth ? "Выход" : "Вход" }}</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  methods: {
    logout() {
      if (this.$store.state.auth) {
        Cookie.remove("auth");
        this.$store.commit("setAuth", null);
      } else {
        this.$router.push("login");
      }
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: rgb(228, 228, 228);
}

body {
  background-color: #01030f;
  background-image: url("~assets/blue-space.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  color: rgb(228, 228, 228);
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00C48D;
  color: #00C48D;
  text-decoration: none;
  padding: 10px 30px;
  display: inline-flex;
  align-self: center;
}

.button--green:hover {
  color: #fff;
  background-color: #00C48D;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2E495E;
  color: #2E495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #2E495E;
}
</style>

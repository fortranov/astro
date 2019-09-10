<template>
  <div>
    <div class="row">
      <div class="col-sm-4 offset-sm-4 my-3">
        <b-tabs content-class="mt-3">
          <b-tab title="Регистрация" active>
            <b-alert v-model="regok" variant="success">Поздравляем, Вы зарегестрированы!</b-alert>
            <b-alert variant="danger">Что-то пошло не так...</b-alert>
            <b-form @submit="onSubmit">
              <b-form-group id="input-group-1" label="Ваше имя:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.fname" required placeholder="Введите имя"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Ваша фамилия:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.lname"
                  required
                  placeholder="Введите фамилию"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-5" label="Дата рождения:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  type="date"
                  v-model="form.birth"
                  required
                  placeholder="дата рождения"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Email:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Введите email"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-4" label="Пароль:" label-for="input-4">
                <b-form-input
                  id="input-4"
                  type="password"
                  v-model="form.pass"
                  required
                  placeholder="Введите пароль для входа на сайт"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Регистрация</b-button>
            </b-form>
          </b-tab>
          <b-tab title="Вход">
            <b-form @submit="postLogin">
              <b-form-group id="input-group-6" label="Email:" label-for="input-6">
                <b-form-input
                  type="email"
                  id="input-6"
                  v-model="login.email"
                  required
                  placeholder="Введите имя"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-7" label="Пароль:" label-for="input-7">
                <b-form-input
                  type="password"
                  id="input-7"
                  v-model="login.pass"
                  required
                  placeholder="Введите имя"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Вход</b-button>
            </b-form>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      form: {
        email: "",
        fname: "",
        lname: "",
        pass: "",
        birth: ""
      },
      login: {
        email: "",
        pass: ""
      },
      regok: false
    };
  },
  //middleware: "notAuthenticated",
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const str = JSON.stringify(this.form);

      axios.post("/api/public/register", { data: str }).then(response => {
        console.log(response);

        if (response.ok) this.regok = true;
      });
    },
    postLogin(evt) {
      evt.preventDefault();
      const str = JSON.stringify(this.login);
      axios.post("/api/public/login", { data: str }).then(response => {
        var answ = JSON.parse(response);
        var auth = {
          accessToken: answ.token
        };
        this.$store.commit("setAuth", auth);
        Cookie.set("auth", auth);
      });
    }
  }
};
</script>
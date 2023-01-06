<template>
  <div id="home" class="container">
    <h4>Главная страница</h4>
    <p>Доступные курсы:</p>
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="/img/courses/network_essentials/course_logo.jpg">
            <span class="card-title">Основы сетевых технологий</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>Курс позволяет понять основы, концепции и принципы реализации вычислительных сетей.</p>
          </div>
        </div>
      </div>
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="/img/courses/network_operator/course_logo.jpeg">
            <span class="card-title">Сетевые технологии для операторов связи</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>Углубленный курс, для понимания тонкостей сетей операторского класса.</p>
          </div>
        </div>
      </div>
    </div>
    <p>Testing axios:</p>
    <p v-for="course in courses">{{ course }}</p>
  </div>
</template>

<style scoped>
div.card-image img {
  height: 234px;
}
</style>

<script>
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
export default {
  name: "HomeView",
  data: () => ({
    courses: null,
  }),
  mounted() {
    axios
      .get('/api/test')
      .then(response => (this.courses = [response.data]))
      .catch(error => console.log(error));
  }
};
console.log("VUE_APP_NOT_SECRET_CODE", process.env.VUE_APP_NOT_SECRET_CODE)
</script>

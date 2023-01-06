<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Цель pet-проекта:</h5>
          <p class="grey-text text-lighten-4">
            Написать свою CRM-систему, с бэкендом на FastAPI, с целью личного развития в Vue.js.
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Полезные ссылки</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Пользовательское соглашение</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Политика конфиденциальности</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright" id="footer-copyright">
      <div class="container">
      © 2023 - Vladimir Penzin
      <a class="grey-text text-lighten-4 right" href="https://github.com/pvenv/custx-vue">Проект на GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>

<style scoped lang="scss">
  footer.page-footer {
    background-color: darkslategrey;
    padding: 0;
  }

  footer.page-footer .container .row {
    margin-bottom: 0;
  }

  #footer-copyright {
    background-color: rgb(36, 60, 60);
  }
</style>
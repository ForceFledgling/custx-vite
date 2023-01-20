<template>
  <header>
    <nav class="navbar-fixed">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><i class="material-icons">blur_on</i>CustX</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li><a href="#"><i class="material-icons">search</i></a></li>
          <li><a href="#"><i class="material-icons">view_module</i></a></li>
          <li><a href="#"><i class="material-icons">share</i></a></li>
          <li><a href="/login"><i class="material-icons">login</i></a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 63px;
}
nav {
    min-height: 64px;
    background-color: darkslategrey;
}
nav .brand-logo {
    margin-left: 10px;
}
</style>
<template>
    <div id="login">
        <center>
            <!-- <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> -->
            <div class="section"></div>

            <!-- <h5 class="indigo-text">Пожалуйста, войдити в ваш аккаунт</h5> -->
            <div class="section"></div>

            

            <div class="container">
                <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

                    <form action="#" method="get" class="col s12">
                        <div class='row'>
                            <div class='col s12'></div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type="text" name='email' id='email' v-model="email" />
                                <!-- type='email' -->
                                <label for='email'>Введите вашу почту</label>
                            </div>
                        </div>

                        <div class='row'>
                            <div class='input-field col s12'>
                                <input class='validate' type='password' name='password' id='password' v-model="password" />
                                <label for='password'>Введите ваш пароль</label>
                            </div>
                            <label style='float: right;'>
                                <a class='pink-text' href='#!'><b>Забыли пароль?</b></a>
                            </label>
                        </div>

                        <br />
                        <center>
                            <div class='row'>
                                <button @click="login()" type="button" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Войти</button>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
            <a href="#!">Зарегистрироваться</a>
            <br>
            <a href="/">На главную</a>
        </center>
    </div>
</template>

<script>
import axios from 'axios';
export default({
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            const params = new URLSearchParams();
            params.append('username', this.email);
            params.append('password', this.password);
            var promise = axios.post(`${this.$store.getters.getBackendUrl}/auth/sign-in`, params);
            await promise
                .then(response => {
                    console.log(response.data.access_token);
                    M.toast({html: "Вы успешно вошли!"})
                })
                .catch(error => {
                    console.log(error.response.data.detail);
                    M.toast({html: "Неверный логин или пароль!"})
                });
        }
    }
})
</script>


<style>
    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    body {
        background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
        color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
        border-bottom: 2px solid #e91e63;
        box-shadow: none;
    }
</style>
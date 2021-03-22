import page from "//unpkg.com/page/page.mjs";
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/data.js';

import { catalogPage } from './views/catalog.js';
import {createPage} from './views/create.js';
import {dashboardPage} from './views/dashboard.js';
import {detailsPage} from './views/details.js';
import {editPage} from './views/edit.js';
import {loginPage} from './views/login.js';
import {registrePage} from './views/register.js';
import {myPage} from './views/myFurniture.js';

import * as api from './api/data.js';


window.api = api;
const main = document.querySelector('.container');

page('/',decorateContext,dashboardPage);
page('/catalog',decorateContext,catalogPage);
page('/create',decorateContext,createPage);
page('/dashboard',decorateContext,dashboardPage);
page('/details/:id',decorateContext,detailsPage);
page('/edit/:id',decorateContext,editPage);
page('/login',decorateContext,loginPage);
page('/register',decorateContext,registrePage);
page('/my-furniture',decorateContext,myPage);

document.getElementById('logoutBtn').addEventListener('click', async() => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();
page.start();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();//!!!!!
}

function setUserNav(){

   const userId = sessionStorage.getItem('userId');

   if(userId != null){

       document.getElementById('user').style.display = 'inline-block';
       document.getElementById('guest').style.display = 'none';

   }else{

        document.getElementById('user').style.display = 'none';
       document.getElementById('guest').style.display = 'inline-block';
   }
}
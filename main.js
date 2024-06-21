

import './router.js'
import './styles/style.css'
import './styles/background.css'
import './styles/nav-bar.css'
import './styles/home-page.css'
import './styles/projects.css'


const navBtn = document.querySelector('.menu')
const navBar = document.querySelector('.small-menu')


navBtn.addEventListener('click', function(e){
 navBar.classList.toggle('open')
})
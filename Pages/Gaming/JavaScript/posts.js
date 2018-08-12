const result = require('dotenv').config();
const keys = require('../../../MacroRef/keys.js');

let post = new post(keys.post);
let firebase= firebase.database();
firebase.initializeApp(post);

$('.content').on('child_added',function(){
    $('.content').append(
    `<div class="row postings">
    <div class="space"></div>
    <div class="post">
        <img hjref:"${image}">
        "${post}"
    </div>
    <div class="date">${date}</div>
    <div class="split"></div>
</div>`
)
})
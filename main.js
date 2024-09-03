let intro = document.querySelector('.intro');
let yinyang = document.querySelector('.intro-header');
let yinyangSpan = document.querySelectorAll('.yinyang');

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('intro').classList.toggle('intro-load')

    setTimeout(()=>{

        yinyangSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            yinyangSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000)

        setTimeout(()=>{
            document.getElementById('intro').classList.toggle('intro-exit')
        }, 2300)

    })
})

document.getElementById('change_button').addEventListener('click', function() {
    let darkThemeEnabled = document.body.classList.toggle('dark-body');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled)

    document.getElementById('intro_container').classList.toggle('dark-intro-container');
    document.getElementById('introduction').classList.toggle('dark-intro');
    document.getElementById('navbar').classList.toggle('dark-nav');
    document.getElementById('nav_intro').classList.toggle('dark-nav-intro');
    document.getElementById('nav_about').classList.toggle('dark-nav-about');
    document.getElementById('nav_social').classList.toggle('dark-nav-social');
    document.getElementById('games_btn').classList.toggle('dark-games_btn-container');
    document.getElementById('change_button').classList.toggle('dark-button');
    document.getElementById('avatar').classList.toggle('dark-avatar');
    document.getElementById('about_container').classList.toggle('dark-about-container');
    document.getElementById('name').classList.toggle('dark-name');
    document.getElementById('degree').classList.toggle('dark-degree');
    document.getElementById('hobbies').classList.toggle('dark-hobbies');
    document.getElementById('nationality').classList.toggle('dark-nationality');
    document.getElementById('hot_take').classList.toggle('dark-hot_take');
    document.getElementById('socials_container').classList.toggle('dark-socials-container');
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-body');
    document.getElementById('intro_container').classList.add('dark-intro-container');
    document.getElementById('games_btn').classList.add('dark-games_btn-container');
    document.getElementById('introduction').classList.add('dark-intro');
    document.getElementById('navbar').classList.add('dark-nav');
    document.getElementById('nav_intro').classList.add('dark-nav-intro');
    document.getElementById('nav_about').classList.add('dark-nav-about');
    document.getElementById('nav_social').classList.add('dark-nav-social');
    document.getElementById('change_button').classList.add('dark-button');
    document.getElementById('avatar').classList.add('dark-avatar');
    document.getElementById('about_container').classList.add('dark-about-container');
    document.getElementById('name').classList.add('dark-name');
    document.getElementById('degree').classList.add('dark-degree');
    document.getElementById('hobbies').classList.add('dark-hobbies');
    document.getElementById('nationality').classList.add('dark-nationality');
    document.getElementById('hot_take').classList.add('dark-hot_take');
    document.getElementById('socials_container').classList.add('dark-socials-container');
}

document.getElementById('games_btn').addEventListener('click', function() {
    document.getElementById('valorant_container').classList.toggle('valorant-show');
    setTimeout(()=>{
        document.getElementById('helldivers_container').classList.toggle('helldivers-show');
    },250)
    setTimeout(()=>{
        document.getElementById('overwatch_container').classList.toggle('overwatch-show');
    },500)
})
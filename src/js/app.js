const ytLinks = [
    'https://www.youtube.com/embed/e1gJhwy2RQI?si=z4Ao1P45WYXmRiy0',
    'https://www.youtube.com/embed/hAPpilOfD9U?si=gQLKCAzKyRQJfxs9',
    'https://www.youtube.com/embed/a1r2UAz0bdI?si=gbLN7vIsjDD7CaqO',
    'https://www.youtube.com/embed/zRmDDDjJhRc?si=3o2_jcUjQxE5ZLQR',
    'https://www.youtube.com/embed/lWWJBM1jFiU?si=fsFHhP1dbVuPe9dg',
    'https://www.youtube.com/embed/Iq1OcbvwbIE?si=_7WY_9-FNkxzrUX5',
    'https://www.youtube.com/embed/Th-8YgMKmeA?si=Colm5vwhFLwNLN74',
    'https://www.youtube.com/embed/awxsLMgpiZg?si=x-YfGqi7e9LysLDQ',
    'https://www.youtube.com/embed/d3B6DvQSlyE?si=lzHKgXoRcYpQNIdb',
    'https://www.youtube.com/embed/EfZQLhzrfs8?si=6nLnFAdkh7A292c8',
    'https://www.youtube.com/embed/RILE91KoZxw?si=mcYLibY5ziAX03Xn',
    'https://www.youtube.com/embed/4qrtpGLMVsE?si=zebmy6lvwrf4sjrk'
]

const ytContainer = document.getElementById('yt-links')

function updateYt() {
    ytContainer.innerHTML = ""
    ytLinks.forEach(e => {
        ytContainer.innerHTML += `<div>
        <iframe class="w-[320px] lg:w-[420px] xl:w-[560px] h-[315px]"
            src =${e}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>`
    })
}

updateYt()
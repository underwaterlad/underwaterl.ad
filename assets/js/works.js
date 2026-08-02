fetch('/assets/data/works.json')
    .then(response => response.json())
    .then(works => {

        const gallery = document.getElementById('works-gallery');

        works.forEach(work => {

            const item = document.createElement('div');
            item.className = 'work';

            item.innerHTML = `
                <img src="/assets/img/${work.image}.jpg" alt="${work.title}">

                <p class="caption">
                    <i>${work.title}</i><br>
                    ${work.year} ${work.medium}
                </p>
            `;

            gallery.appendChild(item);

        });

    });
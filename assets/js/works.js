fetch('/assets/data/works.json')
    .then(response => response.json())
    .then(works => {

        const gallery = document.getElementById('works-gallery');

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';

        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';

        const lightboxImg = document.createElement('img');
        const lightboxCaption = document.createElement('div');
        lightboxCaption.className = 'lightbox-caption';

        lightboxContent.appendChild(lightboxImg);
        lightboxContent.appendChild(lightboxCaption);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', event => {
            if (!lightboxContent.contains(event.target)) {
                lightbox.classList.remove('active');
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });

        works.forEach(work => {

            const item = document.createElement('div');
            item.className = 'work';

            let originalMarkup = '';

            if (work.sold) {
                originalMarkup = `<p class="original sold">sold</p>`;
            } else if (work.paymentLink) {
                originalMarkup = `
                    <p class="original">
                        <a href="${work.paymentLink}" target="_blank">buy original · GBP${work.price}.00</a>
                    </p>
                `;
            }

            item.innerHTML = `
                <img src="/assets/img/thumbs/${work.image}" alt="${work.title}" loading="lazy">

                <p class="caption">
                    <span class="title">${work.title}</span><br>
                    <span class="meta">${work.year} ${work.size} ${work.medium}</span>
                </p>
                ${originalMarkup}
            `;

            const img = item.querySelector('img');
            img.addEventListener('click', () => {
                if (window.matchMedia('(min-width: 601px)').matches) {
                    lightboxImg.src = `/assets/img/${work.image}`;
                    lightboxImg.alt = img.alt;
                    lightboxCaption.innerHTML = `
                        <p class="title">${work.title}</p>
                        <p class="meta">${work.year} ${work.size} ${work.medium}</p>
                        ${originalMarkup}
                    `;
                    lightbox.classList.add('active');
                }
            });

            gallery.appendChild(item);

        });

    });
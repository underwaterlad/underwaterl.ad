fetch('/assets/data/works.json')
    .then(response => response.json())
    .then(works => {

        const gallery = document.getElementById('works-gallery');

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
                <img src="/assets/img/${work.image}" alt="${work.title}">

                <p class="caption">
                    <span class="title">${work.title}</span><br>
                    <span class="meta">${work.year} ${work.size} ${work.medium}</span>
                </p>
                ${originalMarkup}
            `;

            gallery.appendChild(item);

        });

    });
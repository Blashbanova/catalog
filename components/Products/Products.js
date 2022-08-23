class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, price, image}) => {
            
            htmlCatalog += `
                <li >
                    <span> ${name}</span>
                    <img src="${image}" />
                    <span>
                        ${price} ₽
                    </span>
                    <button >
                        Добавить в корзину
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
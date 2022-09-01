function render() {
    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();

}

let CATALOG = [];

//server/catalog.json
fetch('http://myjson.dit.upm.es/api/bins/39ws')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });
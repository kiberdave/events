// 1
const searchInput = document.querySelector(`#searchInput`);
const productItems = document.querySelectorAll(`.product`);

searchInput.addEventListener(`input`, (e) => {
    const searchLine = e.target.value.trim().toLowerCase();

    productItems.forEach((product) => {
        const productName = product.textContent.toLowerCase();
        if(productName.includes(searchLine)){
            product.classList.remove(`hidden`);
        }else{
            product.classList.add(`hidden`);
        }
    })
})

// დამატებითი
const statusFilter = document.querySelector(`#statusFilter`);
const userCard = document.querySelectorAll(`.user-card`);

statusFilter.addEventListener(`change`, (e) => {
    const selectedStatus = e.target.value;

    userCard.forEach((user) => {
        const userStatus = user.dataset.status;
        if(selectedStatus === `all` || selectedStatus === userStatus){
            user.classList.remove(`hidden`);
        }else{
            user.classList.add(`hidden`);
        }
    })
})
// -----------
const categoryFilter = document.querySelector(`#categoryFilter`);
const shopCard = document.querySelectorAll(`.shop-card`);

categoryFilter.addEventListener(`change`, (e) => {
    const selectedItem = e.target.value;

    shopCard.forEach((item)=>{
        const itemCategory = item.dataset.category;
        if(selectedItem === `all` || selectedItem === itemCategory){
            item.classList.remove(`hidden`);
        }else{
            item.classList.add(`hidden`);
        }
    })
})
// -----------
const geoSearch = document.querySelector(`#geoSearch`);
const countryBox = document.querySelectorAll(`.country-box`);

geoSearch.addEventListener(`input`, (e) => {
    const enteredCountry = e.target.value.trim().toLowerCase();

    countryBox.forEach((country) => {
        const countryName = country.textContent.toLowerCase();

        if(countryName.includes(enteredCountry)){
            country.classList.remove(`hidden`);
        }else{
            country.classList.add(`hidden`);
        }
    })
})
// -----------

// 2
const faqList = document.querySelector(`#faqList`);

faqList.addEventListener(`click`, (event) => {
    const faqQuestion = event.target.closest(`.faq-question`);
    if(!faqQuestion){ return };
    const faqItem = event.target.closest(`.faq-item`);
    faqItem.classList.toggle(`active`);
})
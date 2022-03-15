module.exports = {
    content: [

        "pages/index.vue",
        "components/header/mainHeader.vue",

        "components/header/mainSlider.vue",


        "components/home/detailsBox.vue",

        "components/home/automaticDoorComponents.vue",

        "components/home/automaticDoorTypes.vue",

        "components/home/automaticDoorUsage.vue",


        "components/home/worldwideQuality.vue",

        "components/home/varietyOfDoors.vue",

        "components/home/worldTechnology.vue",

        "components/home/priceInquiry.vue",

        "components/home/samples.vue",

        "components/home/latestArticles.vue",

        "components/footer/mainFooter.vue",

        "pages/index.vue",

        "components/breadCrumbs.vue",

        "components/product/productCategory.vue",

        //  products
        "pages/products/slidingDoors/index.vue",
        "components/products/slidingDoors.vue",


        //blog
        "pages/blog/index.vue",
        "pages/blog/index.vue",
        "components/blog/blog1.vue",
        "components/blog/blog2.vue",


        // price
        "pages/priceInquiry/index.vue",
        "components/price/inquiry.vue",
        "components/price/result.vue",

        // files
        "pages/files/index.vue",
        "components/technicalInfo/files.vue",

        // connect us
        "pages/connectUs/index.vue",
        "components/connectUs/connectWays.vue",


        // shopping card
        "pages/shoppingCard/index.vue",
        "components/shoppingCard/price.vue",


        // frequently asked questions
        "pages/FAQ/index.vue",
        "components/faq/frequentlyAskedQuestions.vue",
        "components/faq/faqState.vue",


        // about us
        "pages/aboutUs/index.vue",
        "components/aboutUs/us.vue",


        // magazine
        "pages/magazines/index.vue",
        "components/magazines/magazine.vue",

        // License
        "pages/licenses/index.vue",
        "components/licenses/license.vue",

        // ingredients
        "pages/ingredients/index.vue",
        "pages/ingredients/index.vue",
        "components/ingredients/ingredientPage.vue",
        "components/ingredients/ingredient.vue",

        // maps
        "pages/maps/index.vue",
        "components/maps/maps.vue",

        // gallery
        "pages/gallery/index.vue",
        "components/gallery/videoGallery.vue",
        "components/gallery/videoSlider.vue",


        //samples
        "pages/samples/index.vue",
        "components/samples/samplesVideo.vue",


        //admin
        "pages/admin/Login.vue",
        "pages/admin/products/list.vue",
        "pages/admin/products/add.vue",


        "pages/uploadVideo.vue"

    ],
    theme: {
        extend: {
            colors: {
                "primary-light": "#62226b",
                "primary": "#4B1752",

                "secondary": "#BA4B30"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

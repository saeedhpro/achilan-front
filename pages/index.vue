<template>
  <div>
    <main-header></main-header>
    <main-slider></main-slider>
    <detailsBox></detailsBox>
    <worldwide-quality></worldwide-quality>
    <variety-of-doors></variety-of-doors>
    <world-technology></world-technology>
    <price-inquiry></price-inquiry>
    <samples></samples>
    <latest-articles></latest-articles>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import mainSlider from "@/components/home/mainSlider";
import detailsBox from "~/components/home/detailsBox";
import worldwideQuality from "~/components/home/worldwideQuality";
import varietyOfDoors from "~/components/home/varietyOfDoors";
import worldTechnology from "~/components/home/worldTechnology";
import priceInquiry from "~/components/home/priceInquiry";
import samples from "~/components/home/samples";
import latestArticles from "~/components/home/latestArticles";
import mainFooter from "~/components/footer/mainFooter";


export default {

  components:{
    mainHeader,
    mainSlider,
    detailsBox,
    worldwideQuality,
    varietyOfDoors,
    worldTechnology,
    priceInquiry,
    samples,
    latestArticles,
    mainFooter,

  }
}
</script>

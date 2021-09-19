import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'
import './anim.css'
import Layout from '../components/Layout'
function createMarkup() {
  return {__html: ` <div class="container1">
  <div class="line v1"></div>
  <div class="line v2"></div>
  <div class="line v3 multi"></div>
  <div class="circle v1"></div>
  <div class="circle v2"></div>
  <div class="circle v2 half"></div>
  <div class="rotor v1"></div>
  <div class="rotor v1 curve"></div>
  <div class="rotor v2"></div>
  <div class="chevron"></div>
  <div class="chevron-group">
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>

</div>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; opacity: 0.5; display: block;z-index: 1;shape-rendering: auto;" width="2048" height="1010" preserveAspectRatio="xMidYMid" viewBox="0 0 2048 1010">
  <g transform="translate(1024,505) scale(1,1) translate(-1024,-505)"><path d="M3.0720000000000027 -255.64853400728316L3.0720000000000027 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
    <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2061.601549531301s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
    <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2061.601549531301s"></animate>
  </path><path d="M207.872 -200.42774068459403L207.872 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="2.7777777777777777s" begin="-201.60661670010933s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="2.7777777777777777s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-201.60661670010933s"></animate>
    </path><path d="M412.672 -181.64942174844327L412.672 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-1848.737764196293s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-1848.737764196293s"></animate>
    </path><path d="M617.4720000000001 -51.546583598268626L617.4720000000001 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#f8ec21">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="4.166666666666667s" begin="-177.99183110644123s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="4.166666666666667s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-177.99183110644123s"></animate>
    </path><path d="M822.272 -228.03747257197392L822.272 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2350.101053197602s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2350.101053197602s"></animate>
    </path><path d="M1027.0720000000001 -212.24758219975047L1027.0720000000001 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#1895d3">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-1299.6887875043137s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-1299.6887875043137s"></animate>
    </path><path d="M1231.8720000000003 -263.45678831488476L1231.8720000000003 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-745.3713493333794s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-745.3713493333794s"></animate>
    </path><path d="M1436.672 -224.10409189524944L1436.672 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="4.166666666666667s" begin="-807.1401591736089s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="4.166666666666667s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-807.1401591736089s"></animate>
    </path><path d="M1641.4720000000002 -69.68480852845823L1641.4720000000002 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2110.1960040800036s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2110.1960040800036s"></animate>
    </path><path d="M1846.272 -81.22296110229217L1846.272 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#1895d3">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="2.7777777777777777s" begin="-614.3834369585086s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="2.7777777777777777s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-614.3834369585086s"></animate>
    </path></g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgba(NaN, NaN, NaN, 0);display:block;z-index:1;" width="1178" height="1010" preserveAspectRatio="xMidYMid" viewBox="0 0 1178 1010">
  <g transform="translate(589,505) scale(1,1) translate(-589,-505)"><linearGradient id="lg-0.7561581792392633" x1="0" x2="1" y1="0" y2="0">
    <stop stop-color="#814199" offset="0"></stop>
    <stop stop-color="#12b258" offset="1"></stop>
  </linearGradient><path d="" fill="url(#lg-0.7561581792392633)" opacity="0.1">
      <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s" values="M0 0L 0 874.6245882077444Q 147.25 954.0406525002829  294.5 915.1573639351095T 589 758.3761788713925T 883.5 410.14478491649834T 1178 499.7146934889364L 1178 0 Z;M0 0L 0 806.7213505357932Q 147.25 960.040367329664  294.5 938.0982725252445T 589 506.56502934509695T 883.5 639.8206958033985T 1178 406.52391750719175L 1178 0 Z;M0 0L 0 747.9457556460811Q 147.25 663.8892708113067  294.5 638.7423166886512T 589 540.3022378309769T 883.5 409.4637718831508T 1178 533.136210095581L 1178 0 Z;M0 0L 0 874.6245882077444Q 147.25 954.0406525002829  294.5 915.1573639351095T 589 758.3761788713925T 883.5 410.14478491649834T 1178 499.7146934889364L 1178 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.7561581792392633)" opacity="0.1">
      <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-3.3333333333333335s" values="M0 0L 0 768.521017454593Q 147.25 905.7662727111076  294.5 880.6182580183627T 589 676.358499228958T 883.5 766.0808359775649T 1178 381.6039787733396L 1178 0 Z;M0 0L 0 898.7099169774917Q 147.25 886.2382879319886  294.5 845.350160219135T 589 627.7606416244149T 883.5 486.45277092255765T 1178 730.034036837914L 1178 0 Z;M0 0L 0 777.9008810694987Q 147.25 744.9926514374466  294.5 716.8202671647127T 589 719.743134894904T 883.5 767.1962428224076T 1178 449.7129065105851L 1178 0 Z;M0 0L 0 768.521017454593Q 147.25 905.7662727111076  294.5 880.6182580183627T 589 676.358499228958T 883.5 766.0808359775649T 1178 381.6039787733396L 1178 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.7561581792392633)" opacity="0.1">
      <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-6.666666666666667s" values="M0 0L 0 700.5482699150344Q 147.25 868.5643418679765  294.5 831.0672533386116T 589 666.7542499100001T 883.5 611.3284136647923T 1178 668.5349588172537L 1178 0 Z;M0 0L 0 948.9090189361342Q 147.25 677.3071235620843  294.5 629.6413959770061T 589 607.3270768325486T 883.5 746.0592139888196T 1178 416.33368705712996L 1178 0 Z;M0 0L 0 703.6395787280533Q 147.25 734.2067038677318  294.5 699.6379695233112T 589 639.0718873148686T 883.5 475.76939188305784T 1178 368.9106037440226L 1178 0 Z;M0 0L 0 700.5482699150344Q 147.25 868.5643418679765  294.5 831.0672533386116T 589 666.7542499100001T 883.5 611.3284136647923T 1178 668.5349588172537L 1178 0 Z"></animate>
    </path></g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgba(NaN, NaN, NaN, 0);display:block;z-index:1;" width="1178" height="1010" preserveAspectRatio="xMidYMid" viewBox="0 0 1178 1010">
  <g transform="translate(589,505) scale(1,1) translate(-589,-505)"><circle cx="864.2133237891123" cy="662.5729290485971" r="437.8704880790977" fill="none" stroke="#12b258" stroke-width="1">
    <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;437.8704880790977" begin="0s"></animate>
    <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="0s"></animate>
  </circle><circle cx="258.2000317388413" cy="67.45182167567772" r="429.9684516867404" fill="none" stroke="#e476ae" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;429.9684516867404" begin="-3.5714285714285716s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-3.5714285714285716s"></animate>
    </circle><circle cx="483.94446770491413" cy="322.69339199241955" r="482.5039338821468" fill="none" stroke="#f8ec21" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;482.5039338821468" begin="-7.142857142857143s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-7.142857142857143s"></animate>
    </circle><circle cx="248.04408131490842" cy="731.1931566541267" r="464.5385095333495" fill="none" stroke="#814199" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;464.5385095333495" begin="-10.714285714285714s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-10.714285714285714s"></animate>
    </circle><circle cx="60.5511591334666" cy="932.505710226856" r="474.92272679725403" fill="none" stroke="#814199" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;474.92272679725403" begin="-14.285714285714286s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-14.285714285714286s"></animate>
    </circle><circle cx="774.1883886417343" cy="410.9120145472298" r="487.79078972264796" fill="none" stroke="#f8ec21" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;487.79078972264796" begin="-17.857142857142858s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-17.857142857142858s"></animate>
    </circle><circle cx="991.988935285572" cy="125.23667727398235" r="466.3787903612175" fill="none" stroke="#1895d3" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;466.3787903612175" begin="-21.428571428571427s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-21.428571428571427s"></animate>
    </circle></g>
</svg>



<div class="artist">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; opacity: 0.5; display: block;z-index: 1;shape-rendering: auto;" preserveAspectRatio="xMidYMid" >
    <g transform="translate(1024,505) scale(1,1) translate(-1024,-505)"><path d="M3.0720000000000027 -255.64853400728316L3.0720000000000027 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
      <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2061.601549531301s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
      <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2061.601549531301s"></animate>
    </path><path d="M207.872 -200.42774068459403L207.872 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="2.7777777777777777s" begin="-201.60661670010933s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="2.7777777777777777s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-201.60661670010933s"></animate>
      </path><path d="M412.672 -181.64942174844327L412.672 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-1848.737764196293s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-1848.737764196293s"></animate>
      </path><path d="M617.4720000000001 -51.546583598268626L617.4720000000001 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#f8ec21">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="4.166666666666667s" begin="-177.99183110644123s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="4.166666666666667s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-177.99183110644123s"></animate>
      </path><path d="M822.272 -228.03747257197392L822.272 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2350.101053197602s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2350.101053197602s"></animate>
      </path><path d="M1027.0720000000001 -212.24758219975047L1027.0720000000001 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#1895d3">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-1299.6887875043137s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-1299.6887875043137s"></animate>
      </path><path d="M1231.8720000000003 -263.45678831488476L1231.8720000000003 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-745.3713493333794s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-745.3713493333794s"></animate>
      </path><path d="M1436.672 -224.10409189524944L1436.672 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#814199">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="4.166666666666667s" begin="-807.1401591736089s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="4.166666666666667s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-807.1401591736089s"></animate>
      </path><path d="M1641.4720000000002 -69.68480852845823L1641.4720000000002 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#12b258">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="8.333333333333334s" begin="-2110.1960040800036s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="8.333333333333334s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-2110.1960040800036s"></animate>
      </path><path d="M1846.272 -81.22296110229217L1846.272 0Z" stroke-width="6.1440000000000055" stroke-linecap="round" stroke-linejoin="round" stroke="#1895d3">
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="2.7777777777777777s" begin="-614.3834369585086s" keyTimes="0;1" values="0 0;0 616.1"></animateTransform>
        <animate attributeName="opacity" dur="2.7777777777777777s" repeatCount="indefinite" keyTimes="0;0.8;1" values="1;1;0" begin="-614.3834369585086s"></animate>
      </path></g>
  </svg>
  <img src="https://ucarecdn.com/3c725c53-b45f-49b6-bb50-d14105b43956/-/crop/1078x389/86,0/-/preview/" alt=""/>
</div>
<div class="artist">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgba(NaN, NaN, NaN, 0);display:block;z-index:1;" preserveAspectRatio="xMidYMid">
    <g transform="translate(589,505) scale(1,1) translate(-589,-505)"><circle cx="864.2133237891123" cy="662.5729290485971" r="437.8704880790977" fill="none" stroke="#12b258" stroke-width="1">
      <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;437.8704880790977" begin="0s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="0s"></animate>
    </circle><circle cx="258.2000317388413" cy="67.45182167567772" r="429.9684516867404" fill="none" stroke="#e476ae" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;429.9684516867404" begin="-3.5714285714285716s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-3.5714285714285716s"></animate>
      </circle><circle cx="483.94446770491413" cy="322.69339199241955" r="482.5039338821468" fill="none" stroke="#f8ec21" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;482.5039338821468" begin="-7.142857142857143s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-7.142857142857143s"></animate>
      </circle><circle cx="248.04408131490842" cy="731.1931566541267" r="464.5385095333495" fill="none" stroke="#814199" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;464.5385095333495" begin="-10.714285714285714s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-10.714285714285714s"></animate>
      </circle><circle cx="60.5511591334666" cy="932.505710226856" r="474.92272679725403" fill="none" stroke="#814199" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;474.92272679725403" begin="-14.285714285714286s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-14.285714285714286s"></animate>
      </circle><circle cx="774.1883886417343" cy="410.9120145472298" r="487.79078972264796" fill="none" stroke="#f8ec21" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;487.79078972264796" begin="-17.857142857142858s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-17.857142857142858s"></animate>
      </circle><circle cx="991.988935285572" cy="125.23667727398235" r="466.3787903612175" fill="none" stroke="#1895d3" stroke-width="1">
        <animate attributeName="r" repeatCount="indefinite" dur="25s" values="0;466.3787903612175" begin="-21.428571428571427s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="25s" values="1;0" begin="-21.428571428571427s"></animate>
      </circle></g>
  </svg>
  <img src="https://ucarecdn.com/3c725c53-b45f-49b6-bb50-d14105b43956/-/crop/1078x389/86,0/-/preview/" alt=""/>
</div>
<div class="artist">
  <div class="line v1"></div>
  <div class="line v3 multi"></div>
  <div class="rotor v1 curve"></div>
  <img src="https://ucarecdn.com/3c725c53-b45f-49b6-bb50-d14105b43956/-/crop/1078x389/86,0/-/preview/" alt=""/>
</div>
<div class="artist v2">
  <div class="line v1"></div>
  <div class="line v3 multi"></div>
  <div class="circle v2 half"></div>
  <img src="https://ucarecdn.com/3c725c53-b45f-49b6-bb50-d14105b43956/-/crop/1078x389/86,0/-/preview/" alt=""/>
</div>
<div class="artist anaglyph">
  <img src="https://ucarecdn.com/3c725c53-b45f-49b6-bb50-d14105b43956/-/crop/1078x389/86,0/-/preview/" alt=""/>
</div>`};
}
export default ({ children }) => (
  
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1>404 - Page Not Found</h1>
            <p>
              We can't find the page you are looking for!
              <br />
              Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
        <div dangerouslySetInnerHTML={createMarkup()}>

        </div>
       
      </Layout>
    )}
  />
)

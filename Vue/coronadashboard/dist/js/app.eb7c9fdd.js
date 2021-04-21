(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var h=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1544:function(t,e,a){},"426a":function(t,e,a){"use strict";var r=a("1544"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],c=(a("f9e3"),a("2dd8"),{name:"App",data:function(){return{Header:"Hello world "}}}),i=c,s=(a("5c0b"),a("2877")),u=Object(s["a"])(i,n,o,!1,null,null,null),h=u.exports,l=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loadData?a("div",[a("h1",[t._v("Corona Virus Summary")]),a("h3",[t._v("Data updated time : "+t._s(t.summaryData.Date)+" UTC")]),a("highcharts",{attrs:{options:t.chartOptions,"constructor-type":"chart"}}),a("h3",[t._v("Type of chart")]),a("label",{attrs:{for:"Infected"}},[t._v("Infected")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Infected",checked:""},domProps:{checked:t._q(t.chartDataType,"Infected")},on:{change:[function(e){t.chartDataType="Infected"},function(e){return t.checkChartData()}]}}),a("br"),a("label",{attrs:{for:"Death"}},[t._v("Death")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Death"},domProps:{checked:t._q(t.chartDataType,"Death")},on:{change:[function(e){t.chartDataType="Death"},function(e){return t.checkChartData()}]}}),a("br"),a("label",{attrs:{for:"Recovered"}},[t._v("Recovered")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Recovered"},domProps:{checked:t._q(t.chartDataType,"Recovered")},on:{change:[function(e){t.chartDataType="Recovered"},function(e){return t.checkChartData()}]}}),a("table",[t._m(0),a("tbody",t._l(t.summaryData.Countries,(function(e,r){return a("tr",{key:r,class:e.TotalConfirmed>0?"":"hide"},[a("td",[a("router-link",{attrs:{to:"/CountryByDate/"+e.Country}},[t._v(t._s(e.Country))])],1),a("td",[t._v(t._s(e.TotalConfirmed))]),a("td",[t._v(t._s(e.TotalRecovered))]),a("td",[t._v(t._s(e.TotalDeaths))])])})),0)])],1):t._e()},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v(" Country ")]),a("th",[t._v(" Infected ")]),a("th",[t._v(" Reovered ")]),a("th",[t._v(" Deaths ")])])])}],p=(a("d81d"),a("fb6a"),a("d3b7"),{name:"MainDashBoard",data:function(){return{loadData:!1,summaryData:{},chartDataType:"Infected",chartOptions:{},fields:["TotalConfirmed","TotalRecovered","TotalDeaths"]}},methods:{checkChartData:function(){var t=[],e=[],a="",r="";if("Infected"==this.chartDataType){this.summaryData.Countries.sort((function(t,e){return t.TotalConfirmed<e.TotalConfirmed?1:-1}));var n=this.summaryData.Countries;e=n.slice(0,9).map((function(t){return t.Country})),t=n.slice(0,9).map((function(t){return t.TotalConfirmed})),r="Infected Count",a="Red"}else if("Death"==this.chartDataType){this.summaryData.Countries.sort((function(t,e){return t.TotalDeaths<e.TotalDeaths?1:-1}));var o=this.summaryData.Countries;e=o.slice(0,9).map((function(t){return t.Country})),t=o.slice(0,9).map((function(t){return t.TotalDeaths})),r="Death Count",a="Grey"}else if("Recovered"==this.chartDataType){this.summaryData.Countries.sort((function(t,e){return t.TotalRecovered<e.TotalRecovered?1:-1}));var c=this.summaryData.Countries;e=c.slice(0,9).map((function(t){return t.Country})),t=c.slice(0,9).map((function(t){return t.TotalRecovered})),r="Recovered Count",a="Green"}this.chartOptions.yAxis.title.text=r,this.chartOptions.series[0].data=t,this.chartOptions.series[0].color=a,this.chartOptions.xAxis.categories=e}},mounted:function(){var t=this;fetch("https://api.covid19api.com/summary",{method:"get"}).then((function(t){return t.json()})).then((function(e){e.Countries.sort((function(t,e){return t.TotalConfirmed<e.TotalConfirmed?1:-1})),t.summaryData=e,t.chartOptions={title:{text:"Top 10 Country counts"},chart:{type:"column"},xAxis:{title:{text:""},categories:t.summaryData.Countries.slice(0,9).map((function(t){return t.Country}))},yAxis:{title:{text:"Infected Count"},min:0},series:[{data:t.summaryData.Countries.slice(0,9).map((function(t){return t.TotalConfirmed})),color:"Red"}]}})),this.loadData=!0},filters:{activeCountriesFilter:function(t){return t.toUpperCase()}}}),y=p,v=(a("cd1f"),Object(s["a"])(y,d,f,!1,null,null,null)),m=v.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showData?a("div",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t.loadData?a("div",[a("h1",[t._v(t._s(t.countryName))]),a("highcharts",{attrs:{options:t.chartOptions,"constructor-type":"chart"}}),a("h3",[t._v("Show Line Chart")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.showLineChart,expression:"showLineChart"}],attrs:{type:"checkbox",value:"line chart"},domProps:{checked:Array.isArray(t.showLineChart)?t._i(t.showLineChart,"line chart")>-1:t.showLineChart},on:{change:[function(e){var a=t.showLineChart,r=e.target,n=!!r.checked;if(Array.isArray(a)){var o="line chart",c=t._i(a,o);r.checked?c<0&&(t.showLineChart=a.concat([o])):c>-1&&(t.showLineChart=a.slice(0,c).concat(a.slice(c+1)))}else t.showLineChart=n},function(e){return t.checkChart()}]}}),a("br"),a("h3",[t._v("Type of chart")]),a("label",{attrs:{for:"Infected"}},[t._v("Infected")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Infected",checked:""},domProps:{checked:t._q(t.chartDataType,"Infected")},on:{change:[function(e){t.chartDataType="Infected"},function(e){return t.checkChartData()}]}}),a("br"),a("label",{attrs:{for:"Death"}},[t._v("Death")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Death"},domProps:{checked:t._q(t.chartDataType,"Death")},on:{change:[function(e){t.chartDataType="Death"},function(e){return t.checkChartData()}]}}),a("br"),a("label",{attrs:{for:"Recovered"}},[t._v("Recovered")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.chartDataType,expression:"chartDataType"}],attrs:{type:"radio",value:"Recovered"},domProps:{checked:t._q(t.chartDataType,"Recovered")},on:{change:[function(e){t.chartDataType="Recovered"},function(e){return t.checkChartData()}]}}),a("b-table",{attrs:{striped:"",hover:"",items:t.countryData,fields:t.fields}})],1):a("div",[a("h1",[t._v("Please wait 3 seconds or there is an error getting data go home")])]),t.erroMessage?a("div",[t._v("Error getting data go home")]):t._e()],1):t._e()},C=[],T=(a("4de4"),{name:"CountryByDate",data:function(){return{countryData:{},countryName:"",loadData:!1,showLineChart:!1,erroMessage:!1,showData:!1,chartDataType:"Infected",chartOptions:{},fields:["Date","Confirmed","Deaths","Recovered","DailyConfirmed","DailyDeaths","DailyRecovered"]}},mounted:function(){var t=this,e=this.$route.params.coronaCountry;fetch("https://api.covid19api.com/countries",{}).then((function(t){return t.json()})).then((function(a){var r=a.filter((function(t){return t.Country.toLowerCase()==e.toLowerCase()}));null!=r&&(fetch("https://api.covid19api.com/country/"+r[0].Slug+"?from=2020-03-01T00:00:00Z",{method:"get"}).then((function(t){return t.json()})).then((function(e){e.sort((function(t,e){return t.Date<e.Date?1:-1}));for(var a=0;a<e.length;a++)null!=e[a+1]&&(e[a].DailyConfirmed=e[a].Confirmed-e[a+1].Confirmed,e[a].DailyDeaths=e[a].Deaths-e[a+1].Deaths,e[a].DailyRecovered=e[a].Recovered-e[a+1].Recovered);t.countryData=e,t.countryName=e[0].Country;for(var r=[],n=0;n<t.countryData.length-1;n++){var o=t.countryData[n].DailyConfirmed;r.push(o)}r.reverse(),t.chartOptions={title:{text:"Day counts"},chart:{type:t.showLineChart?"line":"column"},xAxis:{title:{text:"Day Number"}},yAxis:{title:{text:"Number of Infected"},min:0},series:[{data:r,color:"Red"}]},t.loadData=!0})),t.showData=!0)}))},methods:{DailyCount:function(t){return null!=this.countryData[t+1]?this.countryData[t].Confirmed-this.countryData[t+1].Confirmed:0},checkChart:function(){this.chartOptions.chart.type=this.showLineChart?"line":"column"},checkChartData:function(){var t=[],e="",a="";if("Infected"==this.chartDataType){for(var r=0;r<this.countryData.length-1;r++){var n=this.countryData[r].DailyConfirmed;t.push(n)}a="Infected Count",e="Red"}else if("Death"==this.chartDataType){for(var o=0;o<this.countryData.length-1;o++){var c=this.countryData[o].DailyDeaths;t.push(c)}a="Death Count",e="Grey"}else if("Recovered"==this.chartDataType){for(var i=0;i<this.countryData.length-1;i++){var s=this.countryData[i].DailyRecovered;t.push(s)}a="Recovered Count",e="Green"}t.reverse(),this.chartOptions.yAxis.title.text=a,this.chartOptions.series[0].data=t,this.chartOptions.series[0].color=e}}}),_=T,b=(a("426a"),Object(s["a"])(_,D,C,!1,null,null,null)),g=b.exports,w=a("4452"),x=a.n(w),R=a("5f5b"),k=a("b1e0"),O=[{path:"/",component:m},{path:"/CountryByDate/:coronaCountry",component:g}],I=new l["a"]({routes:O,mode:"history"});r["default"].use(R["a"]),r["default"].use(k["a"]),r["default"].use(x.a),r["default"].use(l["a"]),r["default"].config.productionTip=!1,new r["default"]({router:I,render:function(t){return t(h)}}).$mount("#app")},"5a78":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},cd1f:function(t,e,a){"use strict";var r=a("5a78"),n=a.n(r);n.a}});
//# sourceMappingURL=app.eb7c9fdd.js.map
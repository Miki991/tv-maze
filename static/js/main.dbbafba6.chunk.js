(this.webpackJsonptvmaze=this.webpackJsonptvmaze||[]).push([[0],{35:function(e,t,a){e.exports=a(88)},40:function(e,t,a){},41:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),c=a.n(r),l=a(2),o=a(3),i=a(6),u=a(4),m=a(5),h=(a(40),a(8)),p=a(15),d=(a(41),function(e){var t=function(){window.scroll({top:500,behavior:"smooth"})};return s.a.createElement("header",null,s.a.createElement("div",{className:"inner-header"},s.a.createElement(h.b,{to:"/",exact:"true"},s.a.createElement("img",{src:"./images/tvm-logo.png",alt:"heading",className:"header-heading"})),s.a.createElement("nav",null,s.a.createElement("ul",null,function(){var t=[];for(var a in e.links)t.push({page:a,link:e.links[a]});return t}().map((function(e){return s.a.createElement("li",{key:e.link,onClick:t},s.a.createElement(h.c,{to:e.link,exact:!0},e.page))})))),s.a.createElement("img",{src:"./images/nice-day.png",alt:"logo",className:"header-logo",onClick:function(){window.open("https://www.tvmaze.com/","_blank")}})))}),g=a(30),E=a.n(g),f=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s))))._isMounted=!1,a.state={images:[{alt:"set",src:"./images/set.jpg"},{alt:"show",src:"./images/show.jpg"},{alt:"camera",src:"./images/camera.jpg"},{alt:"tv",src:"./images/tv.jpg"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return s.a.createElement(E.a,{buttonsDisabled:!0,dotsDisabled:!0,autoPlay:!0,autoPlayInterval:6e3,duration:1e3},this.state.images.map((function(e){return s.a.createElement("div",{key:e.alt,style:{height:"100%",backgroundColor:"white",margin:"0"}},s.a.createElement("img",{src:e.src,alt:e.alt,style:{width:"100%"}}))})))}}]),t}(s.a.Component)),b=(a(72),a(73),function(e){return s.a.createElement("div",{className:"search-schedule-form"},s.a.createElement("span",{id:"date-label"},"Select date"),s.a.createElement("input",{type:"date",defaultValue:function(){var e=(new Date).toLocaleDateString(),t=(e=e.split("/")).splice(2,1);return(e=(e=t.concat(e)).map((function(e){return 1===e.length?0+e:e}))).join("-")}(),onChange:e.getDate}),s.a.createElement("span",{id:"country-label"},"Select country"),s.a.createElement("select",{onChange:e.getCountry},s.a.createElement("option",{value:"AU"},"Australia"),s.a.createElement("option",{value:"BR"},"Brazil"),s.a.createElement("option",{value:"CN"},"China"),s.a.createElement("option",{value:"FR"},"France"),s.a.createElement("option",{value:"JP"},"Japan"),s.a.createElement("option",{value:"RU"},"Russian Federation"),s.a.createElement("option",{value:"US"},"USA"),s.a.createElement("option",{value:"GB"},"United Kingdom")),s.a.createElement("input",{type:"submit",className:"search-btn get-schedule-btn",value:"GET SCHEDULE",onClick:e.getResults}))}),v=(a(74),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"schedule-result"},s.a.createElement("img",{src:this.props.data.show.image?this.props.data.show.image.medium:"./images/no-img.png",alt:"show-img"}),s.a.createElement("div",{className:"result-info"},s.a.createElement("h4",null,this.props.data.show.name),s.a.createElement("div",{className:"genres"},this.props.data.show.genres.map((function(e,t){return s.a.createElement("span",{key:t,className:"genre"},e)}))),s.a.createElement("p",{className:"official-site",onClick:function(){window.open(e.props.data.show.officialSite,"_blank")}},s.a.createElement("b",null,"Official site: "),this.props.data.show.officialSite),s.a.createElement("p",null,s.a.createElement("b",null,"Status: "),this.props.data.show.status),s.a.createElement("p",null,s.a.createElement("b",null,"Runtime: "),this.props.data.show.runtime," min."),s.a.createElement("p",null,s.a.createElement("b",null,"Type: "),this.props.data.show.type),s.a.createElement("p",null,s.a.createElement("b",null,"Schedule: "),this.props.data.show.schedule.time," \xa0",this.props.data.show.schedule.days.map((function(e,t){return s.a.createElement("span",{key:t,className:"genre"},e)})))))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],country:"",date:"",requestSent:!1},a.getResults=function(){fetch("https://api.tvmaze.com/schedule?country=".concat(a.state.country,"&date=").concat(a.state.date)).then((function(e){return e.json()})).then((function(e){a.setState({data:e.length?e:[],requestSent:!0}),window.scrollTo({top:500,behavior:"smooth"})})).catch((function(e){console.log(e),a.setState({data:[]})}))},a.getDate=function(e){a.setState({date:e.target.value})},a.getCountry=function(e){a.setState({country:e.target.value})},a.displayResults=function(e){return e.length&&a.state.requestSent?e.map((function(e,t){return s.a.createElement(v,{data:e,key:t})})):0===e.length&&a.state.requestSent?s.a.createElement("div",null,s.a.createElement("i",null,"No results available.")):s.a.createElement("span",null)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"schedule"},s.a.createElement(b,{getResults:this.getResults,getDate:this.getDate,getCountry:this.getCountry}),s.a.createElement("div",{className:"schedule-results"},this.displayResults(this.state.data)))}}]),t}(n.Component),y=(a(75),a(76),function(e){return s.a.createElement("div",{className:"episode"},s.a.createElement("div",{className:"episode-info"},s.a.createElement(h.b,{to:"/shows/".concat(e.data.show.id)},s.a.createElement("p",{className:"episode-name"},e.data.show.name)),s.a.createElement("p",{style:{color:"#3C948B"}},e.data.name,"\xa0",s.a.createElement("img",{src:"images/camera.png",alt:"tv"})),s.a.createElement("p",null,s.a.createElement("b",null,"Season"),": ",e.data.season,",",s.a.createElement("b",null," Episode"),": ",e.data.number,",",s.a.createElement("b",null," Airtime"),": ",e.data.airtime)))}),O=(a(77),function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"lds-ellipsis"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))}),j=a(16),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tvmaze.com/schedule?country=US").then((function(e){return e.json()})).then((function(t){e.props.getSchedule(t)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.schedule.length?s.a.createElement("section",{className:"homepage-schedule"},s.a.createElement("h1",null,"Schedule for today"),this.props.schedule.map((function(e,t){return s.a.createElement(y,{key:t,data:e})}))):s.a.createElement(O,null))}}]),t}(s.a.Component),S=Object(j.b)((function(e){return{schedule:e.schedule}}),(function(e){return{getSchedule:function(t){return e({type:"SET_SCHEDULE",schedule:t})}}}))(k),N=(a(79),a(80),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-field"},s.a.createElement("input",{type:"text",placeholder:"SEARCH TV SHOW",onKeyUp:this.props.showName}),s.a.createElement("button",{className:"search-btn",onClick:this.props.getResults},"GET RESULTS"))}}]),t}(n.Component)),C=(a(81),function(e){return s.a.createElement("div",{className:"result",id:e.data.show.url,"data-showid":e.data.show.id},s.a.createElement("img",{src:e.data.show.image?e.data.show.image.medium:"./images/no-img.png",alt:"show-img"}),s.a.createElement("div",{className:"result-info"},s.a.createElement("h4",null,e.data.show.name),s.a.createElement("div",{className:"genres"},e.data.show.genres.map((function(e,t){return s.a.createElement("span",{key:t,className:"genre"},e)}))),s.a.createElement("p",null,s.a.createElement("b",null,"Language: "),e.data.show.language),s.a.createElement("p",null,s.a.createElement("b",null,"Runtime: "),e.data.show.runtime," min."),s.a.createElement("p",null,s.a.createElement("b",null,"Status: "),e.data.show.status),s.a.createElement("p",null,s.a.createElement("b",null,"Premiered: "),e.data.show.premiered),s.a.createElement("div",{className:"btns"},s.a.createElement("button",{className:"search-btn",onClick:e.getCast},"SEE CAST"),s.a.createElement(h.b,{to:"/shows/".concat(e.data.show.id)},s.a.createElement("button",{className:"search-btn"}," MORE ")))))}),P=(a(82),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={showActor:!0,roles:[]},a.getInfo=function(e){fetch("https://api.tvmaze.com/people/".concat(e.target.closest(".actor").id,"/castcredits?embed=show")).then((function(e){return e.json()})).then((function(e){a.setState({roles:e,showActor:!1})}))},a.getYear=function(e){var t="";return e._embedded.show.premiered&&(t=e._embedded.show.premiered.split("-"),t="(".concat(t[0],")")),t},a.backToActor=function(){a.setState({showActor:!0})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(n.Fragment,null,this.state.showActor?s.a.createElement("div",{className:"actor",id:this.props.actor.person.id},s.a.createElement("img",{src:this.props.actor.person.image?this.props.actor.person.image.medium:"./images/no-img.png",alt:"show-img"}),s.a.createElement("div",{className:"actor-info"},s.a.createElement("h4",null,this.props.actor.person.name),s.a.createElement("p",null,s.a.createElement("b",null,"Birth date: "),this.props.actor.person.birthday),s.a.createElement("p",null,s.a.createElement("b",null,"Character: "),this.props.actor.character.name),s.a.createElement("button",{className:"search-btn",onClick:this.getInfo},"MORE ROLES"))):s.a.createElement("div",{className:"actor"},s.a.createElement("div",{className:"actor-info-roles"},s.a.createElement("ul",null,this.state.roles.map((function(t,a){return s.a.createElement("li",{key:a},t._embedded.show.name," ",e.getYear(t))}))),s.a.createElement("button",{className:"search-btn actor-roles-btn",onClick:this.backToActor},"BACK"))))}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={castClicked:!1,tvShow:"",data:[],gotResults:!1},a.showName=function(e){a.setState({tvShow:e.target.value}),"Enter"===e.key&&a.getResults()},a.getResults=function(){window.scrollTo({top:500,behavior:"smooth"}),fetch("https://api.tvmaze.com/search/shows?q=".concat(a.state.tvShow)).then((function(e){return e.json()})).then((function(e){a.props.setShows(e),a.setState({castClicked:!1,gotResults:!0})})).catch((function(e){console.log(e),a.setState({castClicked:!1,gotResults:!0})}))},a.getCast=function(e){fetch("https://api.tvmaze.com/shows/".concat(e.target.closest(".result").dataset.showid,"/cast")).then((function(e){return e.json()})).then((function(e){window.scrollTo({top:500,behavior:"smooth"}),a.setState({castClicked:!0,castResult:!!e.length&&e})})).catch((function(e){console.log(e),a.setState({castClicked:!0,castResult:!1})}))},a.getBack=function(e){window.scrollTo({top:500,behavior:"smooth"}),a.setState({castClicked:!1}),e.target.style.display="none"},a.displayShows=function(){return a.props.shows.length?a.props.shows.map((function(e,t){return s.a.createElement(C,{data:e,key:t,getCast:a.getCast})})):a.state.gotResults?s.a.createElement("div",{className:"no-matching-results"},"No matching results."):s.a.createElement("span",null)},a.displayCast=function(){return a.state.castResult?a.state.castResult.map((function(e,t){return s.a.createElement(P,{actor:e,key:t})})):s.a.createElement("div",{className:"no-cast"},"No cast available yet.")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"results"},s.a.createElement(N,{showName:this.showName,getResults:this.getResults}),this.state.castClicked?this.displayCast():this.displayShows(),s.a.createElement("button",{className:"back-to-results",onClick:this.getBack,style:this.state.castClicked?{display:"block"}:{display:"none"}},"\xab BACK"))}}]),t}(n.Component),A=Object(j.b)((function(e){return{shows:e.shows}}),(function(e){return{setShows:function(t){return e({type:"SET_SHOWS",shows:t})}}}))(R),T=(a(83),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={data:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tvmaze.com/shows/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data.summary;return this.state.data?s.a.createElement("div",{className:"summary"},s.a.createElement("img",{src:this.state.data.image?this.state.data.image.medium:"/images/no-img.png",alt:"show img"}),s.a.createElement("div",{className:"summary-info"},this.state.data.summary?s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):"No summary available yet.",s.a.createElement("div",{className:"summary-btns"},s.a.createElement(h.b,{to:"/shows/".concat(this.props.match.params.id,"/episodes")},s.a.createElement("button",{className:"search-btn"},"GET EPISODES")),s.a.createElement(h.b,{to:"/shows"},s.a.createElement("button",{className:"search-btn"},"\xab SEARCH SHOWS"))))):s.a.createElement(O,null)}}]),t}(s.a.Component)),_=Object(p.f)(T),D=a(21),I=(a(84),a(85),function(e){var t=e.data.summary;return s.a.createElement("div",{className:"episode"},s.a.createElement("img",{src:e.data.image?e.data.image.medium:"../../images/no-img.png",alt:"poster"}),s.a.createElement("div",{className:"episode-info"},s.a.createElement("p",{className:"episode-name"},e.data.name),s.a.createElement("p",null,s.a.createElement("b",null,"Season"),": ",e.data.season,",",s.a.createElement("b",null," Episode"),": ",e.data.number,",",s.a.createElement("b",null," Airdate"),": ",e.data.airdate),e.data.summary?s.a.createElement("p",null,s.a.createElement("b",null,"Summary"),": ",s.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})):null))}),z=a(34),M=(a(86),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={pager:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){window.scroll({top:"400",behavior:"smooth"});var t=this.props,a=t.items,n=t.pageSize,s=this.state.pager;if(!(e<1||e>s.totalPages)){s=this.getPager(a.length,e,n);var r=a.slice(s.startIndex,s.endIndex+1);this.setState({pager:s}),this.props.onChangePage(r)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,s,r=Math.ceil(e/a);r<=10?(n=1,s=r):t<=6?(n=1,s=10):t+4>=r?(n=r-9,s=r):(n=t-5,s=t+4);var c=(t-1)*a,l=Math.min(c+a-1,e-1),o=Object(z.a)(Array(s+1-n).keys()).map((function(e){return n+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:n,endPage:s,startIndex:c,endIndex:l,pages:o}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:s.a.createElement("ul",{className:"pagination"},s.a.createElement("li",{className:1===t.currentPage?"disabled":"",onClick:function(){return e.setPage(1)}},"<<"),s.a.createElement("li",{className:1===t.currentPage?"disabled":"",onClick:function(){return e.setPage(t.currentPage-1)}},"Previous"),t.pages.map((function(a,n){return s.a.createElement("li",{key:n,className:t.currentPage===a?"active":"",onClick:function(){return e.setPage(a)}},a)})),s.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":"",onClick:function(){return e.setPage(t.currentPage+1)}},"Next"),s.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":"",onClick:function(){return e.setPage(t.totalPages)}},">>"))}}]),t}(s.a.Component));M.defaultProps={initialPage:1,pageSize:30};var U=M,x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[],pageOfItems:[]},a.onChangePage=a.onChangePage.bind(Object(D.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tvmaze.com/shows/".concat(this.props.match.params.id,"/episodes")).then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"episodes"},this.state.pageOfItems.map((function(t,a){return s.a.createElement(I,{data:t,results:e.state.data,key:a})})),s.a.createElement(U,{items:this.state.data,onChangePage:this.onChangePage}),s.a.createElement(h.b,{to:"/shows"},s.a.createElement("button",{className:"search-btn episodes-back-btn",onClick:function(){window.scroll({top:600,behavior:"smooth"})}},"SEARCH SHOWS")))}}]),t}(s.a.Component),H=Object(p.f)(x),B=(a(87),function(){return s.a.createElement("footer",null,"Created with",s.a.createElement("img",{src:"images/heart.png",alt:"heart",className:"heart-img"}),"and ",s.a.createElement("span",{className:"react-js"},"React.js"),s.a.createElement("img",{src:"images/react-logo.png",alt:"react logo",className:"react-img"}))}),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={links:{homepage:"/",shows:"/shows",schedule:"/schedule"}},a.goToTop=function(){window.scroll({top:0,behavior:"smooth"})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{basename:"/tv-maze"},s.a.createElement(d,{links:this.state.links}),s.a.createElement(f,null),s.a.createElement("main",null,s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/",exact:!0,component:S}),s.a.createElement(p.a,{path:this.state.links.shows,exact:!0,render:function(){return s.a.createElement(A,null)}}),s.a.createElement(p.a,{path:this.state.links.schedule,exact:!0,render:function(){return s.a.createElement(w,null)}}),s.a.createElement(p.a,{path:"".concat(this.state.links.shows,"/:id"),exact:!0,render:function(){return s.a.createElement(_,null)}}),s.a.createElement(p.a,{path:"".concat(this.state.links.shows,"/:id/episodes"),exact:!0,component:H}))),s.a.createElement(B,null),s.a.createElement("img",{className:"arrow-up",src:"./images/arrow.png",alt:"arrow-up",title:"Go to top",onClick:this.goToTop})))}}]),t}(n.Component),W=a(17),F=a(32),q=a(33);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K={shows:[],schedule:[]},V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,X=Object(W.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOWS":return J({},e,{shows:t.shows});case"SET_SCHEDULE":return J({},e,{schedule:t.schedule});default:return e}}),V(Object(W.a)(F.a)));c.a.render(s.a.createElement(j.a,{store:X},s.a.createElement(L,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.dbbafba6.chunk.js.map
(this.webpackJsonpmy_movie_app=this.webpackJsonpmy_movie_app||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(12),s=t.n(i),m=t(2),c=t.n(m),l=t(13),o=t(14),u=t(15),v=t(18),g=t(17),_=t(16),d=t.n(_);t(42);var p=function(e){e.id;var a=e.title,t=e.year,n=e.rating,i=e.runtime,s=e.summary,m=e.genre,c=(e.language,e.image);return r.a.createElement("div",{className:"movies__movie"},r.a.createElement("img",{src:c,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("p",{className:"movie__summary"},s.slice(0,260),"..."),r.a.createElement("h4",{className:"movie__genre"},"Genre"),r.a.createElement("ul",{className:"genre"},m.map((function(e,a){return r.a.createElement("li",{key:a,className:"genre__genre"},e)}))),r.a.createElement("div",{className:"etcs"},r.a.createElement("h6",{className:"movie__rating"},"rating : ",0===n?"not rated yet":n),r.a.createElement("h6",{className:"movie__runtime"},"runtime : ",0===i?"about 2 hours":i+" min"))))},y=(t(43),function(e){Object(v.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.gatherMovies=Object(l.a)(c.a.mark((function a(){var t,n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=year");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.gatherMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"}," ",a?r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"loadingText"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,title:e.title,title_english:e.title_english,year:e.year,rating:e.rating,runtime:e.runtime,summary:e.summary,genre:e.genres,language:e.language,image:e.medium_cover_image})}))))}}]),t}(r.a.Component));s.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.42c2e707.chunk.js.map
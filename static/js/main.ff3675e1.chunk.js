(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(27),l=n.n(i),s=(n(37),n(38),n(3)),o=function(){return Object(a.jsx)("h1",{children:"Customers"})},d=n(2),u=n(30),b=n(31),m=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function j(){return m.filter((function(e){return e}))}var h=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];function f(e){var t=h.find((function(t){return t._id===e._id}))||{};return t.title=e.title,t.genre=m.find((function(t){return t._id===e.genreId})),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),h.push(t)),t}var v=n(10),O=n.n(v),p=function(e){var t=e.totalCount,n=e.currentPage,r=e.pageSize,c=e.onPageClick,i=Math.ceil(t/r);if(1===i)return null;var l=O.a.range(1,i+1);return Object(a.jsx)("nav",{"aria-label":"Page navigation example",children:Object(a.jsx)("ul",{className:"pagination",children:l.map((function(e){return Object(a.jsx)("li",{className:e===n?"page-item active":"page-item",children:Object(a.jsx)("a",{onClick:function(){return c(e)},style:{cursor:"pointer"},className:"page-link",children:e})},e)}))})})};var g=function(e){var t=e.genres,n=e.keyProperty,r=e.valueProperty,c=e.selectedItem,i=e.onItemSelect;return Object(a.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(a.jsx)("li",{onClick:function(){return i(e)},style:{cursor:"pointer"},className:e[r]===c[r]?"list-group-item active":"list-group-item",children:e[r]},e[n])}))})};g.defaultProps={keyProperty:"_id",valueProperty:"name"};var x=g,y=function(e){var t="fa fa-heart";return e.like||(t+="-o"),Object(a.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},S=function(e){var t=e.data,n=e.column,r=function(e,t){return t.content?t.content(e):O.a.get(e,t.path)};return Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)("tr",{children:n.map((function(t){return Object(a.jsx)("td",{children:r(e,t)},e._id+(t.path||t.key))}))},e._id)}))})},k=function(e){var t=e.onSortItem,n=e.sortColumn,r=e.column,c=function(e){return e.path!==n.path?null:Object(a.jsx)("i",{className:"asc"===n.order?"fa fa-sort-asc":"fa fa-sort-desc"})};return Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:r.map((function(e){return Object(a.jsxs)("th",{className:"clickable",onClick:function(){return function(e){var a="asc";n.path===e&&(a="asc"===n.order?"desc":"asc"),t({path:e,order:a})}(e.path)},children:[e.label," ",c(e)]},e.path||e.key)}))})})},N=function(e){var t=e.data,n=e.column,r=e.sortColumn,c=e.onSortItem;return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)(k,{onSortItem:c,column:n,sortColumn:r}),Object(a.jsx)(S,{data:t,column:n})]})},I=n(6),_=function(e){var t=e.movie,n=e.onLike,r=e.onDelete,c=e.sortColumn,i=e.onSortItem,l=[{path:"title",label:"Title",content:function(e){return Object(a.jsx)(I.b,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(e){return Object(a.jsx)(y,{like:e.like,onClick:function(){return n(e)}})}},{key:"delete",content:function(e){return Object(a.jsx)("button",{onClick:function(){return r(e)},className:"btn btn-danger btn-sm",children:"Delete"})}}];return Object(a.jsx)(N,{data:t,column:l,sortColumn:c,onSortItem:i})},C=function(e){var t=e.value,n=e.onChange;return Object(a.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})};function R(){var e=Object(r.useState)((function(){return{movieData:h,genres:[{_id:"",name:"All Genres"}].concat(Object(u.a)(j())),currentPage:1,selectedItem:{_id:"",name:"All Genres"},pageSize:4,searchQuery:"",sortColumn:{path:"title",order:"asc"}}})),t=Object(b.a)(e,2),n=t[0],c=t[1];if(0===n.movieData.length)return Object(a.jsx)("p",{children:"There is no movies in the database"});var i=function(){var e=n.searchQuery,t=n.selectedItem,a=n.movieData,r=n.sortColumn,c=n.currentPage,i=n.pageSize,l=a;e?l=a.filter((function(t){return t.title.toLowerCase().startsWith(e.toLowerCase())})):t&&t._id&&(l=a.filter((function(e){return e.genre._id===t._id})));var s=function(e,t,n){var a=(t-1)*n;return O()(e).slice(a).take(n).value()}(O.a.orderBy(l,[r.path],[r.order]),c,i);return{totalCount:l.length,data:s}}(),l=i.totalCount,s=i.data;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)(x,{genres:n.genres,selectedItem:n.selectedItem,onItemSelect:function(e){c(Object(d.a)(Object(d.a)({},n),{},{currentPage:1,searchQuery:"",selectedItem:e}))}})}),Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)(I.b,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20},children:"New Movie"}),Object(a.jsxs)("p",{children:["Showing ",l," movies in the database"]}),Object(a.jsx)(C,{value:n.searchQuery,onChange:function(e){c(Object(d.a)(Object(d.a)({},n),{},{searchQuery:e,selectedItem:{_id:"",name:"All Genres"},currentPage:1}))}}),Object(a.jsx)(_,{movie:s,sortColumn:n.sortColumn,onSortItem:function(e){c(Object(d.a)(Object(d.a)({},n),{},{sortColumn:e}))},onLike:function(e){c(Object(d.a)(Object(d.a)({},n),{},{movieData:n.movieData.map((function(t){return t._id!==e._id?Object(d.a)({},t):Object(d.a)(Object(d.a)({},t),{},{like:!e.like})}))}))},onDelete:function(e){var t=n.movieData.filter((function(t){return t._id!==e._id}));c(Object(d.a)(Object(d.a)({},n),{},{movieData:t}))}}),Object(a.jsx)(p,{totalCount:l,pageSize:n.pageSize,currentPage:n.currentPage,onPageClick:function(e){c(Object(d.a)(Object(d.a)({},n),{},{currentPage:e}))}})]})]})}var w=function(){return Object(a.jsx)("h1",{children:"Not Found"})},P=function(){return Object(a.jsx)("h1",{children:"Rentals"})},T=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(I.b,{className:"navbar-brand",to:"#",children:"Movie Search"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(I.c,{className:"nav-link","aria-current":"page",to:"/movies",children:"Movies"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(I.c,{className:"nav-link",to:"/customers",children:"Customers"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(I.c,{className:"nav-link",to:"/rentals",children:"Rentals"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(I.c,{className:"nav-link",to:"/register",children:"Registration"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(I.c,{className:"nav-link",to:"/login",children:"Login"})})]})})]})})},A=n(11),D=n(12),q=n(14),z=n(13),F=n(5),G=n.n(F),L=n(18),M=n(29),B=n(20),Q=function(e){var t=e.name,n=e.label,r=e.error,c=Object(B.a)(e,["name","label","error"]);return Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{htmlFor:t,className:"form-label",children:n}),Object(a.jsx)("input",Object(d.a)(Object(d.a)({},c),{},{name:t,className:"form-control",id:t})),r?Object(a.jsx)("div",{className:"alert alert-danger",children:r}):null]})},U=function(e){var t=e.name,n=e.label,r=e.options,c=e.error,i=Object(B.a)(e,["name","label","options","error"]);return Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:t,children:n}),Object(a.jsxs)("select",Object(d.a)(Object(d.a)({name:t,id:t},i),{},{className:"form-control",children:[Object(a.jsx)("option",{value:""}),r.map((function(e){return Object(a.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),c&&Object(a.jsx)("div",{className:"alert alert-danger",children:c})]})},Z=function(e){Object(q.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=G.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var n,a={},r=Object(M.a)(t.details);try{for(r.s();!(n=r.n()).done;){var c=n.value;a[c.path[0]]=c.message}}catch(i){r.e(i)}finally{r.f()}return a},e.validateProperty=function(t){var n=t.name,a=t.value,r=Object(L.a)({},n,a),c=Object(L.a)({},n,e.schema[n]),i=G.a.validate(r,c).error;return i?i.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,a=Object(d.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var c=Object(d.a)({},e.state.data);c[n.name]=n.value,e.setState({data:c,errors:a})},e}return Object(D.a)(n,[{key:"renderButton",value:function(e){return Object(a.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderSelect",value:function(e,t,n){var r=this.state,c=r.data,i=r.errors;return Object(a.jsx)(U,{name:e,value:c[e],label:t,options:n,onChange:this.handleChange,error:i[e]})}},{key:"renderInput",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",c=this.state,i=c.data,l=c.errors;return Object(a.jsx)(Q,{type:r,name:e,value:i[e],label:t,onChange:this.handleChange,placeholder:n,error:l[e]})}}]),n}(r.Component),E=function(e){Object(q.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:G.a.string(),title:G.a.string().required().label("Title"),genreId:G.a.string().required().label("Genre"),numberInStock:G.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:G.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=function(){f(e.state.data),e.props.history.push("/movies")},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=j();this.setState({genres:e});var t=this.props.match.params.id;if("new"!==t){var n,a=(n=t,h.find((function(e){return e._id===n})));if(!a)return this.props.history.replace("/not-found");this.setState({data:this.mapToViewModel(a)})}}},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Movie Form"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title","A-z, a-z, symbols"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","[0-9]*","number"),this.renderInput("dailyRentalRate","Rate","0-10"),this.renderButton("Save")]})]})}}]),n}(Z),J=function(e){Object(q.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:G.a.string().required().label("Username"),password:G.a.string().required().label("Password")},e.doSubmit=function(){console.log("Submitted")},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username","A-Z, a-z, 0-9, symbols"),this.renderInput("password","Password","password","password"),this.renderButton("Login")]})]})}}]),n}(Z),V=function(e){Object(q.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:G.a.string().required().email().label("Username"),password:G.a.string().required().min(5).label("Password"),name:G.a.string().required().label("Name")},e.doSubmit=function(){console.log("Submitted")},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username","A-Z, a-z, 0-9, symbols"),this.renderInput("password","Password","password","password"),this.renderInput("name","Name","A-Z, a-z"),this.renderButton("Register")]})]})}}]),n}(Z);var W=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T,{}),Object(a.jsx)("main",{className:"container",children:Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.b,{path:"/register",component:V}),Object(a.jsx)(s.b,{path:"/login",component:J}),Object(a.jsx)(s.b,{path:"/movies/:id",component:E}),Object(a.jsx)(s.b,{path:"/movies",component:R}),Object(a.jsx)(s.b,{path:"/customers",component:o}),Object(a.jsx)(s.b,{path:"/rentals",component:P}),Object(a.jsx)(s.b,{path:"/not-found",component:w}),Object(a.jsx)(s.a,{from:"/",exact:!0,to:"/movies"}),Object(a.jsx)(s.a,{to:"/not-found"})]})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(44),n(45);l.a.render(Object(a.jsx)(I.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(W,{})})}),document.getElementById("root")),H()}},[[46,1,2]]]);
//# sourceMappingURL=main.ff3675e1.chunk.js.map
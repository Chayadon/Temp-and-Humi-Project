(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{24:function(e,t,a){},35:function(e,t,a){e.exports=a(70)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=a(2),o=a(3),s=a(5),m=a(4),u=a(11),d=a(1),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(u.b,{to:"./Register"}," ",l.a.createElement("button",{type:"button",className:"btn btn-primary"},"Register")," "))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(u.b,{to:"./Showdata"}," ",l.a.createElement("button",{type:"button",className:"btn btn-success"},"Showdata")))}}]),a}(n.Component),p=a(19),f=a.n(p),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(u.b,{to:"./Temp"}," ",l.a.createElement("button",{type:"button",className:"btn btn-warning"},"Temp")," "))}}]),a}(n.Component);a(24);localStorage.setItem("key",localStorage.getItem("key"));var E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.responseFacebook=function(t){console.log(t),e.setState({isLoggedIn:localStorage.getItem("key"),userID:t.userID,name:t.name,email:t.email,picture:t.picture.data.url})},e.componentClicked=function(){return localStorage.setItem("key",1)},e}return Object(o.a)(a,[{key:"handleReset",value:function(){localStorage.setItem("key",0),console.log("Hello"),window.location.reload(!0),window.location.href="https://test.chayadon.com/"}},{key:"render",value:function(){var e;return e=this.state.isLoggedIn?l.a.createElement("div",{style:{width:"400px",margin:"auto",background:"#FF69B4",padding:"20px",zIndex:99,backgroundImage:"linear-gradient(45deg, rgba(218, 132, 230, 0.84) 0%, rgba(179, 0, 89, 1) 83%)"}},l.a.createElement("img",{src:this.state.picture,alt:this.state.name}),l.a.createElement("h2",null,"Welcome ",this.state.name),"Email: ",this.state.email,l.a.createElement("div",{className:"btn-group btn-group-lg"},l.a.createElement(g,null),l.a.createElement(h,null),l.a.createElement(b,null)),l.a.createElement("p",null),l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.handleReset},"Logout")):l.a.createElement(f.a,{appId:"216252089722355",autoLoad:Number(localStorage.getItem("key")),fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),l.a.createElement("div",null,e)}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"jumbotron mb-0 text-white bg",style:{height:"60%"}},l.a.createElement("h1",null,"Welcome to React"),l.a.createElement("div",{className:"my-3"},l.a.createElement(E,null)),l.a.createElement("div",{className:"my-5"},l.a.createElement("img",{className:"logo",src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"",style:{height:"100px",width:"100px"}}))))}}]),a}(n.Component),v=a(17),k=a(12),j=a(14),O=a.n(j),C=(a(62),Number(localStorage.getItem("Size"))),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChang=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value))},e.state={idkey:C,firstname:"",lastname:""},e.handleChang=e.handleChang.bind(Object(k.a)(e)),e.handleClicked=e.handleClicked.bind(Object(k.a)(e)),e}return Object(o.a)(a,[{key:"handleClicked",value:function(){var e={idkey:this.state.idkey,firstname:this.state.firstname,lastname:this.state.lastname};O.a.post("https://test.chayadon.com/data",e),this.setState({idkey:C+=1,firstname:"",lastname:""}),console.log("Hello"),localStorage.removeItem("Size"),localStorage.setItem("Size",C),C=0,C=Number(localStorage.getItem("Size")),console.log("Hello,,,")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Register"),l.a.createElement("hr",null)),l.a.createElement("form",{className:"container"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"id"},"ID :"),l.a.createElement("input",{type:"text ",className:"form-control",size:"10",id:"idkey",onChange:this.handleChang,value:this.state.idkey})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Firstname :"),l.a.createElement("input",{type:"text",className:"form-control",id:"firstname",onChange:this.handleChang,value:this.state.firstname})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Lastname :"),l.a.createElement("input",{type:"text",className:"form-control",id:"lastname",onChange:this.handleChang,value:this.state.lastname})),l.a.createElement(u.b,{to:"Showdata"}," ",l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleClicked,value:!0}," Submit "))))}}]),a}(n.Component),S=a(34),I=a.n(S),w=(a(68),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getData=function(){fetch("/data").then((function(e){return e.json()})).then((function(t){return e.setState({list:t})}))},e.onDelete=function(t){var a={idkey:t.id};O.a.put("https://test.chayadon.com/delete",a),setTimeout((function(){e.componentDidMount()}),1)},e.call=function(t){e.openModal(),e.setState({idkey:t.id,firstname:t.firstname,lastname:t.lastname})},e.handleChang=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value));var a={idkey:e.state.idkey,firstname:e.state.firstname,lastname:e.state.lastname};O.a.put("https://test.chayadon.com/data",a)},e.state={list:[],idkey:"",firstname:"",lastname:""},e.handleChang=e.handleChang.bind(Object(k.a)(e)),e.handleClicked=e.handleClicked.bind(Object(k.a)(e)),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}},{key:"handleClicked",value:function(){var e=this,t={idkey:this.state.idkey,firstname:this.state.firstname,lastname:this.state.lastname};O.a.put("https://test.chayadon.com/data",t),this.setState({idkey:"",firstname:"",lastname:""}),setTimeout((function(){e.componentDidMount()}),1)}},{key:"render",value:function(){var e=this,t=this.state.list;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",{className:"my-4"},"Users Information"),l.a.createElement("hr",null),l.a.createElement("div",{className:"container p-3 my-3 bg-dark text-white"},l.a.createElement("table",{className:"table table-dark"},l.a.createElement("thead",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name")),l.a.createElement("tbody",null,t.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.firstname),l.a.createElement("td",null,t.lastname),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-warning",onClick:function(){return e.call(t)}},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:function(){return e.onDelete(t)}},"Delete")),l.a.createElement("div",{className:"box"},l.a.createElement(I.a,{visible:e.state.visible,width:"1200",height:"600",effect:"fadeInUp",onClickAway:function(){return e.closeModal()}},l.a.createElement("form",{className:"container",id:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("h3",null,l.a.createElement("label",{htmlFor:"id"},"ID: ",e.state.idkey,l.a.createElement("br",null)))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"firstname:"),l.a.createElement("input",{type:"text",className:"form-control",id:"firstname",onChange:e.handleChang,value:e.state.firstname})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"lasttname:"),l.a.createElement("input",{type:"text",className:"form-control",id:"lastname",onChange:e.handleChang,value:e.state.lastname})),l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:e.handleClicked},"Submit")))))}))))),l.a.createElement("br",null))}}]),a}(n.Component)),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("iframe",{src:this.props.src,height:this.props.height,width:this.props.width,className:"fullheight"}))}}]),a}(l.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={name:"React"},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{align:"center"},l.a.createElement(x,{src:"https://datastudio.google.com/embed/reporting/fbee6a90-980b-4bd5-b99a-dedb9111bfa8/page/qhijB",height:"900",width:"1300"}),l.a.createElement(x,{src:"https://datastudio.google.com/embed/reporting/0fa05caa-db85-45b1-a2f2-c6a8afab42a2/page/CIijB",height:"900",width:"1300"}))}}]),a}(n.Component);Object(r.render)(l.a.createElement(D,null),document.getElementById("root"));var F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(d.a,{path:"/",component:y}),l.a.createElement(d.a,{path:"/register",component:N}),l.a.createElement(d.a,{path:"/showdata",component:w}),l.a.createElement(d.a,{path:"/temp",component:D}))}}]),a}(n.Component);a(69);c.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.017b0a30.chunk.js.map
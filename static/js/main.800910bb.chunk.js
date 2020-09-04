(this["webpackJsonpinterview-portal"]=this["webpackJsonpinterview-portal"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),c=a(8),o=a(1),l=a(2),m=a(4),u=a(3);a(14),a(18);function p(){return r.a.createElement("div",{className:"bg-primary py-1 text-center text-light font-weight-bold w-100"},r.a.createElement("h4",null," Interview Portal "))}function d(e){var t=e.interview,a=e.usersObject;return r.a.createElement("div",{className:"py-2"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item active"},r.a.createElement("span",null,t.date," ",t.startTime," - ",t.endTime),r.a.createElement("span",{className:"float-right"},"Edit")),r.a.createElement("li",{className:"list-group-item px-0 py-0"},r.a.createElement("table",{className:"table table-bordered mb-0"},t.participants.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e),r.a.createElement("td",null,a[e]?a[e].contact:"NULL"),r.a.createElement("td",null,a[e]?a[e].email:"NULL"),r.a.createElement("td",null,r.a.createElement("a",{href:a[e]?a[e].resume:"NULL",target:"_blank"},"Resume Link")))}))))))}var v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.interviews.map((function(t,a){return r.a.createElement(d,{key:a,interview:t,usersObject:e.props.usersObject})})))}}]),a}(n.Component),h=a(7);function b(e){var t=e.usersArray,a=void 0===t?[]:t,n=e.disabled,i=void 0===n?[]:n,s=e.selected,c=e.name,o=e.onChange;return r.a.createElement("div",{className:"form-group",name:c},r.a.createElement("select",{name:c,className:"form-control",onChange:o},r.a.createElement("option",{value:""}," Select "),a.map((function(e,t){return r.a.createElement("option",{value:e.username,selected:e.username==s,disabled:i.length>t&&i[t]},e.name," (",e.username,")")}))))}var f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={date:e.props.date?e.props.date:"2020-09-03",startTime:e.props.startTime?e.props.startTime:"03:00",endTime:e.props.endTime?e.props.endTime:"05:00",numberOfParticipants:e.props.numberOfParticipants?e.props.numberOfParticipants:2,participants:e.props.participants?e.props.participants:["",""],error:""},e.onDateTimechange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){console.log("Yaha ayaa hu"),t.preventDefault();for(var a={date:e.state.date,startTime:e.state.startTime,endTime:e.state.endTime,numberOfParticipants:e.state.numberOfParticipants,participants:e.state.participants},n={},r={},i=!1,s=function(t){var s=e.state.participants[t];console.log(s),!n[s]&&s?(n[s]=1,e.props.interviewsObject[a.date]&&e.props.interviewsObject[a.date].forEach((function(e){!(e.endTime<a.startTime||e.startTime>a.endTime)&&e.participants&&-1!==e.participants.indexOf(s)&&(i=!0,r[t]="This user is not available for selected slot")}))):(i=!0,r[t]=s?"Duplicate User":"Please select valid input")},c=0;c<e.state.numberOfParticipants;c++)s(c);i?e.setState({error:r}):(e.setState({error:""}),e.props.onSubmit(a))},e.onNumberofParticipantsChange=function(t){for(var a=[],n=Number(t.target.value),r=0;r<n;r++)a.push(r<e.state.participants.length?e.state.participants[r]:"");console.log(a),console.dir(t),e.setState({participants:a,numberOfParticipants:n})},e.onUserChange=function(t){var a=t.target.name,n=t.target.value,r=e.state.participants;r[a]=n,e.setState({participants:r})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"border px-3 py-3 rounded",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",className:"form-control",placeholder:"interview date",name:"date",required:!0,value:this.state.date,onChange:this.onDateTimechange})),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"Start Time"),r.a.createElement("input",{type:"time",className:"form-control",name:"startTime",value:this.state.startTime,onChange:this.onDateTimechange,required:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",null,"End Time"),r.a.createElement("input",{type:"time",name:"endTime",className:"form-control",value:this.state.endTime,onChange:this.onDateTimechange,required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number of Participants"),r.a.createElement("select",{className:"form-control",onChange:this.onNumberofParticipantsChange},[2,3,4,5,6,7,8].map((function(t){return r.a.createElement("option",{key:t,value:t,selected:e.state.numberOfParticipants==t},t)})))),this.state.participants.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:a},e.state.error&&e.state.error[a]&&r.a.createElement("span",{className:"text-danger"},e.state.error[a]),r.a.createElement(b,{usersArray:e.props.usersArray,disabled:[],selected:t,name:a,onChange:e.onUserChange}))})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary"}," Submit "))))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){t.createdAt=new Date,e.props.addNewInterview(t)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{usersArray:this.props.usersArray,interviewsObject:this.props.interviewsObject,onSubmit:this.onSubmit}))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"px-4 py-4"},r.a.createElement("button",{className:"btn btn-info btn-block",onClick:this.props.onCurrentChange},0==this.props.current?"Schedule new Interview":"Back to Portal"),r.a.createElement("br",null),0==this.props.current?r.a.createElement(v,{interviews:this.props.interviews,usersObject:this.props.usersObject}):r.a.createElement(w,{usersArray:this.props.usersArray,interviewsObject:this.props.interviewsObject,addNewInterview:this.props.addNewInterview}))}}]),a}(n.Component),E=(a(19),[{username:"Sanket17",name:"Sanket Agarwal",email:"sanketagarwal702@gmail.com",contact:"9879580784",resume:"https://"},{username:"Surya1231",name:"Sanket Agarwal",email:"sanketagarwal702@gmail.com",contact:"9879580784",resume:"https://"},{username:"SundarPichai12",name:"Sanket Agarwal",email:"sanketagarwal702@gmail.com",contact:"9879580784",resume:"https://"},{username:"Keshav123",name:"Sanket Agarwal",email:"sanketagarwal702@gmail.com",contact:"9879580784",resume:"https://"}]),O=[{id:"0",date:"2020-09-03",startTime:"3:00",endTime:"5:00",participants:["Sanket17","Surya1231"],meetingLink:"",isUpdated:!1,createdAt:new Date},{id:"1",date:"2020-09-04",startTime:"3:00",endTime:"5:00",participants:["Sanket17","Surya1231","Keshav123"],meetingLink:"",isUpdated:!1,createdAt:new Date},{id:"2",date:"2020-09-05",startTime:"6:00",endTime:"9:00",participants:["Sanket17","Surya1231"],meetingLink:"",isUpdated:!1,createdAt:new Date},{id:"3",date:"2020-09-06",startTime:"11:00",endTime:"22:00",participants:["Sanket17","Surya1231"],meetingLink:"",isUpdated:!1,createdAt:new Date},{id:"4",date:"2020-09-07",startTime:"13:00",endTime:"15:00",participants:["Sanket17","Surya1231"],meetingLink:"",isUpdated:!1,createdAt:new Date}],y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={interviews:O,usersArray:E,usersObject:{},lastId:O.length+1,interviewsObject:{},current:0},e.addNewInterview=function(t){t.id=e.state.lastId;var a=[].concat(Object(c.a)(e.state.interviews),[t]),n=e.state.interviewsObject;n[t.date]||(n[t.date]=[]),n[t.date].push(t),a.sort((function(e,t){return e.date<t.date?-1:e.date==t.date?e.startTime-t.startTime:1})),e.setState({interviews:a,lastId:e.state.lastId+1,current:0})},e.editInterview=function(t){var a=e.state.interviews.map((function(e){return e.id==t.id?t:e}));e.setState({interviews:a})},e.onCurrentChange=function(){e.setState({current:(e.state.current+1)%2})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e={},t={};E.forEach((function(t){return e[t.username]=t})),O.forEach((function(e){t[e.date]||(t[e.date]=[]),t[e.date].push(e)})),this.setState({usersObject:e,interviewsObject:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(p,null),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"content-box"},r.a.createElement(g,{interviews:this.state.interviews,interviewsObject:this.state.interviewsObject,usersArray:this.state.usersArray,usersObject:this.state.usersObject,addNewInterview:this.addNewInterview,editInterview:this.editInterview,current:this.state.current,onCurrentChange:this.onCurrentChange}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.800910bb.chunk.js.map
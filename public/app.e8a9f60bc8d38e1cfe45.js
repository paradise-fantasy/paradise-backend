webpackJsonp([0,3],{0:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=a(2),n=_interopRequireDefault(l),r=a(31),u=_interopRequireDefault(r),c=a(164),s=_interopRequireDefault(c),o=document.createElement("div");o.id="app-root",o.className="full-width-height",document.body.appendChild(o),u["default"].render(n["default"].createElement(s["default"],null),o)},164:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=_interopRequireDefault(l),r=a(165),u=a(228),c=_interopRequireDefault(u),s=a(229),o=_interopRequireDefault(s),i=a(232),f=_interopRequireDefault(i),d=function(){return n["default"].createElement(r.Router,{history:r.browserHistory},n["default"].createElement(r.Route,{path:"/",component:c["default"]},n["default"].createElement(r.IndexRoute,{component:o["default"]}),n["default"].createElement(r.Route,{path:"/login",component:f["default"]})))};t["default"]=d},228:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=_interopRequireDefault(l),r=function(e){var t=e.children;return n["default"].createElement("div",{className:"full-width-height skin-blue"},t)};r.propTypes={children:n["default"].PropTypes.element.isRequired},t["default"]=r},229:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(2),r=_interopRequireDefault(n),u=a(230),c=_interopRequireDefault(u),s=function(e){switch(e.type){case"PERSON_ENTERED":return"Har ankommet Paradise.";case"PERSON_LEFT":return"Har forlatt Paradise.";default:return"Mangler beskrivelse"}},o=function(e){function Dashboard(e){_classCallCheck(this,Dashboard);var t=_possibleConstructorReturn(this,(Dashboard.__proto__||Object.getPrototypeOf(Dashboard)).call(this,e));return t.state={members:[],events:[]},t.fetchMembers=t.fetchMembers.bind(t),t.fetchEvents=t.fetchEvents.bind(t),t.fetchAll=t.fetchAll.bind(t),t}return _inherits(Dashboard,e),l(Dashboard,[{key:"componentDidMount",value:function(){this.fetchAll(),setInterval(this.fetchAll,3e3)}},{key:"fetchAll",value:function(){this.fetchMembers(),this.fetchEvents()}},{key:"fetchMembers",value:function(){var e=this;fetch("https://paradise-backend.herokuapp.com/api/members").then(function(e){return e.json()}).then(function(t){return e.setState({members:t})})}},{key:"fetchEvents",value:function(){var e=this;fetch("https://paradise-backend.herokuapp.com/api/bluetooth-events").then(function(e){return e.json()}).then(function(e){return e.map(function(e){return Object.assign(e,{description:s(e),date:(0,c["default"])(e.date)})})}).then(function(t){return e.setState({events:t})})}},{key:"render",value:function(){return r["default"].createElement("div",{className:"wrapper"},r["default"].createElement("header",{className:"main-header"},r["default"].createElement("div",{className:"logo"},"Paradise Fantasy"),r["default"].createElement("nav",{className:"navbar"})),r["default"].createElement("aside",{className:"main-sidebar"},r["default"].createElement("section",{className:"sidebar"},r["default"].createElement("ul",{className:"sidebar-menu"},r["default"].createElement("li",{className:"header"},"HEADER"),r["default"].createElement("li",null,r["default"].createElement("a",{href:"/"},r["default"].createElement("i",{className:"fa fa-link"}),r["default"].createElement("span",null,"Link?")))))),r["default"].createElement("div",{className:"content-wrapper",style:{minHeight:"calc(100vh - 101px)"}},r["default"].createElement("section",{className:"content-header"},r["default"].createElement("h1",null,"Dashboard",r["default"].createElement("small",null,"Version 0.1"))),r["default"].createElement("section",{className:"content"},r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},r["default"].createElement("div",{className:"info-box"},r["default"].createElement("span",{className:"info-box-icon bg-aqua"},r["default"].createElement("i",{className:"ion ion-gear-a"})),r["default"].createElement("div",{className:"info-box-content"},r["default"].createElement("span",{className:"info-box-text"},"CPU Traffic"),r["default"].createElement("span",{className:"info-box-number"},"90",r["default"].createElement("small",null,"%"))))),r["default"].createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},r["default"].createElement("div",{className:"info-box"},r["default"].createElement("span",{className:"info-box-icon bg-red"},r["default"].createElement("i",{className:"fa fa-google-plus"})),r["default"].createElement("div",{className:"info-box-content"},r["default"].createElement("span",{className:"info-box-text"},"LIKES"),r["default"].createElement("span",{className:"info-box-number"},"41,110")))),r["default"].createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},r["default"].createElement("div",{className:"info-box"},r["default"].createElement("span",{className:"info-box-icon bg-green"},r["default"].createElement("i",{className:"ion ion-ios-cart-outline"})),r["default"].createElement("div",{className:"info-box-content"},r["default"].createElement("span",{className:"info-box-text"},"SALES"),r["default"].createElement("span",{className:"info-box-number"},"760")))),r["default"].createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},r["default"].createElement("div",{className:"info-box"},r["default"].createElement("span",{className:"info-box-icon bg-yellow"},r["default"].createElement("i",{className:"ion ion-ios-people-outline"})),r["default"].createElement("div",{className:"info-box-content"},r["default"].createElement("span",{className:"info-box-text"},"MEDLEMMER"),r["default"].createElement("span",{className:"info-box-number"},this.state.members.length))))),r["default"].createElement("div",{className:"row"},r["default"].createElement("div",{className:"col-md-6 col-sm-12"},r["default"].createElement("div",{className:"box box-info"},r["default"].createElement("div",{className:"box-header with-border"},r["default"].createElement("h3",{className:"box-title"},"Siste hendelser")),r["default"].createElement("div",{className:"box-body"},r["default"].createElement("div",{className:"table-responsive"},r["default"].createElement("table",{className:"table no-margin"},r["default"].createElement("thead",null,r["default"].createElement("tr",null,r["default"].createElement("th",null,"Tidspunkt"),r["default"].createElement("th",null,"Hvem"),r["default"].createElement("th",null,"Hva"))),r["default"].createElement("tbody",null,this.state.events.map(function(e){return r["default"].createElement("tr",{key:e.id},r["default"].createElement("td",null,e.date.format("DD/MM HH:mm:ss")),r["default"].createElement("td",null,e.subject),r["default"].createElement("td",null,e.description))}))))),r["default"].createElement("div",{className:"box-footer clearfix"}))),r["default"].createElement("div",{className:"col-md-6 col-sm-12"},r["default"].createElement("div",{className:"box box-info"},r["default"].createElement("div",{className:"box-header with-border"},r["default"].createElement("h3",{className:"box-title"},"Medlemmer")),r["default"].createElement("div",{className:"box-body"},r["default"].createElement("div",{className:"table-responsive"},r["default"].createElement("table",{className:"table no-margin"},r["default"].createElement("thead",null,r["default"].createElement("tr",null,r["default"].createElement("th",null,"Navn"),r["default"].createElement("th",null,"MAC addresse"),r["default"].createElement("th",null,"Farge"),r["default"].createElement("th",null,"Rom"))),r["default"].createElement("tbody",null,this.state.members.map(function(e){return r["default"].createElement("tr",{key:e.id},r["default"].createElement("td",null,e.name),r["default"].createElement("td",null,e.bluetooth_address),r["default"].createElement("td",null,e.color),r["default"].createElement("td",null,e.room))}))))),r["default"].createElement("div",{className:"box-footer clearfix"})))))),r["default"].createElement("footer",{className:"main-footer"},r["default"].createElement("strong",null,"Paradise Fantasy")))}}]),Dashboard}(n.Component);t["default"]=o},232:function(e,t,a){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=_interopRequireDefault(l),r=function(){return n["default"].createElement("div",null)};t["default"]=r}});
//# sourceMappingURL=app.e8a9f60bc8d38e1cfe45.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kkm5:function(l,n,e){"use strict";e.r(n);var t,a=e("8Y7J"),i=function(){function l(l,n){this.headerDataService=l,this.tripService=n,this.headerDataService.customizeHeaderForHomePage(),this.popularTrips=[]}return l.prototype.ngOnInit=function(){this.getPopularTrips()},l.prototype.getPopularTrips=function(){var l=this;this.tripService.getPopularTrips(4).subscribe((function(n){l.popularTrips=n.popularTrips}))},l}(),o=function(){},r=e("t68o"),u=e("zbXB"),c=e("fo5T"),s=e("xYTU"),d=e("pMnS"),b=e("oMI/"),p=e("SVse"),h=function(){function l(l,n){this.popularTripService=l,this.analytics=n,this.source="Mumbai",this.destination="Goa",this.imageUrl="https://source.unsplash.com/230x250/?nature&_tripster="+Math.random()}return l.prototype.ngOnInit=function(){this.source=this.popularTrip.source.name,this.destination=this.popularTrip.destination.name},l.prototype.onClick=function(){this.popularTripService.setPopularTrip(this.popularTrip),this.analytics.eventEmitter("HomePage",this.popularTrip.source.name+" -> "+this.popularTrip.destination.name,"Popular Trips",1)},l}(),m=e("XNiG"),g=e("IheW"),f=((t=function(){function l(l){this.http=l,this.popularTripSubject=new m.a}return l.prototype.setPopularTrip=function(l){this.popularTripSubject.next(l)},l}()).ngInjectableDef=a.Sb({factory:function(){return new t(a.Tb(g.c))},token:t,providedIn:"root"}),t),C=e("Y9WU"),_=a.qb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.body[_ngcontent-%COMP%]{position:relative;width:100%;height:500px;cursor:pointer;background-repeat:no-repeat;background-size:cover;background-position:center}.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.body[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:38%;margin-left:50%;transform:translateX(-50%);color:#fff;font-size:25px}.body[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:52%;margin-left:50%;transform:translateX(-50%);color:#fff}.body[_ngcontent-%COMP%]   .destination[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:60%;margin-left:50%;transform:translateX(-50%);font-size:25px;color:#fff}"]],data:{}});function E(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,10,"div",[["class","body"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t}),null,null)),a.Jb(512,null,p.C,p.D,[a.k,a.s,a.D]),a.rb(2,278528,null,0,p.o,[p.C],{ngStyle:[0,"ngStyle"]},null),a.Hb(3,{background:0}),(l()(),a.sb(4,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(l()(),a.sb(5,0,null,null,1,"div",[["class","source"]],null,null,null,null,null)),(l()(),a.Mb(6,null,[" "," "])),(l()(),a.sb(7,0,null,null,1,"div",[["class","to"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,[" To "])),(l()(),a.sb(9,0,null,null,1,"div",[["class","destination"]],null,null,null,null,null)),(l()(),a.Mb(10,null,[" "," "]))],(function(l,n){var e=l(n,3,0,"url("+n.component.imageUrl+")");l(n,2,0,e)}),(function(l,n){var e=n.component;l(n,6,0,e.source),l(n,10,0,e.destination)}))}var v=e("HsOI"),w=e("s7LF"),y=e("lzlj"),M=e("igqZ"),D=e("omvX"),P=e("dKp1"),S=e("hL12"),O=e("LSHg"),T=e("dJrM"),k=e("Xd0L"),x=e("IP0z"),I=e("/HVE"),F=e("821u"),K=e("ZwOa"),N=e("oapL"),q=e("s6ns"),j=e("QQfA"),V=e("cw5Z"),L=e("Mr+X"),J=e("Gi4r"),z=e("bujt"),H=e("Fwaw"),X=e("5GAg"),G=e("ID/O"),A=function(){function l(l,n,e,t,a,i){this.tripService=l,this.router=n,this.timePickerThemeService=e,this.changeDetectRef=t,this.loginService=a,this.popularTripService=i,this.currentDate=new Date(Date.now()),this.tripDate=new Date(Date.now()),this.tripTime=this.tripDate.getHours().toString()+":"+this.tripDate.getMinutes().toString()+" am",this.vehicleMileage=22,this.sourceName="",this.destinationName="",this.searchForm=new w.h({mileage:new w.e(this.vehicleMileage,[w.u.pattern("^[1-9]+[0-9]*$")])})}return l.prototype.ngOnInit=function(){var l=this;this.minTime=this.getMinTime(),this.popularTripSubscription=this.popularTripService.popularTripSubject.subscribe((function(n){l.setGooglePlacesObjectByPopularTrip(n),l.sourceValid=!0,l.destinationValid=!0,l.isDuplicatePlace=!1}))},l.prototype.ngOnDestroy=function(){this.popularTripSubscription.unsubscribe()},l.prototype.handleInvalidSource=function(l){this.sourceValid=l.isValid},l.prototype.handleInvalidDestination=function(l){this.destinationValid=l.isValid},l.prototype.handleSourceChange=function(l){this.origin=l,this.checkForDuplicatePlace()},l.prototype.handleDestinationChange=function(l){this.destination=l,this.checkForDuplicatePlace()},l.prototype.handleTimeSet=function(l){this.tripTime=l,this.setTripDateTime(),this.validateDateTime()},l.prototype.handleDateSet=function(l){this.tripDate=new Date(l.value),this.setTripDateTime(),this.minTime=this.getMinTime(),this.validateDateTime()},l.prototype.validateDateTime=function(){this.invalidDepartureDateTimeError=this.tripDate.getTime()<new Date(Date.now()).setSeconds(0)},l.prototype.setTripDateTime=function(){var l=G.a.parseTimeStringToTime(this.tripTime);this.tripDate.setHours(l.hours),this.tripDate.setMinutes(l.minutes)},l.prototype.getMinDate=function(){return new Date(Date.now())},l.prototype.getMinTime=function(){return this.isDepartureDateMore()?new Date(new Date(this.currentDate).setHours(0,0)):new Date(this.currentDate)},l.prototype.isDepartureDateMore=function(){return this.tripDate.getFullYear()>this.currentDate.getFullYear()||this.tripDate.getMonth()>this.currentDate.getMonth()||this.tripDate.getDate()>this.currentDate.getDate()},l.prototype.checkForDuplicatePlace=function(){void 0!==this.origin&&void 0!==this.destination&&(this.isDuplicatePlace=this.origin.place_id===this.destination.place_id,this.changeDetectRef.detectChanges())},l.prototype.setGooglePlacesObjectByPopularTrip=function(l){var n=this,e={placeId:l.source.stopId,sessionToken:new google.maps.places.AutocompleteSessionToken,fields:["name","geometry","formatted_address","icon","permanently_closed","photos","place_id","plus_code","types","address_component","adr_address","vicinity","url"]};this.placeService=new google.maps.places.PlacesService(document.createElement("div")),this.placeService.getDetails(e,(function(l){n.origin=l})),e.placeId=l.destination.stopId,this.placeService.getDetails(e,(function(l){n.handleDestinationChange(l),n.destination=l})),this.sourceName=l.source.name,this.destinationName=l.destination.name},l.prototype.onSubmit=function(){var l=this,n=G.a.parseTimeStringToTime(this.tripTime);this.tripDate.setHours(n.hours),this.tripDate.setMinutes(n.minutes);var e=this.generateTrip();this.tripService.createTrip(e).subscribe((function(n){l.router.navigate(["/","planner",n.id]).then()}))},l.prototype.generateTrip=function(){return{userId:this.loginService.loggedIn?this.loginService.user.userId:"",source:{location:{latitude:this.origin.geometry.location.lat(),longitude:this.origin.geometry.location.lng()},stopId:this.origin.place_id,name:this.origin.name,arrival:this.tripDate.toString(),departure:this.tripDate.toString(),hotels:[],attractions:[]},destination:{location:{latitude:this.destination.geometry.location.lat(),longitude:this.destination.geometry.location.lng()},stopId:this.destination.place_id,name:this.destination.name,arrival:this.tripDate.toString(),departure:"Mon Nov 13 2090 11:37:09 GMT+0530 (India Standard Time)",hotels:[],attractions:[]},stops:[],mileage:this.vehicleMileage}},l.prototype.onMileageChange=function(l){this.vehicleMileage=+l.target.value},l}(),R=e("W524"),U=e("iInd"),B=e("/ead"),W=e("EFyh"),Y=a.qb({encapsulation:0,styles:[[".search-card[_ngcontent-%COMP%]{margin:15px auto auto;width:80%;max-width:1100px;padding-left:0;padding-right:0}.input-field[_ngcontent-%COMP%]{margin-left:1.5%}.timepicker[_ngcontent-%COMP%]{width:30px}.button[_ngcontent-%COMP%]{position:absolute;margin-top:.3%;margin-left:2%;height:60px;width:10%}.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{display:inline-flex;width:25%;margin-left:1%}.destination[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}.date[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{width:15%}hr[_ngcontent-%COMP%]{border:0;height:0;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(255,255,255,.3)}@media screen and (max-width:1300px) and (min-width:600px){.date-time[_ngcontent-%COMP%]{display:block}.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{width:40%}.date[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{width:39.5%}.button[_ngcontent-%COMP%]{margin-top:.8%}}@media screen and (max-width:1000px) and (min-width:600px){.button[_ngcontent-%COMP%]{margin-top:.5%}}@media screen and (max-width:600px){.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{width:97%}.button[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .mileage[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{margin-left:2%;width:96%}.button[_ngcontent-%COMP%]{display:block;width:88.5%}hr[_ngcontent-%COMP%]{margin-top:80px}}"]],data:{}});function Z(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[25,4]],0,v.b,[],null,null),(l()(),a.Mb(-1,null,["Mileage is required "]))],null,(function(l,n){l(n,0,0,a.Eb(n,1).id)}))}function Q(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[25,4]],0,v.b,[],null,null),(l()(),a.Mb(-1,null,["Mileage should be in the range 10-999 "]))],null,(function(l,n){l(n,0,0,a.Eb(n,1).id)}))}function $(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"p",[["style","color: red;"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,[" Source and Destination cannot be same "]))],null,null)}function ll(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"p",[["style","color: red;"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,[" Time can't be less than current time. "]))],null,null)}function nl(l){return a.Ob(0,[a.Gb(0,p.e,[a.t]),(l()(),a.sb(1,0,null,null,104,"form",[["class","search-card"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==a.Eb(l,3).onSubmit(e)&&t),"reset"===n&&(t=!1!==a.Eb(l,3).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit()&&t),t}),null,null)),a.rb(2,16384,null,0,w.y,[],null,null),a.rb(3,540672,null,0,w.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a.Jb(2048,null,w.b,null,[w.i]),a.rb(5,16384,null,0,w.p,[[4,w.b]],null,null),(l()(),a.sb(6,0,null,null,99,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,y.b,y.a)),a.rb(7,49152,null,0,M.a,[[2,D.a]],null,null),(l()(),a.sb(8,0,null,0,2,"div",[["class","source"]],null,null,null,null,null)),(l()(),a.sb(9,0,null,null,1,"app-place-autocomplete",[["class","input-field"],["placeholder","Source"]],null,[[null,"placeChange"],[null,"IsValid"]],(function(l,n,e){var t=!0,a=l.component;return"placeChange"===n&&(t=!1!==a.handleSourceChange(e)&&t),"IsValid"===n&&(t=!1!==a.handleInvalidSource(e)&&t),t}),P.b,P.a)),a.rb(10,114688,null,0,S.a,[a.y,O.o],{value:[0,"value"],placeholder:[1,"placeholder"]},{IsValid:"IsValid",placeChange:"placeChange"}),(l()(),a.sb(11,0,null,0,2,"div",[["class","destination"]],null,null,null,null,null)),(l()(),a.sb(12,0,null,null,1,"app-place-autocomplete",[["class","input-field"],["placeholder","Destination"]],null,[[null,"placeChange"],[null,"IsValid"]],(function(l,n,e){var t=!0,a=l.component;return"placeChange"===n&&(t=!1!==a.handleDestinationChange(e)&&t),"IsValid"===n&&(t=!1!==a.handleInvalidDestination(e)&&t),t}),P.b,P.a)),a.rb(13,114688,null,0,S.a,[a.y,O.o],{value:[0,"value"],placeholder:[1,"placeholder"]},{IsValid:"IsValid",placeChange:"placeChange"}),(l()(),a.sb(14,0,null,0,60,"span",[["class","date-time"]],null,null,null,null,null)),(l()(),a.sb(15,0,null,null,27,"span",[],null,null,null,null,null)),(l()(),a.sb(16,0,null,null,26,"mat-form-field",[["appearance","outline"],["class","date input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,T.b,T.a)),a.rb(17,7520256,null,9,v.c,[a.k,a.h,[2,k.h],[2,x.b],[2,v.a],I.a,a.y,[2,D.a]],{appearance:[0,"appearance"]},null),a.Kb(603979776,1,{_controlNonStatic:0}),a.Kb(335544320,2,{_controlStatic:0}),a.Kb(603979776,3,{_labelChildNonStatic:0}),a.Kb(335544320,4,{_labelChildStatic:0}),a.Kb(603979776,5,{_placeholderChild:0}),a.Kb(603979776,6,{_errorChildren:1}),a.Kb(603979776,7,{_hintChildren:1}),a.Kb(603979776,8,{_prefixChildren:1}),a.Kb(603979776,9,{_suffixChildren:1}),(l()(),a.sb(27,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.rb(28,16384,[[3,4],[4,4]],0,v.f,[],null,null),(l()(),a.Mb(-1,null,["Date"])),(l()(),a.sb(30,0,null,1,6,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["readonly",""],["style","width: 100%; cursor: pointer;"]],[[1,"aria-haspopup",0],[1,"aria-owns",0],[1,"min",0],[1,"max",0],[8,"disabled",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"dateChange"],[null,"focus"],[null,"input"],[null,"change"],[null,"blur"],[null,"keydown"]],(function(l,n,e){var t=!0,i=l.component;return"input"===n&&(t=!1!==a.Eb(l,33)._onInput(e.target.value)&&t),"change"===n&&(t=!1!==a.Eb(l,33)._onChange()&&t),"blur"===n&&(t=!1!==a.Eb(l,33)._onBlur()&&t),"keydown"===n&&(t=!1!==a.Eb(l,33)._onKeydown(e)&&t),"blur"===n&&(t=!1!==a.Eb(l,35)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Eb(l,35)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Eb(l,35)._onInput()&&t),"dateChange"===n&&(t=!1!==i.handleDateSet(e)&&t),"focus"===n&&(t=!1!==a.Eb(l,42).open()&&t),t}),null,null)),a.Jb(5120,null,w.m,(function(l){return[l]}),[F.h]),a.Jb(5120,null,w.l,(function(l){return[l]}),[F.h]),a.rb(33,147456,null,0,F.h,[a.k,[2,k.a],[2,k.e],[2,v.c]],{matDatepicker:[0,"matDatepicker"],value:[1,"value"],min:[2,"min"]},{dateChange:"dateChange"}),a.Jb(2048,null,K.a,null,[F.h]),a.rb(35,999424,null,0,K.b,[a.k,I.a,[8,null],[2,w.q],[2,w.i],k.b,[6,K.a],N.a,a.y],{value:[0,"value"],readonly:[1,"readonly"]},null),a.Jb(2048,[[1,4],[2,4]],v.d,null,[K.b]),(l()(),a.sb(37,0,null,4,3,"mat-datepicker-toggle",[["class","mat-datepicker-toggle"],["matSuffix",""]],[[1,"tabindex",0],[2,"mat-datepicker-toggle-active",null],[2,"mat-accent",null],[2,"mat-warn",null]],[[null,"focus"]],(function(l,n,e){var t=!0;return"focus"===n&&(t=!1!==a.Eb(l,39)._button.focus()&&t),t}),u.e,u.d)),a.rb(38,16384,[[9,4]],0,v.g,[],null,null),a.rb(39,1753088,null,1,F.k,[F.i,a.h,[8,null]],{datepicker:[0,"datepicker"]},null),a.Kb(603979776,10,{_customIcon:0}),(l()(),a.sb(41,16777216,null,1,1,"mat-datepicker",[],null,null,null,u.f,u.c)),a.rb(42,180224,[["myDatepicker",4]],0,F.f,[q.e,j.c,a.y,a.O,F.a,[2,k.a],[2,x.b],[2,p.d]],null,null),(l()(),a.sb(43,0,null,null,28,"span",[],null,null,null,null,null)),(l()(),a.sb(44,0,null,null,25,"mat-form-field",[["appearance","outline"],["class","time input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,T.b,T.a)),a.rb(45,7520256,null,9,v.c,[a.k,a.h,[2,k.h],[2,x.b],[2,v.a],I.a,a.y,[2,D.a]],{appearance:[0,"appearance"]},null),a.Kb(603979776,11,{_controlNonStatic:0}),a.Kb(335544320,12,{_controlStatic:0}),a.Kb(603979776,13,{_labelChildNonStatic:0}),a.Kb(335544320,14,{_labelChildStatic:0}),a.Kb(603979776,15,{_placeholderChild:0}),a.Kb(603979776,16,{_errorChildren:1}),a.Kb(603979776,17,{_hintChildren:1}),a.Kb(603979776,18,{_prefixChildren:1}),a.Kb(603979776,19,{_suffixChildren:1}),(l()(),a.sb(55,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.rb(56,16384,[[13,4],[14,4]],0,v.f,[],null,null),(l()(),a.Mb(-1,null,["Time"])),(l()(),a.sb(58,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["readonly",""],["style","width: 100%; cursor: pointer;"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[8,"disabled",0]],[[null,"blur"],[null,"focus"],[null,"input"],[null,"change"],[null,"click"]],(function(l,n,e){var t=!0;return"blur"===n&&(t=!1!==a.Eb(l,60)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Eb(l,60)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Eb(l,60)._onInput()&&t),"change"===n&&(t=!1!==a.Eb(l,62).updateValue(e.target.value)&&t),"blur"===n&&(t=!1!==a.Eb(l,62).onTouched()&&t),"click"===n&&(t=!1!==a.Eb(l,62).onClick(e)&&t),t}),null,null)),a.Jb(5120,null,w.m,(function(l){return[l]}),[V.f]),a.rb(60,999424,null,0,K.b,[a.k,I.a,[8,null],[2,w.q],[2,w.i],k.b,[8,null],N.a,a.y],{value:[0,"value"],readonly:[1,"readonly"]},null),a.Ib(61,2),a.rb(62,671744,null,0,V.f,[a.k,V.n],{format:[0,"format"],min:[1,"min"],timepicker:[2,"timepicker"],value:[3,"value"]},null),a.Ib(63,2),a.Ib(64,2),a.Jb(2048,[[11,4],[12,4]],v.d,null,[K.b]),(l()(),a.sb(66,0,null,4,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"],["style","color: gray"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,L.b,L.a)),a.rb(67,16384,[[19,4]],0,v.g,[],null,null),a.rb(68,9158656,null,0,J.b,[a.k,J.d,[8,null],[2,J.a],[2,a.l]],null,null),(l()(),a.Mb(-1,0,["access_time"])),(l()(),a.sb(70,0,null,null,1,"ngx-material-timepicker",[],null,[[null,"timeSet"]],(function(l,n,e){var t=!0;return"timeSet"===n&&(t=!1!==l.component.handleTimeSet(e)&&t),t}),c.b,c.a)),a.rb(71,49152,[["endTime",4]],0,V.a,[V.g,V.h],{theme:[0,"theme"]},{timeSet:"timeSet"}),(l()(),a.sb(72,0,null,null,2,"button",[["class","button"],["color","primary"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,z.b,z.a)),a.rb(73,180224,null,0,H.b,[a.k,X.f,[2,D.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),a.Mb(-1,0,[" Go "])),(l()(),a.sb(75,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),a.sb(76,0,null,0,25,"mat-form-field",[["appearance","outline"],["class","mileage input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,T.b,T.a)),a.rb(77,7520256,null,9,v.c,[a.k,a.h,[2,k.h],[2,x.b],[2,v.a],I.a,a.y,[2,D.a]],{appearance:[0,"appearance"]},null),a.Kb(603979776,20,{_controlNonStatic:0}),a.Kb(335544320,21,{_controlStatic:0}),a.Kb(603979776,22,{_labelChildNonStatic:0}),a.Kb(335544320,23,{_labelChildStatic:0}),a.Kb(603979776,24,{_placeholderChild:0}),a.Kb(603979776,25,{_errorChildren:1}),a.Kb(603979776,26,{_hintChildren:1}),a.Kb(603979776,27,{_prefixChildren:1}),a.Kb(603979776,28,{_suffixChildren:1}),(l()(),a.sb(87,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.rb(88,16384,[[22,4],[23,4]],0,v.f,[],null,null),(l()(),a.Mb(-1,null,["Mileage of your vehicle (in kmpl)"])),(l()(),a.sb(90,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","mileage"],["matInput",""],["placeholder","Enter Mileage(Km/l)"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var t=!0,i=l.component;return"input"===n&&(t=!1!==a.Eb(l,91)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Eb(l,91).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Eb(l,91)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Eb(l,91)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Eb(l,95)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Eb(l,95)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Eb(l,95)._onInput()&&t),"change"===n&&(t=!1!==i.onMileageChange(e)&&t),t}),null,null)),a.rb(91,16384,null,0,w.c,[a.D,a.k,[2,w.a]],null,null),a.Jb(1024,null,w.m,(function(l){return[l]}),[w.c]),a.rb(93,671744,null,0,w.g,[[3,w.b],[8,null],[8,null],[6,w.m],[2,w.x]],{name:[0,"name"]},null),a.Jb(2048,null,w.n,null,[w.g]),a.rb(95,999424,null,0,K.b,[a.k,I.a,[6,w.n],[2,w.q],[2,w.i],k.b,[8,null],N.a,a.y],{placeholder:[0,"placeholder"]},null),a.rb(96,16384,null,0,w.o,[[4,w.n]],null,null),a.Jb(2048,[[20,4],[21,4]],v.d,null,[K.b]),(l()(),a.hb(16777216,null,5,1,null,Z)),a.rb(99,16384,null,0,p.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,5,1,null,Q)),a.rb(101,16384,null,0,p.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,$)),a.rb(103,16384,null,0,p.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,ll)),a.rb(105,16384,null,0,p.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.searchForm),l(n,10,0,e.sourceName,"Source"),l(n,13,0,e.destinationName,"Destination"),l(n,17,0,"outline"),l(n,33,0,a.Eb(n,42),e.tripDate,e.getMinDate()),l(n,35,0,e.tripDate,""),l(n,39,0,a.Eb(n,42)),l(n,45,0,"outline");var t=a.Nb(n,60,0,l(n,61,0,a.Eb(n,0),e.getMinDate(),"h:mm a"));l(n,60,0,t,"");var i=a.Nb(n,62,1,l(n,63,0,a.Eb(n,0),e.getMinTime(),"h:mm a")),o=a.Eb(n,71),r=a.Nb(n,62,3,l(n,64,0,a.Eb(n,0),e.getMinDate(),"h:mm a"));l(n,62,0,12,i,o,r),l(n,68,0),l(n,71,0,e.timePickerThemeService.darkTheme),l(n,73,0,!e.sourceValid||!e.destinationValid||e.isDuplicatePlace||e.invalidDepartureDateTimeError,"primary"),l(n,77,0,"outline"),l(n,93,0,"mileage"),l(n,95,0,"Enter Mileage(Km/l)"),l(n,99,0,null==e.searchForm.controls.mileage.errors?null:e.searchForm.controls.mileage.errors.required),l(n,101,0,null==e.searchForm.controls.mileage.errors?null:e.searchForm.controls.mileage.errors.pattern),l(n,103,0,e.isDuplicatePlace),l(n,105,0,e.invalidDepartureDateTimeError)}),(function(l,n){l(n,1,0,a.Eb(n,5).ngClassUntouched,a.Eb(n,5).ngClassTouched,a.Eb(n,5).ngClassPristine,a.Eb(n,5).ngClassDirty,a.Eb(n,5).ngClassValid,a.Eb(n,5).ngClassInvalid,a.Eb(n,5).ngClassPending),l(n,6,0,"NoopAnimations"===a.Eb(n,7)._animationMode),l(n,16,1,["standard"==a.Eb(n,17).appearance,"fill"==a.Eb(n,17).appearance,"outline"==a.Eb(n,17).appearance,"legacy"==a.Eb(n,17).appearance,a.Eb(n,17)._control.errorState,a.Eb(n,17)._canLabelFloat,a.Eb(n,17)._shouldLabelFloat(),a.Eb(n,17)._hasFloatingLabel(),a.Eb(n,17)._hideControlPlaceholder(),a.Eb(n,17)._control.disabled,a.Eb(n,17)._control.autofilled,a.Eb(n,17)._control.focused,"accent"==a.Eb(n,17).color,"warn"==a.Eb(n,17).color,a.Eb(n,17)._shouldForward("untouched"),a.Eb(n,17)._shouldForward("touched"),a.Eb(n,17)._shouldForward("pristine"),a.Eb(n,17)._shouldForward("dirty"),a.Eb(n,17)._shouldForward("valid"),a.Eb(n,17)._shouldForward("invalid"),a.Eb(n,17)._shouldForward("pending"),!a.Eb(n,17)._animationsEnabled]),l(n,30,1,[a.Eb(n,33)._datepicker?"dialog":null,(null==a.Eb(n,33)._datepicker?null:a.Eb(n,33)._datepicker.opened)&&a.Eb(n,33)._datepicker.id||null,a.Eb(n,33).min?a.Eb(n,33)._dateAdapter.toIso8601(a.Eb(n,33).min):null,a.Eb(n,33).max?a.Eb(n,33)._dateAdapter.toIso8601(a.Eb(n,33).max):null,a.Eb(n,33).disabled,a.Eb(n,35)._isServer,a.Eb(n,35).id,a.Eb(n,35).placeholder,a.Eb(n,35).disabled,a.Eb(n,35).required,a.Eb(n,35).readonly&&!a.Eb(n,35)._isNativeSelect||null,a.Eb(n,35)._ariaDescribedby||null,a.Eb(n,35).errorState,a.Eb(n,35).required.toString()]),l(n,37,0,-1,a.Eb(n,39).datepicker&&a.Eb(n,39).datepicker.opened,a.Eb(n,39).datepicker&&"accent"===a.Eb(n,39).datepicker.color,a.Eb(n,39).datepicker&&"warn"===a.Eb(n,39).datepicker.color),l(n,44,1,["standard"==a.Eb(n,45).appearance,"fill"==a.Eb(n,45).appearance,"outline"==a.Eb(n,45).appearance,"legacy"==a.Eb(n,45).appearance,a.Eb(n,45)._control.errorState,a.Eb(n,45)._canLabelFloat,a.Eb(n,45)._shouldLabelFloat(),a.Eb(n,45)._hasFloatingLabel(),a.Eb(n,45)._hideControlPlaceholder(),a.Eb(n,45)._control.disabled,a.Eb(n,45)._control.autofilled,a.Eb(n,45)._control.focused,"accent"==a.Eb(n,45).color,"warn"==a.Eb(n,45).color,a.Eb(n,45)._shouldForward("untouched"),a.Eb(n,45)._shouldForward("touched"),a.Eb(n,45)._shouldForward("pristine"),a.Eb(n,45)._shouldForward("dirty"),a.Eb(n,45)._shouldForward("valid"),a.Eb(n,45)._shouldForward("invalid"),a.Eb(n,45)._shouldForward("pending"),!a.Eb(n,45)._animationsEnabled]),l(n,58,0,a.Eb(n,60)._isServer,a.Eb(n,60).id,a.Eb(n,60).placeholder,a.Eb(n,60).disabled,a.Eb(n,60).required,a.Eb(n,60).readonly&&!a.Eb(n,60)._isNativeSelect||null,a.Eb(n,60)._ariaDescribedby||null,a.Eb(n,60).errorState,a.Eb(n,60).required.toString(),a.Eb(n,62).disabled),l(n,66,0,a.Eb(n,68).inline,"primary"!==a.Eb(n,68).color&&"accent"!==a.Eb(n,68).color&&"warn"!==a.Eb(n,68).color),l(n,72,0,a.Eb(n,73).disabled||null,"NoopAnimations"===a.Eb(n,73)._animationMode),l(n,76,1,["standard"==a.Eb(n,77).appearance,"fill"==a.Eb(n,77).appearance,"outline"==a.Eb(n,77).appearance,"legacy"==a.Eb(n,77).appearance,a.Eb(n,77)._control.errorState,a.Eb(n,77)._canLabelFloat,a.Eb(n,77)._shouldLabelFloat(),a.Eb(n,77)._hasFloatingLabel(),a.Eb(n,77)._hideControlPlaceholder(),a.Eb(n,77)._control.disabled,a.Eb(n,77)._control.autofilled,a.Eb(n,77)._control.focused,"accent"==a.Eb(n,77).color,"warn"==a.Eb(n,77).color,a.Eb(n,77)._shouldForward("untouched"),a.Eb(n,77)._shouldForward("touched"),a.Eb(n,77)._shouldForward("pristine"),a.Eb(n,77)._shouldForward("dirty"),a.Eb(n,77)._shouldForward("valid"),a.Eb(n,77)._shouldForward("invalid"),a.Eb(n,77)._shouldForward("pending"),!a.Eb(n,77)._animationsEnabled]),l(n,90,1,[a.Eb(n,95)._isServer,a.Eb(n,95).id,a.Eb(n,95).placeholder,a.Eb(n,95).disabled,a.Eb(n,95).required,a.Eb(n,95).readonly&&!a.Eb(n,95)._isNativeSelect||null,a.Eb(n,95)._ariaDescribedby||null,a.Eb(n,95).errorState,a.Eb(n,95).required.toString(),a.Eb(n,96).ngClassUntouched,a.Eb(n,96).ngClassTouched,a.Eb(n,96).ngClassPristine,a.Eb(n,96).ngClassDirty,a.Eb(n,96).ngClassValid,a.Eb(n,96).ngClassInvalid,a.Eb(n,96).ngClassPending])}))}var el=e("wjE7"),tl=a.qb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.full-height[_ngcontent-%COMP%]{height:100vh}.container[_ngcontent-%COMP%]{position:absolute;width:100%;background-color:#eee}.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;padding:0;height:266px;width:100%}img[_ngcontent-%COMP%]{opacity:.9}.img-background[_ngcontent-%COMP%]{background-color:var(--main-theme-color)}@media screen and (max-width:1300px) and (min-width:600px){.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{height:356px}}.info[_ngcontent-%COMP%]{position:relative;width:100%}.tagline[_ngcontent-%COMP%]{color:#fff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;letter-spacing:1px;margin:100px auto auto}@media screen and (max-width:600px){.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{height:340px}.tagline[_ngcontent-%COMP%]{font-size:25px}}@media screen and (max-width:400px){.info[_ngcontent-%COMP%]{position:relative;width:80%;margin:auto}}.popular-trips[_ngcontent-%COMP%]{width:80%;height:300px;margin:100px auto 50px;overflow:hidden}.popular-trips[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:18px}.popular-trips[_ngcontent-%COMP%]   .trips[_ngcontent-%COMP%]{overflow:hidden;overflow-x:auto}.popular-trips[_ngcontent-%COMP%]   .trip-list[_ngcontent-%COMP%]{position:relative;flex-direction:row;width:100%;min-width:850px;margin-top:20px}.popular-trips[_ngcontent-%COMP%]   .trip-list[_ngcontent-%COMP%]   .trip[_ngcontent-%COMP%]{display:inline-block;width:25%;min-width:200px;height:250px;background-color:#fff;border:1px solid #c7c7c7;border-radius:10px;overflow:hidden}"]],data:{}});function al(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"div",[["class","trip"]],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"app-popular-trip",[],null,null,null,E,_)),a.rb(2,114688,null,0,h,[f,C.a],{popularTrip:[0,"popularTrip"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function il(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,6,"div",[["class","popular-trips"]],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Popular Roadtrips"])),(l()(),a.sb(3,0,null,null,3,"div",[["class","trips"]],null,null,null,null,null)),(l()(),a.sb(4,0,null,null,2,"div",[["class","trip-list"]],null,null,null,null,null)),(l()(),a.hb(16777216,null,null,1,null,al)),a.rb(6,278528,null,0,p.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.component.popularTrips)}),null)}function ol(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,12,"div",[["class","container"]],null,null,null,null,null)),a.Jb(512,null,p.C,p.D,[a.k,a.s,a.D]),a.rb(2,278528,null,0,p.o,[p.C],{ngStyle:[0,"ngStyle"]},null),a.Hb(3,{height:0}),(l()(),a.sb(4,0,null,null,0,"div",[["class","img-background"]],null,null,null,null,null)),(l()(),a.sb(5,0,null,null,0,"img",[["alt","homepage-background"],["src","assets/img/homepage-background.jpg"]],null,null,null,null,null)),(l()(),a.sb(6,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),a.sb(7,0,null,null,1,"h1",[["class","tagline"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Plan your trip like never before"])),(l()(),a.sb(9,0,null,null,1,"app-search",[],null,null,null,nl,Y)),a.rb(10,245760,null,0,A,[R.a,U.l,B.a,a.h,W.a,f],null,null),(l()(),a.hb(16777216,null,null,1,null,il)),a.rb(12,16384,null,0,p.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component,t=l(n,3,0,(null==e.popularTrips?null:e.popularTrips.length)>0?"165vh":"100vh");l(n,2,0,t),l(n,10,0),l(n,12,0,0!==(null==e.popularTrips?null:e.popularTrips.length))}),null)}var rl=a.ob("app-home-page",i,(function(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"app-home-page",[],null,null,null,ol,tl)),a.rb(1,114688,null,0,i,[el.a,R.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),ul=e("POq0"),cl=e("/Co4"),sl=e("cUpR"),dl=e("JjoW"),bl=e("zMNK"),pl=e("hOhj"),hl=e("BzsH"),ml=e("dFDH"),gl=e("W5yJ"),fl=e("lT8R"),Cl=e("lGt0"),_l=e("DyN7"),El=e("PCNd");e.d(n,"HomePageModuleNgFactory",(function(){return vl}));var vl=a.pb(o,[],(function(l){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[r.a,u.b,u.a,c.c,s.a,s.b,d.a,b.a,rl]],[3,a.j],a.w]),a.Cb(4608,w.w,w.w,[]),a.Cb(4608,w.d,w.d,[]),a.Cb(4608,p.n,p.m,[a.t,[2,p.F]]),a.Cb(4608,ul.c,ul.c,[]),a.Cb(4608,k.b,k.b,[]),a.Cb(4608,j.c,j.c,[j.i,j.e,a.j,j.h,j.f,a.q,a.y,p.d,x.b,[2,p.h]]),a.Cb(5120,j.j,j.k,[j.c]),a.Cb(5120,q.c,q.d,[j.c]),a.Cb(135680,q.e,q.e,[j.c,a.q,[2,p.h],[2,q.b],q.c,[3,q.e],j.e]),a.Cb(4608,F.i,F.i,[]),a.Cb(5120,F.a,F.b,[j.c]),a.Cb(4608,k.a,k.w,[[2,k.f],I.a]),a.Cb(5120,cl.b,cl.c,[j.c]),a.Cb(4608,sl.e,k.c,[[2,k.g],[2,k.l]]),a.Cb(5120,dl.a,dl.b,[j.c]),a.Cb(4608,g.i,g.o,[p.d,a.A,g.m]),a.Cb(4608,g.p,g.p,[g.i,g.n]),a.Cb(5120,g.a,(function(l){return[l]}),[g.p]),a.Cb(4608,g.l,g.l,[]),a.Cb(6144,g.j,null,[g.l]),a.Cb(4608,g.h,g.h,[g.j]),a.Cb(6144,g.b,null,[g.h]),a.Cb(4608,g.g,g.k,[g.b,a.q]),a.Cb(4608,g.c,g.c,[g.g]),a.Cb(1073742336,w.v,w.v,[]),a.Cb(1073742336,w.j,w.j,[]),a.Cb(1073742336,w.t,w.t,[]),a.Cb(1073742336,p.c,p.c,[]),a.Cb(1073742336,ul.d,ul.d,[]),a.Cb(1073742336,v.e,v.e,[]),a.Cb(1073742336,I.b,I.b,[]),a.Cb(1073742336,N.c,N.c,[]),a.Cb(1073742336,K.c,K.c,[]),a.Cb(1073742336,x.a,x.a,[]),a.Cb(1073742336,k.l,k.l,[[2,k.d],[2,sl.f]]),a.Cb(1073742336,M.c,M.c,[]),a.Cb(1073742336,k.v,k.v,[]),a.Cb(1073742336,H.c,H.c,[]),a.Cb(1073742336,bl.f,bl.f,[]),a.Cb(1073742336,pl.b,pl.b,[]),a.Cb(1073742336,j.g,j.g,[]),a.Cb(1073742336,q.h,q.h,[]),a.Cb(1073742336,X.a,X.a,[]),a.Cb(1073742336,F.j,F.j,[]),a.Cb(1073742336,k.x,k.x,[]),a.Cb(1073742336,k.n,k.n,[]),a.Cb(1073742336,V.b,V.b,[]),a.Cb(1073742336,hl.a,hl.a,[]),a.Cb(1073742336,k.t,k.t,[]),a.Cb(1073742336,k.q,k.q,[]),a.Cb(1073742336,cl.e,cl.e,[]),a.Cb(1073742336,ml.e,ml.e,[]),a.Cb(1073742336,J.c,J.c,[]),a.Cb(1073742336,gl.c,gl.c,[]),a.Cb(1073742336,fl.a,fl.a,[]),a.Cb(1073742336,Cl.a,Cl.a,[]),a.Cb(1073742336,dl.d,dl.d,[]),a.Cb(1073742336,_l.a,_l.a,[]),a.Cb(1073742336,g.e,g.e,[]),a.Cb(1073742336,g.d,g.d,[]),a.Cb(1073742336,U.n,U.n,[[2,U.s],[2,U.l]]),a.Cb(1073742336,El.a,El.a,[]),a.Cb(1073742336,o,o,[]),a.Cb(256,k.e,k.i,[]),a.Cb(256,V.n,"en-US",[]),a.Cb(256,g.m,"XSRF-TOKEN",[]),a.Cb(256,g.n,"X-XSRF-TOKEN",[]),a.Cb(1024,U.j,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);
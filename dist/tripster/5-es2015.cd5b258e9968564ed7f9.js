(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kkm5:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class a{constructor(l,n){this.headerDataService=l,this.tripService=n,this.headerDataService.customizeHeaderForHomePage(),this.popularTrips=[]}ngOnInit(){this.getPopularTrips()}getPopularTrips(){this.tripService.getPopularTrips(4).subscribe(l=>{this.popularTrips=l.popularTrips})}}class i{}var r=e("t68o"),o=e("zbXB"),u=e("fo5T"),c=e("xYTU"),s=e("pMnS"),d=e("oMI/"),b=e("SVse");class p{constructor(l,n){this.popularTripService=l,this.analytics=n,this.source="Mumbai",this.destination="Goa",this.imageUrl="https://source.unsplash.com/230x250/?nature&_tripster="+Math.random()}ngOnInit(){this.source=this.popularTrip.source.name,this.destination=this.popularTrip.destination.name}onClick(){this.popularTripService.setPopularTrip(this.popularTrip),this.analytics.eventEmitter("HomePage",this.popularTrip.source.name+" -> "+this.popularTrip.destination.name,"Popular Trips",1)}}var h=e("XNiG"),m=e("IheW");let g=(()=>{class l{constructor(l){this.http=l,this.popularTripSubject=new h.a}setPopularTrip(l){this.popularTripSubject.next(l)}}return l.ngInjectableDef=t.Sb({factory:function(){return new l(t.Tb(m.c))},token:l,providedIn:"root"}),l})();var f=e("Y9WU"),C=t.qb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.body[_ngcontent-%COMP%]{position:relative;width:100%;height:500px;cursor:pointer;background-repeat:no-repeat;background-size:cover;background-position:center}.body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.body[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:38%;margin-left:50%;transform:translateX(-50%);color:#fff;font-size:25px}.body[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:52%;margin-left:50%;transform:translateX(-50%);color:#fff}.body[_ngcontent-%COMP%]   .destination[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:60%;margin-left:50%;transform:translateX(-50%);font-size:25px;color:#fff}"]],data:{}});function _(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,10,"div",[["class","body"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t}),null,null)),t.Jb(512,null,b.C,b.D,[t.k,t.s,t.D]),t.rb(2,278528,null,0,b.o,[b.C],{ngStyle:[0,"ngStyle"]},null),t.Hb(3,{background:0}),(l()(),t.sb(4,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.sb(5,0,null,null,1,"div",[["class","source"]],null,null,null,null,null)),(l()(),t.Mb(6,null,[" "," "])),(l()(),t.sb(7,0,null,null,1,"div",[["class","to"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" To "])),(l()(),t.sb(9,0,null,null,1,"div",[["class","destination"]],null,null,null,null,null)),(l()(),t.Mb(10,null,[" "," "]))],(function(l,n){var e=l(n,3,0,"url("+n.component.imageUrl+")");l(n,2,0,e)}),(function(l,n){var e=n.component;l(n,6,0,e.source),l(n,10,0,e.destination)}))}var E=e("HsOI"),v=e("s7LF"),w=e("lzlj"),M=e("igqZ"),D=e("omvX"),y=e("dKp1"),P=e("hL12"),S=e("LSHg"),O=e("dJrM"),T=e("Xd0L"),k=e("IP0z"),x=e("/HVE"),I=e("821u"),F=e("ZwOa"),K=e("oapL"),N=e("s6ns"),q=e("QQfA"),j=e("cw5Z"),V=e("Mr+X"),L=e("Gi4r"),z=e("bujt"),J=e("Fwaw"),H=e("5GAg"),X=e("ID/O");class G{constructor(l,n,e,t,a,i){this.tripService=l,this.router=n,this.timePickerThemeService=e,this.changeDetectRef=t,this.loginService=a,this.popularTripService=i,this.currentDate=new Date(Date.now()),this.tripDate=new Date(Date.now()),this.tripTime=this.tripDate.getHours().toString()+":"+this.tripDate.getMinutes().toString()+" am",this.vehicleMileage=22,this.sourceName="",this.destinationName="",this.searchForm=new v.h({mileage:new v.e(this.vehicleMileage,[v.u.pattern("^[1-9]+[0-9]*$")])})}ngOnInit(){this.minTime=this.getMinTime(),this.popularTripSubscription=this.popularTripService.popularTripSubject.subscribe(l=>{this.setGooglePlacesObjectByPopularTrip(l),this.sourceValid=!0,this.destinationValid=!0,this.isDuplicatePlace=!1})}ngOnDestroy(){this.popularTripSubscription.unsubscribe()}handleInvalidSource(l){this.sourceValid=l.isValid}handleInvalidDestination(l){this.destinationValid=l.isValid}handleSourceChange(l){this.origin=l,console.log(l),this.checkForDuplicatePlace()}handleDestinationChange(l){this.destination=l,this.checkForDuplicatePlace()}handleTimeSet(l){this.tripTime=l,this.setTripDateTime(),this.validateDateTime()}handleDateSet(l){this.tripDate=new Date(l.value),this.setTripDateTime(),this.minTime=this.getMinTime(),this.validateDateTime()}validateDateTime(){this.invalidDepartureDateTimeError=this.tripDate.getTime()<new Date(Date.now()).setSeconds(0)}setTripDateTime(){const l=X.a.parseTimeStringToTime(this.tripTime);this.tripDate.setHours(l.hours),this.tripDate.setMinutes(l.minutes)}getMinDate(){return new Date(Date.now())}getMinTime(){return this.isDepartureDateMore()?new Date(new Date(this.currentDate).setHours(0,0)):new Date(this.currentDate)}isDepartureDateMore(){return this.tripDate.getFullYear()>this.currentDate.getFullYear()||this.tripDate.getMonth()>this.currentDate.getMonth()||this.tripDate.getDate()>this.currentDate.getDate()}checkForDuplicatePlace(){void 0!==this.origin&&void 0!==this.destination&&(this.isDuplicatePlace=this.origin.place_id===this.destination.place_id,this.changeDetectRef.detectChanges())}setGooglePlacesObjectByPopularTrip(l){const n={placeId:l.source.stopId,sessionToken:new google.maps.places.AutocompleteSessionToken,fields:["name","geometry","formatted_address","icon","permanently_closed","photos","place_id","plus_code","types","address_component","adr_address","vicinity","url"]};this.placeService=new google.maps.places.PlacesService(document.createElement("div")),this.placeService.getDetails(n,l=>{this.origin=l}),n.placeId=l.destination.stopId,this.placeService.getDetails(n,l=>{this.handleDestinationChange(l),this.destination=l}),this.sourceName=l.source.name,this.destinationName=l.destination.name}onSubmit(){const l=X.a.parseTimeStringToTime(this.tripTime);this.tripDate.setHours(l.hours),this.tripDate.setMinutes(l.minutes);const n=this.generateTrip();this.tripService.createTrip(n).subscribe(l=>{this.router.navigate(["/","planner",l.id]).then()})}generateTrip(){return{userId:this.loginService.loggedIn?this.loginService.user.userId:"",source:{location:{latitude:this.origin.geometry.location.lat(),longitude:this.origin.geometry.location.lng()},stopId:this.origin.place_id,name:this.origin.name,arrival:this.tripDate.toString(),departure:this.tripDate.toString(),hotels:[],attractions:[]},destination:{location:{latitude:this.destination.geometry.location.lat(),longitude:this.destination.geometry.location.lng()},stopId:this.destination.place_id,name:this.destination.name,arrival:this.tripDate.toString(),departure:"Mon Nov 13 2090 11:37:09 GMT+0530 (India Standard Time)",hotels:[],attractions:[]},stops:[],mileage:this.vehicleMileage}}onMileageChange(l){this.vehicleMileage=+l.target.value}}var A=e("W524"),R=e("iInd"),U=e("/ead"),B=e("EFyh"),W=t.qb({encapsulation:0,styles:[[".search-card[_ngcontent-%COMP%]{margin:15px auto auto;width:80%;max-width:1100px;padding-left:0;padding-right:0}.input-field[_ngcontent-%COMP%]{margin-left:1.5%}.timepicker[_ngcontent-%COMP%]{width:30px}.button[_ngcontent-%COMP%]{position:absolute;margin-top:.3%;margin-left:2%;height:60px;width:10%}.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{display:inline-flex;width:25%;margin-left:1%}.destination[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}.date[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{width:15%}hr[_ngcontent-%COMP%]{border:0;height:0;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(255,255,255,.3)}@media screen and (max-width:1300px) and (min-width:600px){.date-time[_ngcontent-%COMP%]{display:block}.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{width:40%}.date[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{width:39.5%}.button[_ngcontent-%COMP%]{margin-top:.8%}}@media screen and (max-width:1000px) and (min-width:600px){.button[_ngcontent-%COMP%]{margin-top:.5%}}@media screen and (max-width:600px){.destination[_ngcontent-%COMP%], .source[_ngcontent-%COMP%]{width:97%}.button[_ngcontent-%COMP%], .date[_ngcontent-%COMP%], .mileage[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{margin-left:2%;width:96%}.button[_ngcontent-%COMP%]{display:block;width:88.5%}hr[_ngcontent-%COMP%]{margin-top:80px}}"]],data:{}});function Y(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.rb(1,16384,[[25,4]],0,E.b,[],null,null),(l()(),t.Mb(-1,null,["Mileage is required "]))],null,(function(l,n){l(n,0,0,t.Eb(n,1).id)}))}function Z(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.rb(1,16384,[[25,4]],0,E.b,[],null,null),(l()(),t.Mb(-1,null,["Mileage should be in the range 10-999 "]))],null,(function(l,n){l(n,0,0,t.Eb(n,1).id)}))}function Q(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"p",[["style","color: red;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Source and Destination cannot be same "]))],null,null)}function $(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"p",[["style","color: red;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Time can't be less than current time. "]))],null,null)}function ll(l){return t.Ob(0,[t.Gb(0,b.e,[t.t]),(l()(),t.sb(1,0,null,null,104,"form",[["class","search-card"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var a=!0,i=l.component;return"submit"===n&&(a=!1!==t.Eb(l,3).onSubmit(e)&&a),"reset"===n&&(a=!1!==t.Eb(l,3).onReset()&&a),"ngSubmit"===n&&(a=!1!==i.onSubmit()&&a),a}),null,null)),t.rb(2,16384,null,0,v.y,[],null,null),t.rb(3,540672,null,0,v.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Jb(2048,null,v.b,null,[v.i]),t.rb(5,16384,null,0,v.p,[[4,v.b]],null,null),(l()(),t.sb(6,0,null,null,99,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,w.b,w.a)),t.rb(7,49152,null,0,M.a,[[2,D.a]],null,null),(l()(),t.sb(8,0,null,0,2,"div",[["class","source"]],null,null,null,null,null)),(l()(),t.sb(9,0,null,null,1,"app-place-autocomplete",[["class","input-field"],["placeholder","Source"]],null,[[null,"placeChange"],[null,"IsValid"]],(function(l,n,e){var t=!0,a=l.component;return"placeChange"===n&&(t=!1!==a.handleSourceChange(e)&&t),"IsValid"===n&&(t=!1!==a.handleInvalidSource(e)&&t),t}),y.b,y.a)),t.rb(10,114688,null,0,P.a,[t.y,S.o],{value:[0,"value"],placeholder:[1,"placeholder"]},{IsValid:"IsValid",placeChange:"placeChange"}),(l()(),t.sb(11,0,null,0,2,"div",[["class","destination"]],null,null,null,null,null)),(l()(),t.sb(12,0,null,null,1,"app-place-autocomplete",[["class","input-field"],["placeholder","Destination"]],null,[[null,"placeChange"],[null,"IsValid"]],(function(l,n,e){var t=!0,a=l.component;return"placeChange"===n&&(t=!1!==a.handleDestinationChange(e)&&t),"IsValid"===n&&(t=!1!==a.handleInvalidDestination(e)&&t),t}),y.b,y.a)),t.rb(13,114688,null,0,P.a,[t.y,S.o],{value:[0,"value"],placeholder:[1,"placeholder"]},{IsValid:"IsValid",placeChange:"placeChange"}),(l()(),t.sb(14,0,null,0,60,"span",[["class","date-time"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,27,"span",[],null,null,null,null,null)),(l()(),t.sb(16,0,null,null,26,"mat-form-field",[["appearance","outline"],["class","date input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,O.b,O.a)),t.rb(17,7520256,null,9,E.c,[t.k,t.h,[2,T.h],[2,k.b],[2,E.a],x.a,t.y,[2,D.a]],{appearance:[0,"appearance"]},null),t.Kb(603979776,1,{_controlNonStatic:0}),t.Kb(335544320,2,{_controlStatic:0}),t.Kb(603979776,3,{_labelChildNonStatic:0}),t.Kb(335544320,4,{_labelChildStatic:0}),t.Kb(603979776,5,{_placeholderChild:0}),t.Kb(603979776,6,{_errorChildren:1}),t.Kb(603979776,7,{_hintChildren:1}),t.Kb(603979776,8,{_prefixChildren:1}),t.Kb(603979776,9,{_suffixChildren:1}),(l()(),t.sb(27,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(28,16384,[[3,4],[4,4]],0,E.f,[],null,null),(l()(),t.Mb(-1,null,["Date"])),(l()(),t.sb(30,0,null,1,6,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["readonly",""],["style","width: 100%"]],[[1,"aria-haspopup",0],[1,"aria-owns",0],[1,"min",0],[1,"max",0],[8,"disabled",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"dateChange"],[null,"focus"],[null,"input"],[null,"change"],[null,"blur"],[null,"keydown"]],(function(l,n,e){var a=!0,i=l.component;return"input"===n&&(a=!1!==t.Eb(l,33)._onInput(e.target.value)&&a),"change"===n&&(a=!1!==t.Eb(l,33)._onChange()&&a),"blur"===n&&(a=!1!==t.Eb(l,33)._onBlur()&&a),"keydown"===n&&(a=!1!==t.Eb(l,33)._onKeydown(e)&&a),"blur"===n&&(a=!1!==t.Eb(l,35)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Eb(l,35)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Eb(l,35)._onInput()&&a),"dateChange"===n&&(a=!1!==i.handleDateSet(e)&&a),"focus"===n&&(a=!1!==t.Eb(l,42).open()&&a),a}),null,null)),t.Jb(5120,null,v.m,(function(l){return[l]}),[I.h]),t.Jb(5120,null,v.l,(function(l){return[l]}),[I.h]),t.rb(33,147456,null,0,I.h,[t.k,[2,T.a],[2,T.e],[2,E.c]],{matDatepicker:[0,"matDatepicker"],value:[1,"value"],min:[2,"min"]},{dateChange:"dateChange"}),t.Jb(2048,null,F.a,null,[I.h]),t.rb(35,999424,null,0,F.b,[t.k,x.a,[8,null],[2,v.q],[2,v.i],T.b,[6,F.a],K.a,t.y],{value:[0,"value"],readonly:[1,"readonly"]},null),t.Jb(2048,[[1,4],[2,4]],E.d,null,[F.b]),(l()(),t.sb(37,0,null,4,3,"mat-datepicker-toggle",[["class","mat-datepicker-toggle"],["matSuffix",""]],[[1,"tabindex",0],[2,"mat-datepicker-toggle-active",null],[2,"mat-accent",null],[2,"mat-warn",null]],[[null,"focus"]],(function(l,n,e){var a=!0;return"focus"===n&&(a=!1!==t.Eb(l,39)._button.focus()&&a),a}),o.e,o.d)),t.rb(38,16384,[[9,4]],0,E.g,[],null,null),t.rb(39,1753088,null,1,I.k,[I.i,t.h,[8,null]],{datepicker:[0,"datepicker"]},null),t.Kb(603979776,10,{_customIcon:0}),(l()(),t.sb(41,16777216,null,1,1,"mat-datepicker",[],null,null,null,o.f,o.c)),t.rb(42,180224,[["myDatepicker",4]],0,I.f,[N.e,q.c,t.y,t.O,I.a,[2,T.a],[2,k.b],[2,b.d]],null,null),(l()(),t.sb(43,0,null,null,28,"span",[],null,null,null,null,null)),(l()(),t.sb(44,0,null,null,25,"mat-form-field",[["appearance","outline"],["class","time input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,O.b,O.a)),t.rb(45,7520256,null,9,E.c,[t.k,t.h,[2,T.h],[2,k.b],[2,E.a],x.a,t.y,[2,D.a]],{appearance:[0,"appearance"]},null),t.Kb(603979776,11,{_controlNonStatic:0}),t.Kb(335544320,12,{_controlStatic:0}),t.Kb(603979776,13,{_labelChildNonStatic:0}),t.Kb(335544320,14,{_labelChildStatic:0}),t.Kb(603979776,15,{_placeholderChild:0}),t.Kb(603979776,16,{_errorChildren:1}),t.Kb(603979776,17,{_hintChildren:1}),t.Kb(603979776,18,{_prefixChildren:1}),t.Kb(603979776,19,{_suffixChildren:1}),(l()(),t.sb(55,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(56,16384,[[13,4],[14,4]],0,E.f,[],null,null),(l()(),t.Mb(-1,null,["Time"])),(l()(),t.sb(58,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["readonly",""],["style","width: 100%"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[8,"disabled",0]],[[null,"blur"],[null,"focus"],[null,"input"],[null,"change"],[null,"click"]],(function(l,n,e){var a=!0;return"blur"===n&&(a=!1!==t.Eb(l,60)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Eb(l,60)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Eb(l,60)._onInput()&&a),"change"===n&&(a=!1!==t.Eb(l,62).updateValue(e.target.value)&&a),"blur"===n&&(a=!1!==t.Eb(l,62).onTouched()&&a),"click"===n&&(a=!1!==t.Eb(l,62).onClick(e)&&a),a}),null,null)),t.Jb(5120,null,v.m,(function(l){return[l]}),[j.f]),t.rb(60,999424,null,0,F.b,[t.k,x.a,[8,null],[2,v.q],[2,v.i],T.b,[8,null],K.a,t.y],{value:[0,"value"],readonly:[1,"readonly"]},null),t.Ib(61,2),t.rb(62,671744,null,0,j.f,[t.k,j.n],{format:[0,"format"],min:[1,"min"],timepicker:[2,"timepicker"],value:[3,"value"]},null),t.Ib(63,2),t.Ib(64,2),t.Jb(2048,[[11,4],[12,4]],E.d,null,[F.b]),(l()(),t.sb(66,0,null,4,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"],["style","color: gray"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,V.b,V.a)),t.rb(67,16384,[[19,4]],0,E.g,[],null,null),t.rb(68,9158656,null,0,L.b,[t.k,L.d,[8,null],[2,L.a],[2,t.l]],null,null),(l()(),t.Mb(-1,0,["access_time"])),(l()(),t.sb(70,0,null,null,1,"ngx-material-timepicker",[],null,[[null,"timeSet"]],(function(l,n,e){var t=!0;return"timeSet"===n&&(t=!1!==l.component.handleTimeSet(e)&&t),t}),u.b,u.a)),t.rb(71,49152,[["endTime",4]],0,j.a,[j.g,j.h],{theme:[0,"theme"]},{timeSet:"timeSet"}),(l()(),t.sb(72,0,null,null,2,"button",[["class","button"],["color","primary"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,z.b,z.a)),t.rb(73,180224,null,0,J.b,[t.k,H.f,[2,D.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.Mb(-1,0,[" Go "])),(l()(),t.sb(75,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),t.sb(76,0,null,0,25,"mat-form-field",[["appearance","outline"],["class","mileage input-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,O.b,O.a)),t.rb(77,7520256,null,9,E.c,[t.k,t.h,[2,T.h],[2,k.b],[2,E.a],x.a,t.y,[2,D.a]],{appearance:[0,"appearance"]},null),t.Kb(603979776,20,{_controlNonStatic:0}),t.Kb(335544320,21,{_controlStatic:0}),t.Kb(603979776,22,{_labelChildNonStatic:0}),t.Kb(335544320,23,{_labelChildStatic:0}),t.Kb(603979776,24,{_placeholderChild:0}),t.Kb(603979776,25,{_errorChildren:1}),t.Kb(603979776,26,{_hintChildren:1}),t.Kb(603979776,27,{_prefixChildren:1}),t.Kb(603979776,28,{_suffixChildren:1}),(l()(),t.sb(87,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.rb(88,16384,[[22,4],[23,4]],0,E.f,[],null,null),(l()(),t.Mb(-1,null,["Mileage of your vehicle (in kmpl)"])),(l()(),t.sb(90,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","mileage"],["matInput",""],["placeholder","Enter Mileage(Km/l)"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var a=!0,i=l.component;return"input"===n&&(a=!1!==t.Eb(l,91)._handleInput(e.target.value)&&a),"blur"===n&&(a=!1!==t.Eb(l,91).onTouched()&&a),"compositionstart"===n&&(a=!1!==t.Eb(l,91)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t.Eb(l,91)._compositionEnd(e.target.value)&&a),"blur"===n&&(a=!1!==t.Eb(l,95)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Eb(l,95)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Eb(l,95)._onInput()&&a),"change"===n&&(a=!1!==i.onMileageChange(e)&&a),a}),null,null)),t.rb(91,16384,null,0,v.c,[t.D,t.k,[2,v.a]],null,null),t.Jb(1024,null,v.m,(function(l){return[l]}),[v.c]),t.rb(93,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.m],[2,v.x]],{name:[0,"name"]},null),t.Jb(2048,null,v.n,null,[v.g]),t.rb(95,999424,null,0,F.b,[t.k,x.a,[6,v.n],[2,v.q],[2,v.i],T.b,[8,null],K.a,t.y],{placeholder:[0,"placeholder"]},null),t.rb(96,16384,null,0,v.o,[[4,v.n]],null,null),t.Jb(2048,[[20,4],[21,4]],E.d,null,[F.b]),(l()(),t.hb(16777216,null,5,1,null,Y)),t.rb(99,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,5,1,null,Z)),t.rb(101,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,Q)),t.rb(103,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,$)),t.rb(105,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.searchForm),l(n,10,0,e.sourceName,"Source"),l(n,13,0,e.destinationName,"Destination"),l(n,17,0,"outline"),l(n,33,0,t.Eb(n,42),e.tripDate,e.getMinDate()),l(n,35,0,e.tripDate,""),l(n,39,0,t.Eb(n,42)),l(n,45,0,"outline");var a=t.Nb(n,60,0,l(n,61,0,t.Eb(n,0),e.getMinDate(),"h:mm a"));l(n,60,0,a,"");var i=t.Nb(n,62,1,l(n,63,0,t.Eb(n,0),e.getMinTime(),"h:mm a")),r=t.Eb(n,71),o=t.Nb(n,62,3,l(n,64,0,t.Eb(n,0),e.getMinDate(),"h:mm a"));l(n,62,0,12,i,r,o),l(n,68,0),l(n,71,0,e.timePickerThemeService.darkTheme),l(n,73,0,!e.sourceValid||!e.destinationValid||e.isDuplicatePlace||e.invalidDepartureDateTimeError,"primary"),l(n,77,0,"outline"),l(n,93,0,"mileage"),l(n,95,0,"Enter Mileage(Km/l)"),l(n,99,0,null==e.searchForm.controls.mileage.errors?null:e.searchForm.controls.mileage.errors.required),l(n,101,0,null==e.searchForm.controls.mileage.errors?null:e.searchForm.controls.mileage.errors.pattern),l(n,103,0,e.isDuplicatePlace),l(n,105,0,e.invalidDepartureDateTimeError)}),(function(l,n){l(n,1,0,t.Eb(n,5).ngClassUntouched,t.Eb(n,5).ngClassTouched,t.Eb(n,5).ngClassPristine,t.Eb(n,5).ngClassDirty,t.Eb(n,5).ngClassValid,t.Eb(n,5).ngClassInvalid,t.Eb(n,5).ngClassPending),l(n,6,0,"NoopAnimations"===t.Eb(n,7)._animationMode),l(n,16,1,["standard"==t.Eb(n,17).appearance,"fill"==t.Eb(n,17).appearance,"outline"==t.Eb(n,17).appearance,"legacy"==t.Eb(n,17).appearance,t.Eb(n,17)._control.errorState,t.Eb(n,17)._canLabelFloat,t.Eb(n,17)._shouldLabelFloat(),t.Eb(n,17)._hasFloatingLabel(),t.Eb(n,17)._hideControlPlaceholder(),t.Eb(n,17)._control.disabled,t.Eb(n,17)._control.autofilled,t.Eb(n,17)._control.focused,"accent"==t.Eb(n,17).color,"warn"==t.Eb(n,17).color,t.Eb(n,17)._shouldForward("untouched"),t.Eb(n,17)._shouldForward("touched"),t.Eb(n,17)._shouldForward("pristine"),t.Eb(n,17)._shouldForward("dirty"),t.Eb(n,17)._shouldForward("valid"),t.Eb(n,17)._shouldForward("invalid"),t.Eb(n,17)._shouldForward("pending"),!t.Eb(n,17)._animationsEnabled]),l(n,30,1,[t.Eb(n,33)._datepicker?"dialog":null,(null==t.Eb(n,33)._datepicker?null:t.Eb(n,33)._datepicker.opened)&&t.Eb(n,33)._datepicker.id||null,t.Eb(n,33).min?t.Eb(n,33)._dateAdapter.toIso8601(t.Eb(n,33).min):null,t.Eb(n,33).max?t.Eb(n,33)._dateAdapter.toIso8601(t.Eb(n,33).max):null,t.Eb(n,33).disabled,t.Eb(n,35)._isServer,t.Eb(n,35).id,t.Eb(n,35).placeholder,t.Eb(n,35).disabled,t.Eb(n,35).required,t.Eb(n,35).readonly&&!t.Eb(n,35)._isNativeSelect||null,t.Eb(n,35)._ariaDescribedby||null,t.Eb(n,35).errorState,t.Eb(n,35).required.toString()]),l(n,37,0,-1,t.Eb(n,39).datepicker&&t.Eb(n,39).datepicker.opened,t.Eb(n,39).datepicker&&"accent"===t.Eb(n,39).datepicker.color,t.Eb(n,39).datepicker&&"warn"===t.Eb(n,39).datepicker.color),l(n,44,1,["standard"==t.Eb(n,45).appearance,"fill"==t.Eb(n,45).appearance,"outline"==t.Eb(n,45).appearance,"legacy"==t.Eb(n,45).appearance,t.Eb(n,45)._control.errorState,t.Eb(n,45)._canLabelFloat,t.Eb(n,45)._shouldLabelFloat(),t.Eb(n,45)._hasFloatingLabel(),t.Eb(n,45)._hideControlPlaceholder(),t.Eb(n,45)._control.disabled,t.Eb(n,45)._control.autofilled,t.Eb(n,45)._control.focused,"accent"==t.Eb(n,45).color,"warn"==t.Eb(n,45).color,t.Eb(n,45)._shouldForward("untouched"),t.Eb(n,45)._shouldForward("touched"),t.Eb(n,45)._shouldForward("pristine"),t.Eb(n,45)._shouldForward("dirty"),t.Eb(n,45)._shouldForward("valid"),t.Eb(n,45)._shouldForward("invalid"),t.Eb(n,45)._shouldForward("pending"),!t.Eb(n,45)._animationsEnabled]),l(n,58,0,t.Eb(n,60)._isServer,t.Eb(n,60).id,t.Eb(n,60).placeholder,t.Eb(n,60).disabled,t.Eb(n,60).required,t.Eb(n,60).readonly&&!t.Eb(n,60)._isNativeSelect||null,t.Eb(n,60)._ariaDescribedby||null,t.Eb(n,60).errorState,t.Eb(n,60).required.toString(),t.Eb(n,62).disabled),l(n,66,0,t.Eb(n,68).inline,"primary"!==t.Eb(n,68).color&&"accent"!==t.Eb(n,68).color&&"warn"!==t.Eb(n,68).color),l(n,72,0,t.Eb(n,73).disabled||null,"NoopAnimations"===t.Eb(n,73)._animationMode),l(n,76,1,["standard"==t.Eb(n,77).appearance,"fill"==t.Eb(n,77).appearance,"outline"==t.Eb(n,77).appearance,"legacy"==t.Eb(n,77).appearance,t.Eb(n,77)._control.errorState,t.Eb(n,77)._canLabelFloat,t.Eb(n,77)._shouldLabelFloat(),t.Eb(n,77)._hasFloatingLabel(),t.Eb(n,77)._hideControlPlaceholder(),t.Eb(n,77)._control.disabled,t.Eb(n,77)._control.autofilled,t.Eb(n,77)._control.focused,"accent"==t.Eb(n,77).color,"warn"==t.Eb(n,77).color,t.Eb(n,77)._shouldForward("untouched"),t.Eb(n,77)._shouldForward("touched"),t.Eb(n,77)._shouldForward("pristine"),t.Eb(n,77)._shouldForward("dirty"),t.Eb(n,77)._shouldForward("valid"),t.Eb(n,77)._shouldForward("invalid"),t.Eb(n,77)._shouldForward("pending"),!t.Eb(n,77)._animationsEnabled]),l(n,90,1,[t.Eb(n,95)._isServer,t.Eb(n,95).id,t.Eb(n,95).placeholder,t.Eb(n,95).disabled,t.Eb(n,95).required,t.Eb(n,95).readonly&&!t.Eb(n,95)._isNativeSelect||null,t.Eb(n,95)._ariaDescribedby||null,t.Eb(n,95).errorState,t.Eb(n,95).required.toString(),t.Eb(n,96).ngClassUntouched,t.Eb(n,96).ngClassTouched,t.Eb(n,96).ngClassPristine,t.Eb(n,96).ngClassDirty,t.Eb(n,96).ngClassValid,t.Eb(n,96).ngClassInvalid,t.Eb(n,96).ngClassPending])}))}var nl=e("wjE7"),el=t.qb({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.container[_ngcontent-%COMP%]{position:absolute;width:100%;background-color:#eee}.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;padding:0;height:266px;width:100%}img[_ngcontent-%COMP%]{opacity:.9}.img-background[_ngcontent-%COMP%]{background-color:var(--main-theme-color)}@media screen and (max-width:1300px) and (min-width:600px){.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{height:356px}}.info[_ngcontent-%COMP%]{position:relative;width:100%}.tagline[_ngcontent-%COMP%]{color:#fff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;letter-spacing:1px;margin:100px auto auto}@media screen and (max-width:600px){.img-background[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{height:340px}.tagline[_ngcontent-%COMP%]{font-size:25px}}@media screen and (max-width:400px){.info[_ngcontent-%COMP%]{position:relative;width:80%;margin:auto}}.popular-trips[_ngcontent-%COMP%]{width:80%;height:300px;margin:100px auto 50px}.popular-trips[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:18px}.popular-trips[_ngcontent-%COMP%]   .trip-list[_ngcontent-%COMP%]{display:inline-flex;width:100%;margin-top:20px;justify-content:space-between}.popular-trips[_ngcontent-%COMP%]   .trip-list[_ngcontent-%COMP%]   .trip[_ngcontent-%COMP%]{width:230px;height:250px;background-color:#fff;border:1px solid #c7c7c7;border-radius:10px;overflow:hidden}"]],data:{}});function tl(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,2,"div",[["class","trip"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"app-popular-trip",[],null,null,null,_,C)),t.rb(2,114688,null,0,p,[g,f.a],{popularTrip:[0,"popularTrip"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function al(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,5,"div",[["class","popular-trips"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Popular Roadtrips"])),(l()(),t.sb(3,0,null,null,2,"div",[["class","trip-list"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,tl)),t.rb(5,278528,null,0,b.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.popularTrips)}),null)}function il(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,0,"div",[["class","img-background"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,0,"img",[["alt","homepage-background"],["src","assets/img/homepage-background.jpg"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),t.sb(4,0,null,null,1,"h1",[["class","tagline"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Plan your trip like never before"])),(l()(),t.sb(6,0,null,null,1,"app-search",[],null,null,null,ll,W)),t.rb(7,245760,null,0,G,[A.a,R.l,U.a,t.h,B.a,g],null,null),(l()(),t.hb(16777216,null,null,1,null,al)),t.rb(9,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0),l(n,9,0,e.popularTrips)}),null)}function rl(l){return t.Ob(0,[(l()(),t.sb(0,0,null,null,1,"app-home-page",[],null,null,null,il,el)),t.rb(1,114688,null,0,a,[nl.a,A.a],null,null)],(function(l,n){l(n,1,0)}),null)}var ol=t.ob("app-home-page",a,rl,{},{},[]),ul=e("POq0"),cl=e("/Co4"),sl=e("cUpR"),dl=e("JjoW"),bl=e("zMNK"),pl=e("hOhj"),hl=e("BzsH"),ml=e("dFDH"),gl=e("W5yJ"),fl=e("lT8R"),Cl=e("lGt0"),_l=e("DyN7"),El=e("PCNd");e.d(n,"HomePageModuleNgFactory",(function(){return vl}));var vl=t.pb(i,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[r.a,o.b,o.a,u.c,c.a,c.b,s.a,d.a,ol]],[3,t.j],t.w]),t.Cb(4608,v.w,v.w,[]),t.Cb(4608,v.d,v.d,[]),t.Cb(4608,b.n,b.m,[t.t,[2,b.F]]),t.Cb(4608,ul.c,ul.c,[]),t.Cb(4608,T.b,T.b,[]),t.Cb(4608,q.c,q.c,[q.i,q.e,t.j,q.h,q.f,t.q,t.y,b.d,k.b,[2,b.h]]),t.Cb(5120,q.j,q.k,[q.c]),t.Cb(5120,N.c,N.d,[q.c]),t.Cb(135680,N.e,N.e,[q.c,t.q,[2,b.h],[2,N.b],N.c,[3,N.e],q.e]),t.Cb(4608,I.i,I.i,[]),t.Cb(5120,I.a,I.b,[q.c]),t.Cb(4608,T.a,T.w,[[2,T.f],x.a]),t.Cb(5120,cl.b,cl.c,[q.c]),t.Cb(4608,sl.e,T.c,[[2,T.g],[2,T.l]]),t.Cb(5120,dl.a,dl.b,[q.c]),t.Cb(4608,m.i,m.o,[b.d,t.A,m.m]),t.Cb(4608,m.p,m.p,[m.i,m.n]),t.Cb(5120,m.a,(function(l){return[l]}),[m.p]),t.Cb(4608,m.l,m.l,[]),t.Cb(6144,m.j,null,[m.l]),t.Cb(4608,m.h,m.h,[m.j]),t.Cb(6144,m.b,null,[m.h]),t.Cb(4608,m.g,m.k,[m.b,t.q]),t.Cb(4608,m.c,m.c,[m.g]),t.Cb(1073742336,v.v,v.v,[]),t.Cb(1073742336,v.j,v.j,[]),t.Cb(1073742336,v.t,v.t,[]),t.Cb(1073742336,b.c,b.c,[]),t.Cb(1073742336,ul.d,ul.d,[]),t.Cb(1073742336,E.e,E.e,[]),t.Cb(1073742336,x.b,x.b,[]),t.Cb(1073742336,K.c,K.c,[]),t.Cb(1073742336,F.c,F.c,[]),t.Cb(1073742336,k.a,k.a,[]),t.Cb(1073742336,T.l,T.l,[[2,T.d],[2,sl.f]]),t.Cb(1073742336,M.c,M.c,[]),t.Cb(1073742336,T.v,T.v,[]),t.Cb(1073742336,J.c,J.c,[]),t.Cb(1073742336,bl.f,bl.f,[]),t.Cb(1073742336,pl.b,pl.b,[]),t.Cb(1073742336,q.g,q.g,[]),t.Cb(1073742336,N.h,N.h,[]),t.Cb(1073742336,H.a,H.a,[]),t.Cb(1073742336,I.j,I.j,[]),t.Cb(1073742336,T.x,T.x,[]),t.Cb(1073742336,T.n,T.n,[]),t.Cb(1073742336,j.b,j.b,[]),t.Cb(1073742336,hl.a,hl.a,[]),t.Cb(1073742336,T.t,T.t,[]),t.Cb(1073742336,T.q,T.q,[]),t.Cb(1073742336,cl.e,cl.e,[]),t.Cb(1073742336,ml.e,ml.e,[]),t.Cb(1073742336,L.c,L.c,[]),t.Cb(1073742336,gl.c,gl.c,[]),t.Cb(1073742336,fl.a,fl.a,[]),t.Cb(1073742336,Cl.a,Cl.a,[]),t.Cb(1073742336,dl.d,dl.d,[]),t.Cb(1073742336,_l.a,_l.a,[]),t.Cb(1073742336,m.e,m.e,[]),t.Cb(1073742336,m.d,m.d,[]),t.Cb(1073742336,R.n,R.n,[[2,R.s],[2,R.l]]),t.Cb(1073742336,El.a,El.a,[]),t.Cb(1073742336,i,i,[]),t.Cb(256,T.e,T.i,[]),t.Cb(256,j.n,"en-US",[]),t.Cb(256,m.m,"XSRF-TOKEN",[]),t.Cb(256,m.n,"X-XSRF-TOKEN",[]),t.Cb(1024,R.j,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
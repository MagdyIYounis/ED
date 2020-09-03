/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["text!../variable.json","accUtils","ojs/ojanimation","knockout","ojs/ojbootstrap","jquery","ojs/ojresponsiveutils","ojs/ojresponsiveknockoututils","ojs/ojasyncvalidator-regexp","ojs/ojmessaging","ojs/ojarraydataprovider","ojs/ojlistdataproviderview","ojs/ojknockout-keyset","ojs/ojknockout","ojs/ojinputtext","ojs/ojlabel","ojs/ojformlayout","ojs/ojselectcombobox","ojs/ojinputnumber","ojs/ojtable","ojs/ojmessages","ojs/ojpopup","ojs/ojgauge"],(function(e,t,r,s,a,o,i,n,l,u,p,d,h){return function(){var a=this;this.Country_Op=s.observable(""),this.Phone=s.observableArray([]),this.error_Phone=s.observableArray([]),this.Code_Cust_Search=s.observable(""),this.val_Country=s.observable(""),this.val_City=s.observableArray(""),this.City_Op=s.observableArray(""),this.val_Type=s.observableArray(""),this.Type_Op=s.observableArray(""),this.Code_Client=s.observable("0000"),this.Name_Client=s.observable(""),this.Name_Of_Owner=s.observable(""),this.button2Text=s.observable("Save"),this.Info=s.observable("");var c=[];this.Disable=s.observable(""),this.Code_Client_Search=s.observable(""),this.Phone_Search=s.observable(""),this.dataprovider=s.observable(),this.messagesDataprovider=s.observableArray([]),this.selectedRows=s.observable(),this.selectedColumns=new h.ObservableKeySet,this.isSmall=n.createMediaQueryObservable(i.getFrameworkQuery(i.FRAMEWORK_QUERY_KEY.SM_ONLY)),this.isLargeOrUp=n.createMediaQueryObservable(i.getFrameworkQuery(i.FRAMEWORK_QUERY_KEY.LG_UP)),this.clear=()=>{this.Code_Client("0000"),this.Name_Client(""),this.Name_Of_Owner(""),this.Info(""),this.val_Type([]),this.Phone([]),C(),this.button2Text("Save"),this.val_Country([1])},this.valueChangeHandler=function(e){if("valueChanged"===e.type&&("enter_pressed"===e.detail.trigger||"blur"===e.detail.trigger)){var t=e.detail.value,r=t[t.length-1];new RegExp("[0]{1}[1]{1}[0-5]{1}[0-9]{8}").test(r)||(e.detail.value.pop(),document.getElementById("Phone").refresh(),c.push({summary:"Error",detail:"This NumberPhone is correct",severity:u.SEVERITY_LEVEL.ERROR}),this.error_Phone(c),document.getElementById("Phone").focus())}}.bind(this),this.columns=s.computed((function(){return this.isLargeOrUp()?3:2}),this),this.labelEdge=s.computed((function(){return this.isSmall()?"top":"start"}),this);var m={mapFields:function(e){var t=e.data,r={data:{}};return r.data.label=t.Country_Name,r.data.value=t.Country_ID,r.metadata={key:t.Country_ID},r}};o.getJSON(JSON.parse(e).url+"/api/countries").then(async e=>{var t=new p(e,{keyAttributes:"Country_ID"});this.Country_Op(new d(t,{dataMapping:m})),this.val_Country(1)});var v={mapFields:function(e){var t=e.data,r={data:{}};return r.data.label=t.City_Name,r.data.value=t.City_ID,r.metadata={key:t.City_ID},r}};this.valueChangeCountry=function(t){o.getJSON(JSON.parse(e).url+"/api/countries/"+this.val_Country()+"/cities").then(e=>{var t=new p(e,{keyAttributes:"City_ID"});a.City_Op(new d(t,{dataMapping:v})),this.val_City([1])})}.bind(this);var y={mapFields:function(e){var t=e.data,r={data:{}};return r.data.label=t.Name_Of_Type,r.data.value=t.ID_Type,r.metadata={key:t.ID_Type},r}};function C(t,r){null!=t&&""!=t||null!=r&&""!=r?""!==t?o.getJSON(JSON.parse(e).url+"/api/client_vs/?filter[where][Code_Client]="+t).then((function(e){a.dataprovider(new p(e,{keyAttributes:"Code_Client",implicitSort:[{attribute:"Code_Client",direction:"ascending"}]}))})):null!=r&&o.getJSON(JSON.parse(e).url+"/api/client_vs?filter[where][Phone]="+r).then((function(e){a.dataprovider(new p(e,{keyAttributes:"Code_Client",implicitSort:[{attribute:"Code_Client",direction:"ascending"}]}))})):o.getJSON(JSON.parse(e).url+"/api/client_vs/?filter[order]=Date%20DESC").then((function(e){a.dataprovider(new p(e,{keyAttributes:"Code_Client",implicitSort:[{attribute:"Code_Client",direction:"ascending"}]}))}))}o.getJSON(JSON.parse(e).url+"/api/Type_Of_Shops").then(async e=>{var t=new p(e,{keyAttributes:"ID_Type"});this.Type_Op(new d(t,{dataMapping:y}))}),this.clear(),this.Save=(t,r,s)=>{var i;if(this.Disable("true"),"valid"!=o("#NameClient")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"Name",detail:"The Name is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#NameOfOwner")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"Name Of Owner",detail:"The Name Of Owner is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#info")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"info",detail:"The info is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#Governorate")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"Governorate",detail:"The Governorate is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#City")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"City",detail:"The City is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#TypeOfShop")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"Type Of Shop",detail:"The Type Of Shop is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("valid"!=o("#Phone")[0].valid)return this.messagesDataprovider.push({severity:"error",summary:"Phone",detail:"The Phone is invalid",autoTimeout:parseInt(0,10)}),this.Disable(""),!0;if("Save"==a.button2Text()){var n={url:JSON.parse(e).url+"/api/Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify({Name_Client:this.Name_Client(),Name_Of_owner:this.Name_Of_Owner(),Info:this.Info(),Rate:2}),success:function(t){i=t.Code_Client,City_Json=[],a.val_City().forEach(e=>{City_Json.push({cityId:e,clientId:i})});var r={url:JSON.parse(e).url+"/api/City_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(City_Json),success:function(e){},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;this.messagesDataprovider.push({severity:"error",summary:"Save City",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(r),Type_Json=[],a.val_Type().forEach(e=>{Type_Json.push({typeOfShopId:e,clientId:i})});var s={url:JSON.parse(e).url+"/api/Type_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(Type_Json),success:function(e){},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;this.messagesDataprovider.push({severity:"error",summary:"Save Type of Shop",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(s),Phone_Json=[],a.Phone().forEach(e=>{Phone_Json.push({Phone:e,clientId:i})});var n={url:JSON.parse(e).url+"/api/Phone_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(Phone_Json),success:function(e){},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;this.messagesDataprovider.push({severity:"error",summary:"Save Phone",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(n),a.messagesDataprovider.push({severity:"confirmation",summary:i,detail:"Confirmation Add New client",autoTimeout:parseInt(0,10)}),a.clear(),a.Disable("")},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Client",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)}),this.Disable("")}};o.ajax(n)}else{n={url:JSON.parse(e).url+"/api/Clients/"+a.Code_Client()+"?access_token="+sessionStorage.getItem("ID"),method:"PUT",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify({Name_Client:this.Name_Client(),Name_Of_owner:this.Name_Of_Owner(),Info:this.Info(),Rate:2}),success:function(t){i=t.Code_Client;var r={url:JSON.parse(e).url+"/api/Clients/"+i+"/cityClients?access_token="+sessionStorage.getItem("ID"),method:"DELETE",timeout:0,headers:{"Content-Type":"application/json"},success:function(t){City_Json=[],a.val_City().forEach(e=>{City_Json.push({cityId:e,clientId:i})});var r={url:JSON.parse(e).url+"/api/City_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(City_Json),success:function(e){},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save City",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(r)},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save City",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(r);var s={url:JSON.parse(e).url+"/api/Clients/"+i+"/typeClients?access_token="+sessionStorage.getItem("ID"),method:"DELETE",timeout:0,headers:{"Content-Type":"application/json"},success:function(t){Type_Json=[],a.val_Type().forEach(e=>{Type_Json.push({typeOfShopId:e,clientId:i})});var r={url:JSON.parse(e).url+"/api/Type_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(Type_Json),success:function(e){},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Type of Shop",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(r)},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Type of Shop",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(s);var n={url:JSON.parse(e).url+"/api/Clients/"+i+"/phoneClients?access_token="+sessionStorage.getItem("ID"),method:"DELETE",timeout:0,headers:{"Content-Type":"application/json"},success:function(t){Phone_Json=[],a.Phone().forEach(e=>{Phone_Json.push({Phone:e,clientId:i})});var r={url:JSON.parse(e).url+"/api/Phone_Clients?access_token="+sessionStorage.getItem("ID"),method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(Phone_Json),success:function(e){a.clear()},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Phone",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(r)},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Phone",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)})}};o.ajax(n),a.messagesDataprovider.push({severity:"confirmation",summary:i,detail:"Confirmation Update client",autoTimeout:parseInt(0,10)}),a.Disable("")},error:function(e){var t=e.responseJSON.error.code,r=e.responseJSON.error.message,s=e.responseJSON.error.statusCode;a.messagesDataprovider.push({severity:"error",summary:"Save Client",detail:t+"/n"+r+"/n"+s,autoTimeout:parseInt(0,10)}),this.Disable("")}};o.ajax(n)}},this.valid_Name=s.observableArray([new l({pattern:"^[ء-ي٠-٩ ]+$",hint:"enter two words with a space between it.",messageDetail:"Name Of Arabic"})]),this.valid_Phone=s.observableArray([new l({pattern:"[0]{1}[1]{1}[0-5]{1}[0-9]{8}",hint:"enter number Mobile.",messageDetail:"you should write Number Mobile not tel"})]),this.startAnimationListener=function(e){var t=e.detail;if("popup1"===e.target.id)if("open"===t.action){e.preventDefault();r.slideIn(t.element,{direction:"bottom"}).then(t.endCallback)}else"close"===t.action&&(e.preventDefault(),t.endCallback())},this.openListener=function(){document.getElementById("popup1").open("#btnGo")},this.cancelListener=function(){document.getElementById("popup1").close(),C(a.Code_Client_Search(),a.Phone_Search()),a.Code_Client_Search(""),a.Phone_Search("")},this.cancelListener_1=function(){document.getElementById("popup1").close()},this.selectedListener=function(t){if("firstSelectedRowChanged"===t.type){a.button2Text("Update"),document.getElementById("Save").refresh();var r=t.detail.value.data;if(null!=r){a.Code_Client(r.Code_Client),a.Name_Client(r.Name_client),a.Name_Of_Owner(r.Name_Of_owner),a.Info(r.Info);var s={url:JSON.parse(e).url+"/api/Cities/?filter[where][City_Name]="+r.Cities,method:"GET",timeout:0,headers:{"Content-Type":"application/json"}};o.ajax(s).done((function(e){a.val_City([e[0].City_ID]),document.getElementById("City").refresh()}));var i={url:JSON.parse(e).url+"/api/Phone_Clients?filter[where][clientId]="+r.Code_Client,method:"GET",timeout:0,headers:{"Content-Type":"application/json"}};o.ajax(i).done((function(e){var t=[];e.forEach(e=>{t.push(e.Phone)}),a.Phone(t)}));var n={url:JSON.parse(e).url+"/api/Type_Clients?filter[where][clientId]="+r.Code_Client,method:"GET",timeout:0,headers:{"Content-Type":"application/json"}};o.ajax(n).done((function(e){var t=[];e.forEach(e=>{t.push(e.typeOfShopId)}),a.val_Type(t)}))}}},a.connected=function(){t.announce("Client page loaded.","assertive"),document.title="Client"},a.disconnected=function(){},a.transitionCompleted=function(){}}}));
(function(a){a.webshims.loader.addModule("jquery-ui",{src:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js",test:function(){return!!(a.ui&&a.widget&&(a.fn.datepicker||a.fn.slider))}});a.webshims.loader.addModule("swfobject",{src:"http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",test:function(){return"swfobject"in window}});a.support.geolocation="geolocation"in navigator;a.webshims.addPolyfill("geolocation",{test:function(){return a.support.geolocation},options:{destroyWrite:true},
combination:["combined-all","combined-x","combined-xx"]});a.support.canvas="getContext"in a("<canvas />")[0];a.webshims.addPolyfill("canvas",{test:function(){return a.support.canvas},methodNames:[{name:"getContext",elementNames:["canvas"]}],combination:["combined-all","combined-x"]});a.support.validity="checkValidity"in a('<form action="#" />')[0];a.webshims.addPolyfill("validity",{feature:"forms",test:function(){return a.support.validity},methodNames:[{name:"setCustomValidity",elementNames:["input",
"select","textarea"]},{name:"checkValidity",elementNames:["form","fieldset","input","select","textarea"]}],options:{},combination:["combined-all","combined-x","combined-xx","combined-forms"]});a.support.validity===true&&a.webshims.capturingEvents(["invalid","input"]);(function(){a.webshims.validityMessages=[];a.webshims.inputTypes={};var b=a('<form action="#"><fieldset><input name="a" required /></fieldset></form>');a.support.validationMessage=!!b.find("input").attr("validationMessage");a.support.fieldsetValidation=
!!(a("fieldset",b)[0].elements&&a("fieldset",b)[0].checkValidity&&"disabled"in a("fieldset",b)[0]&&!a("fieldset",b)[0].checkValidity());a.webshims.addPolyfill("validation-base",{feature:"forms",test:function(){return false},combination:["combined-all","combined-x","combined-xx","combined-forms","combined-forms-x"]})})();a.webshims.addPolyfill("implement-types",{feature:"forms",test:function(){return!(a.support.validity===true&&(a('<input type="datetime-local" />').attr("type")!=="datetime-local"||
a('<input type="range" />').attr("type")!=="range"))},combination:["combined-forms-x"]});a.webshims.addPolyfill("number-date-type",{feature:"forms",test:function(){return a('<input type="datetime-local" />').attr("type")==="datetime-local"&&a('<input type="range" />').attr("type")==="range"},combination:["combined-all","combined-x","combined-xx","combined-forms","combined-forms-x"],options:{stepArrows:{number:1,time:1}}});a.support.placeholder=a('<input type="text" />').attr("placeholder")!==undefined;
a.webshims.addPolyfill("placeholder",{feature:"forms",test:function(){return a.support.placeholder},combination:["combined-all","combined-x","combined-xx","combined-forms"]});a.support.jsonStorage="JSON"in window&&"localStorage"in window&&"sessionStorage"in window;a.webshims.addPolyfill("json-storage",{test:function(){return a.support.jsonStorage},noAutoCallback:true,combination:["combined-all"]})})(jQuery);
webpackJsonp([1],[function(a,t,e){(function(a){"use strict";function t(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),i=(new Date).getTime(),r=h.reduce(function(a,t){return a+Math.max(t[1],i)-Math.max(t[0],i)},0),s=Math.max(e-t,0),o=r/864e5,c=s/Math.max(o,1),p=r/36e5,m=s/Math.max(p,1),u=r/18e5,l=s/Math.max(u,1),d=n(c,3).split(".");a("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(m,3).split("."),a("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(l,3).split("."),a("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),a("#remains_days").text(n(o,0)),a("#remains_hours").text(n(p,0)),a("#remains_minutes").text(n(60*p,0));var f,v=100*Math.min(t,e),g=parseInt(v/e)||0,x=R-r,b=parseInt(100*x/R)||0;f=100==g?"progress-bar-success":g>=b?"progress-bar-success":g>.7*b?"progress-bar-info":g>.4*b?"progress-bar-warning":"progress-bar-danger",a("#objective_progress > .progress-bar").width(g+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(f).children("span").text(g+"%達成"),a("#period_progress > .progress-bar").width(b+"%").children("span").text(b+"%経過");var _=t*R/x;a("#prediction_collection").text(n(Math.floor(_)));var y=Math.min(_/e,1),M=a("#objective_progress").width(),k=M*y-47;a(".pointer").css("left",k+"px");var w=230>M-k?-250:0;a(".pointer-label").css("margin-left",w+"px");var I="";if(e>t&&_>=e){var j,C;h.forEach(function(a){j=j||a[0],C=C||a[1]});var D=e/_*R,T=h.reduce(function(a,t){if(a)return a;var e=t[1]-t[0];return D>e?(D-=e,null):new Date(t[0]+D)},null),q=T.getMonth(),E=T.getDate(),z=T.getHours(),N=T.getMinutes(),S=q+1+"/"+E+" "+(10>z?"0"+z:z)+":"+(10>N?"0"+N:N);I=S+"頃に目標達成できそうよ。"}a("#prediction_completion_date").text(I)}function n(a,t){if(t=t||0,isNaN(a))return"?";if(a===1/0||a===-(1/0))return"∞";var e=a.toFixed(t).split("."),n=parseInt(e[0]);return n.toLocaleString()+(1===e.length?"":"."+e[1])}function i(){if(D){var t=a("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(a(this).val())||0}).toArray().reduce(function(a,t){return a+t},0);a("input[name=current]").val(t).trigger("change")}}function r(){var t=(new Date).getTime(),e=a("#period_dates");if(h.forEach(function(n){var i=n[1]-n[0],r=100*i/R+"%",s=new Date(n[0]),o=new Date(n[1]-1),c=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),p=t>=n[0]&&t<n[1],m=t>=n[1],u=p?"progress-bar-active":m?"progress-bar-expired":"progress-bar-remain";a('<div class="progress-bar">').width(r).text(c).addClass(u).appendTo(e)}),a('[data-objective-mode="'+v+'"]').show(),a('[data-objective-mode][data-objective-mode!="'+v+'"]').remove(),a("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:g,step:1}),"achievement"==v){var r=a("[name=objective]:input");a.each(T,function(t,e){a("<option />").attr("value",t).text(e+" ("+t+"個)").appendTo(r)})}else{a("select[name=objective]").click(function(){this.select()});var x=a("#increse_objective_list");q.forEach(function(t){a('<button class="btn btn-default" name="add"  type="button" />').val(t.value).attr("title",t.name).append(a('<i class="fa fa-arrow-up" />')).append(a("<span />").addClass("icon icon-"+t.unit)).appendTo(x)})}a("button[name=add]").click(function(t){t.preventDefault();var e=parseInt(a(this).val()),n=parseInt(a("[name=objective]:input").val());a("[name=objective]:input").val(n+e).trigger("change")}),a("button[name=reset]").click(function(t){t.preventDefault(),a("[name=objective]:input").val(0).trigger("change")}),a("[name=expectation]:input").change(function(){m(),u()}).val(j);var b=a("#prize_list");q.forEach(function(t){a('<div class="prize-list" />').append(a('<h4 class="prize-list-header" />').text(t.name).append(a('<span class="prize-value" />').text("@"+t.value))).append(a('<div class="prize-list-body" />').attr("data-prize",t.unit)).appendTo(b)});var y=E.reduce(function(a,t){return Math.max(a,t.drops.length)},0),M=s();M.maps.forEach(function(a,t){E[t].expectation=a.expectation}),D=M.syncCurrentEnabled;var k=function(){var t=a("#map");E.forEach(function(a,e){var i=t.find("tr[data-map="+e+"]"),r=Math.max(parseInt(i.find("input[name=num_laps]").val())||0,0),s=Math.max(parseInt(i.find("input[name=num_drops]").val())||0,0),o=i.find("input[name=actual_expectation]"),c=Math.max(parseFloat(o.val())||0,0);"aggregate"===C&&(c=s/r||0,o.val(c));var p=Math.floor(c);i.find("button[name=increase]").val(p).text("+"+n(p)),M.maps[e].numLaps=r,M.maps[e].numDrops=s,a.expectation=M.maps[e].expectation=c}),o(M),l(),m(),u()},w=a("#map").on("keyup","input[type=number]",function(){k(),i()}).on("change","input[type=number]",function(){k(),i()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(t){t.preventDefault();var e=a(this).closest("tr").find("input[name=num_drops]"),n=parseInt(e.val())+parseInt(this.value);e.val(n),e.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){C=a(this).val(),M.expectationInputMode=C,o(M),w.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===C).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===C).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===C),k()}).on("click","input[name=sync]",function(){M.syncCurrentEnabled=D=this.checked,o(M),i()}),I=w.find("tbody");if(E.forEach(function(t,e){var n=M.maps[e],i=a("<td />").attr("data-chart",e).append(a('<span class="barchart" />')).append(a('<span class="barchart-label" />')).append(a('<span class="marathon" />'));a("<tr />").attr("data-map",e).append(a("<th />").text(t.name)).append(a("<td />").text(""+t.charisma+"/"+t.stamina)).append(function(){for(var e=t.drops.map(function(t){var e=t.icon?a("<i />").attr("title",t.name).addClass("icon icon-"+t.icon):a("<span />").text(t.name),n=t.set?a('<span class="badge" />').text("x"+t.set):null;return a("<td />").append(e).append(n)}),n=t.drops.length;y>n;n++)e.push(a("<td />"));return e}).append(function(){var t=a('<span class="input-group input-group-sm" />').append(a('<span class="input-group-addon">1周の期待値</span>')).append(a('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(n.expectation)),e=a('<span class="input-group input-group-sm" />').append(a('<span class="input-group-addon">周回</span>')).append(a('<input type="number" name="num_laps" min="0" class="form-control" />').val(n.numLaps)).append(a('<span class="input-group-addon">ドロップ</span>')).append(a('<input type="number" name="num_drops" min="0" class="form-control" />').val(n.numDrops)).append(a('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return a('<td class="expectation" />').append(e).append(t)}).append(i).prependTo(I)}),a("#map thead th.drops").attr("colspan",y),_){var N=a("#rewards tbody");z.forEach(function(t){a("<tr />").attr("data-amount",t.amount).append(a('<td class="text-right" />').html('<span class="diff"></span> '+t.amount)).append(a("<td />").html('<span class="icon icon-'+t.unit+'"></span>')).appendTo(N)})}var S=a("[name=estimate_map]:input").change(function(){l(),M.estimateMap=parseInt(a(this).val()),o(M)});E.forEach(function(t,e){a("<option />").val(e).text(t.name+" ("+t.charisma+"/"+t.stamina+")").prependTo(S)});for(var J=a("[name=estimate_rank]:input").change(function(){l(),M.estimateRank=parseInt(a(this).val()),o(M)}),U=1;200>=U;U++){var O=d(U),L=f(U),F=""+U+" ("+O+"/"+L+")";a("<option />").val(U).text(F).appendTo(J)}var H=a("[name=estimate_use_crystal]").change(function(){l(),M.estimateUseCrystal=a(this).val(),o(M)}),A=a("[name=estimate_natural_recovery]:input").change(function(){l(),M.estimateNaturalRecovery=this.checked,o(M)});a("*[title]").tooltip(),a("[name=current]:input").val(M.current),"exchange"==v?a("[name=objective]:input").val(M.objective):a("[name=objective]:input").val([M.objective]),a("[name=current]:input, [name=objective]:input").change(function(){M[this.name]=a(this).val(),o(M),c(),p(),u(),l()}),S.val(M.estimateMap),J.val(M.estimateRank),H.val(M.estimateUseCrystal),A.prop("checked",M.estimateNaturalRecovery),"exchange"==v&&p(),_&&c(),w.find("input[name=sync]").prop("checked",D).end().find('input[name=expectation_input_mode][value="'+M.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active")}function s(){var t={},e=E.map(function(a){return{numLaps:0,numDrops:0,expectation:a.expectation}}),n={current:b,objective:x,estimateMap:M,estimateRank:k,estimateUseCrystal:w,estimateNaturalRecovery:I,expectationInputMode:C,maps:e,syncCurrentEnabled:D};try{t=JSON.parse(a.cookie(y))}catch(i){}return a.extend(n,t)}function o(t){a.cookie(y,JSON.stringify(t),{expires:30})}function c(){if(_){var t=45,e=7,n=parseInt(a("[name=current]:input").val()),i=a("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=a(this),r=i.attr("data-amount")-n;if(-t>r)i.hide();else if(0>r)i.css("opacity",.5).show();else if(t>r)i.addClass("active").css("opacity",1).show();else if(t*e>r){var s=1-Math.floor(r/t)*t/(t*(e+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",c=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(c)})}}function p(){if("exchange"==v){var t=parseInt(a("[name=current]:input").val());q.forEach(function(e){for(var n=a('[data-prize="'+e.unit+'"]').empty(),i=0;t>i;i+=e.value){var r=a("<i />").addClass("icon icon-"+e.unit),s=25*Math.min(t-i,e.value)/e.value;a('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(n)}})}}function m(){var t=a("[name=expectation]:input").val(),e=1/0,i=0,r="drop"==t?null:t,s=E.map(function(a){var t=a.expectation/(r&&a[r]||1);return e=0,i=Math.max(i,t),t}),o=r?3:2;E.forEach(function(t,r){var c=a("[data-chart="+r+"]"),p=s[r],m=p/(i-e),u=120*m+240;c.find("span.barchart-label").text(n(p,o)+"個"),c.find("span.barchart").css({width:100*m+"%",backgroundColor:"hsla("+u+", 80%, 50%, 0.5)"})})}function u(){var t=parseInt(a("[name=objective]:input").val()),e=parseInt(a("[name=current]:input").val()),i=Math.max(t-e,0);E.forEach(function(t,e){var r=a("[data-chart="+e+"]"),s=i?Math.ceil(i/t.expectation):0;r.find("span.marathon").text("残り"+n(s)+"周")})}function l(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),i=E[parseInt(a("[name=estimate_map]:input").val())],r=Math.max(e-t,0),s=Math.ceil(r/i.expectation);a("#estimate_required_marathon").text(n(s));var o=(new Date).getTime(),c=h.reduce(function(a,t){return a+Math.max(t[1],o)-Math.max(t[0],o)},0),p=0+a("[name=estimate_natural_recovery]:input").prop("checked"),m=Math.floor(c/18e4)*p,u=Math.floor(c/36e5)*p,l=parseInt(a("[name=estimate_rank]").val()),v=d(l),g=f(l),x=Math.ceil(i.charisma*s),b=Math.ceil(i.stamina*s),_=a("[name=estimate_use_crystal]:input").val(),y=0+("both"===_||"charisma"===_),M=0+("both"===_||"stamina"===_),k=Math.ceil(Math.max(x-m,0)/v)*y,w=Math.ceil(Math.max(b-u,0)/g)*M,I=k+w;a("#estimate_required_crystal").text(n(I));var j=0===k?"diff-eq":k>0?"diff-plus":"diff-minus";a("#estimate_required_crystal_for_charisma").attr("class",j).text(n(k)),j=0===w?"diff-eq":w>0?"diff-plus":"diff-minus",a("#estimate_required_crystal_for_stamina").attr("class",j).text(n(w));var C=m+v*k,D=u+g*w,T=Math.floor(Math.min(C/i.charisma,D/i.stamina,s));a("#estimate_available_marathon").text(n(T));var q=T-s;j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus";var z=(q>=0?"+":"")+n(q);a("#estimate_available_marathon_diff").attr("class",j).text(z);var R=i.charisma*T;a("#estimate_using_charisma").text(n(R)),q=R-x,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",z=(q>=0?"+":"")+n(q),a("#estimate_using_charisma_diff").attr("class",j).text(z);var N=Math.ceil(i.stamina*T);a("#estimate_using_stamina").text(n(N)),q=N-b,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",z=(q>=0?"+":"")+n(q),a("#estimate_using_stamina_diff").attr("class",j).text(z);var S=t+Math.ceil(i.expectation*T);a("#estimate_result_collection").text(n(S)),q=S-e,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",z=(q>=0?"+":"")+n(q),a("#estimate_result_collection_diff").attr("class",j).text(z)}function d(a){return 27+(100>=a?3*a:300+a-100)}function f(a){return 12+(100>=a?0:Math.floor((a-100)/20)+1)}e(2);var h=[["2015/06/11 15:00:00","2015/06/18 10:00:00"],["2015/06/18 15:00:00","2015/06/25 10:00:00"]].map(function(a){return a.map(Date.parse)}),v="achievement",g=1/0,x=1500,b=20,_=!0,y="mithril-timer",M=3,k=100,w="both",I=!0,j="stamina",C="direct",D=!0,T={25:"セラが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50"},q=[],E=[{name:"ミスリルの洞窟",charisma:20,stamina:1,expectation:0,drops:[{name:"ミスリル鉱1",icon:"mithril-1",set:1}]},{name:"硬質の魔物",charisma:30,stamina:2,expectation:0,drops:[{name:"ミスリル鉱1",icon:"mithril-1",set:3},{name:"ハリッサ",icon:"harissa"},{name:"魔水晶1",icon:"demon-crystal-1"}]},{name:"ミスリル争奪戦",charisma:40,stamina:4,expectation:0,drops:[{name:"ミスリル鉱3",icon:"mithril-3",set:2},{name:"ミスリル鉱1",icon:"mithril-1",set:1},{name:"モーティマ",icon:"motima"},{name:"花束",icon:"flower"}]},{name:"交錯する陣容",charisma:50,stamina:7,expectation:11,drops:[{name:"ミスリル鉱3",icon:"mithril-3",set:3},{name:"ミスリル鉱1",icon:"mithril-1",set:2},{name:"カズハ",icon:"kazuha"},{name:"魔水晶2",icon:"demon-crystal-2"}]},{name:"怒涛の炎獣",charisma:80,stamina:9,expectation:0,drops:[{name:"ミスリル鉱5",icon:"mithril-5",set:4},{name:"フドウ",icon:"fudou"},{name:"白バケツ",icon:"platinum-bucket"},{name:"極上酒",icon:"hq-liquor"}]}],z=[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}],R=h.reduce(function(a,t){return a+t[1]-t[0]},0);a(function(){r(),setInterval(t,1e3)})}).call(t,e(1))}]);
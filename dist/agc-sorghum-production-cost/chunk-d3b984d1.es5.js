/*! Built with http://stenciljs.com */
AgcSorghumProductionCost.loadBundle("chunk-d3b984d1.js",["exports"],function(e){window;var t=function(e,t){var n=e.querySelector('[name="'+t+'"]'),a=e.querySelector('[data-validates="'+t+'"');return n.checkValidity()?(n.className=n.className.replace(" invalid",""),a.style.display="none",!0):(-1===n.className.indexOf("invalid")&&(n.className+=" invalid"),a.style.display="block",!1)},n=function(e,t){return e.matches.call(e,t)};e.validate=t,e.round=function(e,t){return+(Math.round(new Number(e+"e+"+t).valueOf())+"e-"+t)},e.mapEnterKey=function(e){return function(a){var r=document.querySelector(":focus"),i=Array.from(e.querySelectorAll("input, a, select, button, textarea")).map(function(e){return e});r&&!r.classList.contains("agc-wizard__actions-next")&&function(){if(13===a.which&&!n(r,"textarea")){!i.indexOf(r)||n(r,"a")||n(r,"button")||a.preventDefault();var o=i[i.indexOf(r)+(a.shiftKey?-1:1)];o?o.focus():i[0].focus(),o&&"select"in o&&o.select(),r&&r.willValidate&&t(e,r.name)}}()}},e.parseMoney=function(e){var t=e.toFixed(2).toString().split("."),n=t[1];return{dollars:t[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||"0",cents:n,toString:function(e){void 0===e&&(e="$")}}}});
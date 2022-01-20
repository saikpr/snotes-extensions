document.addEventListener("DOMContentLoaded",(function(){const e=CodeMirror.modeInfo.reduce((function(e,t){return e[t.mode]?e[t.mode].push(t):e[t.mode]=[t],e}),{}),t=CodeMirror.modeInfo.reduce((function(e,t){return e[t.name]={mode:t.mode,mime:t.mime},e}),{}),n=Object.keys(t);let o,d,r,i,a,m,s,l=!1,c=!0;function u(){if(d){let e=d,t=f();o.saveItemWithPresave(e,(()=>{i=m.getValue(),e.content.text=i,e.clientData=r,e.content.folds=t,e.content.preview_plain=null,e.content.preview_html=null}))}}function f(){if(m){if(doc=m.getDoc(),marks=doc.getAllMarks(),folds=[],marks.length)for(var e=marks.length-1;e>=0;e--)marks[e].collapsed&&"range"===marks[e].type&&folds.push(marks[e].find().from);return folds}}function g(o){if(!o)return;const d=function(n){const o=function(e){return e?{name:e.name,mode:e.mode,mime:e.mime}:null},d=/.+\.([^.]+)$/.exec(n),r=/\//.test(n);if(d)return o(CodeMirror.findModeByExtension(d[1]));if(r)return o(CodeMirror.findModeByMIME(r[1]));if(t[n])return{name:n,mode:t[n].mode,mime:t[n].mime};if(e[n]){const t=e[n][0];return{name:t.name,mode:t.mode,mime:t.mime}}return{name:n,mode:n,mime:n}}(o);d?(m.setOption("mode",d.mime),CodeMirror.autoLoadMode(m,d.mode),r&&(r.mode=d.name),document.getElementById("language-select").selectedIndex=n.indexOf(d.name)):console.error("Could not find a mode corresponding to "+o)}function M(e){const t=document.getElementById("toggle-vim-mode-button"),n="vim"===e?"Disable":"Enable",o="vim"===e?"danger":"success";t.innerHTML=`${n} Vim mode`,t.classList.remove("danger"),t.classList.remove("success"),t.classList.add(o)}window.setKeyMap=function(e){m.setOption("keyMap",e)},window.onLanguageSelect=function(){g(n[s.selectedIndex]),u()},window.setDefaultLanguage=function(){const e=n[s.selectedIndex];o.setComponentDataValueForKey("language",e);const t=document.getElementById("default-label"),d=t.innerHTML;t.innerHTML="Success",t.classList.add("success"),setTimeout((function(){t.classList.remove("success"),t.innerHTML=d}),750)},window.toggleVimMode=function(){let e;e="default"===(o.getComponentDataValueForKey("keyMap")??"default")?"vim":"default",window.setKeyMap(e),o.setComponentDataValueForKey("keyMap",e),M(e)},CodeMirror.commands.save=function(){u()},m=CodeMirror.fromTextArea(document.getElementById("code"),{extraKeys:{"Alt-F":"findPersistent"},lineNumbers:!0,styleSelectedText:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]}),m.setOption("extraKeys",{"Ctrl-F":e=>(CodeMirror.commands.toggleFold(e),u()),"Ctrl-W":e=>(CodeMirror.commands.foldAll(e),u()),"Ctrl-Q":e=>(CodeMirror.commands.unfoldAll(e),u())}),m.setSize("100%","100%"),setTimeout((function(){g("Markdown")}),1),function(){s=document.getElementById("language-select");for(let e=0;e<n.length;e++){const t=document.createElement("option");t.value=e,t.innerHTML=n[e],s.appendChild(t)}}(),m.on("change",(function(){l||u()})),m.on("gutterClick",(function(){u()})),o=new ComponentRelay({targetWindow:window,onReady:()=>{const e=o.platform;e&&document.body.classList.add(e);const t=o.getComponentDataValueForKey("keyMap")??"default";window.setKeyMap(t),M(t)}}),o.streamContextItem((e=>{!function(e){if(e.uuid!==a&&(i=null,c=!0,a=e.uuid),d=e,e.isMetadataUpdate)return;r=e.clientData;g(r.mode||o.getComponentDataValueForKey("language")),m&&(e.content.text!==i&&(l=!0,m.getDoc().setValue(d.content.text),l=!1),setTimeout((function(){!function(e){if(e&&"folds"in e.content){folds=e.content.folds;for(var t=0;t<folds.length;++t)m.foldCode(folds[t])}}(d)}),100),c&&(c=!1,m.getDoc().clearHistory()))}(e)}))}));
//# sourceMappingURL=main.js.map
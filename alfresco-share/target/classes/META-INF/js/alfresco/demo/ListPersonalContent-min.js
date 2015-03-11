define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/ListPersonalContent.html","alfresco/core/Core","dojo/dom-construct","dijit/form/Button"],function(c,g,f,d,e,b,a){return c([g,f,e],{cssRequirements:[{cssFile:"./css/ListPersonalContent.css"}],i18nScope:"Demo",i18nRequirements:[{i18nFile:"./i18n/ListPersonalContent.properties"}],templateString:d,data:[],postCreate:function(){var q=this;
for(var m=0;
m<this.data.length;
m++){var o="";
var n=this.data[m];
o+="<ul>";
o+="<li>"+this.message("list.personal.content.name")+" : "+n.name+"</li>";
o+="<li>"+this.message("list.personal.content.subname")+" : "+n.subname+"</li>";
o+="<li>"+this.message("list.personal.content.footer")+" : "+n.footer+"</li>";
var k="<ul>";
for(var h=0;
h<n.tags.length;
h++){k+="<li>"+n.tags[h]+"</li>"
}k+="</ul>";
if(n.tags.length>0){o+="<li>"+this.message("list.personal.content.tags")+" : "+k+"</li>"
}o+="</ul>";
o+='<div id="item-'+m+'">';
b.create("div",{innerHTML:o,className:"list-pc-item"},this.container);
var p={storeProtocol:n["store-protocol"],storeIdentifier:n["store-identifier"],nodeId:n["node-uuid"]};
var l=new a({label:this.message("list.personal.content.btn.view"),onClick:function(i){q.alfPublish("DEMO_TOPIC",p,true)
}},"item-"+m)
}this.inherited()
},buildRendering:function(){this.title=this.message("list.personal.content.label");
this.inherited(arguments)
}})
});
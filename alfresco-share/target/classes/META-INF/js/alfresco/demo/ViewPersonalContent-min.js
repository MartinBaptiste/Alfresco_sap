define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/ViewPersonalContent.html","alfresco/core/Core","dojo/dom-construct"],function(b,f,e,h,g,c,d,a){return b([h,g,d],{cssRequirements:[{cssFile:"./css/ViewPersonalContent.css"}],i18nScope:"Demo",i18nRequirements:[{i18nFile:"./i18n/ViewPersonalContent.properties"}],templateString:c,storeProtocol:null,storeIdentifier:null,nodeId:null,_loadContent:function(i){var j=this;
this.storeProtocol=i.storeProtocol;
this.storeIdentifier=i.storeIdentifier;
this.nodeId=i.nodeId;
e.get({url:(Alfresco.constants.PROXY_URI+"api/node/content/"+this.storeProtocol+"/"+this.storeIdentifier+"/"+this.nodeId),load:function(k){j.container.innerHTML=k
},error:function(k){console.error(k)
}})
},postCreate:function(){if(this.storeProtocol!=null&&this.storeIdentifier!=null&&this.nodeId!=null){this._loadContent({storeProtocol:this.storeProtocol,storeIdentifier:this.storeIdentifier,nodeId:this.nodeId})
}this.alfSubscribe("DEMO_TOPIC",f.hitch(this,"_loadContent"));
this.inherited()
},buildRendering:function(){this.title=this.message("view.personal.content.label");
this.inherited(arguments)
}})
});
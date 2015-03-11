define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/xhr",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ViewPersonalContent.html",
	"alfresco/core/Core",
	"dojo/dom-construct"],
	function(declare, lang, xhr, _Widget, _Templated, template, Core, domConstruct) {
	return declare([_Widget, _Templated, Core], {
		cssRequirements: [ { cssFile : "./css/ViewPersonalContent.css" } ],
		
		i18nScope: "Demo",
		
		i18nRequirements: [ { i18nFile : "./i18n/ViewPersonalContent.properties" } ],
		
		templateString: template,
		
		storeProtocol: null,

		storeIdentifier: null,

		nodeId: null,
		
		_loadContent: function(playload) {
			var _this = this;
			this.storeProtocol = playload.storeProtocol;
			this.storeIdentifier = playload.storeIdentifier;
			this.nodeId = playload.nodeId;
			
			xhr.get({
				url: (Alfresco.constants.PROXY_URI + "api/node/content/" + this.storeProtocol + 
					"/" + this.storeIdentifier + "/" + this.nodeId),
				load: function(data) {
					_this.container.innerHTML = data;
				},
				error: function(err) {
					console.error(err);
				}
			});
		},
		
		postCreate: function() {
			if (this.storeProtocol != null && this.storeIdentifier != null && this.nodeId != null) {
				this._loadContent({
					storeProtocol : this.storeProtocol,
					storeIdentifier: this.storeIdentifier,
					nodeId : this.nodeId
				});
			}
			
			this.alfSubscribe("DEMO_TOPIC", lang.hitch(this, "_loadContent"));
			
			this.inherited();
		},
		
		buildRendering: function() {
			this.title = this.message("view.personal.content.label");
			
			this.inherited(arguments);
		}
	});
});
define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/ListPersonalContent.html",
	"alfresco/core/Core",
	"dojo/dom-construct",
	"dijit/form/Button"],
	function(declare, _Widget, _Templated, template, Core, domConstruct, Button) {
	return declare([_Widget, _Templated, Core], {
		cssRequirements: [ { cssFile : "./css/ListPersonalContent.css" } ],
		
		i18nScope: "Demo",
		
		i18nRequirements: [ { i18nFile : "./i18n/ListPersonalContent.properties" } ],
		
		templateString: template,
		
		data: [],
		
		postCreate: function() {
			var _this = this;
			
			for (var i = 0; i < this.data.length; i++) {
				var list = "";
				var content = this.data[i];
				
				list += "<ul>";
				list +="<li>" + this.message("list.personal.content.name") + " : " + content.name + "</li>";
				list +="<li>" + this.message("list.personal.content.subname") + " : " + content.subname + "</li>";
				list +="<li>" + this.message("list.personal.content.footer") + " : " + content.footer + "</li>";

				var tags = "<ul>";
				for (var j = 0; j < content.tags.length; j++) {
					tags += "<li>" + content.tags[j] + "</li>";
				}
				tags += "</ul>";
				
				if (content.tags.length > 0) {
					list +="<li>" + this.message("list.personal.content.tags") + " : " + tags + "</li>";
				}
				
				list += "</ul>";
				list += "<div id=\"item-" + i + "\">";
				
				domConstruct.create("div", { innerHTML: list, className: 'list-pc-item' }, this.container);
				
				var playload = {
					storeProtocol : content["store-protocol"],
					storeIdentifier: content["store-identifier"],
					nodeId : content["node-uuid"]
				};
				
				var btn = new Button({
					label: this.message("list.personal.content.btn.view"),
					onClick: function(event) {
						_this.alfPublish("DEMO_TOPIC", playload, true);
					}
				}, 'item-' + i);
			}
			
			this.inherited();
		},
		
		buildRendering: function() {
			this.title = this.message("list.personal.content.label");
			
			this.inherited(arguments);
		}
	});
});
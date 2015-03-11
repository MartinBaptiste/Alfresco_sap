var connector = remote.connect("alfresco");
var result = connector.get("/node/listpersonal");
var json = JSON.parse(result);

model.jsonModel = {
	widgets: [
		{
			name: "alfresco/logo/Logo"
		},
		{
			name: "alfresco/layout/LeftAndRight",
			config: {
				widgets: [
					{
						name: "alfresco/demo/ListPersonalContent",
						config: {
							data : json.datas
						}
					},
					{
						name: "alfresco/demo/ViewPersonalContent",
						config: {
							storeProtocol : (json.datas.length > 0) ? json.datas[0]["store-protocol"] : null,
							storeIdentifier: (json.datas.length > 0) ? json.datas[0]["store-identifier"] : null,
							nodeId : (json.datas.length > 0) ? json.datas[0]["node-uuid"] : null,
							align: "right"
						}
					}
				]
			}
		}
		
	]
};
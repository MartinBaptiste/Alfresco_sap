{
	"datas" : [
		<#if datas??>
		<#list datas as node>
		{
			"name" : "${node.name}",
			"subname" : "${node.subname}",
			"store-protocol": "${node['store-protocol']}",
			"store-identifier": "${node['store-identifier']}",
			"node-uuid": "${node['node-uuid']}",
			"footer" : "${node.footer}",
			"tags" : [
			<#if node.taggable??>
			<#list node.taggable as tag>
				"${tag}"<#if tag_has_next>,</#if>
			</#list>
			</#if>
			]
		}<#if node_has_next>,</#if>
		</#list>
		</#if>
	]
}
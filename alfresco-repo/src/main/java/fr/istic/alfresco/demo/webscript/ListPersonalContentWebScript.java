package fr.istic.alfresco.demo.webscript;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchParameters;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.QName;
import org.springframework.extensions.webscripts.Cache;
import org.springframework.extensions.webscripts.DeclarativeWebScript;
import org.springframework.extensions.webscripts.Status;
import org.springframework.extensions.webscripts.WebScriptRequest;

public class ListPersonalContentWebScript extends DeclarativeWebScript {
	NodeService nodeService;
	SearchService searchService;

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}
	
	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}
	
	@Override
	protected Map<String, Object> executeImpl(WebScriptRequest req, Status status, Cache cache) {
		Map<String, Object> model = new HashMap<String, Object>();
		List<Map<String, Serializable>> datas = new ArrayList<Map<String, Serializable>>();
		
		// Get limit
		String limitArg = req.getParameter("limit");
		int limit = (limitArg != null && limitArg != "") ? Integer.valueOf(limitArg) : -1;
		
		// Create query
		SearchParameters query = new SearchParameters();
		query.addStore(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE);
		query.setQuery("TYPE:\"demo:personalContent\"");
		query.setLanguage(SearchService.LANGUAGE_LUCENE);
		query.setLimit(limit);
		
		// Execute query
		ResultSet result = searchService.query(query);
		
		// Construct result
		for (NodeRef node : result.getNodeRefs()) {
			Map<String, Serializable> data = new HashMap<String, Serializable>();
			Map<QName, Serializable> properties = nodeService.getProperties(node);
			
			for (QName qName : properties.keySet()) {
				data.put(qName.getLocalName(), properties.get(qName));
			}
			
			datas.add(data);
		}
		
		model.put("datas", datas);
		return model;
	}
}
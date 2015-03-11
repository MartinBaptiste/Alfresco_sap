# Alfresco_sap
Pour utiliser cette démo il faut installer Alfresco Comunity 5.0.c
```
Pour linux : http://dl.alfresco.com/release/community/5.0.c-build-00145/alfresco-community-5.0.c-installer-linux-x64.bin
```
```
Pour windows : http://dl.alfresco.com/release/community/5.0.c-build-00145/alfresco-community-5.0.c-installer-win-x64.exe
```

Démarer Alfresco avec ALFRESCO_PATH/alfresco.sh start

Il faut faire un mvn install pour alfresco-repo et alfresco-share

Copier alfresco-repo-0.0.1-SNAPSHOT.jar dans ALFRESCO_PATH/tomcat/webapps/alfresco/WEB-INF/lib/

et alfresco-share-0.0.1-SNAPSHOT.jar dans ALFRESCO_PATH/tomcat/shared/lib/

Redémarre Alfresco avec ALFRESCO_PATH/alfresco.sh restart

containerRegistryName="${CONTAINER_REGISTRY_NAME}"
containerRegistryLoginServer="${CONTAINER_REGISTRY_LOGIN_SERVER}"
containerRegistryPassword="${CONTAINER_REGISTRY_PASSWORD}"
containerImageName="${CONTAINER_IMAGE_NAME}"
resourceGroup="${RESOURCE_GROUP}"
containerInstanceName="${CONTAINER_INSTANCE_NAME}"
dnsLabel="${DNS_LABEL}"
subscription="${SUBSCRIPTION_NAME}"

az account set --subscription $subscription

# # Login to the container registry
az acr login --name containerRegistryName --username $containerRegistryName --password $containerRegistryPassword

# # Build and push the Docker image to the registryistry
az acr build --registry $containerRegistryName --image $containerImageName 

# Create a container instance from the image in the registry
az container create --resource-group $resourceGroup --name $containerInstanceName --image $containerRegistryLoginServer/$containerImageName \
    --dns-name-label $dnsLabel --ports 80   --registry-username $containerRegistryName --registry-password $containerRegistryPassword

az container logs --name $containerInstanceName --resource-group $resourceGroup
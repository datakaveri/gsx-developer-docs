---
sidebar_position: 2
---
 
# Manage Policies
A provider can create, view and delete access policies set for consumers and delegates in the Consumers tab.

![View policies set for consumers](../../resources/auth/view-pols.png)<br/>
*View policies set for consumers*
 
A policy can be set for a consumer for a particular resource group/dataset with a restriction to access type. 

- **API Access** allows the consumer to call the UGIX Resource Server APIs on the resource . 

**The policy can only be created if the consumer exists and if the resource/dataset exists on the UGIX Catalogue**. An expiry time for the policy can also be set. Once a policy expires, a consumer may not be able to request for tokens for the particular resource.

![Create policy](../../resources/auth/create-policy.png)<br/>
*Create policy*

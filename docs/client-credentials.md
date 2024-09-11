---
sidebar_position: 1
---

# Profile Management

## Fetching Client Credentials

Once a user has registered as a consumer or has been approved as a provider, they can obtain the user's default client credentials.

1. Log into the catalogue and click the top right button to enter the user's role panel.

![Entering into the consumer panel](../resources/auth/go-to-role-panel.png)<br/>
*Entering into the user panel*

2. In the user's respective role panel, click the top right button to enter your My Profile panel.

![Entering into the My Profile panel](../resources/auth/go-to-my-profile.png)<br/>
*Entering into the My Profile panel*

3. In the "My Profile" panel, the user can either download their default client credentials or reset them <br/>  if they have been lost or compromised.
![Getting new client credentials](../resources/auth/client-creds.png)<br/>
*Getting new client credentials*

**NOTE : Resetting client credentials will result in revocation of all existing tokens. Additionally, the old client secret will not be accepted in token requests.**

 ![Warning](../resources/auth/new-client-warning.png)<br/>
*Click Confirm if you wish to create new client credentials or if you have forgotten your existing client credentials.*

4. Click on "Download Client Details" to download a .csv file containing the credentials.

 ![Downloading default client credentials](../resources/auth/download-creds.png)<br/>
 *Downloading default client credentials*

---
canonical: https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-slack/
description: Configure the Slack integration to connect alerts generated by Grafana Alerting
keywords:
  - grafana
  - alerting
  - slack
  - integration
labels:
  products:
    - cloud
    - enterprise
    - oss
menuTitle: Slack
title: Configure Slack for Alerting
weight: 0
refs:
  nested-policy:
    - pattern: /docs/grafana/
      destination: /docs/grafana/<GRAFANA_VERSION>/alerting/configure-notifications/create-notification-policy/#add-new-nested-policy
    - pattern: /docs/grafana-cloud/
      destination: /docs/grafana-cloud/alerting-and-irm/alerting/configure-notifications/create-notification-policy/#add-new-nested-policy
---

# Configure Slack for Alerting

Use the Grafana Alerting - Slack integration to send Slack notifications when your alerts are firing.

There are two ways of integrating Slack into Grafana Alerting.

1. Use a [Slack API token](https://api.slack.com/authentication/token-types)

   Enable your app to access the Slack API. If, for example, you are interested in more granular control over permissions, or your project is expected to regularly scale, resulting in new channels being created, this is the best option.

1. Use a [Webhook URL](https://api.slack.com/messaging/webhooks)

   Webhooks is the simpler way to post messages into Slack. Slack automatically creates a bot user with all the necessary permissions to post messages to one particular channel of your choice.

{{< admonition type="note" >}}
Grafana Alerting only allows one Slack channel per contact point.
{{< /admonition >}}

## Before you begin

### Slack API Token

If you are using a Slack API Token, complete the following steps.

1. Follow steps 1 and 2 of the [Slack API Quickstart](https://api.slack.com/start/quickstart).
1. Add the [chat:write.public](https://api.slack.com/scopes/chat:write.public) scope to give your app the ability to post in all public channels without joining.
1. In OAuth Tokens for Your Workspace, copy the Bot User OAuth Token.
1. Open your Slack workplace.
1. Right click the channel you want to receive notifications in.
1. Click View channel details.
1. Scroll down and copy the Channel ID.
   {{< admonition type="note" >}}
   While going through these steps, Slack may prompt you to Reinstall your app in order for the changes to take effect.
   {{< /admonition >}}

### Webhook URL

If you are using a Webhook URL, follow steps 1 and 5 in the [Slack API Quickstart](https://api.slack.com/start/quickstart).

{{< admonition type="note" >}}
Make sure you copy the Slack app Webhook URL. You need this when setting up your contact point integration in Grafana Alerting.
{{< /admonition >}}

## Procedure

To create your Slack integration in Grafana Alerting, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Contact points**.
1. Click **+ Add contact point**.
1. Enter a contact point name.
1. From the Integration list, select Slack.
1. If you are using a Slack API token:
   - In the **Recipient** field, copy in the channel ID.
   - In the **Token** field, copy in the Bot User OAuth Token that starts with “xoxb-”.
1. If you are using a Webhook URL, in the **Webhook** field, copy in your Slack app Webhook URL.
1. Click **Test** to check that your integration works.

   ** For Grafana Alertmanager only.**

1. Click **Save contact point**.

## Next steps

The Slack contact point is ready to receive alert notifications.

To add this contact point to your alert, complete the following steps.

1. In Grafana, navigate to **Alerting** > **Alert rules**.
1. Edit or create a new alert rule.
1. Scroll down to the **Configure labels and notifications** section.
1. Under Notifications click **Select contact point**.
1. From the drop-down menu, select the previously created contact point.
1. **Click Save rule and exit**.
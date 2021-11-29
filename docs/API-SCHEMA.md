# API Schema

## Request body schema

| Property       | Value               | Description                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| type           | ORG                 | Preference type. Use ‘ORG’ as the type.                 |
| name           | <organization-name> | This is an optional property. No value is needed.       |
| locale         | en-US               | Language preference. Use ‘en-US’ as the locale.         |
| preference     | <preference object> | This is a json object which contains preference details. More details can be found in the section below.         |

### Preference object schema

#### `organizationDetails`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| siteTitle           | Site title used in the organization website                 | Login - Koala Sports |
| copyrightText           | Copyright text used in the organization.                 | © 2021 Koala Sports Inc. |
| supportEmail           | Support Email address of the Organization.                 | support@koalasports.com |

#### `images`

##### `logo`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| imgURL           | URL of the hosted Logo Image.                | https://cdn.statically.io/gh/brionmario/asgardeo-branding/main/images/logo.png |
| altText           | Alternative text for the Logo Image.                 | Koala Sports Logo |support@koalasports.com |

##### `favicon`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| imgURL           | URL of the hosted Favicon Image. Recommended format - ico
Recommended size - 16x16               | https://cdn.statically.io/gh/brionmario/asgardeo-branding/main/images/favicon.ico |

#### `urls`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| privacyPolicyURL           | URL for the Organization's Privacy Policy site.  | https://koalasports.com/privacy-policy |
| termsOfUseURL           | URL for the Organization's Terms of Use site.  | https://koalasports.com/terms-of-service |
| cookiePolicyURL           | URL for the Organization's Cookie Policy.  | https://koalasports.com/privacy-policy/#cookie-policy |

#### `stylesheets`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| accountApp           | URL of the hosted CSS stylesheet which will be used to override the themes in account portals.  | https://cdn.statically.io/gh/brionmario/asgardeo-branding/main/stylesheets/login-portal.overrides.css |

#### `configs`

| Key             | Description         | Example                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| isBrandingEnabled           | Config For enable above added  branding configurations. By changing this config you can switch between your branding and default Asgardeo branding.  | true |

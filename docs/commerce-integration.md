# Commerce integration notes

Commerce integration requires a provisioned Adobe Commerce or Magento GraphQL
endpoint. No endpoint or credentials are available for this project, so this
document records the integration boundary rather than an untested connection.

## Integration outline

1. Obtain the GraphQL endpoint and store-view configuration from the Adobe
   Commerce environment.
2. Keep endpoint configuration in environment-specific site configuration; do
   not commit credentials or tokens.
3. Add a commerce block that requests catalog and cart data from the GraphQL
   endpoint.
4. Handle loading, empty, and error states in the block UI.
5. Test product listing, product details, cart updates, and checkout handoff
   against a non-production store view.

The standard Adobe Commerce project template,
[`aem-boilerplate-commerce`](https://github.com/adobe/aem-boilerplate-commerce),
is the recommended starting point when a real Commerce environment becomes
available.

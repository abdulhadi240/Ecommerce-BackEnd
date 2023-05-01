module.exports = ({ env }) => ({
    // ...
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_https://api.vercel.com/v1/integrations/deploy/prj_mAnS0ljyZoFvEFK51fc4afpzi9Qh/EQaX3laUam",
        apiToken: "sjdZ853KONxygm1xRC4tSp1U",
        appFilter: "ecommerce-backend",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },

    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });



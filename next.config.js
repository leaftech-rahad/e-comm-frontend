/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true,
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/",
  //       headers: [
  //         /* { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Set-Cookie",
  //         },
  //         {
  //           key: "sameSite",
  //           value: "lax",
  //         }, */
  //         {
  //           key: "Credentials",
  //           value: "include",
  //         },
  //       ],
  //     },
  //   ];
  // },

  poweredByHeader: false,
  /* crossOrigin: "use-credentials", */
};

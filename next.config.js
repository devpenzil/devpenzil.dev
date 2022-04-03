module.exports = {
  reactStrictMode: false,
  images:{
    domains:['media.graphcms.com','media.graphassets.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

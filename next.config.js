// module.exports = {
//   reactStrictMode: true,
// }

const isProd = process.env.NEXTJS_PUBLIC_URL === 'production'

module.exports = {     
  API_URL: isProd ? 'https://buddhaword.vercel.app' : 'http://localhost:3000',
  i18n: {
    localeDetection: false,
    locales: ['en', 'th'],
    defaultLocale: 'en',
  }
}
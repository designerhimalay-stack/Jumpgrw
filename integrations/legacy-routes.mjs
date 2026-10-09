// @ts-check

/* The team, technology and X-Shore pages were first built at /page1/ to
   /page34/. They now live at addresses that say what they are. This map is
   the one record of that move: astro.config.mjs turns it into redirects, so
   any old link, bookmark or search result still lands on the right page (a
   redirect page with a canonical link to the new address, kept out of the
   sitemap). The page kits themselves keep their internal names
   (src/_pages/pageN, imported as @pg/pageN).

   Retired pages are listed here too, sent to the closest page still live:
   Careers was taken down at the owner's request and goes to About. */

/** @type {Record<string, string>} old path → new path */
export const LEGACY_ROUTES = {
  "/page1": "/mvp-launch-teams",
  "/page2": "/product-discovery",
  "/page3": "/prototype-to-launch",
  "/page4": "/production-teams",
  "/page5": "/hire-qa-engineers",
  "/page6": "/hire-devops-engineers",
  "/page7": "/staff-augmentation",
  "/page8": "/specialist-developers",
  "/page9": "/global-capability-center",
  "/page10": "/hire-product-managers",
  "/page11": "/hire-ux-ui-designers",
  "/page12": "/hire-business-analysts",
  "/page13": "/hire-react-developers",
  "/page14": "/hire-angular-developers",
  "/page15": "/hire-full-stack-developers",
  "/page16": "/hire-nodejs-developers",
  "/page17": "/hire-python-developers",
  "/page18": "/hire-dotnet-developers",
  "/page19": "/hire-java-developers",
  "/page20": "/hire-php-developers",
  "/page21": "/hire-ios-developers",
  "/page22": "/hire-android-developers",
  "/page23": "/hire-kotlin-developers",
  "/page24": "/hire-react-native-developers",
  "/page25": "/hire-flutter-developers",
  "/page26": "/hire-generative-ai-engineers",
  "/page27": "/hire-machine-learning-engineers",
  "/page28": "/hire-data-engineers",
  "/page29": "/hire-automation-qa-engineers",
  "/page30": "/onshore-developers-usa",
  "/page31": "/nearshore-developers-mexico",
  "/page32": "/nearshore-developers-canada",
  "/page33": "/offshore-developers-india",
  "/page34": "/global-capability-center-india",
  "/careers": "/about",
};

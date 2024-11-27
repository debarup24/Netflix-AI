  export const logo =
   "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"; 

   export const USER_AVATAR =
    "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

   export const API_OPTIONS = {
   method: 'GET',
   headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGE0MWYxNGY0OGJiMzFmMmU0MThiMThjYzM3OWI0YSIsIm5iZiI6MTczMTg1NDA5NC4xODMwMDcyLCJzdWIiOiI2NzM5ZmQxNzZhMDJhMjRkN2IyMTgzODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cX0Pdiat1LaVLUE2yWmkbi4meH9RT6LF-cXKKIy0PzQ'
       }
   };

   export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; 

   export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg";

  export const SUPPORTED_LANGUAGES = [
    { identifier: "english", name: "English" },
    { identifier: "hindi", name: "हिन्दी" },
    { identifier: "bengali", name: "বাংলা" },
    { identifier: "spanish", name: "Español" },
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

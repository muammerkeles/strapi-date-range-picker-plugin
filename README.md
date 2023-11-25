# Strapi plugin - date-range-picker  BETA

Strapi Custom Field for Date Range 

[GitHub](https://github.com/muammerkeles/strapi-date-range-picker-plugin) - [npm](https://www.npmjs.com/package/strapi-date-range-picker-plugin)

How to use?

install npm package 

`npm i strapi-date-range-picker-plugin`

then add this inside **plugins.js**
(create file **plugins.js** if not existing inside **config** folder)

config/plugins.js
```
module.exports = {
    // ...
    'strapi-date-range-picker-plugin': {
      enabled: true, 
      resolve: '@/src/plugins/strapi-date-range-picker-plugin'

    },
    // ...
  }
```
_npm run build --clean_

It's ready.

This date-range-picker plugin allows you to select a data range in one CustomField instead of adding two seperate field. 

Watch the video:

[video-convert-1697204432099.webm](https://github.com/muammerkeles/strapi-date-range-picker-plugin/assets/6603435/207f242d-5aaf-4872-86ee-4c98578705ef)


![image](https://github.com/muammerkeles/strapi-date-range-picker-plugin/assets/6603435/5e6cd3fc-3a5c-466f-a6da-c3d95a5c718f)


 

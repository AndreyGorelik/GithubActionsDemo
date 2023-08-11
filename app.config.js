// {
//   "expo": {
//     "name": "githubactionsdemo",
//     "slug": "githubactionsdemo",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/images/icon.png",
//     "scheme": "myapp",
//     "userInterfaceStyle": "automatic",
//     "splash": {
//       "image": "./assets/images/splash.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#ffffff"
//     },
//     "assetBundlePatterns": ["**/*"],
//     "ios": {
//       "supportsTablet": true
//     },
//     "android": {
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/images/adaptive-icon.png",
//         "backgroundColor": "#ffffff"
//       }
//     },
//     "web": {
//       "bundler": "metro",
//       "output": "static",
//       "favicon": "./assets/images/favicon.png"
//     },
//     "plugins": ["expo-router"],
//     "experiments": {
//       "typedRoutes": true
//     },
//     "extra": {
//       "eas": {
//         "projectId": "6621490f-daac-4a48-bc21-a6709274ef62"
//       }
//     }
//   }
// }

module.exports = {
  expo: {
    name: "githubactionsdemo",
    slug: "githubactionsdemo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: "6621490f-daac-4a48-bc21-a6709274ef62",
      },
    },
  },
};

# Proof Of Concepts

## Business Requirements

## Project setup
```
npm install
npm install -g @vue/cli
npm install -g @vue/cli-service-global
npm install vuex --save
vue create [name of project]
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Install tests package environments
```
vue add @vue/lint
vue add @vue/e2e-nightwatch
```

### Lints and fixes files
```
npm run lint
```
## Offline-js

**In development mode**, make sure to change your computer's localhost to the ip address. For example:

```
xx.x.x.xx:8080
```

This will allow the offline object from Offline-js to change its state (up or down) based on the internet connection status.

## Synchronization with Rest Api and Offline-js state

importScripts("/precache-manifest.8f0c697418aca81b13d86aca627fd3a6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */

if (workbox) {
  console.log(`Workbox is loaded`)
  
  self.__precacheManifest = [].concat(self.__precacheManifest || [])
  if (workbox && workbox.precaching) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
  }
} else {
  console.log(`Workbox didn't load`)
}

// install new service worker when ok, then reload page.
self.addEventListener('message', (msg) => {
  console.log('sw message', msg );
  
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})

// Close all notifications
self.addEventListener('message', (msg) => {
  if (msg.data.action != 'closeNotifications') {
    return
  }

  self.registration.getNotifications().then((notifications) => {
    notifications.forEach((notification) => {
      notification.close()
    })
  })
})


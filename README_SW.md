# **Service Workers and Caching Strategies**

Service workers help make websites faster and more reliable by managing how resources are loaded. They can cache files, making them available offline or speeding up load times. Different strategies decide how the service worker handles requests:

•  **Cache First**: The service worker checks the cache first. If the resource is there, it’s served immediately. If not, it fetches it from the network.

•  **Network First**: The service worker tries the network first for fresh data. If the network fails, it falls back to the cache.

•  **Cache Only**: Only cached files are served. This is useful for offline apps.

•  **Network Only**: Resources are always fetched from the network, without using the cache.

•  **Stale-While-Revalidate**: The cache serves the resource immediately, while the service worker fetches an updated version in the background.

##   

![cache](https://github.com/Cornerstone-CICCC/web-2-midterm-project-iki789/blob/dev/public/service_worker.png?raw=true)

At Kiki’s Anime, we use **Cache First with Network Fallback**. This means the service worker loads cached files first for speed, but if something isn’t cached, it fetches it from the network. This keeps the site fast and ensures important data stays available!

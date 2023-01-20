const version = "v1";

const assets = [
	"index.html",
	"qr-scanner.min.js",
	"qr-scanner-worker.min.js",
	"slide-up-widget.css",
	"slide-up-widget.js"
];

self.addEventListener("install", async () => {
	const cache = await caches.open(version);
	await cache.addAll(assets);
});

self.addEventListener("activate", async () => {
	const cacheNames = await caches.keys();
	await Promise.all(
		cacheNames
			.filter((name) => name !== version)
			.map((name) => caches.delete(name))
	);
});


self.addEventListener("fetch", async (event) => {
	const response = networkFirst(event.request);
	event.respondWith(response);
});

async function networkFirst(request) {
	try {
		return await fetch(request);
	} catch (e) {
		return caches.match(request);
	}
}



// Minimal service worker whose only job is to let the admin panel show
// desktop notifications reliably even when this tab is in the background.
// registration.showNotification() (used by background tabs) is far more
// reliable than the plain Notification() constructor, which most browsers
// throttle/suppress once the calling tab loses focus.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const sessionKey = event.notification.data?.sessionKey || null;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const existing = clientList.find((client) => 'focus' in client);
      if (existing) {
        existing.focus();
        if (sessionKey) {
          existing.postMessage({ type: 'live-chat-notification-click', sessionKey });
        }
        return undefined;
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('/live-chats');
      }
      return undefined;
    })
  );
});

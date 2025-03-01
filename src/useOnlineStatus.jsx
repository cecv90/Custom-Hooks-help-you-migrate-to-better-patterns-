import { useSyncExternalStore } from "react";

// Function to subscribe to connection/disconnection events
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

// Custom hook to get the connection status
export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe, // Subscription function
    () => navigator.onLine, // Get the current connection status
    () => true // Default value for server-side rendering (always true)
  );
}
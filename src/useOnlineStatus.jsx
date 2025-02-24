import { useState, useEffect } from "react";

/**
 * Custom hook that tracks the user's online status.
 * 
 * This hook listens for changes in the browser's online/offline state
 * and updates a state variable accordingly.
 * 
 * returns {boolean} - Returns `true` if the user is online, `false` if offline.
 */

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);  // State to track whether the user is online
  useEffect(() => {
    /**
     * Event handler for when the user goes online.
     * Updates the state to `true`.
    */
    function handleOnline() {
      setIsOnline(true);
    }
    /**
     * Event handler for when the user goes offline.
     * Updates the state to `false`.
    */
    function handleOffline() {
      setIsOnline(false)
    }
    // Attach event listeners for 'online' and 'offline' events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    // Cleanup function: remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline)
    };
  }, []);// Empty dependency array ensures this effect runs only once on mount
  return isOnline;
}

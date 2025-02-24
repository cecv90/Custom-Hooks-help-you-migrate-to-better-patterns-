import { useOnlineStatus } from "./useOnlineStatus";
import "./App.css";

/* Component that displays the user's online status.
* 
* returns {JSX.Element} - A heading indicating whether the user is online or disconnected.
*/

function StatuBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}

/**
 * Save button component that allows saving progress only when online.
 * 
 * The button is disabled when the user is offline.
 * 
 * returns {JSX.Element} - A button that saves progress when clicked.
*/

function SaveButton() {
  const isOnline = useOnlineStatus();
  
  /**
   * Handles the click event on the save button.
   * Logs a message indicating progress has been saved.
  */
 
  function handleSaveClick() {
    console.log('✅ Progress Saved');
  }

  return (
    <button
      disabled={!isOnline}
      onClick={handleSaveClick}
    >
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

/**
 * Main application component that renders the SaveButton and StatusBar components.
 * 
 * returns {JSX.Element} - The main app structure.
*/

export default function App() {
  return (
    <div className="App">
      <SaveButton />
      <StatuBar />
    </div>
  )
}
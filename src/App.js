import { useOnlineStatus } from "./useOnlineStatus.jsx";
import "./App.css"

function StatusBar(){
  const isOnline= useOnlineStatus();
  return <h1>{isOnline ? '✅ online' : '❌ Disconnected'}</h1>
}

function SaveButton(){
  const isOnline=useOnlineStatus();
  
  function handleSaveClick(){
    console.log('✅ Progress Saved');
  }

  return (
    <button 
    disabled={!isOnline}
    onClick={handleSaveClick} 
    >
      {isOnline ? 'Save Progress' : 'Reconnecting'}
    </button>
  );
}

export default function App(){
  return(
    <> 
      <div className="App">
        <StatusBar/>
        <SaveButton/>
      </div>
    </>
  )
}
import React from 'react';
import { MusicPlayer } from './components/MusicPlayer';
import { songs } from './data/songs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <MusicPlayer songs={songs} />
    </div>
  );
}

export default App;
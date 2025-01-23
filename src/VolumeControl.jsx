const Volume = ({ volumeValue, handleVolumeChange }) => {  

  return (
    <div style={{
        padding: '10px',
        }}>
        <input 
          id='volume' 
          type="range" 
          min={1} 
          max={100} 
          step={1} 
          onChange={handleVolumeChange}
        />
        <p id='value'>Volume: {volumeValue}</p>
    </div>
  )
};  

export default Volume;
import React from 'react';

const ToggleButton = ({ value, handleToggle, isOn }) => {

    return (
        <section style={{padding: "6px"}}>
          <p style={{font: "bold", fontSize: "18px"}}>{value}</p>
          <div className="toggle-button" onClick={handleToggle}>
            <div style={{
                    backgroundColor: "black", 
                    width: '60px', 
                    height: '30px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '0 5px'}}>
                <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: isOn ? 'blue' : 'red',
                    marginLeft: isOn ? '30px' : '',
                    transition: 'margin-left 0.3s'
                }}></div>
            </div>
          </div>
        </section>
      
    );
};

export default ToggleButton;
import Button from "./Button"
const DrumPad = ( { displayPadButton, playSound } ) => {

    return (
        <section>
            <div>
            <Button value={"Heater 1"} id={"Q"} displayPadButton={ displayPadButton} playSound={playSound}/>
            <Button value={"Heater 2"} id={"W"} displayPadButton={displayPadButton} playSound={playSound}/>
            <Button value={"Heater 3"} id={"E"} displayPadButton={displayPadButton} playSound={playSound}/>
            </div>

            <div>
            <Button value={"Heater 4"} id={"A"} displayPadButton={displayPadButton} playSound={playSound}/>
            <Button value={"Clap"} id={"S"} displayPadButton={displayPadButton} playSound={playSound}/>
            <Button value={"Open HH"} id={"D"} displayPadButton={displayPadButton} playSound={playSound}/>
            </div>

            <div>
            <Button value={"Kick n` Hat"} id={"Z"} displayPadButton={displayPadButton} playSound={playSound}/>
            <Button value={"Kick"} id={"X"} displayPadButton={displayPadButton} playSound={playSound}/>
            <Button value={"Closed HH"} id={"C"} displayPadButton={displayPadButton} playSound={playSound}/>
            </div>
        </section>
    )
}

export default DrumPad;
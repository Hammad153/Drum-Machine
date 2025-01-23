const Button = ({ displayPadButton, playSound, value, id }) => {
    return (
        <button
            onClick={(e) => {
                displayPadButton(e);
                playSound(e);
            }}
            id={id}
            value={value}
        >
            {id}
        </button>
    );
};

export default Button;

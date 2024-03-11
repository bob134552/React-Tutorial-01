import "./TabButton.css";

export default function TabButton({children, onSelect}) {
    function clickHandler() {
        console.log('TABBUTTON COMPONENT EXECUTING');
    }

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
};
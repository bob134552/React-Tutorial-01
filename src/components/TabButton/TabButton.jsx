import "./TabButton.css";

export default function TabButton({children, onSelect, isSelected}) {
    function clickHandler() {
        console.log('TABBUTTON COMPONENT EXECUTING');
    }

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
};
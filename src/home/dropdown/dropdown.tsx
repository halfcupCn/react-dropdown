import React from 'react';
import DropdownItem from './dropdownitem';
import './dropdown.css';

interface DropdowmItemDetail {
    href: String;
    text: String;
}

interface DropdowmItemContent {
    title: DropdowmItemDetail;
    content: Array<DropdowmItemDetail>;
}

interface Props {
    value: Array<DropdowmItemContent>;
}

interface State {
    list: Array<DropdowmItemContent>;
}

class Dropdowm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            list: props.value,
        }
    }

    public render() {
        const dropdownList = this.state.list.map(item =>
            <DropdownItem value={item} />
        );
        return <div id='flex-parent'>{dropdownList}</div>;

    }
}

export default Dropdowm
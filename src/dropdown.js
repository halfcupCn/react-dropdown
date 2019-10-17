import React from 'react';
// import ReactDOM from 'react-dom';

export function DropdownItem(props) {
    window.console.log('local prop' + props);
    window.props = props;
    window.titles = [];
    const title = props.value.title;
    const content = props.value.content.map(item => {
        window.titles.push(item.text);
        return <li key={item}><a href={item.href}>{item.text}</a></li>;
    });
    return (
        <ul>
            <li>
                <a href={title.href}>{title.text}</a>
            </li>
            {content}
        </ul>
    );
}

// const testData = {
//     title: {
//         href: '',
//         title: 'title',
//     },
//     content: [
//         {
//             href: '',
//             title: 'item1',
//         },
//         {
//             href: '',
//             title: 'item2',
//         },
//     ]
// }

// ReactDOM.render(<DropdownItem
//     value={testData} />, document.getElementById('root'));
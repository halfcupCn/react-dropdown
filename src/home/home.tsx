import React from 'react';
import Dropdowm from './dropdown/dropdown';
import './home.css';

class Home extends React.Component {
    render() {
        const testData = {
            title: {
                href: '',
                text: 'title',
            },
            content: [
                {
                    href: '',
                    text: 'item1',
                },
                {
                    href: '',
                    text: 'item2',
                },
            ]
        }

        const testHeader = [
            testData, testData,testData, testData,testData, testData,testData, testData,testData, testData,testData,
        ];

        return (
            <div>
                <img src='https://www.freewebheaders.com/wp-content/gallery/technology-industry-size-1024x300/thumbs/thumbs_colorful-data-cabling-website-header_size-1024x300.jpg' alt='头图'/>
                <Dropdowm value={testHeader} />
            </div>
        );
    }
}

export default Home
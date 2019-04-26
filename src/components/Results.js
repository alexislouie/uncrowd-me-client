import React from 'react';

import Card from './Card';

export default function Results(props) {
    const cards = props.results.map((card, index) =>
        <li key={index}>
            <Card {...card} />
        </li>
    );
    return (
        <div>
            <ul className="list">
                {cards}
            </ul>
        </div>
    )

}
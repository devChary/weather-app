import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferernceLine } from 'react-sparklines';

function average (data) {
    return _.round( _.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferernceLine type="avg" />
            </Sparklines>
        </div>
    )
}
import * as React from 'react';

function SayHello(props: { message: string }): React.ReactElement {
    return (
        <div>
            <span>{props.message}</span>
            <div />
        </div>
    );
}

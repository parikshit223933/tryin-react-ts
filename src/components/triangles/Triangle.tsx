import React from 'react';
import { SingleTriangle } from '..';

class Triangle extends React.Component
{
    render()
    {
        return(
            <div className="triangles">
                <SingleTriangle/>
            </div>
        );
    }
}

export default Triangle;
import React from 'react';
import { Triangles } from '../';
import './styles/outerbox.scss';

class OuterBox extends React.Component<any, any> {
    render() {
        return (
            <div className="pt-5">
                <div className="outer-box position-relative">
                    <p className="text-center m-0">PARIKSHIT</p>
                    <Triangles />
                </div>
            </div>
        );
    }
}

export default OuterBox;

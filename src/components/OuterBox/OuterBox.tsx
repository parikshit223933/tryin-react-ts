import React from 'react';
import { Triangle } from '../';
import './styles/outerbox.scss';

class OuterBox extends React.Component<any, any> {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="row pt-5">
                    <div className="col-md-10 offset-md-1 p-5 outer-box position-relative">
                        <p className="text-center m-0">PARIKSHIT</p>
                        <Triangle />
                    </div>
                </div>
            </div>
        );
    }
}

export default OuterBox;

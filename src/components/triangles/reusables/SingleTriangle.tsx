import React, { CSSProperties } from 'react';
import './styles/singleTriangle.scss';

interface StyleState {}

interface StyleProps {
    styles: CSSProperties;
    id: String;
}

class SingleTriangle extends React.Component<StyleProps, StyleState> {
    render() {
        return (
            <div className="single-triangle" style={this.props.styles}></div>
        );
    }
}
export default SingleTriangle;

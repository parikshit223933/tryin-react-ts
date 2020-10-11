import React from 'react';
import { SingleTriangle } from '..';

interface StateInterface {
    element: any;
}
interface PropInterface {}
class Triangles extends React.Component<PropInterface, StateInterface> {
    constructor(props: PropInterface) {
        super(props);
        this.state = {
            element: null,
        };
    }
    componentDidMount() {
        this.setState({
            element: document.getElementsByClassName('outer-box')[0],
        });
    }
    getProper = (param: any): any => {
        if (param !== '' && param !== null) {
            return param;
        }
        return param === '' ? 'none' : 0;
    };

    getStyles = (
        top: number = 0,
        left: number = 0,
        borderLeft: string,
        borderRight: string,
        borderBottom: string,
        borderTop: string
    ): object => {
        top = this.getProper(top);
        left = this.getProper(left);
        borderLeft = this.getProper(borderLeft);
        borderRight = this.getProper(borderRight);
        borderBottom = this.getProper(borderBottom);
        borderTop = this.getProper(borderTop);
        const newObj = {
            top: top.toString() + 'px',
            left: left.toString() + 'px',
            borderLeft,
            borderRight,
            borderBottom,
            borderTop,
        };
        return newObj;
    };

    getRandomInLimit = (min: number, max: number): number => {
        return min + Math.floor((max - min + 1) * Math.random());
    };

    boundingRect = () => {
        return this.state.element.getBoundingClientRect();
    };
    getXStart = (): number => {
        return this.boundingRect().x;
    };
    getXEnd = (): number => {
        return this.getXStart() + this.boundingRect().width;
    };
    getYStart = (): number => {
        return this.boundingRect().y;
    };
    getYEnd = (): number => {
        return this.boundingRect().height - this.getYStart();
    };
    getstylesArr = (threshold: number, numberOfTriangles: number): Object[] => {
        let styles = [];
        for (let i: number = 0; i < numberOfTriangles; i++) {
            styles.push(
                this.getStyles(
                    this.getRandomInLimit(0, this.getYEnd() - threshold),
                    this.getRandomInLimit(
                        this.getXStart(),
                        this.getXEnd() - threshold
                    ),
                    `${this.getRandomInLimit(0, 1)}vw solid transparent`,
                    `${this.getRandomInLimit(0, 1)}vw solid transparent`,
                    `${this.getRandomInLimit(
                        0,
                        1
                    )}vw solid rgb(${this.getRandomInLimit(
                        0,
                        255
                    )}, ${this.getRandomInLimit(
                        0,
                        255
                    )}, ${this.getRandomInLimit(0, 255)})`,
                    `${this.getRandomInLimit(
                        0,
                        1
                    )}vw solid rgb(${this.getRandomInLimit(
                        0,
                        255
                    )}, ${this.getRandomInLimit(
                        0,
                        255
                    )}, ${this.getRandomInLimit(0, 255)})`
                )
            );
        }
        return styles;
    };

    render() {
        if (this.state.element !== null) {
            const styleaArr = this.getstylesArr(25, 1000);
            return (
                <div className="triangles">
                    {styleaArr.map((style, index) => {
                        return (
                            <SingleTriangle
                                styles={style}
                                key={index}
                                id={`triangle${index}`}
                            />
                        );
                    })}
                </div>
            );
        }
        return <h1>LOADING</h1>;
    }
}

export default Triangles;

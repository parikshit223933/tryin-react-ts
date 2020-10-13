import React from 'react';
import { SingleTriangle } from '..';
import './styles/triangles.scss';
import $ from 'jquery';

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
        borderTop: string,
        animation: String
    ): object => {
        top = this.getProper(top);
        left = this.getProper(left);
        borderLeft = this.getProper(borderLeft);
        borderRight = this.getProper(borderRight);
        borderBottom = this.getProper(borderBottom);
        borderTop = this.getProper(borderTop);
        animation = this.getProper(animation);
        const newObj = {
            top: top.toString() + 'px',
            left: left.toString() + 'px',
            borderLeft,
            borderRight,
            borderBottom,
            borderTop,
            animation,
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
    getstylesArr = (
        threshold: number,
        numberOfTriangles: number,
        timeRangeStart: number,
        timeRangeEnd: number,
        handleMouseEvent: boolean,
        radiusAroundMouse: number
    ): Object[] => {
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
                    )}, ${this.getRandomInLimit(0, 255)})`,
                    `rotor${this.getRandomInLimit(
                        1,
                        4
                    )} ease-in-out ${this.getRandomInLimit(
                        timeRangeStart,
                        timeRangeEnd
                    )}s infinite`
                )
            );
        }
        if (handleMouseEvent) this.handleMouseEvent(radiusAroundMouse);
        return styles;
    };
    handleMouseEvent = (radiusAroundMouse: number) => {
        document
            .getElementsByClassName('outer-box')[0]
            .addEventListener('mousemove', (e: MouseEventInit) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                $('.single-triangle')
                    .toArray()
                    .forEach((triangle) => {
                        let jQueryElement = $(triangle);
                        const pos = jQueryElement.position();
                        const elementX = pos.left;
                        const elementY = pos.top;
                        let initialAnimation = jQueryElement.css('animation');
                        if (
                            mouseX !== undefined &&
                            mouseY !== undefined &&
                            Math.abs(mouseX - elementX) < radiusAroundMouse &&
                            Math.abs(mouseY - elementY) < radiusAroundMouse
                        ) {
                            jQueryElement.css(
                                'animation',
                                'rotor1 ease-in-out 0.1s infinite'
                            );
                        } else {
                            jQueryElement.css('animation', initialAnimation);
                        }
                    });
            });
    };
    render() {
        if (this.state.element !== null) {
            const styleaArr = this.getstylesArr(25, 1000, 1, 100, true, 100);
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

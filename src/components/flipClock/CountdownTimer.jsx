import { TransferWithinAStationRounded } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Flipper from './Flipper';
import './countdownTimer.css';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);

        this.timer = null;

        this.flippers = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
        ];
    }

    componentDidMount = () => {
        this.init();
        this.run();
    };

    init = () => {
        let leftTimeStr = this.getLeftTime();
        console.log(this.flippers);
        this.flippers.forEach((ref, i) => {
            ref.current.setFront(leftTimeStr.charAt(i))
        });
    };

    run = () => {
        this.time = setInterval(() => {
            let leftTimeStr = this.getLeftTime();
            this.flippers.forEach((ref, i) => {
                let currentDigital = ref.current.state.frontTextFromData;
                let nextDigital = leftTimeStr.charAt(i);

                if (currentDigital != nextDigital) {
                    ref.current.flipDown(currentDigital, nextDigital);
                }
            });
        }, 1000);
    };

    getLeftTime = () => {
        let { targetTime } = this.props;
        let secDiff = ~~((targetTime - new Date()) / 1000);

        let displaySec = secDiff % 60;
        let displayMin = ~~((secDiff % 3600) / 60);
        let displayHour = ~~((secDiff % 86400) / 3600);
        let displayDay = ~~(secDiff / 86400);

        return `${this.parseIntToStr(displayDay)}${this.parseIntToStr(displayHour)}${this.parseIntToStr(displayMin)}${this.parseIntToStr(displaySec)}`;
    };

    parseIntToStr = (intVal) => intVal.toString().padStart(2, '0');

    render = () => {
        return (
            <div className="countdown-timer">
                <em>剩餘</em>
                <Flipper ref={this.flippers[0]} />
                <Flipper ref={this.flippers[1]} />
                <em>天</em>
                <Flipper ref={this.flippers[2]} />
                <Flipper ref={this.flippers[3]} />
                <em>小時</em>
                <Flipper ref={this.flippers[4]} />
                <Flipper ref={this.flippers[5]} />
                <em>分</em>
                <Flipper ref={this.flippers[6]} />
                <Flipper ref={this.flippers[7]} />
                <em>秒</em>
            </div>
        );
    };
}

export default CountdownTimer;

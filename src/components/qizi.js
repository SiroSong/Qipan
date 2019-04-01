import React from 'react';

export class Qizi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: true,
            qizis:[]
        }
        this.ctx = {};

    }

    componentDidMount(){
        let ctx = document.getElementById('qizi').getContext('2d');
        this.ctx = ctx;
        // console.log(this.ctx)
    }

    clickHandle = (e) => {
        let obj = e.target , x , y , row,col,nowqizis=[];
        x = e.clientX - obj.offsetLeft;
        y = e.clientY - obj.offsetTop;
        row = Math.round((x - 15)/30);
        col = Math.round((y - 15)/30);
        nowqizis.push(new Object({
            row,
            col,
            color:this.state.color,
        }));
        this.setState({
            color: !this.state.color,
            qizis: nowqizis
        },() => this.drawQizi())
        console.log(nowqizis);
    }

    drawQizi = () => {
        let that = this;
        this.ctx.clearRect(0,0,570,570);
        this.state.qizis.forEach((val,ind) => {
            // console.log(val);
            that.ctx.beginPath();
            that.ctx.arc(val.row*30+15,val.col*30+15,10,0,2*Math.PI);
            that.ctx.fillStyle = that.state.color? 'white': 'black';
            that.ctx.fill();
            that.ctx.closePath();
            // console.log(that.state.color)
        })
    }

    back = () => {
        let nowqizis = this.state.qizis;
        // console.log(this.state.qizis)
        // debugger
        // nowqizis.pop();
        this.setState({
            qizis: nowqizis,
        },() =>{
            // this.ctx.clearRect(0,0,570,570);
            this.drawQizi();
            // console.log(this.state.qizis);
        } )
    }

    render(){
        return(
            <div className={'qipanContent'}>
                <canvas id={'qizi'} width={600} height={600} onClick={this.clickHandle} className={'qizi'}>
                    您的浏览器不支持该棋盘，请更换高版本浏览器。
                </canvas>
                {/* <div className={'huiqi'}>
                    <span>{this.state.color? '黑棋回合': '白棋回合'}</span>
                    <button onClick={this.back}>悔棋</button>
                </div> */}
            </div>
        )
    }
} 
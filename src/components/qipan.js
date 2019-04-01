import React, { Component } from 'react';

export class Qipan extends React.Component{
    constructor(props){
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount(){
        let ctx = document.getElementById('can').getContext('2d');

        // 棋盘底色
        ctx.save();
        ctx.fillStyle = '#faa755';
        ctx.fillRect(0,0,570,570);
        ctx.restore();
        //棋盘线
        for(let i = 0; i<19;i++){
            ctx.beginPath();
            ctx.moveTo(15,30*i+15);
            ctx.lineTo(555,30*i+15);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(30*i+15,15);
            ctx.lineTo(30*i+15,555);
            ctx.stroke();
            ctx.closePath();
        }
        //棋盘点
        ctx.beginPath();
        ctx.arc(105,105,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(285,285,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(465,465,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(105,285,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(105,465,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(285,105,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(285,465,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(465,105,5,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(465,285,5,0,2*Math.PI);
        ctx.fill();
    }
          
    render(){
        return(
                <canvas width={600} height={600} id={'can'} className={'qipan'}>
                    您的浏览器不支持该棋盘，请更换高版本浏览器。
                </canvas>
            
        )
    }
}
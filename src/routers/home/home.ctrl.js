"use strict";

const hello = (req,res)=>{
    res.render("home/index");
};

const hellologin = (req,res)=>{
    res.render("home/login");
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    hello,
    hellologin,
};
"use strict";

const output = {
    hello: (req,res)=>{
        res.render("home/index");
    },
    
    hellologin: (req,res)=>{
        res.render("home/login");
    },
}

const users = {
    id: ["newstep", "miero", "김팀장"],
    psword: ["1234","1234","123456"],
};

const process = {
    login: (req,res)=>{
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

// 오브젝트 {key:value} 외부로 넘겨 주기
module.exports = {
    output,
    process,
};
let myGraph2 = document.getElementById('myGraph2');
let trace6 ={};
trace6.type = "bar";
trace6.name = "歇業";
trace6.x = [];
trace6.y = [];
trace6.x[0] = "西醫師"
trace6.y[0] = Profession1[0]['count']
trace6.x[1] = "藥師"
trace6.y[1] = Profession2[0]['count']
trace6.x[2] = "護理師"
trace6.y[2] = Profession3[0]['count']
trace6.x[3] = "護士"
trace6.y[3] = Profession4[0]['count']
trace6.text = trace6.y ;
trace6.textfont = {
    color: 'white',
    family:"Courier New",
    size:20
    
};

//for(let i=0;i<animals2.length;i++){
  //  trace6.x[i] =animals[i]['name'];
   // trace6.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace7 ={};
trace7.type = "bar";
trace7.name = "執業"
trace7.x = [];
trace7.y = [];
trace7.x[0] = "西醫師"
trace7.y[0] = Profession1[1]['count']
trace7.x[1] = "藥師"
trace7.y[1] = Profession2[1]['count']
trace7.x[2] = "護理師"
trace7.y[2] = Profession3[1]['count']
trace7.x[3] = "護士"
trace7.y[3] = Profession4[1]['count']
trace7.text = trace7.y ;
trace7.textfont = {
    color: 'red',
    family:"Courier New",
    size:20
};

//for(let i=0;i<animals2.length;i++){
  //  trace7.x[i] =animals[i]['name'];
   // trace7.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace8 ={};
trace8.type = "bar";
trace8.name = "停業"
trace8.x = [];
trace8.y = [];
trace8.x[0] = "西醫師"
trace8.y[0] = Profession1[2]['count']
trace8.x[1] = "藥師"
trace8.y[1] = Profession2[2]['count']
trace8.x[2] = "護理師"
trace8.y[2] = Profession3[2]['count']
trace8.x[3] = "護士"
trace8.y[3] = Profession4[2]['count']
trace8.text = trace8.y ;
trace8.textfont = {
    color: 'black',
    family:"Courier New",
    size:20

};

//for(let i=0;i<animals2.length;i++){
   // trace8.x[i] =animals[i]['name'];
   // trace8.y[i] =animals2[i]['count'];
//}


let data2 = [];
data2.push(trace6);
data2.push(trace7);
data2.push(trace8);

let layout2 = {
    margin:{
        t:100
    },
    yaxis:{
        range:[0,32000]
    },
    barmode:'stack',
    font: {
        family: "'Noto Sans TC', cursive", // 修改為你想使用的字型，多個字型之間用逗號分隔
        size: 22, // 調整文字的大小
        color: "black" // 調整文字的顏色
    },
    title:'西醫師、藥師、護理師、護士執業統計Bar Chart'
};
Plotly.newPlot(myGraph2, data2, layout2);

/// [0]、[1]、[2] 這個很重要，不同房間
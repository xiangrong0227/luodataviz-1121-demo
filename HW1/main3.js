let myGraph3 = document.getElementById('myGraph3');

let trace9 ={};
trace9.type = "pie";
trace9.title = "107年度" ;
trace9.labels = [];
trace9.values = [];
trace9.hole =0.5;
trace9.domain ={
    row:0,
    column:0
};

for(let x=0;x<evaluation_ratio_1.length; x++){
    trace9.labels[x] =evaluation_ratio_1[x]['name'];
    trace9.values[x] =evaluation_ratio_1[x]['count'];
}

let data3 = [];
data3.push(trace9);

let trace10 ={};
trace10.type = "pie";
trace10.title = "108年度" ;
trace10.labels = [];
trace10.values = [];
trace10.hole =0.5;
trace10.domain ={
    row:0,
    column:1
};

for(let x=0;x<evaluation_ratio_2.length; x++){
    trace10.labels[x] =evaluation_ratio_2[x]['name'];
    trace10.values[x] =evaluation_ratio_2[x]['count'];
}

data3.push(trace10);

let trace11 ={};
trace11.type = "pie";
trace11.title = "109年度" ;
trace11.labels = [];
trace11.values = [];
trace11.hole =0.5;
trace11.domain ={
    row:0,
    column:2
};


for(let x=0;x<evaluation_ratio_3.length; x++){
    trace11.labels[x] =evaluation_ratio_3[x]['name'];
    trace11.values[x] =evaluation_ratio_3[x]['count'];
}

data3.push(trace11);


let layout3 = {
    margin:{
        t:60,
        l:0
    },
    font: {
        family: "'Noto Sans TC', cursive", // 修改為你想使用的字型，多個字型之間用逗號分隔
        size: 20, // 調整文字的大小
        color: "black" // 調整文字的顏色
    },
    legend: {
        x: 1, // 圖例的 x 位置，0.5 表示置中
        y: 0.5 // 圖例的 y 位置，1 表示置頂
    },
    grid:{
        rows:1,
        columns:3
    },
    title:'107~109年度內政部空中勤務總隊五大任務執行架次比例'
};

Plotly.newPlot(myGraph3, data3, layout3);


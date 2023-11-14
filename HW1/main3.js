let myGraph = document.getElementById('myGraph3');

let trace1 ={};
trace1.type = "pie";
trace1.title = "107年度" ;
trace1.labels = [];
trace1.values = [];
trace1.hole =0.5;
trace1.domain ={
    row:0,
    column:0
};

for(let x=0;x<evaluation_ratio_1.length; x++){
    trace1.labels[x] =evaluation_ratio_1[x]['name'];
    trace1.values[x] =evaluation_ratio_1[x]['count'];
}

let data3 = [];
data3.push(trace1);

let trace2 ={};
trace2.type = "pie";
trace2.title = "108年度" ;
trace2.labels = [];
trace2.values = [];
trace2.hole =0.5;
trace2.domain ={
    row:0,
    column:1
};

for(let x=0;x<evaluation_ratio_2.length; x++){
    trace2.labels[x] =evaluation_ratio_2[x]['name'];
    trace2.values[x] =evaluation_ratio_2[x]['count'];
}

data3.push(trace2);

let trace3 ={};
trace3.type = "pie";
trace3.title = "109年度" ;
trace3.labels = [];
trace3.values = [];
trace3.hole =0.5;
trace3.domain ={
    row:0,
    column:2
};


for(let x=0;x<evaluation_ratio_3.length; x++){
    trace3.labels[x] =evaluation_ratio_3[x]['name'];
    trace3.values[x] =evaluation_ratio_3[x]['count'];
}

data3.push(trace3);


let layout3 = {
    margin:{
        t:30,
        l:0
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

Plotly.newPlot(myGraph, data3, layout3);


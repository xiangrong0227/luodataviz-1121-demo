let myGraph = document.getElementById('myGraph2');
let trace1 ={};
trace1.type = "bar";
trace1.name = "停業";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "西醫師"
trace1.y[0] = Profession1[0]['count']
trace1.x[1] = "藥師"
trace1.y[1] = Profession2[0]['count']
trace1.x[2] = "護理師"
trace1.y[2] = Profession3[0]['count']
trace1.x[3] = "護士"
trace1.y[3] = Profession4[0]['count']
trace1.text = trace1.y ;
trace1.textfont = {
    color: 'white',
    family:"Courier New",
    size:14
    
};

//for(let i=0;i<animals2.length;i++){
  //  trace1.x[i] =animals[i]['name'];
   // trace1.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace2 ={};
trace2.type = "bar";
trace2.name = "執業"
trace2.x = [];
trace2.y = [];
trace2.x[0] = "西醫師"
trace2.y[0] = Profession1[1]['count']
trace2.x[1] = "藥師"
trace2.y[1] = Profession2[1]['count']
trace2.x[2] = "護理師"
trace2.y[2] = Profession3[1]['count']
trace2.x[3] = "護士"
trace2.y[3] = Profession4[1]['count']
trace2.text = trace2.y ;
trace2.textfont = {
    color: 'red',
    family:"Courier New",
    size:14
};

//for(let i=0;i<animals2.length;i++){
  //  trace2.x[i] =animals[i]['name'];
   // trace2.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace3 ={};
trace3.type = "bar";
trace3.name = "歇業"
trace3.x = [];
trace3.y = [];
trace3.x[0] = "西醫師"
trace3.y[0] = Profession1[2]['count']
trace3.x[1] = "藥師"
trace3.y[1] = Profession2[2]['count']
trace3.x[2] = "護理師"
trace3.y[2] = Profession3[2]['count']
trace3.x[3] = "護士"
trace3.y[3] = Profession4[2]['count']
trace3.text = trace3.y ;
trace3.textfont = {
    color: 'black',
    family:"Courier New",
    size:14

};

//for(let i=0;i<animals2.length;i++){
   // trace3.x[i] =animals[i]['name'];
   // trace3.y[i] =animals2[i]['count'];
//}


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{
        t:30
    },
    barmode:'stack',
    title:'西醫師、藥師、護理師、護士執業統計Bar Chart'
};
Plotly.newPlot(myGraph, data, layout);

/// [0]、[1]、[2] 這個很重要，不同房間
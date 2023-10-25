let myGraph = document.getElementById('myGraph');
let trace1 ={};
trace1.type = "bar";
trace1.name = "Lion";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "Taipei Zoo"
trace1.y[0] = animals[0]['count']
trace1.x[1] = "Taoyuan Zoo"
trace1.y[1] = animals2[0]['count']
trace1.text = trace1.y ;
trace1.textfont = {
    color: 'white',
    size:20
};

//for(let i=0;i<animals2.length;i++){
  //  trace1.x[i] =animals[i]['name'];
   // trace1.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace2 ={};
trace2.type = "bar";
trace2.name = "Tiger"
trace2.x = [];
trace2.y = [];
trace2.x[0] = "Taipei Zoo"
trace2.y[0] = animals[1]['count']
trace2.x[1] = "Taoyuan Zoo"
trace2.y[1] = animals2[1]['count']
trace2.text = trace2.y ;
trace2.textfont = {
    color: 'white',
    size:20
};

//for(let i=0;i<animals2.length;i++){
  //  trace2.x[i] =animals[i]['name'];
   // trace2.y[i] =animals[i]['count']+animals2[i]['count'];
//}

let trace3 ={};
trace3.type = "bar";
trace3.name = "Monkey"
trace3.x = [];
trace3.y = [];
trace3.x[0] = "Taipei Zoo"
trace3.y[0] = animals[2]['count']
trace3.x[1] = "Taoyuan Zoo"
trace3.y[1] = animals2[2]['count']
trace3.text = trace3.y ;
trace3.textfont = {
    color: 'white',
    size:20
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
        t:50
    },
    barmode:'stack',
    title:'Taipei Zoo VS. Taoyuan Zoo'
};
Plotly.newPlot(myGraph, data, layout);

/// [0]、[1]、[2] 這個很重要，不同房間
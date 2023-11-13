let myGraph = document.getElementById('myGraph');
let trace1 ={};
trace1.mode = "markers+text";
trace1.type = "scatter";
trace1.name = "二號步道";
trace1.visible =true;
trace1.marker={
    size:10
};
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition="bottom center";
trace1.textfont={
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
    trace1.text[i] =set1[i][2];
}

let trace2 ={};
trace2.mode = "markers+text";
trace2.type = "scatter";
trace2.name = "五號步道";
trace2.visible =false;
trace2.line ={
    color:'red'
};
trace2.marker={
    size:10
};
trace2.x = [];
trace2.y = [];
trace2.text = [];

for(let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] =set2[i][2];
}

let trace3 ={};
trace3.mode = "lines+markers";
trace3.type = "scatter";
trace3.name = "六號步道";
trace3.visible =false;
trace3.line ={
    color: 'green',
    shape:'spline'
};

trace3.marker={
    size:10
};
trace3.x = [];
trace3.y = [];
trace3.text = [];

for(let i=0;i<set3.length;i++){
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i] =set3[i][2];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{
        t:50
    },
        xaxis:{
            range:[4,12]
        },
        yaxis:{
            range:[0,22000]
        },
        title:'Scatter & Line',
        updatemenus :[
            {
                y:1.2,
                x:0.3,
                yanchor:'top',
                buttons:[
                    {
                        method:'restyle',
                        args:['visible',[true, false, false]],
                        label:"二號步道"
                    },
                    {
                        method:'restyle',
                        args:['visible',[false, true, false]],
                        label:"五號步道"
                    },
                    {
                        method:'restyle',
                        args:['visible',[false, false, true]],
                        label:"六號步道"
                    },
                    {
                        method:'restyle',
                        args:['visible',[true, true, true]],
                        label:"Display All"
                    }
                ]
            }
        ]
    }
Plotly.newPlot(myGraph, data, layout);


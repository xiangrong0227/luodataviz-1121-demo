//get csv file
d3.csv('tourists.csv').then(
    res => {
        drawHistogram(res);
    }
);

function drawHistogram(res){
    console.log(res);
    let myGraph = document.getElementById('myGraph');
    let trace1 ={};
    trace1.mode = "markers+text";
    trace1.type = "scatter";
    trace1.name = "2號步道";
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
    trace2.name = "5號步道";
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
    
    let trace4 ={};
    trace4.mode = "lines+markers";
    trace4.type = "scatter";
    trace4.name = "六號步道";
    trace4.visible =false;
    trace4.line ={
        color: 'green',
        shape:'spline'
    };
    
    trace4.marker={
        size:10
    };
    trace4.x = [];
    trace4.y = [];
    trace4.text = [];
    
    for(let i=0;i<set3.length;i++){
        trace4.x[i] =set3[i][0];
        trace4.y[i] =set3[i][1];
        trace4.text[i] =set3[i][2];
    }

    let trace5 ={};
    trace5.mode = "lines+markers";
    trace5.type = "scatter";
    trace5.name = "六號步道";
    trace5.visible =false;
    trace5.line ={
        color: 'green',
        shape:'spline'
    };
    
    trace5.marker={
        size:10
    };
    trace5.x = [];
    trace5.y = [];
    trace5.text = [];
    
    for(let i=0;i<set3.length;i++){
        trace5.x[i] =set3[i][0];
        trace5.y[i] =set3[i][1];
        trace5.text[i] =set3[i][2];
    }

    let trace6 ={};
    trace6.mode = "lines+markers";
    trace6.type = "scatter";
    trace6.name = "六號步道";
    trace6.visible =false;
    trace6.line ={
        color: 'green',
        shape:'spline'
    };
    
    trace6.marker={
        size:10
    };
    trace6.x = [];
    trace6.y = [];
    trace6.text = [];
    
    for(let i=0;i<set3.length;i++){
        trace6.x[i] =set3[i][0];
        trace6.y[i] =set3[i][1];
        trace6.text[i] =set3[i][2];
    }
    let data = [];
    data.push(trace1);
    data.push(trace2);
    data.push(trace3);
    data.push(trace4);
    data.push(trace5);
    data.push(trace6);


    
    let layout = {
        margin:{
            t:50
        },
            xaxis:{
                range:[0,6]
            },
            yaxis:{
                range:[0,25]
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
                            label:"Team A"
                        },
                        {
                            method:'restyle',
                            args:['visible',[false, true, false]],
                            label:"Team B"
                        },
                        {
                            method:'restyle',
                            args:['visible',[false, false, true]],
                            label:"Team C"
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
        
}
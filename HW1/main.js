//get csv file
d3.csv('harry_potter.csv').then(
    res => {
        drawBarChart(res);
    }
);

function drawBarChart(res) {
    console.log(res);
    //放程式碼


}



//get json file
//d3.json('harry_potter.json').then(
// res=>{
//     console.log('Local json:',res)
//  }
//);

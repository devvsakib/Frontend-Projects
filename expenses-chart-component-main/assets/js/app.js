const dyn_day = document.querySelectorAll("._main_content_graph"),
    url = "/data.json";

const chart_box = document.querySelector("._main_content_graph");
var chart_html = "";
var max_index = 0;

fetch(url)
    .then(res => res.json())
    .then(data => {
        // data.forEach(function (each_data, index) {
        //     if (each_data.amount > data[max_index].amount)
        //         max_index = index
        // })
        // function calculate_height(amount) {
        //     return (amount * 120) / data[max_index].amount
        // }
        // data.forEach(function (each_data, index) {
        //     chart_html+='<div class="graphs">'
        //     chart_html += '<p class="dynamic_day">' + each_data.day + '</p>'
        //     // chart_html+=`style = "height:${+calculate_height(each_data.amount)}"+px"></span>`
        //     chart_html += '<p class="graph_tile">$' + each_data.amount + '</p>'
        //     chart_html+='</div>'
        // })
        // chart_box.innerHTML = chart_html
    })









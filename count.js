


var table = document.getElementsByClassName("htBlock-normalTable specific-table");
table[0].getElementsByTagName('tr')[0].innerHTML = table[0].getElementsByTagName('tr')[0].innerHTML +"<th><p>標準労働時間</p></th>";
table[0].getElementsByTagName('tr')[0].innerHTML = table[0].getElementsByTagName('tr')[0].innerHTML +"<th><p>残り必要時間</p></th>";
table[0].getElementsByTagName('tr')[0].innerHTML = table[0].getElementsByTagName('tr')[0].innerHTML +"<th><p>残り勤務日数</p></th>";
table[0].getElementsByTagName('tr')[0].innerHTML = table[0].getElementsByTagName('tr')[0].innerHTML +"<th><p>残り必要時間（１日あたり）</p></th>";

table[0].getElementsByTagName('tr')[1].innerHTML = table[0].getElementsByTagName('tr')[1].innerHTML +"<td rowspan=\"2\"><input class=\"hrs\" type=\"text\" size=\"4\" value=8 ></td>";

h = table[0].getElementsByClassName('hrs').item(0).value;
trs = document.querySelectorAll("div.htBlock-adjastableTableF_inner table tbody tr");
workday_count = 0;
workday_count = [...trs].filter(t => t.children[4].innerText === "正社員（フレックス）").length + [...trs].filter(t => t.children[4].innerText === "正社員（裁量労働）").length;
workday_remain = workday_count - [...trs].filter(t => t.children[10].innerText != '').length;
hours_done = parseFloat(document.querySelectorAll(".all_work_time")[1].innerText);
hours_left = h*workday_count - hours_done;


table[0].getElementsByTagName('tr')[1].innerHTML = table[0].getElementsByTagName('tr')[1].innerHTML +"<td class=\"hrsleft\" rowspan=\"2\">"+time_converter(hours_left)+"</td>";
table[0].getElementsByTagName('tr')[1].innerHTML = table[0].getElementsByTagName('tr')[1].innerHTML +"<td class=\"daysleft\" rowspan=\"2\">"+workday_remain+"</td>";
table[0].getElementsByTagName('tr')[1].innerHTML = table[0].getElementsByTagName('tr')[1].innerHTML +"<td class=\"hrdayleft\" rowspan=\"2\">"+time_converter(hours_left/workday_remain)+"</td>";


setInterval(function(){
    h = table[0].getElementsByClassName('hrs').item(0).value;
    hours_left = h*workday_count - hours_done;
    table[0].getElementsByClassName('hrsleft').item(0).innerText = time_converter(hours_left);
    table[0].getElementsByClassName('hrdayleft').item(0).innerText = time_converter(hours_left/workday_remain);
}, 2500);
function time_converter(minutes){
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + "." + (sec < 10 ? "0" : "") + sec;
};




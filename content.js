/*if(typeof trs === 'undefined' || trs === null) {let trs;};
if(typeof workday_count === 'undefined' || trs === null){let workday_count;};*/
trs = document.querySelectorAll("div.htBlock-adjastableTableF_inner table tbody tr");
workday_count = 0;
/*for(var i=0; i<trs.length; ++i){ 
    if(trs[i].children[4].innerText == '正社員（フレックス）')
    {workday_count+=1;}
}*/
workday_count = [...trs].filter(t => t.children[4].innerText === "正社員（フレックス）").length;
workday_remain = workday_count - [...trs].filter(t => t.children[10].innerText != '').length;
hours_done = parseFloat(document.querySelectorAll(".all_work_time")[1].innerText);
hours_left = h*workday_count - hours_done;
message = "work hours left: " + hours_left + '\nhours need to work per day left: '+ hours_left/workday_remain +'\n';
alert(message);


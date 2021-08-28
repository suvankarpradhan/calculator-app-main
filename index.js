let screenValue = "";
$('.btn').on('click',(e)=>{
   let key = $(e.currentTarget).attr('id');
   if(key!="equal"&&key!="del"){    
    screenValue+=key;   
    $('input[type="text"]').val(screenValue);    
   }
})
$('#reset').on('click',()=>{
    screenValue=""
    $('input[type="text"]').val("0");
})
$('#del').on('click',()=>{
    screenValue=$('input[type="text"]').val();
    screenValue=screenValue.slice(0,screenValue.length-1);    
    $('input[type="text"]').val(screenValue); 
    if(screenValue===""){$('input[type="text"]').val("0");}
})
$('#equal').on('click',()=>{
    try{
        let answer = eval($('input[type="text"]').val());
    $('input[type="text"]').val(answer.toLocaleString());
    screenValue=answer; 
    }catch{
        $('input[type="text"]').val("Syntex Error");
        screenValue="";
    }
    
})



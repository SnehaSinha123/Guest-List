Name_of_the_guest_array=[];

function submit(){
    display_guest_array=[];
    for(var j=1;j<=4;j++){
        var Name_of_the_guest =document.getElementById("name_of_the_student_"+j).value;
        Name_of_the_guest_array.push(name_of_the_guest);


    }

    var length=Name_of_the_guest_array.length;
    for(var k=0; k<length;k++){
        display_guest_array.push("<h4>name-"+Name_of_the_guest_array[k]+"</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_guest_array;
    var remove=display_guest_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    Name_of_the_guest_array.sort();
    var display_guest_array_sorting=[];
    var length=Name_of_the_guest_array.length;
    for(var k=0; k<length;k++){
        display_guest_array_sorting.push("<h4>name-"+Name_of_the_guest_array[k]+"</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_guest_array_sorting;
    var remove=display_guest_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove;
}

function New_Update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+Name_of_the_guest_array+"</h1>";
}

    

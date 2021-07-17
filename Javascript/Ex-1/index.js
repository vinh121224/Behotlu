const contentInput = document.getElementById("input")
const content = document.getElementById("content")
const create_btn = document.getElementById("create_btn")
const update_btn = document.getElementById("update_btn")
const delete_btn = document.getElementById("delete_btn")
const image = document.getElementById("image")
const youtube_vid= document.getElementById("yt_video")
create_btn.onclick=function(){
    // const valueinput=contentInput.value;
    // content.innerHTML=valueinput
    // const valueinput=contentInput.value;
    // image.src=valueinput
    const valueinput=contentInput.value;
    iframe.src=valueinput
}
update_btn.onclick=function(){
    // const valueinput=contentInput.value;
    // const valuecontent=content.textContent;
    // const updatevalue= valueinput + valuecontent;
    // content.innerText=updatevalue;
}
delete_btn.onclick=function(){
    // const valuecontent=0
}

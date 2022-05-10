let state=document.getElementById("state");
(async()=>{
    const  state_obj=await(await fetch('./states.json')).json();
    for(var st in state_obj)
    {
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.className='dropdown-item';
        a.href='#';
        a.innerText=state_obj[st];
        li.appendChild(a);
        // option.text=state_obj[st];
        // option.value=state_obj[st];
        // option.className='dropdown-item';
        state.append(li);
    }
})();
// state_list.map((key)=>{console.log(key)});

function render(){
    let plusModule;
    initialState.comments.map((orderObj, id) => {
        
        plusModule += `
            <tr>
                <th score="row"> ${ id+1 } </th>
                <td>${ orderObj.text } </td>
                <td>${ orderObj.date } </td>
            </tr>`;
    });
    // tableBody.innerHTML(plusModule);
    tableBody.textContent = plusModule;
    // $(element).html(responseText);
    // element.textContent = responseText;
}
btnMain.addEventListener('click', function(){
    alert('is good')
});

btnAdd.addEventListener("click", function(){
    if(CommentInput != ''){
        initialState.comments.push({
        text: document.getElementById('inputComm').value,
        date: (new Date()).toLocaleString(),
        });
        console.log( document.getElementById('inputComm').value)
    }
});

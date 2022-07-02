var div = document.getElementById("test");
fetch('/api/test')
.then(function (response) {
    console.log(response)
	return response.json();
})
.then( (response)=>{
	response.forEach((data)=>
    {  var p = document.createElement('p');
       p.textContent=`name :${data.name}, age: ${data.age}`;
       div.appendChild(p);
    });
})
.catch(function (err) {
	console.warn('Something went wrong.', err);
});
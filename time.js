function getTime(response){
   
    $('h5').text(moment().format('h : mm A'))
}

function errorTime(error){
    console.log(error);

}

axios({
    method: "get",
    url:'http://momentjs.com',
 }).then(getTime).catch(errorTime);
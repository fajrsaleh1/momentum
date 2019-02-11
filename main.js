


function imageSucc(response){
   $('body').css("background-image",`url(${response.data.urls.raw})`) 
}

function imageFail(error){
    console.log(error);

}
axios ({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=e0c94a13a23384e23644eff660957e9272ae5b7cb473b6a4a9ba821e5a396874',
}).then(imageSucc).catch(imageFail);
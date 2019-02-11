function quoteSucc(response){
    
    const quotes = response.data.quoteText;
    $('body').append(`<h4>"${quotes}"</h4>`);

    
} 

function quoteFail(error){
    console.log(error);
}


axios ({
    method:'get',
    url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
}).then(quoteSucc).catch(quoteFail);

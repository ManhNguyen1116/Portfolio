const formId = "1FAIpQLSdA9ChjNYXEdOPHoCmW74NEb2jwi8AZsTmupbxuqNxHV0LMCg";
const entry1 = "entry.301854087";
const entry2 = "entry.2014468740";
const entry3 = "entry.395728543";

const getPath = formID => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDB = function ( data ){
    const path = getPath(formId);
    const url = getURL(path, data);
    sendRequest("POST", url).then(responseEvent);
} 

const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const getURL = function ( path , params ){
    const url = new URL(path);
    for(let key in params){
        url.searchParams.set(key, params[key]);
    }
    return url;
} 

const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = "no-cors";
    return new Request(url, init);
}

const responseEvent = response => alert("Success!");
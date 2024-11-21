const GetRequest = async (url) => {

    try{
        const request = await fetch(url)
        console.log('request: ', request);
        if(!request.ok)throw Error ("something went wrong")
        const  requestJSON= await request.json();
        
        console.log('requestJSON: ', requestJSON);
            return requestJSON;

    }
    catch(err){
        console.log("here")
     return err.message
    }
}
export default GetRequest;
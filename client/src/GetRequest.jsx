const GetRequest = async (url) => {

    try{
        const request = await fetch(url)
        if(!request.ok)throw Error ("something went wrong")
            const  requestJSON= await request.json();
        
        console.log('requestJSON: ', requestJSON);
            return requestJSON;

    }
    catch(err){
     return err.message
    }
}
export default GetRequest;
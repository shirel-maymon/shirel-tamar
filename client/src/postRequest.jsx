 const postRequest = async (obj,url) => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),

    };
    try{
        const request = await fetch(url, postOptions)
        if(!request.ok)throw Error ("something went wrong")
            const  requestJSON= await request.json();
            return requestJSON;

    }
    catch(err){
     return err.message
    }
}
export default postRequest;

const patchRequest = async (url, rename) => {
    const updateOption = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: rename
    }
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
export default patchRequest;
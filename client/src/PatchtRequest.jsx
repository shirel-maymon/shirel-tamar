
const patchRequest = async (url, rename) => {
    console.log('url: ', url);
    const updateOption = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rename)
    }
    try{
        const response= await fetch(url, updateOption)
        if (response.ok) {
            console.log("hhhh")
            return 'File renamed';
    
        } else {
            throw Error("something went wrong")
        }
    } catch (error) {
    
        return error;
    }
}
export default patchRequest;

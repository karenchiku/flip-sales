export default async function handler(req, res) {
   
    try{
        const para = {
            'asin': 'B00IXBNPT6',
            'domain': 'us'

        }
        const response = await fetch("http://localhost:3000/product",{
            method: "POST",
            body: JSON.stringify(para),
            headers: {
                "Content-Type": "application/json"
            }
        })
   
        const data = await response.json();
   
        // console.log(data);
        res.status(200).send(data)   

    }catch( error) {
        console.error(error)
    }

}
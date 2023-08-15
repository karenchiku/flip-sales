export default async function handler(req, res) {
   
    const username = process.env.labusername;
    const password = process.env.password;

    try{
        const para = {
            'source': 'amazon_product',
            'domain': 'com',
            'query': 'B07S7NQ7WV',
            'parse': true,

        }
        const response = await fetch("https://realtime.oxylabs.io/v1/queries",{
            method: "POST",
            body: JSON.stringify(para),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
            }
        })
        // console.log(response)
        const data = await response.json();
        // const result = data.results[0].content.results.organic;
        // const filteredDeals = result.filter(deal => deal.price_strikethrough)
        // const sortedByBestDeals = filteredDeals.sort((a, b) => 
        //     ((b.price_strikethrough -b.price) /b.price_strikethrough * 100) -
        //      ((a.price_strikethrough -a.price) /a.price_strikethrough *100)
        //     )

        // console.log(data);
        res.status(200).send(data)   

    }catch( error) {
        console.error(error)
    }

}
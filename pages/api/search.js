export default async function handler(req, res) {
   
    try{
        const para = {
            'query': 'shirt',
            'domain': 'us',
            'page': 1,

        }
        const response = await fetch("http://localhost:3000/search",{
            method: "POST",
            body: JSON.stringify(para),
            headers: {
                "Content-Type": "application/json"
            }
        })
   
        const data = await response.json();
        const result = data.products;
        const filteredDeals = result.filter(deal => deal.price_strikethrough)
        const sortedByBestDeals = filteredDeals.sort((a, b) => 
            ((b.price_strikethrough -b.price) /b.price_strikethrough * 100) -
             ((a.price_strikethrough -a.price) /a.price_strikethrough *100)
            )

        // console.log(data);
        res.status(200).send(sortedByBestDeals)   

    }catch( error) {
        console.error(error)
    }

}
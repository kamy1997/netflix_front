export default {
    getProducts() {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/getProduct`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }).then((res) => res.json())
    }, 
}
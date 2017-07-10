module.exports = {
    darceyMapper: function(products){
        let newProducts = [];
    
        for (i in products){
            let currentProduct = products[i];
            let newProduct = {
                ProductLink: `/darceys/product/${currentProduct._id}`,
                Title: currentProduct.Title,
                ThumbnailUrl: `http://www.darceyscandles.co.uk${currentProduct.ThumbnailUrl}`,
                Price: currentProduct.Price,
                Description: currentProduct.Description
            }
            
            newProducts.push(newProduct);
        }
        
        return newProducts;
    },
    craftMapper: function(products){
        let newProducts = [];
    
        for (i in products){
            let currentProduct = products[i];
            let newProduct = {
                ProductLink: '/crafts',
                Title: currentProduct.Title,
                ThumbnailUrl: `/images/thumbnails/${currentProduct.ThumbnailUrl.filename}`,
                Price: currentProduct.Price,
                Description: currentProduct.Description
            }
            newProducts.push(newProduct);
        }
        
        return newProducts;
    }
}

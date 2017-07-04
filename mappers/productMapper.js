module.exports = {
    darceyMapper: function(products){
        let newProducts = [];
    
        for (i in products){
            let currentProduct = products[i];
            let newProduct = {
                Title: currentProduct.Title,
                ThumbnailUrl: currentProduct.ThumbnailUrl,
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

import path from 'path'

const productController = {
  products: (req, res) => {
    res.sendFile(path.resolve('./views/product_detail.html'))
  },

}


export default productController;
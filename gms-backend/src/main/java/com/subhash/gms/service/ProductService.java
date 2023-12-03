package com.subhash.gms.service;

import com.subhash.gms.model.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(long id);

    Product updateProduct(long id,Product product);

    void deleteProduct(long id);

}

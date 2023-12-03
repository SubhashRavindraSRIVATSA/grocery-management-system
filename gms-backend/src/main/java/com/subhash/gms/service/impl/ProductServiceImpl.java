package com.subhash.gms.service.impl;

import com.subhash.gms.model.Product;
import com.subhash.gms.repository.ProductRepository;
import com.subhash.gms.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product updateProduct(long id, Product product) {
        Product exProduct = productRepository.findById(id).get();
        exProduct.setProductName(product.getProductName());
        exProduct.setProductValue(product.getProductValue());
        //exProduct.setUpdatedAt(new Date());
        return  productRepository.save(exProduct);
    }

    @Override
    public void deleteProduct(long id) {
        productRepository.deleteById(id);
    }
}

package com.subhash.gms.service;

import com.subhash.gms.dto.ProductDto;
import com.subhash.gms.model.Category;

import java.util.List;

public interface CategoryService {

    Category saveCategory(Category category);
    List<Category> getAllCategories();
    Category getCatgoryById(long id);
    Category updateCategory(long id, Category category);
    void deleteCategory(long id);
    List<String> getAllCategoriesByName();
    List<ProductDto> getProductByCategoryName(String categoryName);
}

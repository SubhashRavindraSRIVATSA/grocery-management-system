package com.subhash.gms.service.impl;

import com.subhash.gms.dto.ProductDto;
import com.subhash.gms.model.Category;
import com.subhash.gms.repository.CategoryRepository;
import com.subhash.gms.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    @Override
    public Category getCatgoryById(long id) {
        return categoryRepository.findById(id).get();
    }
    @Override
    public Category updateCategory(long id, Category category) {
        Category exCategory = categoryRepository.findById(id).get();
        exCategory.setCategoryName(category.getCategoryName());
        return categoryRepository.save(exCategory);
    }
    @Override
    public void deleteCategory(long id) {
        categoryRepository.deleteById(id);
    }
    @Override
    public List<String> getAllCategoriesByName() {
        return categoryRepository.getAllCategoriesByName();
    }
    @Override
    public List<ProductDto> getProductByCategoryName(String categoryName) {
        return categoryRepository.getProductByCategoryName(categoryName);
    }

}

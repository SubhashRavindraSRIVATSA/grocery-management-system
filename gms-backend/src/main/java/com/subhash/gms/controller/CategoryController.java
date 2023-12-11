package com.subhash.gms.controller;

import com.subhash.gms.dto.ProductDto;
import com.subhash.gms.model.Category;
import com.subhash.gms.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/gms/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @PostMapping
    public ResponseEntity<Category> saveProducts(@RequestBody Category category) {
        return new ResponseEntity<Category>(categoryService.saveCategory(category), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Category> getAlLCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") long id) {
        return new ResponseEntity<Category>(categoryService.getCatgoryById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable("id") long id
            ,@RequestBody Category category){
        return new ResponseEntity<Category>(categoryService.updateCategory(id, category), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") long id){
        categoryService.deleteCategory(id);
        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @GetMapping("/getAllCategoryNames")
    public List<String> getAlLProductsByCategories() {
        return categoryService.getAllCategoriesByName();
    }

    @GetMapping("/getProductByCategoryName/{categoryName}")
    public List<ProductDto> getProductByCategoryName(@PathVariable("categoryName") String categoryName) {
        return categoryService.getProductByCategoryName(categoryName);
    }
}

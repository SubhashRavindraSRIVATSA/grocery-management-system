package com.subhash.gms.repository;

import com.subhash.gms.dto.ProductDto;
import com.subhash.gms.model.Category;
import com.subhash.gms.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "select c.category_name from category c", nativeQuery = true)
    List<String> getAllCategoriesByName();
    @Query(nativeQuery = true)
    List<ProductDto> getProductByCategoryName(String category_name);
}
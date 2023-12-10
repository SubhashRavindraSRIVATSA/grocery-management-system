package com.subhash.gms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.subhash.gms.dto.ProductDto;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@NamedNativeQuery(  name = "Category.getProductByCategoryName",
                    query = "select p.product_name, p.product_value, p.quantity_unit, p.updated_at\n" +
                            "from products p \n" +
                            "inner join category c\n" +
                            "where c.id = p.category_id\n" +
                            "and c.category_name = :category_name",
                    resultSetMapping = "Mapping.ProductDto")
@SqlResultSetMapping(name = "Mapping.ProductDto",
        classes = @ConstructorResult(targetClass = ProductDto.class,
                columns = {@ColumnResult(name = "product_name"),
                           @ColumnResult(name = "product_value"),
                           @ColumnResult(name = "quantity_unit"),
                           @ColumnResult(name = "updated_at")}))

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "category")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"category"}, allowSetters = true)
    private Set<Product> products = new HashSet<>();
}

package com.subhash.gms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_value")
    private Double productValue;

//    @Temporal(TemporalType.TIMESTAMP)
//    @Column(name = "updated_at", nullable = false)
//    private Date updatedAt = new Date();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey=@ForeignKey(name="product_categorie_fk"))
    @JsonIgnoreProperties(value = { "products", "category" }, allowSetters = true)
    private Category category;
}

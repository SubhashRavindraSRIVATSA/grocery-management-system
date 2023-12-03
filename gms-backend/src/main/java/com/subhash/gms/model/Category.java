package com.subhash.gms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

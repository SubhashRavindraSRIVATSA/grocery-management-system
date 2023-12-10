package com.subhash.gms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private String product_name;
    private Double product_value;
    private String quantity_unit;
    private Date updated_at;
}

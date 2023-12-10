package com.subhash.gms.model;

import lombok.Getter;

@Getter
public enum QuantityUnit {
    LITRES("LITRES"),
    KG("KG"),
    UNIT("UNIT");

    private String description;
    QuantityUnit(String description) {
        this.description = description;
    }
}

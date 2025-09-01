package com.example.BillGeneration;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Services {
    private Integer id;
    private String name;
    private String category;
    private Integer charge;
    private Technology technology;

}

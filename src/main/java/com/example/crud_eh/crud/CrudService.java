package com.example.crud_eh.crud;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Component
@Service
@Slf4j
public class CrudService {
    @Autowired
    CrudRepository crudRepository;

    public void crudSaves(List<CrudEntity> params){
        List<CrudEntity> crudEntities = crudRepository.saveAll(params);
    }
}

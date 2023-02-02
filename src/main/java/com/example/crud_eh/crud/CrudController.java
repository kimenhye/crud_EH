package com.example.crud_eh.crud;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Slf4j
public class CrudController {
    private final CrudRepository crudRepository;
    private final CrudService crudService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Map<String, String> setCrud(@RequestBody List<CrudEntity> sParam){
        Map<String, String> map = new HashMap<String, String>();

        System.out.println(sParam);
        if(sParam == null) {
            throw new RuntimeException("데이터가 없습니다.");
        }
        crudService.crudSaves(sParam);

        map.put("msg","조회가 완료되었습니다.");
        return map;
    }
}

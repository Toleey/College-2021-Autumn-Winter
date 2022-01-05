package cn.bw.studentserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/item")
public class ItemController {

    @RequestMapping("/index")
    public String sayHello(){
        return "index";
    }

}

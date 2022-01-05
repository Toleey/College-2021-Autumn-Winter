package cn.bw.studentserver.controller;

import cn.bw.studentserver.dao.UserInfoMapper;
import cn.bw.studentserver.pojo.UserInfo;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@Controller
@ResponseBody
@SpringBootApplication
@RequestMapping("/userInfo")
@CrossOrigin
public class UserInfoController {

    @Autowired(required = false)
    private UserInfoMapper userInfoMapper;

    @RequestMapping(value = "/getUserInfo",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    //1.获取所有的用户信息
    public List<UserInfo> getUserInfo(){
        return userInfoMapper.getUserInfo();
    }

    @RequestMapping(value = "/getUserInfoPassword",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    //2.获取指定用户名的密码
    public String getUserInfoPassword(
            @RequestParam(value = "username",required = false) String uname
    ){
       UserInfo ui = userInfoMapper.getAUserInfo(uname);
       if (ui!=null){
           return ui.getPassword();
       }
       return "没找到啊，咋办";
    }
    //3.提交post请求，请求参数是用户名和密码，验证登录
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public UserInfo login(String uname,String upwd){
        UserInfo ui = userInfoMapper.login(uname,upwd);
        if (ui!=null){
            return ui;
        }
        return null;
    }

}

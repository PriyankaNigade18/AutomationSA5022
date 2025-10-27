package com.RestAPITest;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.testng.annotations.Test;

import io.restassured.response.Response;
/*
 * given():Set Prerequisite
 * ---------------------
 * header,cookie,query parameter and path parameter, Request Payload,Authorization
 * 
 * when(): Request type+ endpoint
 * ---------------------------------
 * GET,POST,PUT,PATCH,DELETE
 * 
 * then(): validate response
 * -------------------------------
 * status code,message,response time, response payload,header,cookies
 */
public class TelecomeProject
{
	String token1;
	
  @Test(priority=1)
  public void testAddNewUser() 
  {	
	  //email
	  String userEmail="priyanka"+System.currentTimeMillis()+"@gmail.com";
	  
	  
	  //payload
	  HashMap<String,Object> data=new HashMap<String,Object>();
	  data.put("firstName","Priyanka");
	  data.put("lastName","Nigade");
	  data.put("email",userEmail);
	  data.put("password","test123");
	  
	  
	  Response res=given()
			  	.header("Content-Type","application/json")
			  		.body(data)
	  		  		.when().post("https://thinking-tester-contact-list.herokuapp.com/users");
	  
	  //log the response
	  
	  res.then().log().body();
	  
	  
	  //get the token and save it
	  token1=res.jsonPath().getString("token");
	  
	  System.out.println("Token 1 is: "+token1);
	  
	  
  }
}

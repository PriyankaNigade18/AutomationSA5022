package com.RestAPITest;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
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

public class TestPathQueryParameters {
  @Test
  public void testParameters() 
  {
	  
	  //https://api.restful-api.dev/objects?id=3&id=5&id=10
	  RestAssured.baseURI="https://api.restful-api.dev";
	  Response res=given()
			  		.pathParam("path","objects")
			  		.queryParam("id",3)
			  		.queryParam("id",5)
			  		.queryParam("id",10)
	  
			  		.when() //.get("https://api.restful-api.dev/objects?id=3&id=5&id=10");
			  		//.get("https://api.restful-api.dev/{path}");
			  		.get("/{path}");
	  //print the response
	  res.then().log().body();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}

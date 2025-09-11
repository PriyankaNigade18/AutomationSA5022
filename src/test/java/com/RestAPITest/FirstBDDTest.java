package com.RestAPITest;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

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
public class FirstBDDTest {
  @Test
  public void testFirstBDDRequest() 
  {
	  Response res=given()
			  			.header("x-api-key","reqres-free-v1")
			  			  
			  					.when().get("https://reqres.in/api/users/2");
	  
	  int actCode=res.getStatusCode();
	  Assert.assertEquals(actCode,200);
	  System.out.println("Status code matched! : "+actCode);
	  
	  //print response from server use log()
	  res.then().log().all();
	 	 
//	  
//	  .then()
//	  .statusCode(201)
//	  .body("data.id",equalTo(2));
	  
	    
  }
  
  
  @Test
  public void singleUserRequest()
  {
	  given()
		.header("x-api-key","reqres-free-v1")
		  
			.when().get("https://reqres.in/api/users/2")
			
			.then()
			.statusCode(200)
			.body("data.first_name",equalTo("Janet"))
			.log().all();
	  
	  
	  
	  
	  
	  
	  
  }
  
  
  
  
}

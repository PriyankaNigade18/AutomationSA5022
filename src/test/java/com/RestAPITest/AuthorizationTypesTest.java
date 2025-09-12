package com.RestAPITest;

import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
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
public class AuthorizationTypesTest {
  @Test
  public void testBasicAuth() 
  {
	  
	  //Algorithm: Base64
	  Response res=given()
			  	.auth().basic("postman","password")
	  
			  		.when().get("https://postman-echo.com/basic-auth");
	  
	  
	  res.then().log().body();
	  
	  
	  
  }
  
  
  @Test
  public void testDigestAuth()
  {
	  Response res=given()
	  .auth().digest("postman","password")
	  
	  .when().get("https://postman-echo.com/digest-auth");
	  
  
	  res.then().log().body();
  
  }
  
  @Test
  public void testBearerToken()
  {
	  Response res=given()
			  	.header("Content-Type","application/json")
			  	.header("Accept","application/json")
			  	.header("Authorization","Bearer 1234")
			  
			  
			  .when().get("https://gorest.co.in/public/v2/users");
	  
	  
	  res.then().log().body();
	  
  }
  
  
  
  @Test
  public void testopenAuth2()
  {
	  String githubToken="github";
	  Response res=given()
			  		.auth().oauth2(githubToken)
			  
			  			.when().get("https://api.github.com/user/repos");
	  
	  res.then().log().body();
	  
	  
  }
  
  
}

package com.RestAPITest;

import org.json.JSONObject;
import org.json.JSONTokener;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.RestAPITest.POJO.AuthPojo;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;

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
 * 
 * JSON payload ways
 * ---------------------
 * 1.Using HashMap
 * 2.Using POJO(Plain Old Java Object)
 * 3.Using JSONObject
 * 4.Using JsonFile
 * 
 * {
    "username" : "admin",
    "password" : "password123"
	}
 * 
 */
public class JsonPayloadWays {
  @Test
  public void postCallUsingHashMap()
  {
	  
	  //Request payload
	  HashMap<String,Object> data=new HashMap<String,Object>();
	  data.put("username","admin");
	  data.put("password","password123");
	  
	  Response res=given()
			  		.header("Content-Type","application/json")
			  			.body(data)
	  
			  				.when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //test for status code
	  int actCode=res.getStatusCode();
	  Assert.assertEquals(actCode,200);
	  System.out.println("Status code matched!: "+actCode);
	  
	  //print the response
	  res.then().log().body();
	  
	  //get the token from response
	  String tokenValue=res.jsonPath().getString("token");
	  System.out.println("Token is: "+tokenValue);
	  
	  
		  
  }
  
  
  @Test
  public void postCallUsingPOJOClass()
  {
	  //Request Paylaod
	  AuthPojo auth=new AuthPojo();
	  auth.setUsername("admin");
	  auth.setPassword("password123");
	  
	  
	  
	  Response res=given()
			  	.header("Content-Type","application/json")
			  	.body(auth)
	  
			  	.when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //print the response
	  res.then().log().body();
	  
	  //get the token
	  String tokenValue=res.jsonPath().getString("token");
	  System.out.println("Token is: "+tokenValue);
  }
  
  
  
  @Test
  public void postCallUsingJSONObject()
  {
	  //JSONObject is class
	  JSONObject obj=new JSONObject();
	  obj.put("username","admin");
	  obj.put("password","password123");
	  
	  /*
	   * current payload is object of JSONObject class & payload we are passing in request
	   * it should be json type
	   * so user toString() while adding this payload
	   *  
	   */
	  
	  
	  Response res=given()
			  	.header("Content-Type","application/json")
			  	.body(obj.toString())//correct json format
			  	
	  
			  	.when().post("https://restful-booker.herokuapp.com/auth");
	  
	  
	 //print the response
	  res.then().log().body();
	  
  }
  
  
  @Test
  public void postCallUsingJsonFile() throws FileNotFoundException
  {
	  
	  //path of file
	  File f1=new File(System.getProperty("user.dir")+"//JsonFiles//Authpayload.json");
	  
	  //read in stream
	  FileReader fr=new FileReader(f1);
	  
	  //convert data into json token:JSONTokener
	  
	  JSONTokener token=new JSONTokener(fr);
	  
	  //pass token to JSONObject class
	  JSONObject obj=new JSONObject(token);
	  
	  
	  Response res=given()
			  	.header("Content-Type","application/json")
			  	.body(obj.toString())//correct json format
			  	  	
	  
			  	.when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //print the response
	  res.then().log().body();
  }
  
  
  
  
  
  
  
  
}

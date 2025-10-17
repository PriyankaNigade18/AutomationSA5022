package com.RestAPITest;

import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;

import java.util.HashMap;

public class LoginTest 
{
	
	@Test
	  public void testRegister()
	  {
		  HashMap<String,Object> data=new HashMap<String,Object>();
		  data.put("email","eve.holt@reqres.in");
		  data.put("password","pistole");
		  
		 Response res=given()
		  .header("x-api-key","reqres-free-v1")
		  .body(data)
		  .when().post("https://reqres.in/api/register");
		  
		  res.then().log().body();
		  
	  }
	
	
  @Test
  public void testLogin()
  {
	  HashMap<String,Object> data=new HashMap<String,Object>();
	  data.put("email","eve.holt@reqres.in");
	  data.put("password","cityslicka");
	  
	 Response res= given()
	  .header("x-api-key","reqres-free-v1")
	  .header("Content-Type","application/json")
	  .body(data)
	  .when().post("https://reqres.in/api/login");
	  
	  res.then().log().body();
	  
  }
}

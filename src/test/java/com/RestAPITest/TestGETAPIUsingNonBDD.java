package com.RestAPITest;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class TestGETAPIUsingNonBDD {
  @Test
  public void testSingleObject()
  {
	  /*
	   * RestAssured is class in RestAssured framework
	   * Response is interface in RestAssured framework
	   * 
	   */
	  
	  Response res=RestAssured.get("https://api.restful-api.dev/objects/7");
	  
	  System.out.println("Status code is: "+res.getStatusCode());
	  System.out.println("Status message/line: "+res.getStatusLine() );
	  System.out.println("Response time is: "+res.getTimeIn(TimeUnit.MILLISECONDS));
	  
	  System.out.println("-----Response Payload in Text format(RAW)-------");
	  System.out.println(res.asString());
	  
	  System.out.println("-----Response Payload in JSON format-------");
	  System.out.println(res.asPrettyString());

	  
	  
	  
	  
  }
  
  
  @Test
  public void testSingleUser()
  {
	  Response res=RestAssured.given().header("x-api-key","reqres-free-v1").get("https://reqres.in/api/users/2");
	  
	  int statuscode=res.getStatusCode();
	  
	  System.out.println("Actual code: "+res.getStatusCode());
	  //validate status code should be 200
	  Assert.assertEquals(statuscode,200);
	  System.out.println("Status code matched!..."+statuscode);
	  System.out.println(res.asPrettyString());
	  
	  System.out.println("--------json validation-------");
	  /*
	   * pm.response.json()
	   * REstAssured:'
	   	res.jsonPath().getInt(" json path")
	   	res.jsonPath().getString("json Path")
	   */
	  
	  
	  //validate id should be 2
	  
	  int id=res.jsonPath().getInt("data.id");
	  Assert.assertEquals(id,2);
	  System.out.println("Id is: "+id);
	  
	  //validate email
	  String actemail=res.jsonPath().getString("data.email");
	  String expemail="@reqres.in";
	  Assert.assertTrue(actemail.contains(expemail));
	  System.out.println("Email id is: "+actemail);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
  
  
  @Test
  public void testListOfUsers()
  {
	  
	  Response res=RestAssured.given().header("x-api-key","reqres-free-v1").get("https://reqres.in/api/users?page=2");
	  
	  System.out.println(res.asPrettyString());
	  
	  System.out.println("-----JSON valiadation------");
	  
	  //page number should be 2
	  int pagenumber=res.jsonPath().getInt("page");
	  System.out.println("Page number is: "+pagenumber);
	  
	  //validate "first_name": "George" for 5th object
	  String name=res.jsonPath().getString("data[4].first_name");
	  System.out.println("First name is: "+name);
	  
	  
	  //get all ids
	  List<Integer> allIds=res.jsonPath().getList("data.id");
	  System.out.println("Total ids are: "+allIds.size());//6
	  
	  for(Integer i:allIds)
	  {
		  System.out.println(i);
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}

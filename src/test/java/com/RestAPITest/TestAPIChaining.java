package com.RestAPITest;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.RestAPITest.POJO.AuthPojo;
import com.RestAPITest.POJO.Booking;
import com.RestAPITest.POJO.BookingDates;

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
public class TestAPIChaining 
{
	 public int bookingId;
	 public  String tokenValue;
	 
  @Test(priority=1)
  public void createNewBooking() 
  {
	  //set the payload
	  BookingDates dates=new BookingDates();
	  dates.setCheckin("2025-09-11");
	  dates.setCheckout("2025-09-12");
	  
	  Booking data=new Booking();
	  data.setFirstname("Priyanka");
	  data.setLastname("Nigade");
	  data.setTotalprice(8888);
	  data.setDepositpaid(true);
	  data.setBookingdates(dates);
	  data.setAdditionalneeds("Lunch");
	  
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .body(data)
	  
			  .when().post("https://restful-booker.herokuapp.com/booking");
	  
	  
	  //assertion for status code is 200
	  Assert.assertEquals(res.getStatusCode(),200);
	  System.out.println("Status code matched!.."+res.getStatusCode());
	  
	  //print the response
	  res.then().log().body();
	  
	  
	  //get the bookingid
	  bookingId=res.jsonPath().getInt("bookingid");
	  System.out.println("New Booking created with id : "+bookingId);
	  
  }
  
  @Test(priority=2,dependsOnMethods = "createNewBooking")
  public void getBookingDetails()
  {
	  Response res=given()
			  .when().get("https://restful-booker.herokuapp.com/booking/"+bookingId);
	  
	  //get the response
	  res.then().log().body();
	  
	  System.out.println("Booking details with id : "+bookingId);
  }
  
  
  @Test(priority=3)
  public void createToken()
  {
	  
	  AuthPojo auth=new AuthPojo();
	  auth.setUsername("admin");
	  auth.setPassword("password123");
	  
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .body(auth)
	  
			  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //print response 
	  res.then().log().body();
	  
	  //get the token
	   tokenValue=res.jsonPath().getString("token");
	  System.out.println("Token is Created: "+tokenValue);
  }
  
  
  @Test(priority=4)
  public void updateFullBooking()
  {
	  System.out.println("Update Booking with same id: "+bookingId);
	  
	//set the payload
	  BookingDates dates=new BookingDates();
	  dates.setCheckin("2025-09-12");
	  dates.setCheckout("2025-09-13");
	  
	  Booking data=new Booking();
	  data.setFirstname("Sarita");
	  data.setLastname("sharma");
	  data.setTotalprice(88979);
	  data.setDepositpaid(true);
	  data.setBookingdates(dates);
	  data.setAdditionalneeds("Dinner");
	  
	  
	  
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .header("Accept","application/json")
			  .header("Cookie","token="+tokenValue)
			  .body(data)
	  
			  .when().put("https://restful-booker.herokuapp.com/booking/"+bookingId);
	  
	  //print the response
	  res.then().log().body();
  }
  
  
  @Test(priority=5)
  public void deleteBooking()
  {
	  Response res=given()
			  .header("Content-Type","application/json")
			 
			  .header("Cookie","token="+tokenValue)
			 
	  
			  .when().delete("https://restful-booker.herokuapp.com/booking/"+bookingId);
	  
	  //print the response
	  System.out.println("Booking deleted with id: "+bookingId);
	  res.then().log().status();
	  
  }
  
  
  
  
}

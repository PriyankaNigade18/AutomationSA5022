package com.RestAPITest;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.RestAPITest.POJO.AuthPojo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TestSerializationDeserialization {
	/*
	 * Serialization : POJO to JSON
	 * De-serialization: JSON to POJO
	 */
  @Test
  public void testSearialization() throws JsonProcessingException
  {
	  AuthPojo auth=new AuthPojo();
	  auth.setUsername("Sumit");
	  auth.setPassword("Sumit123");
	  
	  //create Object of ObjectMapper class
	  ObjectMapper obj=new ObjectMapper();
	  
	 String jsonvalue=obj.writerWithDefaultPrettyPrinter().writeValueAsString(auth);
	  
	 System.out.println(jsonvalue);
 }
  
  
  
  @Test
  public void testDeserialization() throws JsonMappingException, JsonProcessingException
  {
	  String jsonvalue="{\n"
	  		+ "  \"username\" : \"Sumit\",\n"
	  		+ "  \"password\" : \"Sumit123\"\n"
	  		+ "}";
	  
	  ObjectMapper obj=new ObjectMapper();
	  AuthPojo pojo=obj.readValue(jsonvalue,AuthPojo.class);
	  
	  String actUn=pojo.getUsername();
	  System.out.println(actUn);
	  Assert.assertEquals(actUn,"Sumit");
	  System.out.println("User name matched!");
	  
	  
  }
  
}

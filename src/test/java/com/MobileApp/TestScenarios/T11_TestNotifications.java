package com.MobileApp.TestScenarios;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T11_TestNotifications {
  @Test
  public void testNotifications()
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //open Notifications
	  ((AndroidDriver)driver).openNotifications();
	  
	  //test number of notifications
	  List<WebElement> allNotifications=driver.findElements(AppiumBy.id("android:id/app_name_text"));
	  
	  System.out.println("Total Notifications are: "+allNotifications.size());
	  
	  System.out.println("*******Notifications Headings*********");
	  for(WebElement i:allNotifications)
	  {
		  System.out.println(i.getText());
	  }
	  
	  
	  //subtext
	  System.out.println("-----------------------");

	  List<WebElement> subtext=driver.findElements(AppiumBy.id("android:id/title"));
	  for(WebElement i:subtext)
	  {
		  System.out.println(i.getText());
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}

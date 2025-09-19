package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.AppUtil;
import com.MobileApp.Utility.DriverUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T3_LongClickGesture {
  @Test
  public void testLongclickGesture() throws InterruptedException 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  AppUtil.getScreenShot(driver,"homepage");
	  //click on views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  Thread.sleep(1000);
	  AppUtil.getScreenShot(driver,"viewPage");
	  
	  //click on  drag and drop
	  driver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
	  Thread.sleep(1000);
	  AppUtil.getScreenShot(driver,"dotpage");
	  
	  //identify dot1
	  WebElement ele=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
	  
	  //longclickGesture
	  
	  driver.executeScript("mobile:longClickGesture",ImmutableMap.of(
			  
			 "elementId",((RemoteWebElement)ele).getId(),
			 "duration",4000
			  
			  ));
	  
	  System.out.println("Long click guesture is completed!");
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}

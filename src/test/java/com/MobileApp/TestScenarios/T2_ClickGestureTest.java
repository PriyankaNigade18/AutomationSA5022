package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T2_ClickGestureTest {
  @Test
  public void testGesture() 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  //click on Views
	 // driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //element
	  WebElement ele=driver.findElement(AppiumBy.accessibilityId("Views"));
	  
	  //click gesture
	  //to get the element id you need convert webelement into RemoteWebElement (class)
	  driver.executeScript("mobile:clickGesture",ImmutableMap.of(
			  
			  "elementId",((RemoteWebElement) ele).getId()
			  
			  ));
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}

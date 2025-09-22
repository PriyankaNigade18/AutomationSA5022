package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.AppUtil;
import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;


public class T10_KeyboardKeyEvent {
  @Test
  public void testAndroidKeyboard() 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  /*
	   * While automation few methods we need from AndroidDriver as methods are
	   * platform specific
	   * 1.convert appiun driver driver instance into android driver 
	   * 2.call method
	   * 
	   * ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.SPACE));
	   */
	  
	  //click on views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	 
	  
	  //pagearea
	  WebElement pageArea=driver.findElement(AppiumBy.id("android:id/list"));
	  
	  //scrolldownpage
	   AppUtil.scrollDownUptoCount(driver,pageArea,2);
	  
	   //textfield
	   driver.findElement(AppiumBy.accessibilityId("TextFields")).click();
	  
//	  WebElement editArea=driver.findElement(AppiumBy.id("io.appium.android.apis:id/edit"));
//	  
//	  editArea.sendKeys("Hello All!");
	   
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.H));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.E));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.O));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.SPACE));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.A));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	   ((AndroidDriver)driver).pressKey(new KeyEvent(AndroidKey.L));
	   
	   
	   
	   
	   
	  
	  
	  
	  
	  
  }
}

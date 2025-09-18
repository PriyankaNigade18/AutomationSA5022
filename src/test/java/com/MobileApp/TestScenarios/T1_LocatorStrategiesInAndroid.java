package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T1_LocatorStrategiesInAndroid {
  @Test
  public void testLocators() throws InterruptedException
  {
	  //create appium driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  //Locator strategy1: accessibility id(primary locator in appium)
	 WebElement ele1= driver.findElement(AppiumBy.accessibilityId("Access'ibility"));
	 System.out.println("Text of element1: "+ele1.getText());
	 ele1.click();
	 
	 Thread.sleep(1500);
	 
	 //Navigate to previous page	 
	 driver.navigate().back();
	 
	 
	 //Locator Strategy2: xpath
	 WebElement ele2=driver.findElement(AppiumBy.xpath("//android.widget.TextView[@content-desc=\"Animation\"]"));
	 System.out.println("Text of element2: "+ele2.getText());
	 ele2.click();
	 
	 Thread.sleep(1500);
	 
	 //Navigate to previous page	 
	 driver.navigate().back();
	 
	 //Locator strategy3: ClassName
	 
	 WebElement ele3=driver.findElements(AppiumBy.className("android.widget.TextView")).get(4);
	 System.out.println("Text of element3: "+ele3.getText());
	 ele3.click();
	 
	 Thread.sleep(1500);
	 
	 //Navigate to previous page	 
	 driver.navigate().back();
	 
	 //Locator Strategy4: -android uiautomator(docs)
	 
	 WebElement ele4=driver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Content\")"));
	 
	 System.out.println("Text of element4: "+ele4.getText());
	 ele4.click();
	 
	 Thread.sleep(1500);
	 
	 //Navigate to previous page	 
	 driver.navigate().back();
	 
	 //Locator strategy5: resource-id or id
	 
	 WebElement ele5=driver.findElements(AppiumBy.id("android:id/text1")).get(11);
	 
	 System.out.println("Text of element5: "+ele5.getText());
	 ele5.click();
	 
	 Thread.sleep(1500);
	 
	 //Navigate to previous page	 
	 driver.navigate().back();
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	  
	  
	  
	  
	  
  }
}

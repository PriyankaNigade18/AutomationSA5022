package com.MobileApp.TestScenarios;

import org.openqa.selenium.ScreenOrientation;
import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T13_Lock_Unlock_Rotate {
  @Test
  public void testLockUnlockRotate() throws InterruptedException 
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  ((AndroidDriver)driver).lockDevice();
	  
	  Thread.sleep(2000);
	  
	  ((AndroidDriver)driver).unlockDevice();
	  

	  //rotate
	  ((AndroidDriver)driver).rotate(ScreenOrientation.LANDSCAPE);
	  Thread.sleep(2000);
	  ((AndroidDriver)driver).rotate(ScreenOrientation.PORTRAIT);
	  
	  
	  
  }
}

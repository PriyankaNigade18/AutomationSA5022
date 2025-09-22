package com.MobileApp.TestScenarios;

import java.time.Duration;

import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T15_WorkingWithAppCommands {
  @Test
  public void testAppCommands() throws InterruptedException 
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //get the package name
	  String packageName=((AndroidDriver)driver).getCurrentPackage();
	  
	  //check current status of application
	  System.out.println("Current status is: "+((AndroidDriver)driver).queryAppState(packageName));
	  
	  //terminate app
	  ((AndroidDriver)driver).terminateApp(packageName);
	  System.out.println("After terminate Current status is: "+((AndroidDriver)driver).queryAppState(packageName));

	  Thread.sleep(1500);
	  
	  //activate app
	  ((AndroidDriver)driver).activateApp(packageName);
	  System.out.println("After activate Current status is: "+((AndroidDriver)driver).queryAppState(packageName));

	  Thread.sleep(1500);
	  //un-install app(removeApp)
	  ((AndroidDriver)driver).removeApp(packageName);
	  System.out.println("After uninstallation Current status is: "+((AndroidDriver)driver).queryAppState(packageName));

	  Thread.sleep(1500);
	  
	  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
	  //installation
	  ((AndroidDriver)driver).installApp(path);
	  //activate app
	 ((AndroidDriver)driver).activateApp(packageName);
	  System.out.println("After installation & activate  Current status is: "+((AndroidDriver)driver).queryAppState(packageName));

	  Thread.sleep(1500);
	  //background
	  ((AndroidDriver)driver).runAppInBackground(Duration.ofSeconds(5));
	  //after 5 sec
	  System.out.println("After background step Current status is: "+((AndroidDriver)driver).queryAppState(packageName));

	  
	  
	  
	  
	  
	  
  }
}

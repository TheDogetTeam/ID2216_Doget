package com.native_project;


import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.io.File;
import java.util.Map;


public class Register_button extends ReactContextBaseJavaModule {
    private DBHandler dbHandler;
    ReactApplicationContext reactContext;
 
    public Register_button(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
        Session_storage storage =  com.native_project.Session_storage.getInstance();
        dbHandler = new DBHandler(reactContext,storage.getUserData());
        this.reactContext = reactContext;

    }
 
    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() { 
        return "register_button";
    }
 
    @ReactMethod
    public void addEntry(String article, String price,String shop,String date,String city) {
        try {
            dbHandler.addNewEntryToDB(article, price, shop, date,city);
            Map<String, String> dictionary = dbHandler.loadEntryFromDB(2);

            System.out.println("[DEBUG] : Getting Path");

            File dbpath = this.reactContext.getDatabasePath(dbHandler.getDatabaseName());
            String db_path = dbpath.getAbsolutePath();
            System.out.println("[DEBUG] : Path:" + db_path);

            System.out.println("[DEBUG] Databse :" + dictionary.toString());
        } catch (IllegalViewOperationException e) {
            System.err.println(e.getMessage());
        }
    }
    
}
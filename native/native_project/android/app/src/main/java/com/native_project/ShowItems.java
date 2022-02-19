package com.native_project;


import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.io.File;
import java.util.Map;


public class ShowItems extends ReactContextBaseJavaModule {
    private final DBHandler dbHandler;
    ReactApplicationContext reactContext;

    public ShowItems(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
        Session_storage storage =  com.native_project.Session_storage.getInstance();
        dbHandler = new DBHandler(reactContext,storage.getUserData());
        this.reactContext = reactContext;
    }

    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() {
        return "ShowItems";
    }

    @ReactMethod
    public void readEntryByID(int id, Callback callback) {
        WritableMap dir;
        dir = dbHandler.loadEntryFromDB(id);
//        JSONObject json = new JSONObject(dir);
        callback.invoke(dir);
    }

    @ReactMethod
    public void readEntryAll(String order, Callback callback) {
        WritableArray dir;
        dir = dbHandler.loadAll(order);
        callback.invoke(dir);
    }

}

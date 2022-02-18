package com.native_project;

public class Session_storage {
    String user;
    private static final Session_storage ourInstance = new Session_storage();
    public static Session_storage getInstance() {
        return ourInstance;
    }
    private Session_storage() {
    }
    public void setUserData(String s) {
        this.user = s;
    }
    public String getUserData() {
        return user;
    }
}
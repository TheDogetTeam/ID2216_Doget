@ECHO off
TITLE Generate APK towards apk folder
ECHO Generate APK towards apk folder
PAUSE
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && ECHO "React Native Process Done" && CD .\android\ && .\gradlew assembleDebug  && ECHO "Gradlew Completed" && CD ..\ && xcopy /f /y /s android\app\build\outputs\apk\debug\app-debug.apk ..\apk\doget.apk && ECHO "APK Copied to the apk folder"

# Cricket-Live-Score-Board

This extension brings you the latest match updates, scores, and statistics from various cricket tournaments around the world.

With our user-friendly interface, you can easily access the live scores of ongoing cricket matches without the need to navigate to different websites or applications. The extension provides you with instant access to scores, allowing you to keep up with the action as it happens.

Note: This extension relies on an internet connection to fetch live data. It is intended for informational purposes only and does not offer live streaming of matches.


## How to run Chrome extension

The Build Folder:

Locate the build folder of Chrome extension from this project. 
This folder typically contains all the necessary files and assets required for your extension to function. Select all the files and folders within the build folder. Download this folder to upload it later.


Upload the Extension Package:

open Manage extension to turn on developer mode.
Click on Load unpacked to upload Build folder for this extension.


## If get cors error

change the origin from localhost to your extension link

```javascript


// server/index.js 

app.use(
  cors({
    // origin: "chrome://extensions/?errors=kekciafpgdefoippkloamgmcejkbbbbj",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
```

## Overview
![Screenshot 2025-09-18 134114](https://github-production-user-asset-6210df.s3.amazonaws.com/100084399/244633462-5a1c8392-380b-4098-ba33-b8d20023bce6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250918T211048Z&X-Amz-Expires=300&X-Amz-Signature=048bf0e2f4cdc9ee92a9a9aeec8c48bdd7a1c5bb7024c7ce2e5b5c8a31749ada&X-Amz-SignedHeaders=host)
![Screenshot 2025-09-18 134133](https://github-production-user-asset-6210df.s3.amazonaws.com/100084399/244633654-fdaba31b-7a5f-41a1-9a5d-85200cffd831.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250918T211116Z&X-Amz-Expires=300&X-Amz-Signature=90da6285f9eb320fd80ec2f8fa930a3c312239b9d1443d3dc33077b2974e6796&X-Amz-SignedHeaders=host)

https://github-production-user-asset-6210df.s3.amazonaws.com/100084399/244635490-28b07ed5-8e2e-4d8d-89fb-821279ac556c.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250918T210948Z&X-Amz-Expires=300&X-Amz-Signature=9191a8936e660155c69693a395728afad8dc6fe11791d91fd295d5c8fb76c987&X-Amz-SignedHeaders=host
import {Account, Avatars, Client}  from "react-native-appwrite"

export const config  = {
    Platform:'com.jsm.restate',
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_APP_PUBLIC_APPRWITE_PROJECT_ID

}

export const client = new Client();

 client
 .setEndpoint(config.endpoint!)
 .setProject(config.projectId!)
 .setPlatform(config.Platform!)


 export  const  avatar  = new  Avatars (client)
 export const account  = new Account(client)
//Import all required React Native modules
 import React, {useState} from 'react';

 import type {PropsWithChildren} from 'react';
 
 import DatePicker from 'react-native-date-picker'
 
 import { setCustomText } from 'react-native-global-props';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   Alert,
   TextInput,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 

//Set up Variables
 let currentHour = new Date().getHours();
 let currentMinute = new Date().getMinutes();
 let newDate = new Date();
 let newLock = "";
 let newPassword = "";
 let showLock = ""
 let showPassword = ""
 let newHour = 0;
 let newMinute = 0;
 let newPeriod = 0;
 let unvailable = 0

 const date =new Date()
 const Separator = () => <View style={styles.separator} />;
 
 const payload = {
   typeLock: this.typeLock,
   typePassword: this.typePassword,
   typePeriod: this.typePeriod
 }
 
 const timeload = {
   typeTime: this.typeTime,
 }
 
 type SectionProps = PropsWithChildren<{
   title: string;
 }>;
 
 function Section({children, title}: SectionProps): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
 
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 }
 
 //Front End Code
 const App = () => (

   <SafeAreaView style={styles.container}>
     <View>
       <Text style={styles.mainTitle}>
         Timelock
       </Text>
       <Separator />
       <Text style={styles.title}>
         Pick a Lock Title (ie: Netflix), Password to save, and a time frame when that password will be visible.
       </Text>
       <TextInput 
         placeholder="Lock Title" 
         style={styles.form}
         onChangeText={(text) => this.typeLock = text}
         />
       <TextInput
         secureTextEntry={true}
         placeholder="Password"
         onChangeText={(text) => this.typePassword = text}
         style={styles.form}
       />
       <TextInput
         placeholder="Duration"
         onChangeText={(text) => this.typePeriod = text}
         style={styles.form}
       />
     <Text style={styles.title}>
         Start Time
       </Text> 
     <View>
       <DatePicker 
         mode = "time" 
         date={date} 
         onDateChange={(date) => this.typeTime = date}
       />
     </View>
       <Button
         title="Save Password"
         onPress={(savePassword)}
         //onPress={() => Alert.alert("Password Saved!")}
       />
     </View>
     <Separator />
     <View>
       {/* <Text style={styles.title}>
         Pressing the button will reveal any saved passwords if any are available at this time period, (ie: Facebook password will only be shown from 10am to 10:30am everyday).
       </Text> */}
       <Button
         title="Reveal Available Passwords"
         color="#368BC1"
         onPress={(revealPassword)}
       />
     </View>
     <Separator />
   </SafeAreaView>
 );
 
 //Back End Code

 //Function to save all User Input
 const savePassword = () => {
   newLock = payload.typeLock
   newPassword = payload.typePassword
   newPeriod = parseInt(payload.typePeriod)
   newDate = timeload.typeTime
   newHour = newDate.getHours();
   newMinute = newDate.getMinutes();
   Alert.alert("Password Saved!")
   //Test for textInputs saving correctly
   //Alert.alert(newLock + ": " + newPassword)
   //Test for saving Dates correctly
   //Alert.alert(newHour + ": " + newMinute)
   //Alert.alert(newPeriod)
 };
 
 
//Button to reveal saved password
 function revealPassword() {
   timeCheck()
   if (unvailable == 1) {
     Alert.alert("No Available Passwords")
   }
   else {
     Alert.alert(showLock + ": " + showPassword)
   }
 };
 
//check to see if a saved password is available
 function timeCheck() {
   unvailable = 0
   if (currentHour == newHour && currentMinute >= newMinute && currentMinute < (currentMinute + newPeriod) ) {
     showLock = newLock
     showPassword = newPassword
   }
   else {
     unvailable = 1
   }
 };
 
//Styles
 const styles = StyleSheet.create({
   mainTitle: {
     fontSize: 50,
     fontWeight: '600',
     textAlign: 'center',
   },
   container: {
     backgroundColor: 'gainsboro',
     flex: 1,
     justifyContent: 'center',
     marginHorizontal: 0,
   },
   title: {
     textAlign: 'center',
     marginVertical: 8,
     fontSize: 24,
   },
   form: {
     textAlign: 'center',
     marginVertical: 8,
     fontSize: 30,
     fontWeight: '600',
   },
   fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   separator: {
     marginVertical: 8,
     borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
   },
 });

//Run App
 export default App;
 
 

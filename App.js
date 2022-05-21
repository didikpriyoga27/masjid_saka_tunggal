import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import FlashMessage from 'react-native-flash-message';
import Home from './src/screens/Home';
import Theory from './src/screens/Theory/Theory';
import TheoryDetail from './src/screens/Theory/TheoryDetail';
import Quiz from './src/screens/Quiz/Quiz';
import QuizContainer from './src/screens/Quiz/QuizContainer';
import QuizScore from './src/screens/Quiz/QuizScore';
import About from './src/screens/About';
import codePush from "react-native-code-push";
import Colors from './src/utilities/Colors'

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    title: "Pembaruan tersedia!",
    optionalUpdateMessage: 'Klik UPDATE untuk mendapatkan pembaruan.',
    optionalInstallButtonLabel: 'UPDATE',
    optionalIgnoreButtonLabel: 'NANTI',
    mandatoryUpdateMessage: "Klik UPDATE untuk mendapatkan pembaruan.",
    mandatoryContinueButtonLabel: "UPDATE"
  }, mandatoryInstallMode: codePush.InstallMode.IMMEDIATE
};

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Theory" component={Theory} />
      <Stack.Screen name="TheoryDetail" component={TheoryDetail} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizContainer" component={QuizContainer} />
      <Stack.Screen name="QuizScore" component={QuizScore} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default function App() {
  const flashMessageRef = React.useRef(null)

  React.useEffect(() => {
    CodePushSync()
  }, [])

  function CodePushSync() {
    codePush.sync(codePushOptions,
      (status) => {
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log("Checking for updates.");
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log("Downloading package.");
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log("Installing update.");
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            console.log("Up-to-date.");
            break;
          case codePush.SyncStatus.UPDATE_INSTALLED:
            console.log("Update installed.");
            break;
        }
      },
      (progress) => {
      }
    );
  }

  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={Colors.PRIMARY_DARK_COLOR}
      />
      <AppStack />
      <FlashMessage position="top" floating ref={flashMessageRef} />
    </NavigationContainer>
  );
}

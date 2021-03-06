import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile208074Navigator from '../features/UserProfile208074/navigator';
import Maps208055Navigator from '../features/Maps208055/navigator';
import Settings208033Navigator from '../features/Settings208033/navigator';
import Settings208018Navigator from '../features/Settings208018/navigator';
import NotificationList208017Navigator from '../features/NotificationList208017/navigator';
import Maps208016Navigator from '../features/Maps208016/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile208074: { screen: UserProfile208074Navigator },
Maps208055: { screen: Maps208055Navigator },
Settings208033: { screen: Settings208033Navigator },
Settings208018: { screen: Settings208018Navigator },
NotificationList208017: { screen: NotificationList208017Navigator },
Maps208016: { screen: Maps208016Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

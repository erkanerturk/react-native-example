import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  const icons =
    Platform.OS === 'android'
      ? { map: 'md-map', shareAlt: 'md-share-alt', menu: 'md-menu' }
      : { map: 'ios-map', shareAlt: 'ios-share-alt', menu: 'ios-menu' };

  Promise.all([
    Icon.getImageSource(icons.map, 30),
    Icon.getImageSource(icons.shareAlt, 30),
    Icon.getImageSource(icons.menu, 30),
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          // Navigasyon barındaki buttonlar
          navigatorButtons: {
            // Butonların yeri
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
      ],
      // Drawer'lar tanımlanması
      drawer: {
        // Soldan açılan drawer tanımlaması
        left: {
          screen: 'awesome-places.SideDrawer',
        },
      },
    });
  });
};

export default startTabs;

import React from 'react';
import {
  AppRegistry,
  ScrollView,
  View,
  StyleSheet,
  // AsyncStorage,
} from 'react-native';
import { getStorybookUI, storiesOf } from '@storybook/react-native';
import Components from './src/components';

const Pages = [];

for (let component in Components) {
  if (Components[component].inStorybook) {
    console.log(`Loaded component: ${component}`);
    Pages.push({ name: component, ComponentClass: Components[component] });
  }
}

Pages.forEach(({ name, ComponentClass }) => {
  storiesOf('pxCode', module).add(name, () =>
    ComponentClass.fitScreen ? (
      <ComponentClass />
    ) : (
      <ScrollView
        style={[styles.scrollView, { height: ComponentClass.scrollHeight }]}
      >
        <View style={styles.container}>
          <ComponentClass />
        </View>
      </ScrollView>
    )
  );
});

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

AppRegistry.registerComponent('px-react-native', () => StorybookUIRoot);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#fff',
  },
});

export default StorybookUIRoot;

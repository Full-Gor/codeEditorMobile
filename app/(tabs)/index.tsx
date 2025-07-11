import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      <StatusBar barStyle="light-content" />
      <WebView
        source={require('../../assets/editor.html')}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
      />
    </SafeAreaView>
  );
}
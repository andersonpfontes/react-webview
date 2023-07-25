import { WebView } from 'react-native-webview';

export default function App() {

const INJECTED_JAVASCRIPT = `(function() {
      window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;

  return (
    <WebView
        source={{ uri: 'https://megamonitor.pro/demo/admin' }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={this.onMessage}
        onLoadProgress={({ nativeEvent }) => {
          this.loadingProgress = nativeEvent.progress;
        }}
    />
  );
}

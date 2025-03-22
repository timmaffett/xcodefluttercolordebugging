# XCode Flutter Color Debugging README

This extension adds support for using ANSI escape sequences from a Flutter application running within the VSCode debug environment via execution of the Flutter application using XCode.

XCode normally strips all ESC sequences from messages, and additionally truncates any messages
where ESC sequences are found, which makes using ANSI styled output from within XCode impossible.

## Features

> With this extension installed and the use of the [ChalkDart](https://pub.dev/packages/chalkdart) you can enjoy full color messages/console logging from within your Flutter app, EVEN when debugging via XCode.

![Color debug console messages via XCode WITH this extension](https://raw.githubusercontent.com/timmaffett/xcodefluttercolordebugging/refs/heads/main/assets/with_xcodefluttercolordebugging.png)

> When debugging a Flutter app via XCode WITHOUT this extension you would just see something like the following, raw broken ansi sequences AND *truncated* messages, anytime you attempt to output color:

![Broken debug console messages via XCode without this extension](https://raw.githubusercontent.com/timmaffett/xcodefluttercolordebugging/refs/heads/main/assets/without_xcodefluttercolordebugging.png)

This extension allows you to enjoy the power of colorized and styled debug logging from your Flutter app running or debugged from within VSCode via XCode.

## Requirements

The [Dart/Flutter ChalkDart package](https://pub.dev/packages/chalkdart) is required to output the expected ANSI escape sequences which this extension expects.
The only additional code that needs to be added is setting `Chalk.xcodeSafeEsc=true`.

```dart
Chalk.xcodeSafeEsc = true;
```

to activate the XCode safe ESC mode within the ChalkDart package.

Once that is done ChalkDart will output the properly encoded escape sequences and this VSCode extension will automatically convert the encoded escape
sequences back to standard ANSI sequences for the VSCode debug console to interpret.

Full example:

```dart
import 'package:chalkdart/chalkstrings.dart';

void main() {
    Chalk.xcodeSafeEsc = true;  // activate XCode Safe ESC mode within ChalkDart Package
    print('Hello world!'.yellow.onBlue);

    ...the rest of your flutter app which will be debugged within VSCode via execution within XCode...
}
```

You will find the complete range of all the possible stylings available using Chalk Dart within the documentation for [Dart/Flutter ChalkDart package](https://pub.dev/packages/chalkdart) at [https://pub.dev/packages/chalkdart](https://pub.dev/packages/chalkdart)

I have been meaning to create this extension for several years, since I added the PR to VSCode to completely support the entire set of ANSI styling ESC sequences.   Sorry it took so long! 😆 :laughing:

## Details

This extension only activates itself on the Mac OSX platform and does absolutely nothing on any other platforms.

This extension looks for the string `[^ESC]` within messages sent to the debug console and replaces the string with a proper ASCII ESC 27 (\u001B)
character so that the debug console is able to format the message with the
proper colors/styles appropriately.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0 - 1.0.5

Initial releases of XCode Flutter Color Debugging - Identical source, only differences in package.json and README

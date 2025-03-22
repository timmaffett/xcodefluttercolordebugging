# Change Log for XCode Flutter Color Debugging Extension (xcodefluttercolordebugging)

## [1.0.6]

- Add the assets directory to .vscodeignore so the image files are excluded entirely from the extension distribution.  The
  README.md file references the images of the github repo directly - there was never any reason to include them in the
  distribution.

## [1.0.5]

- Revert back to my original package.json activationEvents - I didn't think through "onDebug" only all the way
  as the extension does not get invoked when running without debugging.
- Change to webp lossless format from png for the 3 images - Reduced size of entire extension by ~75%

## [1.0.4]

- Switch galleryBanner to theme "dark" because it does not refer to the text color as I understood, but instead it
  describes the background color. (so "dark" will make the text white, which is was I was going for.. lol)

## [1.0.3]

- Improve icon

- package.json tuning: add bugs, badges sections, and fix galleryBanner, change activationEvents to only "onDebug"

## [1.0.2]

- Fix images in README.md and edit description in package.json

## [1.0.1]

- Readme fixes and cleanup

## [1.0.0]

- Initial release

export interface Highlight {
  title: string;
  text: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export const runnerval = {
  name: 'Runnerval',
  tagline: 'A run-walk interval coach for iOS and Android',
  appStoreUrl: 'https://apps.apple.com/us/app/runnerval/id6832645388',
  summary:
    'Runnerval turns any run into a simple rhythm: run, walk, repeat. You pick a workout, tap Go, and a calm voice tells you when to switch, even with the phone locked. It is local-first, with GPS routes, training packs, achievements, and watch remotes.',
  stack: [
    'React Native 0.88 (new architecture)',
    'TypeScript',
    'Swift',
    'Kotlin',
    'SwiftUI / ActivityKit',
    'Compose for Wear OS',
    'GitHub Actions',
  ],
  builtWith:
    'A personal project I designed and built entirely through AI-driven development with Claude Code, from concept to App Store.',
  highlights: [
    {
      title: 'Native engine behind a TurboModule',
      text: 'Workout timing, GPS recording, and voice cues run in native Swift and Kotlin engines, so coaching keeps going when JavaScript is suspended and the screen is locked.',
    },
    {
      title: 'Lock screen and watch control',
      text: 'iOS Live Activities and Android Live Updates show the current step and countdown with Pause and Skip. An Apple Watch app and a Wear OS app act as remotes for the phone.',
    },
    {
      title: 'Careful GPS handling',
      text: 'Weak fixes and speed spikes are filtered out, distance excludes pauses, and a Kalman smoother cleans up raw GPS on Android. The filter tests share vectors across the JavaScript, Swift, and Kotlin code.',
    },
    {
      title: 'Health integrations',
      text: 'Finished runs can be saved to Apple Health or Health Connect with distance and route, plus heart rate from the watch.',
    },
    {
      title: 'Release pipeline',
      text: 'GitHub Actions on a self-hosted Mac runner run CI for JavaScript, Android, and iOS, and build signed Android bundles and the iOS IPA from a version tag.',
    },
  ] satisfies Highlight[],
  screenshots: [
    { src: 'images/runnerval/01-home.jpg', alt: 'Runnerval home screen' },
    { src: 'images/runnerval/02-plans.jpg', alt: 'Training plans in Runnerval' },
    { src: 'images/runnerval/04-lock-screen.jpg', alt: 'Runnerval Live Activity on the lock screen' },
    { src: 'images/runnerval/05-apple-watch.jpg', alt: 'Runnerval on Apple Watch' },
    { src: 'images/runnerval/06-routes.jpg', alt: 'A run route shown on a map' },
    { src: 'images/runnerval/08-achievements.jpg', alt: 'Runnerval achievements' },
  ] satisfies Screenshot[],
};

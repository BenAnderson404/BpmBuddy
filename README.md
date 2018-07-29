BpmBuddy is a simple tool built on the Angular 1 js framework.  

When a DJ blends two different songs, they are often not the same speed, which generally sounds like a complete disaster due to the drums not aligning since they are at different speeds.  To solve this, DJs will adjust one of the songs to match the BPM of another, and then pushes or pulls one of the tracks so they are lining up correctly in addition to being the same speed.

The equation for this is simple cross multiplication.  In practice, the song that is currently playing is often known as the "Master" song as it's BPM will not be adjusted, and we will be assigning it the X variable.  The song that we want to play next and will be assigned the Y variable, and we will be changing it's speed to match the Master track.  We will solve for "N", which we will then convert to a percentage of the master track.  The equation looks like this:

X / Y = N / 100

If the master bpm is 140 and the next song is 146, we look like this:

140 / 146 = N / 100

14,000 = 146N

14,000 / 146 = N

N = 95.8

Pitch / BPM adjustment hardware interfaces and features in DJ software (traditionally known as "pitch sliders" on vinyl turntables) express their changes in +/-% of the root bpm, so we need to take N and make it a percentage of it's song that it will be adjusting.

N - 100 = -4.2

Finally, we will adjust the pitch of the song that will be playing next to -4.2%, bringing its BPM from 146 to 140 so the songs can be transitioned and blended plesantly.

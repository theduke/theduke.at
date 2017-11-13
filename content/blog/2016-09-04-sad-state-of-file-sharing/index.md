+++
category = "develop"
title = "The Sad State of File Sharing Across Devices"
date = "2016-09-04"
tags = [ "rant", "ubiquitous-computing", "file-sharing", "file-transfer", "interoperability" ]
path = "blog/develop/sad-state-of-file-sharing"

[extra]
id = "f0ec1aff-2bbf-413d-b163-f13278da9142"
+++

In the 90ies [Mark Weiser](http://www.ubiq.com/hypertext/weiser/UbiHome.html) coined 
the term [Ubiquitous Computing](https://en.wikipedia.org/wiki/Ubiquitous_computing),
a vision of a world where we are surrounded by countless smart devices, which 
are connected and provide seamless and fluid interoperability. 

In the last decade, we have made big steps in achieving Weisers vision.
The amount of 'smart, connected devices' we 
interact with on a daily basis has multiplied.  
On a typical day even a non-techie might use: a mobile phone, mp3 player, 
laptop, tablet, e-reader, work deskop PC and smart TV. 

The coming revolution of the [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things)
promises to advance us even further in the same direction.

But *how are we doing in terms of interoperability*?

Imagine these scenarios:

* You sit in some pub with a few friends.
  You show them a video you filmed yesterday on your phone.
  You're speakers are really bad, and you want to send it to a friend who has
  better speakers.  
    --> You try to send the video over What's App. 
        You discover you have no cell reception. You give up.

* You are at a conference, about to give a talk. For some reason, 
  your MacBook won't work with the projector. You want to copy the presentation 
  to some other laptop. The WiFi is overloaded.  
    --> You spend 5 minutes finding someone who still carries a USB stick and 
        use it to transfer the files.

* You are in an airplane, and you have a bunch of company documents stored on 
  your laptop, which you want to read on your tablet. 
  You forgot your micro USB cable.  
    --> You curse yourself for forgetting to send yourself the documents with 
        GMail and downloading them on the tablet.

* You want to take some pictures with your camera, edit them on your laptop
  and then view them in a slideshow on your smart TV.  
  --> Take pictures. Plug in camera. Edit. Check if your local media server is
      still running: Nope. Try to access your laptop from the TV with a Samba mount: Nope. Copy the pictuers to an SD card, insert it to your TV. Not working. Plug in your laptop to the TV: SUCCESS!


Everytime I run into one of those situations, I just get really angry and 
frustrated.
Why is it still such a hassle to do accomplish these tasks, in 2016?

This [XKCD](https://xkcd.com/949/) catpures it well:

![XKCD 949](https://imgs.xkcd.com/comics/file_transfer.png "XKCD 949 - File Transfer")

We are starting to use more and more devices everyday, but the software they are
running is not designed with interoperability as a first class concern or goal.

There is an endless amount of file sharing apps for iOS and Android.
There are countless protocols and options for discovering devices and sharing files,
including "ancient" options like Samba, NFS and FTP or more recent ones like 
[Bluetooth service discovery and File Transfer profile](https://developer.bluetooth.org/TechnologyOverview/Pages/FTP.aspx).

But most solutions solutions require specific software to be installed on both devices.  
And other workarounds rely on internet connectivity and a centralized service, 
like Email, messenger apps or Dropbox.

What the world really needs is a universally accepted protocol for device discovery
and file sharing, which works over different communication channels (Bluetooth, WiFi) 
and is installed by default on every device.

For some discussion, check out this 
[Hackernews thread](https://news.ycombinator.com/item?id=12424258) I started.

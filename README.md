# Whatsapp-Viz

![homepage](https://user-images.githubusercontent.com/45519704/82487307-6719a900-9b08-11ea-88b2-81d4acab8717.png)

WhatsApp Chat Visualizer is a web app to visualize whatsapp chat data into timelines. Each timeline represents someone's chat that shows when the conversation began and ended. It also shows the content of the message, and can be filtered to using a search bar.

## How to Use

You need the .JSON file that contains Whatsapp chat data. There is an example of .JSON dataset in /datz directory

If you want to use with your own data. Try this (This tutorial is for Android 7.0 and below):
1. Get your whatsapp chat data. [Read this](https://forum.xda-developers.com/showthread.php?t=2770982)
2. Decrypt that file using [Whatsapp Viewer](https://andreas-mausch.de/whatsapp-viewer/) and the convert the data into .JSON file
3. Open this app and upload the .JSON file

This is an example after you submit the data:
![timeline](https://user-images.githubusercontent.com/45519704/82489022-24a59b80-9b0b-11ea-9cf8-b9cf2342ac89.png)

The content of the message:
![content](https://user-images.githubusercontent.com/45519704/82489164-620a2900-9b0b-11ea-9ee2-054da990e94d.png)

## Data syntax

```
{
  "key": "something@whatsapp.net"
  "contactName": "something@s.whatsapp.net",
  "messages": [
    {
      "timestamp": "2020-01-19T03:58:20Z",
      "id": "762AD89EC7DF6D4FFE7C12DF4C7480B0",
      "fromMe": true,
      "type": "text",
      "text": "thisisthechatcontent"
    }
  ]
}
```

# Lyrics Finder App
This application was created with React Native and Styled with Bootswatch. 

It fetches from three different API endpoints:
For the artist information, we use www.theaudiodb.com
For lyrics we fecth data from www.lyrics.ohv
The videos are fetched directly from the YouTube API.

## Instructions for Installing the Application

1. Clone this repository
2. Install npm and node (if not yet installed)
3. Open a Terminal in the project root and execute `npm install`
4. Execute `npm start` to start the application 

## Main Screen

The main screen is very simple, you just have to search for an artist and a song of this artist. Autocomplete is not implemented in this App. The search will be sent to the three API endpoints, and the result will be returned asynchronically. 

![Main Screen](/src/images/readme/mainscreen.jpg)

## Search Result

![Search Result](/src/assets/images/readme/searchresult.jpg)

If fetching from all API endpoints is successful, three different containers will be loaded with information:
1- Band Info: it will return a picture of the band, information such as the date they were formed, where they come from and which genre do they play, several images, a full bio description and, if available, links to their social media.
2- Lyrics: according to the song you chose, the Lyrics will be displayed in the second container. In the case the fechted API doesn't have the lyrics you chose, an error message will be displayed in this container.
3- Videos: a selection of 3 videos will be shown according to the band and song you searched for. You can then listen to the song while you're reading the lyrics. 

## Possible Errors

![Error](/src/assets/images/readme/error.jpg)

It is possible that the band and song you are looking for, is not in the database we are fetching from. In case this happens, an error message will be displayed. Nevertheless, fetching is independent from each other, so it is possible that no info or lyrics are displayed, but videos are.

## Webpage Deployment

You can check a demo of this application on the following link

https://andre4130.github.io/lyrics-finder/

### Now go ahead and search for your favourite song and artist!

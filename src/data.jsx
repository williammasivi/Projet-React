import avatar1 from "./assets/CNN-pic.png"
import avatar2 from "./assets/NewYorkTimes-pic.png"
import avatar3 from "./assets/Tweeter-pic.png"
import Verified from "./assets/Verified.svg"
import logo from "./assets/Reply.svg"
import logo1 from "./assets/Retweet.svg"
import logo2 from "./assets/React.svg"
import logo3 from "./assets/Share.svg"
import imageprincipale from "./assets/Principal-pic3.png"

export const data = [
  {
    tweetAvatar: avatar1,
    tweetContent: {
      tweetBody: {
        tweetTitle: {
          tweetTitleAuthor: "CNN",
          image: {Verified},
          tweetTitleDetails1: "@CNN",
          tweetTitleDetails2:".",
          tweetTitleDetails3: "7m",
        },
        tweetText: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        image: {logo},
        tweetImage: "",
      },
      tweetAction: {
        tweetAction1: {
          image: logo,
          nombre: "57",
        },
        tweetAction2: {
          image: {logo1},
          nombre: "144",
        },
        tweetAction3: {
          image: logo2,
          nombre: "104",
        },
        tweetAction4: {
          image: logo3,
          nombre: " ",
        },
      },
    },
  },

  {
    tweetAvatar: avatar2,
    tweetContent: {
      tweetBody: {
        tweetTitle: {
          tweetTitleAuthor: "The New York Times",
          image: {Verified},
          tweetTitleDetails1: "@CNN",
          tweetTitleDetails2: ".",
          tweetTitleDetails3: "2h",
        },
        tweetText: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        tweetImage: {imageprincipale},
      },
      tweetAction: {
        tweetAction1: {
          image: logo,
          nombre: "19",
        },
        tweetAction2: {
          image: logo1,
          nombre: "48",
        },
        tweetAction3: {
          image: logo2,
          nombre: "482",
        },
        tweetAction4: {
          image: logo3,
          nombre: " ",
        },
      },
    },
  },

  {
    tweetAvatar: avatar3,
    tweetContent: {
      tweetBody: {
        tweetTitle: {
          tweetTitleAuthor: "Twitter",
          image: {Verified},
          tweetTitleDetails1: "@Twitter",
          tweetTitleDetails2: ".",
          tweetTitleDetails3: "Oct 29",
        },
        tweetText: "BIG NEWS lol jk still Twitter",
        tweetImage: "",
      },
      tweetAction: {
        tweetAction1: {
          image: logo,
          nombre: "6.8K",
        },
        tweetAction2: {
          image: logo1,
          nombre: "36.6K",
        },
        tweetAction3: {
          image: logo2,
          nombre: "267.1K",
        },
        tweetAction4: {
          image: logo3,
          nombre: " ",
        },
      },
    },
  },

  {
    tweetAvatar: avatar3,
    tweetContent: {
      tweetBody: {
        tweetTitle: {
          tweetTitleAuthor: "Twitter",
          image: {Verified},
          tweetTitleDetails1: "@Twitter",
          tweetTitleDetails2: ".",
          tweetTitleDetails3: "0ct 4",
        },
        tweetText: "hello literally everyone",
        tweetImage: "",
      },
      tweetAction: {
        tweetAction1: {
          image: logo,
          nombre: "118.7k",
        },
        tweetAction2: {
          image: logo1,
          nombre: "785.4k",
        },
        tweetAction3: {
          image: logo2,
          nombre: "3.3M",
        },
        tweetAction4: {
          image: logo3,
          nombre: " ",
        },
      },
    },
  },

  {
    tweetAvatar: avatar3,
    tweetContent: {
      tweetBody: {
        tweetTitle: {
          tweetTitleAuthor: "Twitter",
          image: {Verified},
          tweetTitleDetails1: "@Twitter",
          tweetTitleDetails2: ".",
          tweetTitleDetails3: "Oct 4",
        },
        tweetText: "hello literally everyone",
        tweetImage: "",
      },
      tweetAction: {
        tweetAction1: {
          image: logo,
          nombre: "114",
        },
        tweetAction2: {
          image: logo1,
          nombre: "301",
        },
        tweetAction3: {
          image: {logo2},
          nombre: "829",
        },
        tweetAction4: {
          image: logo3,
          nombre: " ",
        },
      },
    },
  },
];

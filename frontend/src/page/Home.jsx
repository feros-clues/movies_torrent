import {
  Box,
  Button,
  duration,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import WalletIcon from "@mui/icons-material/Wallet";
import HelpIcon from "@mui/icons-material/Help";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { display, height, margin, width } from "@mui/system";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import "./Home.css";
import { MotionConfig, useAnimation } from "framer-motion";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
  useTime,
  useTransform,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import TopRatedMovi from "../components/TopRatedMovi";
function Home(props) {
  //   const [api, setApi] = useState();

  // ---------motion------
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const controller = useAnimation();

  useEffect(() => {
    controller.start(
      {
        // border: "7px solid red",

        transition: { duration: 3 },
      },
      [checked]
    );
  });
  const scrollYProgress = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const data = [
    {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          genre_ids: [28, 14, 878],
          id: 436270,
          original_language: "en",
          original_title: "Black Adam",
          overview:
            "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          popularity: 6580.238,
          poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          release_date: "2022-10-19",
          title: "Black Adam",
          video: false,
          vote_average: 7.3,
          vote_count: 2719,
        },
        {
          adult: false,
          backdrop_path: "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
          genre_ids: [14, 28, 12],
          id: 736526,
          original_language: "no",
          original_title: "Troll",
          overview:
            "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
          popularity: 5282.337,
          poster_path: "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
          release_date: "2022-12-01",
          title: "Troll",
          video: false,
          vote_average: 6.8,
          vote_count: 541,
        },
        {
          adult: false,
          backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
          genre_ids: [28, 18, 36],
          id: 724495,
          original_language: "en",
          original_title: "The Woman King",
          overview:
            "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
          popularity: 3409.919,
          poster_path: "/lQMJHnHxUyj8kJlC2YOKNuzuwMP.jpg",
          release_date: "2022-09-15",
          title: "The Woman King",
          video: false,
          vote_average: 7.9,
          vote_count: 705,
        },
        {
          adult: false,
          backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
          genre_ids: [14, 28, 35, 80],
          id: 1013860,
          original_language: "en",
          original_title: "R.I.P.D. 2: Rise of the Damned",
          overview:
            "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
          popularity: 2291.996,
          poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
          release_date: "2022-11-15",
          title: "R.I.P.D. 2: Rise of the Damned",
          video: false,
          vote_average: 6.7,
          vote_count: 229,
        },
        {
          adult: false,
          backdrop_path: "/dsWxCsAdsocMNQFbhe39ynAOhBa.jpg",
          genre_ids: [80, 53],
          id: 1049233,
          original_language: "pl",
          original_title: "Plan lekcji",
          overview:
            "After a teacher dies, his best friend — a former cop — takes a job at the school where he worked to confront the gang he thinks was responsible.",
          popularity: 2075.669,
          poster_path: "/wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg",
          release_date: "2022-11-23",
          title: "Lesson Plan",
          video: false,
          vote_average: 6,
          vote_count: 50,
        },
        {
          adult: false,
          backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
          genre_ids: [28, 12, 878],
          id: 505642,
          original_language: "en",
          original_title: "Black Panther: Wakanda Forever",
          overview:
            "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
          popularity: 1923.162,
          poster_path: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
          release_date: "2022-11-09",
          title: "Black Panther: Wakanda Forever",
          video: false,
          vote_average: 7.6,
          vote_count: 1301,
        },
        {
          adult: false,
          backdrop_path: "/jCY35GkjwWUmoPO9EV1lWL6kuyj.jpg",
          genre_ids: [28, 12, 53],
          id: 855440,
          original_language: "es",
          original_title: "Polar",
          overview:
            "MG, a policewoman who has been expelled from the Corps due to the problems with alcohol and drugs that she has had since the loss of her son, receives a call from a man asking her to look for Macarena Gómez, a popular TV actress.",
          popularity: 1752.634,
          poster_path: "/efuKHH9LqBZB67AS87kprLgaYO8.jpg",
          release_date: "2022-10-26",
          title: "Polar",
          video: false,
          vote_average: 7.7,
          vote_count: 3,
        },
        {
          adult: false,
          backdrop_path: "/vmDa8HijINCAFYKqsMz0YM3sVyE.jpg",
          genre_ids: [28, 80, 53],
          id: 747803,
          original_language: "en",
          original_title: "One Way",
          overview:
            "On the run with a bag full of cash after a robbing his former crime boss—and a potentially fatal wound—Freddy slips onto a bus headed into the unrelenting California desert. With his life slipping through his fingers, Freddy is left with very few choices to survive.",
          popularity: 1772.953,
          poster_path: "/uQCxOziq79P3wDsRwQhhkhQyDsJ.jpg",
          release_date: "2022-09-02",
          title: "One Way",
          video: false,
          vote_average: 6.9,
          vote_count: 33,
        },
        {
          adult: false,
          backdrop_path: "/3RJ0B8JnwuOaQf6qmwTILXibcJj.jpg",
          genre_ids: [28, 878, 14],
          id: 941520,
          original_language: "en",
          original_title: "Alien Sniperess",
          overview:
            "A female sniper on military leave promises to fulfill her fiancé’s dying wish until she encounters a hostile alien invasion and is tasked with saving countless lives.",
          popularity: 1659.371,
          poster_path: "/bI1ZDRkerXrcaFa5kWjEMw80aqE.jpg",
          release_date: "2022-04-08",
          title: "Alien Sniperess",
          video: false,
          vote_average: 4.6,
          vote_count: 8,
        },
        {
          adult: false,
          backdrop_path: "/sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
          genre_ids: [53, 80],
          id: 934641,
          original_language: "en",
          original_title: "The Minute You Wake Up Dead",
          overview:
            "A stockbroker in a small southern town gets embroiled in an insurance scam with a next-door neighbor that leads to multiple murders when a host of other people want in on the plot. Sheriff Thurmond Fowler, the by-the-book town sheriff for over four decades, works earnestly to try and unravel the town’s mystery and winds up getting more than he bargained for.",
          popularity: 1582.129,
          poster_path: "/pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
          release_date: "2022-11-04",
          title: "The Minute You Wake Up Dead",
          video: false,
          vote_average: 5.5,
          vote_count: 26,
        },
        {
          adult: false,
          backdrop_path: "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
          genre_ids: [80, 28, 53],
          id: 829799,
          original_language: "en",
          original_title: "Paradise City",
          overview:
            "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
          popularity: 1500.998,
          poster_path: "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
          release_date: "2022-11-11",
          title: "Paradise City",
          video: false,
          vote_average: 6.2,
          vote_count: 40,
        },
        {
          adult: false,
          backdrop_path: "/83IYtUhc7Vs8XYi5UYc2lUKuyMo.jpg",
          genre_ids: [28, 12, 80, 9648, 53],
          id: 873126,
          original_language: "it",
          original_title: "Il mio nome è vendetta",
          overview:
            "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
          popularity: 2104.34,
          poster_path: "/7l3war94J4tRyWUiLAGokr3ViF2.jpg",
          release_date: "2022-11-30",
          title: "My Name Is Vendetta",
          video: false,
          vote_average: 6.8,
          vote_count: 147,
        },
        {
          adult: false,
          backdrop_path: "/olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
          genre_ids: [27, 9648, 53],
          id: 882598,
          original_language: "en",
          original_title: "Smile",
          overview:
            "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
          popularity: 1138.096,
          poster_path: "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
          release_date: "2022-09-23",
          title: "Smile",
          video: false,
          vote_average: 6.8,
          vote_count: 1123,
        },
        {
          adult: false,
          backdrop_path: "/5aSvzECXrtABcIh7fZYkH2K6ttC.jpg",
          genre_ids: [28, 53, 80],
          id: 972313,
          original_language: "en",
          original_title: "Blowback",
          overview:
            "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
          popularity: 1209.788,
          poster_path: "/fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
          release_date: "2022-06-17",
          title: "Blowback",
          video: false,
          vote_average: 5.9,
          vote_count: 26,
        },
        {
          adult: false,
          backdrop_path: "/sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
          genre_ids: [35, 28, 53],
          id: 792775,
          original_language: "is",
          original_title: "Leynilögga",
          overview:
            "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
          popularity: 1144.913,
          poster_path: "/jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
          release_date: "2022-05-23",
          title: "Cop Secret",
          video: false,
          vote_average: 6.4,
          vote_count: 36,
        },
        {
          adult: false,
          backdrop_path: "/707thQazLJiYLBhCrZlRoV05NNL.jpg",
          genre_ids: [28, 18, 53],
          id: 948276,
          original_language: "fr",
          original_title: "Balle perdue 2",
          overview:
            "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
          popularity: 1095.398,
          poster_path: "/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
          release_date: "2022-11-10",
          title: "Lost Bullet 2",
          video: false,
          vote_average: 6.5,
          vote_count: 163,
        },
        {
          adult: false,
          backdrop_path: "/yNib9QAiyaopUJbaayKQ2xK7mYf.jpg",
          genre_ids: [18, 28, 10752],
          id: 966220,
          original_language: "uk",
          original_title: "Снайпер. Білий ворон",
          overview:
            "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
          popularity: 995.213,
          poster_path: "/lZOODJzwuQo0etJJyBBZJOSdZcW.jpg",
          release_date: "2022-05-03",
          title: "Sniper: The White Raven",
          video: false,
          vote_average: 7.6,
          vote_count: 157,
        },
        {
          adult: false,
          backdrop_path: "/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
          genre_ids: [878, 28, 12],
          id: 76600,
          original_language: "en",
          original_title: "Avatar: The Way of Water",
          overview:
            "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          popularity: 1175.743,
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          release_date: "2022-12-14",
          title: "Avatar: The Way of Water",
          video: false,
          vote_average: 8.1,
          vote_count: 31,
        },
        {
          adult: false,
          backdrop_path: "/8Tr79lfoCkOYRg8SYwWit4OoQLi.jpg",
          genre_ids: [878, 28],
          id: 872177,
          original_language: "en",
          original_title: "Corrective Measures",
          overview:
            "Set in San Tiburon, the world's most dangerous maximum-security penitentiary and home to the world's most treacherous superpowered criminals, where tensions among the inmates and staff heighten, leading to anarchy that engulfs the prison and order is turned upside down.",
          popularity: 1004.224,
          poster_path: "/aHFq9NMhavOL0jtQvmHQ1c5e0ya.jpg",
          release_date: "2022-04-29",
          title: "Corrective Measures",
          video: false,
          vote_average: 5.2,
          vote_count: 37,
        },
        {
          adult: false,
          backdrop_path: "/rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg",
          genre_ids: [35, 878, 12],
          id: 774752,
          original_language: "en",
          original_title: "The Guardians of the Galaxy Holiday Special",
          overview:
            "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
          popularity: 914.039,
          poster_path: "/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
          release_date: "2022-11-25",
          title: "The Guardians of the Galaxy Holiday Special",
          video: false,
          vote_average: 7.5,
          vote_count: 715,
        },
      ],
      total_pages: 36279,
      total_results: 725564,
    },
  ];

  const movies = data[0].results;
  //   const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     setMovies(data[0].results);
  //   }, []);
  console.log(movies);
  const host = props.host;
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "rgb(25, 25, 40)";
  }, []);

  function HeadingBar() {
    function HeadingBreak() {
      return (
        <>
          <div className="mx-4 d-flex align-items-center">
            <div
              className=""
              style={{
                height: "1em",
                width: "2px",
                backgroundColor: "rgb(255, 255, 255, 0.55)",
                borderRadius: "0.5em",
                boxShadow: "0px 0px 2px 1px rgb(50, 50, 50)",
              }}
            ></div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="d-flex pt-2 px-4">
          <div
            className="p-2 me-2"
            style={{
              borderRadius: "0.5em",
              backgroundImage:
                "linear-gradient(2deg, rgb(30, 30, 45), rgb(45, 45, 55))",
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
          </div>
          <div
            className="flex-grow-1 d-flex justify-content-end pe-3"
            style={{
              borderRadius: "0.5em",
              backgroundImage:
                "linear-gradient(2deg, rgb(30, 30, 45), rgb(45, 45, 55))",
            }}
          >
            <div className="d-flex align-items-center">
              <Button
                className="px-4"
                variant="contained"
                sx={{
                  bgcolor: "rgb(30,30, 40)",
                  "&:hover": { bgcolor: "rgb(15, 15, 30)" },
                }}
                startIcon={<WalletIcon />}
              >
                Add Wallet
              </Button>
            </div>
            <HeadingBreak />
            <IconButton sx={{ color: "rgb(255, 255, 255, 0.4)" }}>
              <HelpIcon />
            </IconButton>
            <HeadingBreak />
            <IconButton sx={{ color: "rgb(255, 255, 255, 0.4)" }}>
              <SettingsIcon />
            </IconButton>
            {/* <Button variant='outlined' size='small' onClick={() => { window.localStorage.setItem('token', null); props.authToken(); }} >logout</Button> */}
          </div>
        </div>
      </>
    );
  }

  function MainSection() {
    const CssTextField = withStyles({
      root: {
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "yellow",
        },
        "& .MuiInputLabel-root": {
          color: "rgb(150, 150, 150)",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "yellow",
          },
        },
      },
    })(TextField);
    function BasicMenu() {
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

      function GetMovies() {
        movies.map((movie, i) => {
          return (
            <>
              <div>hello world</div>
            </>
          );
        });
      }

      return (
        <>
          <div>
            <Button
              id="basic-button"
              aria-haspopup="true"
              onClick={handleClick}
              variant="outlined"
              sx={{
                borderColor: "rgb(100, 100, 100)",
                color: "rgb(100, 100, 100)",
                "&:hover": {
                  borderColor: "rgb(200, 200, 200)",
                  color: "rgb(200, 200, 200)",
                  bgcolor: "none",
                  boxShadow: "0 0 10px 1px rgb(40,40,40)",
                },
              }}
            >
              <span>sort by&nbsp;-&nbsp;</span>
              <span style={{ color: "rgb(255, 255, 255)" }}>date</span>
            </Button>
            <Popover
              className="mt-2"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box>
                <MenuItem sx={{ p: 2 }}>Last Added</MenuItem>
                <MenuItem sx={{ p: 2 }}>trending this week</MenuItem>
                <MenuItem sx={{ p: 2 }}>Last Added</MenuItem>
              </Box>
            </Popover>
          </div>

          <div></div>
        </>
      );
    }

    // function he() {
    //   fetch(
    //     "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&tok=WZQ1DlJwA5beBUNpj0aZ6w&ds=yt&cp=5&gs_id=k&q=hello&callback=google.sbox.p50&gs_gbg=Kg4B49HP",
    //     {
    //       headers: {
    //         accept: "*/*",
    //         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    //         "sec-ch-ua":
    //           '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    //         "sec-ch-ua-arch": '"x86"',
    //         "sec-ch-ua-bitness": '"64"',
    //         "sec-ch-ua-full-version": '"108.0.5359.98"',
    //         "sec-ch-ua-full-version-list":
    //           '"Not?A_Brand";v="8.0.0.0", "Chromium";v="108.0.5359.98", "Google Chrome";v="108.0.5359.98"',
    //         "sec-ch-ua-mobile": "?0",
    //         "sec-ch-ua-model": "",
    //         "sec-ch-ua-platform": '"Linux"',
    //         "sec-ch-ua-platform-version": '"5.15.0"',
    //         "sec-ch-ua-wow64": "?0",
    //         "sec-fetch-dest": "script",
    //         "sec-fetch-mode": "no-cors",
    //         "sec-fetch-site": "same-site",
    //         "x-client-data":
    //           "CJa2yQEIpLbJAQipncoBCNjdygEIlaHLAQjr8swBCOT6zAEI7//MAQjygM0BCIeBzQEItYLNAQjFg80B",
    //         cookie:
    //           "VISITOR_INFO1_LIVE=KMUDg7Avhz8; PREF=tz=Asia.Calcutta; LOGIN_INFO=AFmmF2swRgIhAJzkxRCPTI5OYyHyINlYKPY6ympSE-VWQvZMiAvxHAhcAiEAucC55bA6lPsjj76FpDs9IjivlEskxfIOAOjUXMDafe8:QUQ3MjNmelVpZjFlYmx5RVFIVVZ3VkZELUVZTWhpR1N4eUpNN1VITE9KOTAwTG02YkxwZ0FMYUJ0T05yVnh6R1RCMHl5LTdDM2M1LXVaOF9mbTJ3MTNXUUUzdFdGX1ZEMk00emkxZzFydnRUYTkyUFhCVWpkbGU5amJFTVVhRlZnRHFxUHY1bjJYYWI5M3psSEUwMVBHS3h0RTFzS1RTZ1VB; NID=511=esRnT_maoAO-7aHwEzXEbPtEbziw4s5POt337SKdMuxzA-1HFdTC31pKDf_sChCyE_c9WOpAchLH43feaw8JVZRgl1Of13Cm6i2a8aZRbHWrFRnsc9ouyXXEu9LtutjC_YT22OSl6vSSq7IYl_9-YEo3o04c2JGgDzXimcHTg9s; SID=Rgirgef6oVAfgDy6XEtw9qNBj5j4gHgAsu32WRl96kznBRPBz5ddpgY00AUsKD_Vsb7Ytw.; __Secure-1PSID=Rgirgef6oVAfgDy6XEtw9qNBj5j4gHgAsu32WRl96kznBRPBiwa1tUWM0kiUn1HoUU3DhQ.; __Secure-3PSID=Rgirgef6oVAfgDy6XEtw9qNBj5j4gHgAsu32WRl96kznBRPBnq6YFcpcnDJDYmzYAduthw.; HSID=A5QTlkCByOXPJi-Cm; SSID=A5fA7Vuhhnu8OhgZt; APISID=uNDt4VXJkD5KlBX4/AThaKBaWwfUlH_Nmy; SAPISID=jcFyl19yZPWYNI1e/AAQ9v8bBCKMoyLZgw; __Secure-1PAPISID=jcFyl19yZPWYNI1e/AAQ9v8bBCKMoyLZgw; __Secure-3PAPISID=jcFyl19yZPWYNI1e/AAQ9v8bBCKMoyLZgw; YSC=mfbLHzzlGvI; SIDCC=AIKkIs3T4B1_jEAgAd32BEsvrCZGviV3itaaaYmyfB0_nVDIb_hBYVgyRWHMjb0dlyDeiiWHzt4; __Secure-1PSIDCC=AIKkIs0UcuCmfRPVh66M8Ery_yuOectK_vlhZ-saCU0ho7ESwgeg7GveAd27n4Yc8gWc2i2QBkQ; __Secure-3PSIDCC=AIKkIs1bnGmh-eGD_q6ayyZfht4_c9uckJPg-DnoS3SIfVegzsZp8YujuY-Gb1RXO1gnJy0VYgR1",
    //         Referer: "https://www.youtube.com/",
    //         "Referrer-Policy": "strict-origin-when-cross-origin",
    //       },
    //       body: null,
    //       method: "GET",
    //     }
    //   );
    // }

    async function searchYT(event) {
      const query = encodeURIComponent(event.target.value);
      // const secret_api = `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&q=${query}`;
      const secret_api = `${host}/search?query=${query}`;
      const res = await fetch(secret_api);

      console.log(await res.text());
    }
    return (
      <>
        <div className="mt-5 p-4">
          <div className="d-flex">
            <h1
              //   class="animate__animated animate__bounce"
              class="animate__animated animate__lightSpeedInRight"
              style={{ color: "white", fontWeight: "800", rotate }}
              onClick={(e) => {
                console.log(e.currentTarget);
              }}
            >
              Movies Torrent
              <motion.div style={{ rotate }}>
                <GroupWorkIcon></GroupWorkIcon>
              </motion.div>
              {/* <span className="spinner-border text-primary " ></span> */}
            </h1>
            <div className="flex-grow-1 d-flex justify-content-center">
              <CssTextField
                onChange={searchYT}
                sx={{ width: "50%", input: { color: "white" } }}
                size="small"
                label="search videos here"
              />
            </div>
            <div className="d-flex align-items-center me-5">
              <BasicMenu />
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "yellow",
                  color: "black",
                  "&:hover": { bgcolor: "rgb(220, 220, 0)" },
                }}
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* <div
          style={{
            backgroundColor: "white",
            height: "25rem",
            width: "50vw",

            margin: "auto",
          }}
        > */}
        <Carousel autoplay={true}>
          {/* <div> */}
          {movies.map((movie, id) => {
            return (
              <>
                <div style={{}}>
                  <div
                    style={{
                      //   backgroundColor: "white",
                      // padding: "2em",
                      // margin: "2em",
                      width: "90vw",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      margin: "3em",
                      // boxShadow: "3px 2px gray",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "red",
                        height: "21em",
                        width: "21em",
                        margin: "auto",
                      }}
                    >
                      <img
                        src={`http://image.tmdb.org/t/p/original${
                          movie ? movie.poster_path : ""
                        }`}
                        height="100%"
                        //   width="200em"
                        width="100%"
                        style={{
                          size: "cover",
                          display: "block",
                          margin: "auto",
                        }}
                      ></img>
                    </div>

                    <div
                      style={{
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h5 style={{ color: "rgb(255,250,0)", margn: "auto" }}>
                        {movie.title}
                      </h5>
                      <div>
                        <span style={{ color: "yellow" }}>
                          IMDB:&nbsp;-&nbsp;
                          {movie.vote_average}/10
                        </span>
                      </div>
                      <div style={{ color: "white" }}>
                        VOTE COUNT: &nbsp;&nbsp;
                        {movie.vote_count}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* </div> */}
          {/* <div style={{}}>
              <img
                src="https://cdn.pixabay.com/photo/2022/12/03/22/15/wood-7633457_1280.jpg"
                // height=" 10%"
                height="50%"
                width="100%"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2022/12/03/22/15/wood-7633457_1280.jpg"
                height=" 100%"
                width="100%"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2022/12/03/22/15/wood-7633457_1280.jpg"
                height=" 100%"
                width="100%"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2022/12/03/22/15/wood-7633457_1280.jpg"
                height="100%"
                width="100%"
              />
            </div> */}
        </Carousel>
        {/* </div> */}

        <FormControlLabel
          style={{
            backgroundColor: "yellow",
            padding: "0.3em 1em",
            margin: "1em 4.5em",
            fontWeight: "bolder",
          }}
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Load Popular Movies"
        />
        {/* <motion.div whileHover={{ scale: 1.1 }}> */}
        <FormControlLabel
          style={{
            backgroundColor: "yellow",
            padding: "0.3em 1em",
            // margin: "1em 3em",
            fontWeight: "bolder",
          }}
          control={<Switch checked={show} onChange={handleShow} />}
          label="Load Top Rated Movies"
        />
        {/* </motion.div> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            justifyContent: "space-around",
            margin: "1em",
          }}
        >
          {movies.map((movie, id) => {
            return (
              <>
                {
                  // <Zoom
                  //   in={checked}
                  //   style={{ transitionDelay: checked ? "500ms" : "0ms" }}
                  // >
                  <Slide
                    direction="down"
                    in={checked}
                    mountOnEnter
                    unmountOnExit
                  >
                    <motion.div
                      layout
                      whileHover={{ scale: 1.07, rotate: 360 }}
                      animate={{ opacity: 1, transition: { duration: 0.3 } }}
                      initial={{ opacity: 0 }}
                    >
                      <div className="poster">
                        <div>
                          <div
                            style={{
                              // backgroundColor: "white",
                              // padding: "2em",
                              // margin: "2em",
                              minWidth: "11em",
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              margin: "1.7em",
                              //   backgroundColor: "white",
                              // boxShadow: "3px 2px gray",
                            }}
                          >
                            <div>
                              <img
                                // animate={controller}
                                src={`http://image.tmdb.org/t/p/original${
                                  movie ? movie.poster_path : ""
                                }`}
                                //   height="25rem"
                                width="200em"
                              />
                            </div>

                            {/* <div>
                       <h5 style={{ color: "rgb(255,250,0)" }}>
                         {movie.title}
                       </h5>
                     </div> */}

                            <div
                              style={{
                                margin: "auto",
                                //   display: "flex",
                                //   flexDirection: "column",
                                //   alignItems: "center",

                                width: "11em",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <h5
                                style={{
                                  color: "rgb(255,250,0)",
                                  margn: "auto",
                                }}
                              >
                                {movie.title}
                              </h5>
                              <div>
                                <span style={{ color: "yellow" }}>
                                  IMDB:&nbsp;-&nbsp;
                                  {movie.vote_average}/10
                                </span>
                              </div>
                              <div style={{ color: "white" }}>
                                Vote Count: &nbsp;&nbsp;
                                {movie.vote_count}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {/* // </Zoom> */}
                  </Slide>
                }
              </>
            );
          })}
        </div>

        {show ? <TopRatedMovi></TopRatedMovi> : null}

        {/* <div className="box  animate__lightSpeedInRight">
          <span></span>
          <h2>01</h2>
        </div> */}
      </>
    );
  }

  //   function GetMovies() {
  //     movies.map((movie, i) => {
  //       return (
  //         <>
  //           <div>hello world</div>
  //         </>
  //       );
  //     });
  //   }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <div className=""> */}
      <HeadingBar />
      <MainSection />
      {/* <GetMovies /> */}
      {/* </div> */}
    </>
  );
}

// function GetMovies() {
//   data.map((movies, id) => {
//     return (
//       <>
//         {console.log(movies)}
//         {console.log()}
//         <h1 style={{ color: "white" }}>{movies.results[0].title}</h1>
//       </>
//     );
//   });
// }

export default Home;

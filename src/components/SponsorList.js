import React,{useContext} from "react";
import { Container, Row } from "./CommonComponents";
import LogoCard from "./LogoCard";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import "./style.css";

const Title = styled.h3`
    font-family: ${({font}) => font.general};
    text-align:center;
    color:white;
`

const OuterDiv = styled.div`
    background : linear-gradient(to right, #000428, #004e92);
    width:100%;
    padding-top : 20px;
    padding-bottom : 30px;
`

const initialState = {
  slideIndex: 0
};

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1619573193776-5d8ecc9567b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1618411062366-81b4c31657cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
    "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
  {
    title: "Fives",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
    "https://images.unsplash.com/photo-1572916289328-eca59d6903ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
    "https://images.unsplash.com/photo-1501951653466-8df816debe46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
    "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
];

const slidesReducer = (state, event) => {
  const midNumber = Math.round((slides.length - 1) / 2);
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex < midNumber ? state.slideIndex + 1 : -1 * midNumber
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex > -1 * midNumber ? state.slideIndex - 1 : midNumber
    };
  }
};

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        {/* <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div> */}
      </div>
    </div>
  );
}

const ImageScroller = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const midNumber = Math.round((slides.length - 1) / 2);
  return (
    <div className="slide-container">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>{" "}
        {slides.map((slide, i) => {
          let offset = -1 * (midNumber + (state.slideIndex - i));
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
};


function SponsorList() {
    const { fonts } = useContext(ThemeContext);

  return (
    <OuterDiv>
    <Title font={fonts}>Our Proud Partners</Title>
    <ImageScroller/>
    </OuterDiv>
  );
}

export default SponsorList;

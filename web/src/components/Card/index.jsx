import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    await axios.get("./data.json").then((response) => {
      setData(response.data.people);
    });
  }

  return (
    <>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="imgBx">
                <img src={item.image}/>
              </div>
              <div className="content">
                <div className="details">
                  <h2>
                    {item.name}
                    <br />
                    <span className={`profession${index}`}>{item.profession}</span>
                  </h2>
                  <ul className="social_icons">
                    <li>
                      <a href="#">
                        <FiFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

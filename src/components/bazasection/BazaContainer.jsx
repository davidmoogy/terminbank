
import "./baza.css";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function BazaContainer(){
    
    
    const [words, setWords] = useState([]);
    
    
 useEffect(() => {
    axios.get("http://localhost:5000/words")
        .then((res) => {
            setWords(res.data); 
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);
    return(
        <div className="baza-word-container">
            <div className="baza-card-section">
                <div className="baza-card">
                    <div className="img-title">
                        <img src="/dat.png" alt="database" />
                        <h2>სამეცნიერო ბაზა</h2>
                    </div>
                    <p>სამეცნიერო ბაზის სანახავად გთხოვთ, გაიაროთ ავტორიზაცია</p>
                </div>
                <div className="buttons-container">
                     <button>შესვლა</button>
                     <button>რეგისტრაცია</button>
                </div>
            </div>

            <div className="ganmateba-world">
                 <div className="ganmarteba-img">
                     <img src="/star.png" alt="star" />
                     <h2>ყველაზე ძებნადი სიტყვა/განმარტება</h2>
                 </div>

                 <div className="words">
                     {words.map((item, index) => (
                      <div key={index}>
             <p className="word-item">{item.word} : {item.definition}</p>
            <hr />
        </div>
                     ))}
                      </div>
            </div>
        </div>
    );
}